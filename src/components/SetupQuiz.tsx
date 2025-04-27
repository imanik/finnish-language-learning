import React, { useState, useEffect } from "react";
import UserStats from '../components/UserStats';
import GenerateQuiz from '../components/GenarateQuiz';
import GenerateHardQuiz from '../components/GenerateHardQuiz';
import { useQuiz } from "./QuizContext";

interface QuizScore {
  correct: number;
  total: number;
}

interface LeaderboardEntry {
  name: string;
  score: number;
  total: number;
}


// Define the structure of a quiz item (vocabulary term)
interface QuizItem {
  english: string;
  finnish: string;
  pronunciation?: string; // optional
}


// Props for SetupQuizProps component — made generic using <T extends QuizItem>
interface SetupQuizProps<T extends QuizItem> {
  items : T[]; // Current quiz question item
  quizType?: string; // Optional quiz type, not yet used
}

// Main GenerateQuiz functional component with generic type <T>
function SetupQuiz<T extends QuizItem>({
  items ,
  quizType,

  
}: SetupQuizProps<T>) {

    const [quizItem, setQuizItem] = useState<QuizItem | null>(null); // Current quiz question item
    const [score, setScore] = useState<QuizScore>({correct:0, total:0});
    
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>(() => {
      const saved = localStorage.getItem("quizLeaderboard");
      const parsed: LeaderboardEntry[] = saved ? JSON.parse(saved) : [];
      // console.log("Loaded leaderboard from localStorage", parsed);
      return parsed;
    });


    const { quizScore, setQuizScore } = useQuiz();

     // Load session score and leaderboard on mount
      useEffect(() => {
        const savedScore = JSON.parse(localStorage.getItem("overallQuizScore") || "null") || { correct: 0, total: 0 };
        // const savedLeaderboard = JSON.parse(localStorage.getItem("quizLeaderboard") || "null") || [];
        // console.log("Loaded leaderboard from localStorage", savedLeaderboard);
        setScore(savedScore);
        // setLeaderboard(savedLeaderboard);
        // console.log("SetupQuiz UseEffect", score, leaderboard, quizScore);
      }, []);
    
      // Save session score when it changes (non-zero)
      useEffect(() => {
        if (score.correct !== 0 || score.total !== 0) {
          localStorage.setItem("sessionScore", JSON.stringify(score));
        }
      }, [score]); // Added dependency array
    
    
      // Save overall quizScore when it changes
      useEffect(() => {
        localStorage.setItem("overAllQuizScore", JSON.stringify(quizScore));
      }
    , [quizScore]); // Added dependency array
    
      // Save leaderboard when it changes
      useEffect(() => {
        localStorage.setItem("quizLeaderboard", JSON.stringify(leaderboard));
        
      }
    , [leaderboard]); // Added dependency array

    const startQuiz = () => {
      const randomIndex = Math.floor(Math.random() * items.length);
      setQuizItem(items[randomIndex]);
      setScore({ correct: 0, total: 0 }); // Reset score when starting a new quiz
    }

    const nextQuestion = () => {
      const randomIndex = Math.floor(Math.random() * items.length);
      setQuizItem(items[randomIndex]);
    }

     
    const handleQuizComplete = (wasCorrect: boolean) => {
      setQuizScore((prev) => ({
        total: prev.total + 1,
        correct: wasCorrect ? prev.correct + 1 : prev.correct,
      }));
    };

      const resetScore = () => {
        setScore({ correct: 0, total: 0 });
        // setLeaderboard([]); // Reset leaderboard if needed
        // setQuizScore({ correct: 0, total: 0 }); // Reset overall quiz score
      };
      const handleAnswer = (isCorrect: boolean) => {
        setScore((prev) => {
          const newScore = {
            correct: prev.correct + (isCorrect ? 1 : 0),
            total: prev.total + 1,
          };
      
          // Update leaderboard here in the same cycle
          setLeaderboard((prevLeaderboard) => {
            // console.log("Leaderboard before update", prevLeaderboard);
            const userEntry: LeaderboardEntry = {
              name: "User",
              score: newScore.correct,
              total: newScore.total,
            };
            const updated = prevLeaderboard
              .filter((entry) => entry.name !== "User")
              .concat(userEntry)
              .sort((a, b) => b.score - a.score)
              .slice(0, 5);
      
            return updated;
          });
      
          return newScore;
        });
      };
      

      console.log("QuizType", quizType);

//     // Function to clear leaderboard
//   const clearLeaderboard = () => {
//     localStorage.removeItem('finnishQuizLeaderboard'); // Remove only this key
//     setLeaderboard([]); // Reset state to empty array
//   };
  

  return (



    <div>
     <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
     <UserStats quizScore={quizScore} handleQuizComplete={handleQuizComplete} />
     </div>
     <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
     <h3 className="text-xl font-semibold text-teal-700 mb-4">
     

  { quizType ? quizType.toUpperCase() : "BASIC"}{" "}
    QUIZ
      </h3>
  
       <p className="text-gray-600 mb-4">
         Score: {score.correct}/{score.total} ({((score.correct / score.total) * 100 || 0).toFixed(1)}%)
       </p>
       {!quizItem ? (
         <button
           onClick={startQuiz}
           className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
         >
           Start Quiz
         </button>
       ) : (

         <>
           {quizType === "hard" ? (     
             <div>
              {quizItem && (
           <GenerateHardQuiz
             
            item={quizItem}
            onNext={nextQuestion}
            onAnswer={handleAnswer}
            handleQuizComplete={handleQuizComplete}
           />
         )}
             </div>
           ) : (
             <div>
                {quizItem && (
           <GenerateQuiz
             item={quizItem}
             optionsPool={items}
             onNext={nextQuestion}
             onAnswer={handleAnswer}
             onReset={resetScore}
             handleQuizComplete={handleQuizComplete}
           />
         )}
             </div>      
           )}
         </>
       )}

        

       <div className="mt-6">
         <h4 className="text-lg font-semibold text-teal-700 mb-2">Leaderboard</h4>
         {leaderboard.length === 0 ? (
           <p className="text-gray-600">No scores yet.</p>
         ) : (
           <ul className="text-gray-600">
             {leaderboard.map((entry, index) => (
               <li key={index}>
                 {entry.name}: {entry.score}/{entry.total} (
                 {((entry.score / entry.total) * 100).toFixed(1)}%)
               </li>
             ))}
           </ul>
         )}
       </div>
     </div>
     </div>
  );
}

export default SetupQuiz;
