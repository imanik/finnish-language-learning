import React, { useState, useEffect } from "react";
import { adjectivesData } from "../../data/basicA1";

interface Data {
  english: string;
  finnish: string;
  pronunciation?: string;
}

function shuffled<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

function GenarateDailyChallengeTwo({ onComplete }: { onComplete?: (success: boolean) => void }) {
  
  const keyType = "basicAdjectives";
  const allItems =
    (adjectivesData[keyType as keyof typeof adjectivesData] ||
      adjectivesData.basicAdjectives) as Data[];

  const [quizItems, setQuizItems] = useState<Data[]>([]);
  const [shuffledEnglish, setShuffledEnglish] = useState<Data[]>([]);
  const [selectedFinnish, setSelectedFinnish] = useState<Data | null>(null);
  const [selectedEnglish, setSelectedEnglish] = useState<Data | null>(null);

  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);
  const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set());
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    startGame();
  }, []);

  const startGame = () => {
    const selected = shuffled(allItems).slice(0, 10);
    setQuizItems(selected);
    setShuffledEnglish(shuffled(selected));
    setScore(0);
    setAttempts(0);
    setMatchedPairs(new Set());
    setShowPopup(false);
    setSelectedFinnish(null);
    setSelectedEnglish(null);
  };

  useEffect(() => {
    if (selectedFinnish && selectedEnglish) {
      setAttempts((prev) => prev + 1);

      if (selectedFinnish.english === selectedEnglish.english) {
        setScore((prev) => prev + 1);
        setMatchedPairs((prev) => new Set(prev).add(selectedFinnish.english));
      }

      setTimeout(() => {
        setSelectedFinnish(null);
        setSelectedEnglish(null);
      }, 800);
    }
  }, [selectedFinnish, selectedEnglish]);

  useEffect(() => {
    if (attempts >= 10) {
      setShowPopup(true);
    }
  }, [attempts]);

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg relative">
      <h2 className="text-xl text-teal-300 font-bold mb-4">
        Match the Words (Score {score}/{attempts})
      </h2>

      <div className="grid grid-cols-2 gap-8">
        {/* Finnish side */}
        <div>
          <h2 className="text-teal-300 font-bold mb-2">Finnish</h2>
          {quizItems.map((item, index) => {
            const isMatched = matchedPairs.has(item.english);
            return (
              <button
                key={index}
                className={`block w-full p-2 mb-2 rounded transition duration-200 text-teal-400
                  ${
                    isMatched
                      ? "bg-teal-900 cursor-not-allowed"
                      : selectedFinnish?.finnish === item.finnish
                      ? "bg-yellow-600"
                      : "bg-gray-800 hover:bg-teal-600"
                  }`}
                onClick={() => !isMatched && setSelectedFinnish(item)}
                disabled={isMatched}
              >
                {item.finnish}
              </button>
            );
          })}
        </div>

        {/* English side */}
        <div>
          <h2 className="text-teal-300 font-bold mb-2">English</h2>
          {shuffledEnglish.map((item, index) => {
            const isMatched = matchedPairs.has(item.english);
            return (
              <button
                key={index}
                className={`block w-full p-2 mb-2 rounded transition duration-200 text-teal-400
                  ${
                    isMatched
                      ? "bg-teal-900 cursor-not-allowed"
                      : selectedEnglish?.english === item.english
                      ? "bg-yellow-600"
                      : "bg-gray-800 hover:bg-teal-600"
                  }`}
                onClick={() => !isMatched && setSelectedEnglish(item)}
                disabled={isMatched}
              >
                {item.english}
              </button>
            );
          })}
        </div>
      </div>

      {/* Popup modal */}
      {showPopup && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
            {score >= 7 ? (
              <>
                <h3 className="text-green-400 text-xl font-bold mb-4">
                  🎉 Congratulations!
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
                  onClick={startGame}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Restart
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default GenarateDailyChallengeTwo;
