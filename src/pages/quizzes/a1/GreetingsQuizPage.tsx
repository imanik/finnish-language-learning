import React, { useState, useEffect } from 'react';
    import { Link, useParams } from 'react-router-dom';
import {greetingsData} from '../../../data/basicA1';
import UserStats from '../../../components/UserStats';

    
    interface Greeting {

      english: string,
      finnish: string,
      pronunciation: string,

    }

    interface QuizState {
      question: string;
      correctAnswer: string;
      shuffledOptions: Greeting[];
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

    interface GenerateQuizProps {
      greeting: Greeting;
      onNext: () => void;
      onAnswer: (isCorrect: boolean) => void;
      onReset: () => void;
      type: "basic"; // Restrict to known values
      quizScore: QuizScore;
      handleQuizComplete: (wasCorrect: boolean) => void;
    }

// A React component that generates and displays a single quiz question based on a family member.
// Props: greeting (current greeting), onNext (next question callback), onAnswer (answer callback), onReset (reset callback), type (quiz category).
    function GenerateQuiz({ greeting, onNext, onAnswer, type, onReset, handleQuizComplete }: GenerateQuizProps){
  // State to track the user's selected answer (e.g., "hyva"), initially null (no selection).
  // Typed as string | null to allow either a string (Finnish term) or null.
      const [selected, setSelected] = useState<string | null>(null);


      const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

      const [quizState,setQuizState] = useState<QuizState | null>(null);

      useEffect(() => {
          const correctAnswer = greeting; // Full object for the correct answer
      
          const greetingsDataMap: Record<string, Greeting[]> = {
            basic: greetingsData.basicGreetings,
          };
          const allBasicGreetings = greetingsDataMap[type] || greetingsData.basicGreetings;
      
          const incorrectOptions: Greeting[] = [];
          const usedOptions = new Set([correctAnswer.finnish]);
      
          while (incorrectOptions.length < 3) {
            const randomIndex = Math.floor(Math.random() * allBasicGreetings.length);
            const option = allBasicGreetings[randomIndex];
            if (!usedOptions.has(option.finnish)) {
              incorrectOptions.push(option);
              usedOptions.add(option.finnish);
            }
          }
      
          const shuffledOptions = [...incorrectOptions, correctAnswer].sort(() => Math.random() - 0.5);
      
          setQuizState({ question: greeting.english, correctAnswer: correctAnswer.finnish, shuffledOptions });
          setSelected(null);
          setIsCorrect(null);
        }, [greeting, type]);
      
        const handleSubmit = () => {
          if(!quizState) return;
          const correct = selected === quizState.correctAnswer;
          setIsCorrect(correct);
          onAnswer(correct);
          handleQuizComplete(correct); // Update quizScore via the passed function
        };
      
        if (!quizState) return null;
      

      return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-teal-700 mb-4">
            What is the meaning of "<span className="text-xl text-red-500">{quizState.question}</span>"
          </h3>
          <div className="space-y-2">
            {quizState.shuffledOptions.map((option, index) => (
              <label key={index} className="block">
                <input
                  type="radio"
                  name="languageQuiz"
                  value={option.finnish}
                  checked={selected === option.finnish}
                  onChange={() => setSelected(option.finnish)}
                  disabled={isCorrect !== null}
                  className="mr-2"
                />
                {option.finnish} <span className="text-gray-500 ml-2">({option.pronunciation})</span>
              </label>
            ))}
          </div>
          {isCorrect === null ? (
            <button
              onClick={handleSubmit}
              className="mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
            >
              Submit
            </button>
          ) : (
            <div className="mt-4">
              <p className={isCorrect ? "text-green-600" : "text-red-600"}>
                {isCorrect ? "Correct!" : `Wrong! The correct answer is "${quizState.correctAnswer}".`}
              </p>
              <button
                onClick={onNext}
                className="mt-2 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 m-4"
              >
                Next Question
              </button>
              <button onClick={onReset} className="m-4 bg-red-500 text-white px-4 py-2 rounded">
                Reset Score
              </button>
            </div>
          )}
        </div>
      );

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
            greeting={quizBasicGreeting}
            onNext={nextQuestion}
            onAnswer={handleAnswer}
            onReset={resetScore}
            type={quizType}
            quizScore={quizScore}
            handleQuizComplete={handleQuizComplete}
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