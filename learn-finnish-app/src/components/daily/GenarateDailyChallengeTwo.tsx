import React, { useState, useEffect, useMemo } from "react";
import { datasets } from "../../data/datasets";

interface Data {
  english: string;
  finnish: string;
  pronunciation?: string;
}

// --- Seeded shuffle to ensure all users get same shuffle per day ---
function seededShuffle<T>(array: T[], seed: number): T[] {
  const result = [...array];
  let m = result.length, t, i;
  const random = () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };
  while (m) {
    i = Math.floor(random() * m--);
    t = result[m];
    result[m] = result[i];
    result[i] = t;
  }
  return result;
}

function GenarateDailyChallengeTwo({ onComplete }: { onComplete?: (success: boolean) => void }) {
  const today = new Date();
  const daySeed = parseInt(today.toISOString().slice(0, 10).replace(/-/g, ""), 10);

  // ✅ Deterministic dataset per day
  const { dailySet, quizItems } = useMemo(() => {
    const dayIndex = today.getDate() % datasets.length;
    const dailySet = datasets[dayIndex];
    const dataset = dailySet.data;
    const keys = Object.keys(dataset);
    const keyType = keys.find(k => k.toLowerCase().includes("sentence")) || keys[0];
    const allItems = dataset[keyType as keyof typeof dataset] as Data[];

    const selected = seededShuffle(allItems, daySeed).slice(0, 10);
    return { dailySet, quizItems: selected };
  }, [daySeed]);

  const [shuffledEnglish, setShuffledEnglish] = useState<Data[]>([]);
  const [selectedFinnish, setSelectedFinnish] = useState<Data | null>(null);
  const [selectedEnglish, setSelectedEnglish] = useState<Data | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set());
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [timeTaken, setTimeTaken] = useState(0);

  // Timer
  useEffect(() => {
    const interval = setInterval(() => setTimeTaken(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  // Initialize shuffled English (deterministic per day)
  useEffect(() => {
    setShuffledEnglish(seededShuffle(quizItems, daySeed + 99)); // +99 = different order but same daily
  }, [quizItems, daySeed]);

  // Handle match checking
  useEffect(() => {
    if (selectedFinnish && selectedEnglish) {
      setAttempts(a => a + 1);

      if (selectedFinnish.english === selectedEnglish.english) {
        setScore(s => s + 1);
        setMatchedPairs(prev => new Set(prev).add(selectedFinnish.english));
      }

      setTimeout(() => {
        setSelectedFinnish(null);
        setSelectedEnglish(null);
      }, 600);
    }
  }, [selectedFinnish, selectedEnglish]);

  // ✅ Trigger popup when all pairs matched OR attempts exceed 10
  useEffect(() => {
    if (matchedPairs.size === quizItems.length || attempts >= 10) {
      setShowPopup(true);
    }
  }, [matchedPairs, attempts, quizItems.length]);

  const finalScore = Math.max(0, (score * 100) - timeTaken * 2);

  // Save leaderboard once popup shows
  useEffect(() => {
    if (!showPopup) return;
    fetch("/api/leaderboard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date: today.toISOString().slice(0, 10),
        topic: dailySet.name,
        score: finalScore,
        time: timeTaken,
        correct: score,
      }),
    }).catch(err => console.error("Leaderboard save failed:", err));
  }, [showPopup]);

  // Restart
  const restart = () => {
    setMatchedPairs(new Set());
    setSelectedFinnish(null);
    setSelectedEnglish(null);
    setScore(0);
    setAttempts(0);
    setTimeTaken(0);
    setShowPopup(false);
  };

  // === UI ===
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg relative">
      <h2 className="text-xl text-teal-300 font-bold mb-4">
        Match the Words (Score {score}/{attempts})
      </h2>

      <div className="grid grid-cols-2 gap-8">
        {/* Finnish side */}
        <div>
          <h3 className="text-teal-300 font-bold mb-2">Finnish</h3>
          {quizItems.map((item, i) => {
            const isMatched = matchedPairs.has(item.english);
            return (
              <button
                key={i}
                onClick={() => !isMatched && setSelectedFinnish(item)}
                disabled={isMatched}
                className={`block w-full p-2 mb-2 rounded text-teal-400 transition duration-200 ${
                  isMatched
                    ? "bg-teal-900 cursor-not-allowed"
                    : selectedFinnish?.finnish === item.finnish
                    ? "bg-yellow-600"
                    : "bg-gray-800 hover:bg-teal-600"
                }`}
              >
                {item.finnish}
              </button>
            );
          })}
        </div>

        {/* English side */}
        <div>
          <h3 className="text-teal-300 font-bold mb-2">English</h3>
          {shuffledEnglish.map((item, i) => {
            const isMatched = matchedPairs.has(item.english);
            return (
              <button
                key={i}
                onClick={() => !isMatched && setSelectedEnglish(item)}
                disabled={isMatched}
                className={`block w-full p-2 mb-2 rounded text-teal-400 transition duration-200 ${
                  isMatched
                    ? "bg-teal-900 cursor-not-allowed"
                    : selectedEnglish?.english === item.english
                    ? "bg-yellow-600"
                    : "bg-gray-800 hover:bg-teal-600"
                }`}
              >
                {item.english}
              </button>
            );
          })}
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
            <h3 className="text-xl font-bold text-teal-300 mb-2">
              {dailySet.name.toUpperCase()} Challenge
            </h3>
            <p className="text-teal-400">Time: {timeTaken}s</p>
            <p className="text-teal-400 mb-4">Score: {finalScore}</p>

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
                <h3 className="text-red-400 text-xl font-bold mb-4">❌ Try Again</h3>
                <p className="text-teal-200 mb-4">
                  You scored {score}/10. You need at least 7 to pass.
                </p>
                <button
                  onClick={restart}
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
