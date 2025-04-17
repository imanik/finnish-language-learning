import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { langaugeData } from "../../../data/basicA1";
import UserStats from "../../../components/UserStats";
import GenerateQuiz from "../../../components/GenarateQuiz";


interface Language {
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

function WhatLanguageQuizzes() {

    const { child } = useParams<{child : string}>();

    const [quizLanguageState, setQuizLanguageState] = useState<Language | null>(null);
    
    //current quiz score 
    const [score, setScore] = useState<QuizScore>({correct:0, total:0});
 
    
    
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);  

    // First need to check prevoiously any quiz solved or data restored in localstorage if yes load the data or no get {correct:0, total:0} 
    //over All quiz Score
    const [quizScore, setQuizScore] = useState<QuizScore>(() => {
      const anySavedOverAllQuizScore = localStorage.getItem("overAllQuizScore");
      return anySavedOverAllQuizScore ? localStorage.parse(anySavedOverAllQuizScore) : {correct:0, total:0}
    });

    // Now showdata if any value presents in current game or leaderboard when pages load this is a one time run useState func
    useEffect(() => {
      const anySavedScore = JSON.parse(localStorage.getItem("sessionScore") || "null") ||  {correct: 0, total: 0} ;
      const anysavedLeaderboardData = JSON.parse(localStorage.getItem("leaderboard") || "null") || [];
      setScore(anySavedScore);
      setLeaderboard(anysavedLeaderboardData);
    }, []);

   
    // if score changes in current game
    useEffect(() => {
      if(score.correct !==0 || score.total !==0){
        
        const saveScore =  localStorage.setItem("sessionScore",JSON.stringify(score));
      }
    },[score]);

    // if data changes in overall quizScore
    useEffect(() => {
      const overallSaveQuizScore = localStorage.setItem("overAllQuizScore",JSON.stringify(quizScore));
    },[quizScore]);

    // if leaderboard data changes

    useEffect(() => {
      const saveLeaderboard = localStorage.setItem("leaderboard",JSON.stringify(leaderboard))
    }, [leaderboard]);

    // Need to check when a overAll quiz complete. It will check
    // const handleQuizComplete = () => {

    // };

    const languageTypeKey =  child ? 
    child
    .toLowerCase()
    .replace("-quiz","")
    .replace("basic-language","basicLanguage")
    .replace("sentence-language","sentenceLanguage")
    : "basicLanguage";

    const languageTypeMap: Record<string, string> = {
      basicLanguage: 'basic', 
      sentenceLanguage: 'sentence', 
    };

    const quizType = languageTypeMap[languageTypeKey] as 'basic' | 'sentence';

    const allLanguages = (langaugeData[languageTypeKey as keyof typeof langaugeData] || langaugeData.basicLanguage) as Language[];


    const startQuiz = () => {
      const randomBasicLanguage = allLanguages[Math.floor(Math.random() * allLanguages.length)];
      setQuizLanguageState(randomBasicLanguage);
    };

    
    const nextQuestion = () => {
      const randomBasicLanguage = allLanguages[Math.floor(Math.random() * allLanguages.length)];
      setQuizLanguageState(randomBasicLanguage);
    };

    const resetScore = () => {

      setScore({correct:0, total:0});
    //  setQuizScore({correct:0, total:0});
      setLeaderboard([]);

    }

              // Function to update quizScore when a single quiz is completed.
          // Takes a boolean indicating if the answer was correct.
          const handleQuizComplete = (isCorrect: boolean) => {
            setQuizScore((prev) => ({
              total: prev.total + 1,
              correct: isCorrect ? prev.correct + 1 : prev.correct,
            }));

        }


    const handleAnswer = (isCorrect: boolean) => {

        setScore((prev) => {
            
          const newScore = {
              correct: isCorrect ? prev.correct+1 : prev.correct,
              total: prev.total + 1,
            }

            setLeaderboard((prev) => {
              const newLeaderboardEntry = {
                name: 'User',
                score: newScore.correct,
                total: newScore.total
              }
               // Filter out any existing "User" entry, add the new one, sort by score, and take top 5.
              const updatedLeaderBoard =  prev.filter((entry) => entry.name !=='User').concat(newLeaderboardEntry);
              return updatedLeaderBoard.sort((a,b) => b.score - a.score).slice(0,5)
            });
            
            return newScore;
        });
    }


    



    // Render the component UI.
  return (
    <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
      {/* Link to navigate back to the family lessons page */}
      <Link to="/beginars/language/basic-language" className="text-teal-700 hover:underline mb-6 inline-block">
        ← Back to Language Lessons
      </Link>

      {/* Container for UserStats component */}
      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
        {/* Pass quizScore and handleQuizComplete to UserStats (assumed to display overall stats) */}
        <UserStats quizScore={quizScore} handleQuizComplete={handleQuizComplete} />
      </div>

      {/* Main quiz container */}
      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        {/* Display the quiz type in the header (e.g., "BASIC FAMILY QUIZ" or "MARITAL STATUS QUIZ") */}
        <h3 className="text-xl font-semibold text-teal-700 mb-4">
          {languageTypeMap[languageTypeKey] === "basic"? "BASIC": `${languageTypeMap[languageTypeKey].toUpperCase()} LANGUAGE`}{" "}
          QUIZ
        </h3>

        {/* Show the current score and percentage */}
        <p className="text-gray-600 mb-4">
          Score: {score.correct}/{score.total} (
          {/* Calculate percentage, default to 0 if total is 0 to avoid NaN */}
          {((score.correct / score.total) * 100 || 0).toFixed(1)}%)
        </p>

        {/* Conditional rendering: show Start Quiz button or the quiz itself */}
        {!quizLanguageState ? (
          <button
            onClick={startQuiz} // Trigger startQuiz when clicked
            className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
          >
            Start Quiz
          </button>
        ) : (
          <GenerateQuiz
            item={quizLanguageState} // Pass the current language member to GenerateQuiz
            optionsPool={allLanguages}
            onNext={nextQuestion} // Pass function to move to the next question
            onAnswer={handleAnswer} // Pass function to handle the answer
            onReset={resetScore} // Pass function to reset the score
            type={quizType} // Pass the quiz type (e.g., "basic")
            // handleQuizComplete={handleQuizComplete}
          />
        )}

        {/* Leaderboard section */}
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-teal-700 mb-2">Leaderboard</h4>
          {/* Show message if leaderboard is empty, otherwise list entries */}
          {leaderboard.length === 0 ? (
            <p className="text-gray-600">No scores yet.</p>
          ) : (
            <ul className="text-gray-600">
              {/* Map through leaderboard entries and display them */}
              {leaderboard.map((entry, index) => (
                <li key={index}>
                  {entry.name}: {entry.score}/{entry.total} (
                  {/* Calculate and display percentage for each entry */}
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

export default WhatLanguageQuizzes;

