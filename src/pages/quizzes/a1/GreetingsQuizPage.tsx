import React, { useState, useEffect } from 'react';
    import { Link, useParams } from 'react-router-dom';
import {greetingsData} from '../../../data/basicA1';
import UserStats from '../../../components/UserStats';
import GenerateQuiz from '../../../components/GenarateQuiz';

    
    interface Greeting {

      english: string,
      finnish: string,
      pronunciation: string,

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

 
   
    
 function GreetingQuizzes() {

   const { child } = useParams<{ child?: string }>();
    const [quizBasicGreeting, setQuizBasicGreeting] = useState<Greeting | null>(null);
    const [score, setScore] = useState<QuizScore>({ correct: 0, total: 0 }); // Session score
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
   
    const [quizScore, setQuizScore] = useState<QuizScore>(() => {
      const storedScore = localStorage.getItem("overallQuizScore"); // New key for overall score
      return storedScore ? JSON.parse(storedScore) : { correct: 0, total: 0 };
    });
  
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
    }, [quizScore]);
  
    // Save leaderboard when it changes
    useEffect(() => {
      localStorage.setItem("quizLeaderboard", JSON.stringify(leaderboard));
    }, [leaderboard]);
  
    const handleQuizComplete = (wasCorrect: boolean) => {
      setQuizScore((prev) => ({
        total: prev.total + 1,
        correct: wasCorrect ? prev.correct + 1 : prev.correct,
      }));
    };
  
    const greetingTypeKey = child
      ? child
          .toLowerCase()
          .replace("-quiz", "")
          .replace("basic-greeting", "basicGreeting")
      : "basicGreeting";
  
  
  
    const quizTypeMap: Record<string, string> = {
      basicGreeting: "basic",
    };
    const quizType = (quizTypeMap[greetingTypeKey] || "basic") as "basic";
  
    const allBasicGreeting = (greetingsData[greetingTypeKey as keyof typeof greetingsData] ||
      greetingsData.basicGreetings) as Greeting[];
  
    const startQuiz = () => {
      const randomBasicGreeting = allBasicGreeting[Math.floor(Math.random() * allBasicGreeting.length)];
      setQuizBasicGreeting(randomBasicGreeting);
    };
  
    const nextQuestion = () => {
      const randomBasicGreeting = allBasicGreeting[Math.floor(Math.random() * allBasicGreeting.length)];
      setQuizBasicGreeting(randomBasicGreeting);
    };
  
    const resetScore = () => {
      setScore({ correct: 0, total: 0 });
      setLeaderboard([]);
      // Optionally reset quizScore too, if desired
      // setQuizScore({ correct: 0, total: 0 });
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
  
   



   // Render the component UI.
   return (
    <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
      <Link to="/beginars/basic-words/basic-greeting" className="text-teal-700 hover:underline mb-6 inline-block">
        ← Back to Basic Greeting Lessons
      </Link>     
      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
      <UserStats quizScore={quizScore} handleQuizComplete={handleQuizComplete} />
      </div>
      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold text-teal-700 mb-4">
          {quizTypeMap[greetingTypeKey] === "basic" ? quizTypeMap[greetingTypeKey].toUpperCase() : "BASIC ADJECTIVE"}{" "}
          QUIZ
        </h3>
        <p className="text-gray-600 mb-4">
          Score: {score.correct}/{score.total} ({((score.correct / score.total) * 100 || 0).toFixed(1)}%)
        </p>
        {!quizBasicGreeting ? (
          <button
            onClick={startQuiz}
            className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
          >
            Start Quiz
          </button>
        ) : (
          <GenerateQuiz
            item={quizBasicGreeting}
            optionsPool={allBasicGreeting}
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

    export default GreetingQuizzes;