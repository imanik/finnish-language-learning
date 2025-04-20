import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserStats from '../components/UserStats';
import GenerateQuiz from '../components/GenarateQuiz';


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


// interface QuizScore {
//   correct: number;
//   total: number;
// }

// Define the structure for the current quiz state (holds question + options)
interface QuizState<T extends QuizItem> {
  question: string;
  correctAnswer: string;
  shuffledOptions: T[];
}

// Props for SetupQuizProps component — made generic using <T extends QuizItem>
interface SetupQuizProps<T extends QuizItem> {
  items : T[]; // Current quiz question item
  quizType?: string; // Optional quiz type, not yet used
  // onNext: () => void; // Function to load next question
  // onAnswer: (isCorrect: boolean) => void; // Callback when user answers
  // onReset: () => void; // Function to reset the quiz

  

  // quizScore: QuizScore;
  // handleQuizComplete: (wasCorrect: boolean) => void;
}

// Main GenerateQuiz functional component with generic type <T>
function SetupQuiz<T extends QuizItem>({
  items ,
  quizType,

  // optionsPool,
  // onNext,
  // onAnswer,
  // onReset,
  // type,
  // quizScore,
  // handleQuizComplete,
  
}: SetupQuizProps<T>) {

    const [quizItem, setQuizItem] = useState<QuizItem | null>(null); // Current quiz question item
    const [score, setScore] = useState<QuizScore>({correct:0, total:0});
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
    const [quizScore, setQuizScore] = useState<QuizScore>(() => {
      const storedScore = localStorage.getItem("overallQuizScore");
      return storedScore ? JSON.parse(storedScore) : { correct: 0, total: 0 };
    });
    // const [quizScore, setQuizScore] = useState<QuizScore>(() => {
    
    console.log("SetupQuiz loaded with Type", quizType);
    console.log("SetupQuiz loaded with", items);
    console.log("SetupQuiz loaded", score, leaderboard, quizScore);


     // Load session score and leaderboard on mount
      useEffect(() => {
        const savedScore = JSON.parse(localStorage.getItem("sessionScore") || "null") || { correct: 0, total: 0 };
        const savedLeaderboard = JSON.parse(localStorage.getItem("quizLeaderboard") || "null") || [];
        setScore(savedScore);
        setLeaderboard(savedLeaderboard);
      }, []);
    
      // Save session score when it changes (non-zero)
      useEffect(() => {
        if (score.correct !== 0 || score.total !== 0) {
          localStorage.setItem("sessionScore", JSON.stringify(score));
        }
      }, [score]); // Added dependency array
    
    
      // Save overall quizScore when it changes
      useEffect(() => {
        localStorage.setItem("overallQuizScore", JSON.stringify(quizScore));
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
        setLeaderboard([]); // Reset leaderboard if needed
        // setQuizScore({ correct: 0, total: 0 }); // Reset overall quiz score
      };
      const handleAnswer = (isCorrect: boolean) => {
        setScore((prev) => {
          const newScore = {
            correct: prev.correct + (isCorrect ? 1 : 0),
            total: prev.total + 1,
          };
    
          setLeaderboard((prev) => {
            const userEntry: LeaderboardEntry = {
              name: "User",
              score: newScore.correct,
              total: newScore.total,
            };
            const updated = prev.filter((entry) => entry.name !== "User").concat(userEntry);
            return updated.sort((a, b) => b.score - a.score).slice(0, 5);
          });
          return newScore;
        });
      };

  console.log("SetupQuiz loaded");

  

  return (


     <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
     <Link to="/beginars/number/ready-one-two-three" className="text-teal-700 hover:underline mb-6 inline-block">
       ← Back to Basic Numbers Lessons
     </Link>

     <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
     <UserStats quizScore={quizScore} handleQuizComplete={handleQuizComplete} />
     </div>
     <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
       <h3 className="text-xl font-semibold text-teal-700 mb-4">
         {/* {quizTypeMap[numberTypeKey] === "basic" ? "BASIC NUMBERS" : `${quizTypeMap[numberTypeKey].toUpperCase()}  NUMBERS` }{" "} */}
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
         <GenerateQuiz
           item={quizItem}
           optionsPool={items}
           onNext={nextQuestion}
           onAnswer={handleAnswer}
           onReset={resetScore}
           type={quizType}
      //     quizScore={quizScore}
         //  handleQuizComplete={handleQuizComplete}
         />
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
