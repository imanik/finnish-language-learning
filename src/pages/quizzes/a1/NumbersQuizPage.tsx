
import React, {useState, useEffect, use} from 'react';
import {Link, useParams} from 'react-router-dom';
import {numberData} from '../../../data/basicA1'; // Removed unused basicA1 import
import UserStats from '../../../components/UserStats';
import GenerateQuiz from '../../../components/GenarateQuiz';

interface Number {
  english: string;
  finnish: string;
  pronunciation: string;
}

interface QuizScore {
  correct: number;
  total: number;
}

interface LeaderboardEntry {
  name: string;
  score: number;
  total: number;
}




function NumbersQuizPage() {

  const {child} = useParams<{child?: string}>();
  const [quizNumber, setQuizNumber] = useState<Number | null>(null); 
  const [score, setScore] = useState<QuizScore>({correct:0, total:0}); // Session score
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [quizScore, setQuizScore] = useState<QuizScore>(() => { 
    const storedScore = localStorage.getItem("overallQuizScore"); // New key for overall score
    return storedScore ? JSON.parse(storedScore) : { correct: 0, total: 0 };
  }
  );
  
  useEffect(() => { 
    const savedScore = JSON.parse(localStorage.getItem("sessionScore") || "null") || { correct: 0, total: 0 };
    const savedLeaderboard = JSON.parse(localStorage.getItem("quizLeaderboard") || "null") || [];
    setScore(savedScore);
    setLeaderboard(savedLeaderboard);
  }
  , []);

  // Save session score when it changes (non-zero)
  useEffect(() => {
    if (score.correct !== 0 || score.total !== 0) {
      localStorage.setItem("sessionScore", JSON.stringify(score));
    }
  }
  , [score]); // Added dependency array


  // Save overall quizScore when it changes
  useEffect(() => {
    localStorage.setItem("overallQuizScore", JSON.stringify(quizScore));
  }
  , [quizScore]); // Added dependency array

  useEffect(() => {
    localStorage.setItem("quizLeaderboard", JSON.stringify(leaderboard));
  }
  , [leaderboard]); // Added dependency array

  const numberTypeKey = child ?
  child
  .toLowerCase()
  .replace("-quiz", "")
  .replace("basic-numbers", "basicNumbers") // Convert "basic-numbers" to "basicNumbers"
  .replace("ordinal-numbers", "ordinalNumbers") // Replace "extended-family" with "extendedFamily".
  .replace("sentence-numbers", "sentenceNumbers") // Replace "step-family" with "stepFamily".
  : "basicNumbers"; // Default to "numbers" if child is undefined

  // console.log("numberTypeKey",numberTypeKey);

  const quizTypeMap: Record<string, string> = {
    basicNumbers: "basic",
    ordinalNumbers: "ordinal",
    sentenceNumbers: "sentence",
  };
  
  const quizType = (quizTypeMap[numberTypeKey] || "basic") as "basic" | "ordinal" | "sentence"; // Determine quiz type based on numberTypeKey

  const allNumbers = (numberData[numberTypeKey as keyof typeof numberData] || numberData.basicNumbers) as Number[] ; // Type assertion to Number[]
  console.log("allNumbers",allNumbers);
 
  const startQuiz = () => {
    const randomIndex =  Math.floor(Math.random() * allNumbers.length);
    setQuizNumber(allNumbers[randomIndex]);
  }

  const nextQuestion = () => {
    const randomIndex = allNumbers[Math.floor(Math.random() * allNumbers.length)];
    setQuizNumber(randomIndex);
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
          {quizTypeMap[numberTypeKey] === "basic" ? "BASIC NUMBERS" : `${quizTypeMap[numberTypeKey].toUpperCase()}  NUMBERS` }{" "}
          QUIZ
        </h3>
        <p className="text-gray-600 mb-4">
          Score: {score.correct}/{score.total} ({((score.correct / score.total) * 100 || 0).toFixed(1)}%)
        </p>
        {!quizNumber ? (
          <button
            onClick={startQuiz}
            className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
          >
            Start Quiz
          </button>
        ) : (
          <GenerateQuiz
            item={quizNumber}
            optionsPool={allNumbers}
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
};

export default NumbersQuizPage;