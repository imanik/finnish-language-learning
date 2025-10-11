

import React, { useEffect, useState } from "react";
import { datasets } from "../../data/datasets";

interface ChallengeItem {
  english: string;
  finnish: string;
  pronunciation?: string;
}

interface ChallengeState<T extends ChallengeItem> {
  question: string;
  correctAnswer: string;
  shuffledOptions: T[];
}

function shuffle<A>(array: A[]): A[] {
  return [...array].sort(() => Math.random() - 0.5);
}

function GenarateDailyChallengeOne({onComplete,}: {onComplete?: (success: boolean) => void;}) {
  // === Step 1: Random dataset ===
  const randomSet = datasets[Math.floor(Math.random() * datasets.length)];
  const dataset = randomSet?.data || {};
  const keys = Object.keys(dataset);
  const keyType = keys[0];
  const allItems = dataset[keyType as keyof typeof dataset] as ChallengeItem[];
  
    const [showPopup, setShowPopup] = useState(false);

  // === Step 2: State ===
  const [quizItems, setQuizItems] = useState<ChallengeItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [challengeState, setChallengeState] =
    useState<ChallengeState<ChallengeItem> | null>(null);

  // === Step 3: Initialize quiz ===
  useEffect(() => {
    console.log(keyType)
   startChallenge()
  }, []);

  const startChallenge = () => {
     if (!Array.isArray(allItems) || allItems.length === 0) {
      console.error("Invalid dataset:", randomSet);
      return;
    }
    const selectedQuizItems = shuffle(allItems).slice(0, 10);
    setQuizItems(selectedQuizItems);
  }

  // === Step 4: Load question on index change ===
  useEffect(() => {
    if (quizItems.length === 0 || currentIndex >= quizItems.length) return;

    const correctAnswer = quizItems[currentIndex];
    const incorrectOptions: ChallengeItem[] = [];
    const used = new Set([correctAnswer.finnish]);

    while (
      incorrectOptions.length < 3 &&
      incorrectOptions.length < allItems.length - 1
    ) {
      const opt = allItems[Math.floor(Math.random() * allItems.length)];
      if (!used.has(opt.finnish)) {
        incorrectOptions.push(opt);
        used.add(opt.finnish);
      }
    }

    const shuffledOptions = shuffle([...incorrectOptions, correctAnswer]);

    setChallengeState({
      question: correctAnswer.english,
      correctAnswer: correctAnswer.finnish,
      shuffledOptions,
    });

    setSelected(null);
    setIsCorrect(null);
  }, [quizItems, currentIndex]);

  // === Step 5: Detect quiz finished AFTER score updates ===
  useEffect(() => {
    if (quizItems.length > 0 && currentIndex >= quizItems.length) {
      setFinished(true);
      onComplete?.(true);
    }
  }, [currentIndex, quizItems, onComplete]);

  // === Step 6: Submit answer ===
  const handleSubmit = () => {
    if (!selected || !challengeState) return;
    const correct = selected === challengeState.correctAnswer;
    setIsCorrect(correct);
    if (correct) setScore((prev) => prev + 1);
  };

  // === Step 7: Next question ===
  const handleNextQuestion = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  // === Step 8: Show results ===
  if (finished) {
    return (
      <div className="text-center p-6">
        <h2 className="text-2xl text-teal-300 font-semibold mb-4">
          Quiz Complete!
        </h2>
        <p className="text-xl text-gray-200">
          Your score: <span className="text-teal-400">{score}/10</span>
        </p>
        
        
        {score >= 7 ? (
              <>
                <h3 className="text-green-400 text-xl font-bold mb-4">
                  🎉 Well done!
                </h3>
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
                <h3 className="text-red-400 text-xl font-bold mb-4">
                  ❌ Try Again
                </h3>
                <p className="text-teal-200 mb-4">
                  You scored {score}/10. You need at least 7 to pass.
                </p>
                <button
                  onClick={startChallenge}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Restart
                </button>
              </>
            )}
      </div>
    );
  }

  // === Step 9: Loading or active question ===
  if (!challengeState) {
    return <div className="text-gray-400 text-center">Loading question...</div>;
  }

  return (
    <div className="p-6">
      <h4 className="text-lg text-gray-200 mb-4">
        What is the meaning of{" "}
        <span className="text-red-400 font-bold">
          "{challengeState.question}"
        </span>
        ?
      </h4>

      {challengeState.shuffledOptions.map((option, index) => (
        <div
          key={index}
          className={`bg-gray-900 rounded-xl shadow-xl p-4 mb-4 transition transform hover:scale-105
            ${
              isCorrect !== null &&
              option.finnish === challengeState.correctAnswer
                ? "border border-teal-700"
                : ""
            }`}
        >
          <label className="block cursor-pointer">
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
            <span className="text-gray-400 ml-2">
              ({option.pronunciation ?? ""})
            </span>
          </label>
        </div>
      ))}

      {isCorrect === null ? (
        <button
          onClick={handleSubmit}
          disabled={!selected}
          className="mt-4 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700 transition transform hover:scale-110 disabled:opacity-50"
        >
          Submit
        </button>
      ) : (
        <div className="mt-4 text-center">
          <p className={isCorrect ? "text-green-500" : "text-red-500"}>
            {isCorrect
              ? "✅ Correct!"
              : `❌ Wrong! The correct answer is "${challengeState.correctAnswer}".`}
          </p>
          <button
            onClick={handleNextQuestion}
            className="mt-3 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700 transition transform hover:scale-110"
          >
            Next
          </button>
        </div>
      )}


     
    </div>
  );
}

export default GenarateDailyChallengeOne;
