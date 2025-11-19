import React, { useState, useEffect } from "react";
import GenarateDailyChallengeOne from "./GenarateDailyChallengeOne";
import PageWrapper from "../PageWrapper";
import GenarateDailyChallengeTwo from "./GenarateDailyChallengeTwo";
import GenarateDailyChallengeThree from "./GenarateDailyChallengeThree";
import DailyLeaderboard from "./DailyLeaderboard";
import { useAuth } from "../../contexts/AuthContext";
import SignupUser from "../backend/Signup";
import Login from "../backend/Login";

interface ChallengeScore {
  correct: number;
  total: number;
}

interface ChallengeItem {
  finnish: string;
  english: string;
  pronunciation?: string;
}

interface ChallengeProps<T extends ChallengeItem> {
  items: T[];
  quizType?: string;
  title?: string;
  onComplete?: (success: boolean) => void;
}

function ChallengeOne<T extends ChallengeItem>({
  items,
  quizType,
  title,
  onComplete,
}: ChallengeProps<T>) {
  const [quizItem, setQuizItem] = useState<ChallengeItem | null>(null);
  const [score, setScore] = useState<ChallengeScore>({ correct: 0, total: 0 });
  const [activeChallenge, setActiveChallenge] = useState<number>(1);
  const { user } = useAuth(); // ✅ Auth context
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    if (quizItem) console.log("✅ quizItem updated:", quizItem);
  }, [quizItem]);

  const startQuiz = () => {
    if (items.length === 0) {
      console.warn("⚠️ No items available for quiz!");
      return;
    }

    const randomItem = items[Math.floor(Math.random() * items.length)];
    setQuizItem(randomItem);
    setScore({ correct: 0, total: 0 });
  };

  const nextQuestion = () => {
    const nextItem = items[Math.floor(Math.random() * items.length)];
    setQuizItem(nextItem);
  };

  const handleAnswer = (isCorrect: boolean) => {
    setScore((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));
  };

  const resetScore = () => setScore({ correct: 0, total: 0 });

  const handleQuizComplete = () => {
    if (score.total < 9) return; // wait until 10 questions answered

    const passed = score.correct >= 7;
    if (passed) {
      console.log("✅ Unlock next challenge!");
      setActiveChallenge((prev) => prev + 1);
    } else {
      console.log("❌ Failed, restarting challenge...");
      resetScore();
      setActiveChallenge(1);
    }
  };

  {/* ✅ Conditional rendering: logged-in users see leaderboard, otherwise signup */}
  return (
    <PageWrapper title="">
      
      {!user ? (
        <div className="mt-6 ">
        <SignupUser onSwitch={() => setShowSignup(false)} />
        </div>
      ) : (
        <div className="mt-6">
        <DailyLeaderboard />
        </div>
      )}
      

      <div className=" mt-6">
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">Daily Challenge</h2>
        {!quizItem ? (
          !user ? (
            <Login />
          ) : (

            <button
              onClick={startQuiz}
              className="mt-4 bg-gray-900 text-teal-300  shadow-sm shadow-teal-900 px-4 py-2 rounded hover:bg-teal-300 hover:text-teal-900 transform hover:scale-110 transition duration-200"
            >
              Start Quiz
            </button>
          )
        ) : (
          <div className="mt-2">
            {activeChallenge === 1 && (
              <GenarateDailyChallengeOne
                onNext={nextQuestion}
                onAnswer={handleAnswer}
                onReset={resetScore}
                handleQuizComplete={handleQuizComplete}
                onComplete={(success) => {
                  if (success) setActiveChallenge(2);
                }}
              />
            )}

            {activeChallenge === 2 && (
              <GenarateDailyChallengeTwo
                onComplete={(success) => {
                  if (success) setActiveChallenge(3);
                }}
              />
            )}

            {activeChallenge === 3 && (
              <GenarateDailyChallengeThree
                onComplete={(success) => {
                  if (success) alert("🎉 You finished all challenges!");
                }}
              />
            )}
          </div>
        )}
      </div>
    </PageWrapper>
  );
}

export default ChallengeOne;
