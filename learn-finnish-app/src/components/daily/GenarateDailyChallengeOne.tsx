import React, { useEffect, useState, useMemo } from "react";
import { datasets } from "../../data/datasets";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";

interface ChallengeItem {
  english: string;
  finnish: string;
  pronunciation?: string;
}

interface GenarateDailyChallengeOneProps {
  onNext: () => void;
  onAnswer: (isCorrect: boolean) => void;
  onReset: () => void;
  handleQuizComplete: (wasCorrect: boolean) => void;
  onComplete?: (success: boolean) => void;
}

export default function GenarateDailyChallengeOne({
  onNext,
  onAnswer,
  onReset,
  handleQuizComplete,
  onComplete,
}: GenarateDailyChallengeOneProps) {
  // === Pick random dataset once ===
  const { randomSet, allItems } = useMemo(() => {
    const randomSet = datasets[Math.floor(Math.random() * datasets.length)];
    const dataset = randomSet?.data || {};
    const keys = Object.keys(dataset);
    const keyType = keys[Math.floor(Math.random() * keys.length)];
    const allItems = keyType && Array.isArray((dataset as any)[keyType])
      ? ((dataset as any)[keyType] as ChallengeItem[])
      : [];
    return { randomSet, allItems };
  }, []);

  const [quizItems, setQuizItems] = useState<ChallengeItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState<number>(0);
  const [showPopup, setShowPopup] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const shuffle = <T,>(array: T[]): T[] => [...array].sort(() => Math.random() - 0.5);

  // === Initialize quiz ===
  useEffect(() => {
    if (!Array.isArray(allItems) || allItems.length === 0) return;
    const selectedQuizItems = shuffle(allItems).slice(0, 10);
    setQuizItems(selectedQuizItems);
    setCurrentIndex(0);
    setScore(0);
    setShowPopup(false);
    setSubmitted(false);
  }, [allItems]);

  const currentQuestion = quizItems[currentIndex];
  const options = useMemo(() => {
    if (!currentQuestion) return [];
    const incorrects = shuffle(allItems.filter(i => i.finnish !== currentQuestion.finnish)).slice(0, 3);
    return shuffle([...incorrects, currentQuestion]);
  }, [currentQuestion, allItems]);

  // === Handle answer submission ===
  const handleSubmit = async () => {
    if (!currentQuestion || selected === null) return;
    const correct = selected === currentQuestion.finnish;
    if (correct) {
      const API_BASE =
        window.location.hostname === "localhost"
          ? "http://localhost:5000"
          : "https://fin-learn-backend.onrender.com";

      // update-progress updates current game
      await fetch(`${API_BASE}/api/leaderboard/update-progress`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: randomSet?.name || "Daily",
          progress: score + 1,
        }),
      }).catch(console.error);
    }

    setIsCorrect(correct);
    if (correct) setScore(prev => prev + 1);
    onAnswer(correct);
    handleQuizComplete(correct);
  };

  const handleNext = () => {
    if (currentIndex + 1 >= quizItems.length) {
      setShowPopup(true); // ✅ show popup when finished
    } else {
      setSelected(null);
      setIsCorrect(null);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const finalScore = score * 10;

  // === Save leaderboard entry once popup shows ===
  useEffect(() => {
    if (!showPopup || submitted) return; // ✅ prevents double call
    setSubmitted(true);

    const saveLeaderboard = async () => {
      try {
        const API_BASE =
          window.location.hostname === "localhost"
            ? "http://localhost:5000"
            : "https://fin-learn-backend.onrender.com";

        const res = await fetch(`${API_BASE}/api/leaderboard/entry`, {
          method: "POST",
          credentials: "include", // ✅ include session cookie
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            topic: randomSet?.name || "Daily Challenge",
            score: finalScore,
            correct: score,
            time: quizItems.length * 5, // optional estimate
          }),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to update leaderboard");
        console.log("✅ Leaderboard updated:", data);
      } catch (err) {
        console.error("❌ Leaderboard save failed:", err);
      }
    };

    saveLeaderboard();
  }, [showPopup, submitted]);

  if (!currentQuestion)
    return <div className="text-gray-400 text-center">Loading question...</div>;

  return (
    <>
      <div className="p-6">
        <h2 className="text-xl text-teal-300 font-bold mb-4">
          Match the Words (Score {score}/{quizItems.length})
        </h2>

        <h4 className="text-lg text-gray-200 mb-4">
          What is the meaning of{" "}
          <span className="text-red-400 font-bold">"{currentQuestion.english}"</span>?
        </h4>

        {options.map((option, i) => (
          <div
            key={i}
            className={`rounded-xl shadow-xl p-4 max-w-xl mx-auto mb-4 cursor-pointer transition transform
              ${isCorrect && option.finnish === currentQuestion.finnish ? "border border-teal-700" : ""}
            `}
          >
            <label>
              <input
                type="radio"
                name="quizOption"
                value={option.finnish}
                checked={selected === option.finnish}
                onChange={() => setSelected(option.finnish)}
                disabled={isCorrect !== null}
                className="mr-2"
              />
              <span className="text-teal-200">{option.finnish}</span>
              <span className="text-gray-400 ml-2">{option.pronunciation ?? ""}</span>
            </label>
          </div>
        ))}

        {isCorrect === null ? (
          <button
            onClick={handleSubmit}
            disabled={!selected}
            className="mt-4 bg-gray-900 text-teal-300 px-4 py-2 rounded hover:bg-teal-300 hover:text-teal-900 transition duration-200"
          >
            Submit
          </button>
        ) : (
          <div className="mt-4">
            <p className={isCorrect ? "text-green-500" : "text-red-500"}>
              {isCorrect
                ? "✅ Correct!"
                : `❌ Wrong! The correct answer is "${currentQuestion.finnish}".`}
            </p>
            <button
              onClick={handleNext}
              className="mt-3 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700"
            >
              Next
            </button>
          </div>
        )}

        <p className="mt-6 text-lg flex gap-2 text-teal-300">
          {quizItems.length - currentIndex} left
          <ArrowDownCircleIcon className="h-5 w-5 animate-pulse text-cyan-400" />
        </p>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 animate-fadeIn">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
            <h3 className="text-xl font-bold text-teal-300 mb-2">
              {(randomSet?.name || "Daily").toUpperCase()} Challenge
            </h3>
            <p className="text-teal-400 mb-4">Score: {finalScore}</p>

            {score >= 7 ? (
              <>
                <h3 className="text-green-400 text-xl font-bold mb-4">🎉 Congratulations!</h3>
                <p className="text-teal-200 mb-4">
                  You scored {score}/10 and unlocked the next challenge.
                </p>
                <button
                  onClick={() => onComplete?.(true)}
                  className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700"
                >
                  Next Challenge →
                </button>
              </>
            ) : (
              <>
                <h3 className="text-red-400 text-xl font-bold mb-4">❌ Try Again</h3>
                <p className="text-teal-200 mb-4">
                  You scored {score}/10. You need at least 7 to pass.
                </p>
                <button
                  onClick={onReset}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Restart
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
