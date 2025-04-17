import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { nationalityData } from "../../../data/basicA1";
import GenerateQuiz from "../../../components/GenarateQuiz";


interface Nationality {
  english: string,
  finnish: string,

}



interface QuizScore {
  correct: number,
  total: number,
}

interface LeaderboardEntry {
  name: string,
  score: number,
  total: number,
}
 



function NationalityQuizzes() {

      const { child } = useParams<{child: string}>();
      const [nationalityQuizState, setNationalityQuizState] = useState<Nationality | null>(null);
      const [score, setScore] = useState<QuizScore>({correct:0, total:0}); //session Score
      const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
 // State for tracking an overall quiz score, persisted in localStorage.
  // Initialized with stored data from localStorage if available, otherwise { correct: 0, total: 0 }.
      const [quizScore, setQuizScore] = useState<QuizScore>(() => {  // Anono function used as a setQuizscore Parameter
            const storedScore = localStorage.getItem("overAllQuizScore");
            return storedScore ? localStorage.parse(storedScore) : {correct:0, total:0};

      })

            //  Alternative way to set quizScore
            // // State for tracking an overall quiz score, persisted in localStorage.
            // const getInitialQuizScore = () => {
            //   // Retrieve the stored quiz score from localStorage (returns string | null).
            //   const storedScore = localStorage.getItem("overallQuizScore");
            //   // Parse the stored string to an object if it exists, otherwise return default { correct: 0, total: 0 }.
            //   return storedScore ? JSON.parse(storedScore) : { correct: 0, total: 0 };
            // };
            // const [quizScore, setQuizScore] = useState<QuizScore>(getInitialQuizScore);

          // Load session score and leaderboard on mount
          useEffect(()=> {
              const savedScore = JSON.parse(localStorage.getItem("sessionScore") || "null") || {correct: 0, total: 0};
              const savedLeaderboard = JSON.parse(localStorage.getItem("leaderboard") || "null") || [];
              setScore(savedScore);
              setLeaderboard(savedLeaderboard);

          },[]); 
          
          // Save session score when it changes (non-zero)

          useEffect(() => {
            if(score.correct !== 0 || score.total !== 0){
              localStorage.setItem("sessionScore",JSON.stringify(score));
            }
          },[score]);

          // useEffect to  Save overall quizScore when it changes
          useEffect(() => {
            localStorage.setItem("overAllQuizScore", JSON.stringify(quizScore));
          }, [quizScore]);
    
          // Save leaderboard when it changes
          useEffect(() =>{
            localStorage.setItem("quizLeaderboard", JSON.stringify(leaderboard));
          }, [leaderboard]);



  // Determine the key to access family data based on the URL parameter 'child'.
  // If child exists, transform it (e.g., "basic-family-quiz" -> "basicFamily"), otherwise default to "basicFamily".

          const nationalityTypeKey = child ?
          child
          .toLowerCase()
          .replace("-quiz","")
          .replace("nationality-sentence","nationalitySentence") 
          : "nationalitySentence";

          // Create a map for type "basic"

          const quizTypeMap: Record<string, string> = {
            nationalitySentence : 'basic'
          }

            // Determine the quiz type based on familyTypeKey, default to "basic" if not found.
            // Cast to a union type to restrict possible values.
            // const quizType = (quizTypeMap[familyTypeKey] || "basic") as "basic" | "extended" | "step" | "marital";
          const quizType = (quizTypeMap[nationalityTypeKey] || 'basic') as 'basic';



  // Access the family members array from familyData using familyTypeKey.
  // Cast as keyof typeof familyData to tell TypeScript the key is valid, fallback to basicFamily if not found.
 
            const allNationality = (nationalityData[nationalityTypeKey as keyof typeof nationalityData] || nationalityData.nationalitySentence) as Nationality[];

      
        // Function to start the quiz by selecting a random family member.

        const startQuiz = () => {
          // Pick a random index from the familyMembers array.
          const randomNationality = allNationality[Math.floor(Math.random() * allNationality.length)];
          
          // Set quizFamily state to start the quiz with this family member.
          setNationalityQuizState(randomNationality);
          
        }
        
        
        
        
        
        // Function to move to the next question by selecting a new random family member.
        const nextQuestion = () =>{
          // Pick a random index from the familyMembers array.
          const randomNationality = allNationality[Math.floor(Math.random() * allNationality.length)];
          // Update quizFamily state to show the next question.
          setNationalityQuizState(randomNationality);
        }
          
          

      
        // Function to reset the score and leaderboard to their initial states.
        const resetScore = () => {

          // Reset score to { correct: 0, total: 0 }.
          setScore({correct:0, total:0});
          // Reset leaderboard to an empty array.
          setLeaderboard([]);
          // Reset quizScore to { correct: 0, total: 0 }.
          setQuizScore({correct:0, total:0});
          
        }

          // Function to update quizScore when a single quiz is completed.
          // Takes a boolean indicating if the answer was correct.
          const handleQuizComplete = (isCorrect: boolean) => {
            setQuizScore((prev) => ({
              total: prev.total + 1,
              correct: isCorrect ? prev.correct + 1 : prev.correct,
            }));

        }

      
        // Function to handle the user’s answer and update score/leaderboard.
        // Takes a boolean indicating if the answer was correct.
        const handleAnswer = (isCorrect: boolean) => {

          // Update score based on the previous state.
          setScore((prev) => {
           // Calculate new score: increment total, increment correct if isCorrect is true.
           const newScore = {
                  correct: prev.correct + (isCorrect ? 1 : 0),
                   total: prev.total + 1,
                 };
          // Update leaderboard based on the previous state.
          setLeaderboard((prev) => {
            
           // Create a new leaderboard entry for the user with the updated score.
           const userLeaderboardEntry: LeaderboardEntry = {
             // Hardcoded user name (could be dynamic in a real app).
             name: "User", // Hardcoded user name (could be dynamic in a real app).
            score: newScore.correct, // User’s correct answers.
            total: newScore.total, // User’s total attempts.
         };
             
            // Filter out any existing "User" entry, add the new one, sort by score, and take top 5.
           const updateLeaderboard = prev.filter((entry) => entry.name !== 'User').concat(userLeaderboardEntry);
           
           return updateLeaderboard.sort((a, b) => b.score - a.score).slice(0, 5);
          });       
            // Return the new score to update the state.
             return newScore;
          });        
        }


  

  return (
    <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
      <Link to="/beginars/nationality/what-nationality-are-you" className="text-teal-700 hover:underline mb-6 inline-block">
        ← Back to Nationality Lessons
      </Link>
      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold text-teal-700 mb-4">
          {quizTypeMap[nationalityTypeKey] == "basic" ?  quizTypeMap[nationalityTypeKey].toUpperCase() : "NATIONALITY"  } QUIZ
        </h3>
        <p className="text-gray-600 mb-4">
          Score: {score.correct}/{score.total} (
          {((score.correct / score.total) * 100 || 0).toFixed(1)}%)
        </p>
        {/* {console.log("Basic Fam: ", quizFamily)} */}
        {!nationalityQuizState ? (
          <button
            onClick={startQuiz}
            className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
          >
            Start Quiz
          </button>
        ) : (
          <GenerateQuiz
            item={nationalityQuizState}
            optionsPool = {allNationality}
            onNext={nextQuestion}
            onAnswer={handleAnswer}
            onReset={resetScore}
            type={quizType}
        //    handleQuizComplete={handleQuizComplete}
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

export default NationalityQuizzes;