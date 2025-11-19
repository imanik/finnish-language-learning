import React, { useState, useEffect, useMemo } from "react";
import { datasets } from "../../data/datasets";

interface Sentence {
  finnish: string;
  english: string;
  pronunciation?: string;
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function GenarateDailyChallengeThree({ onComplete }: { onComplete?: (success: boolean) => void }) {
  const today = new Date();
  const dayIndex = today.getDate() % datasets.length;

  const { selected, name } = useMemo(() => {
    const dailySet = datasets[dayIndex];
    const dataset = dailySet.data as Record<string, any[]>;
    const keys = Object.keys(dataset);
    const hasSentence = keys.find((k) => k.toLowerCase().includes("sentence"));
    const keyType = (hasSentence ?? keys[0]) as string;
    const allItems = dataset[keyType];
    return { selected: allItems.slice(0, 10), name: dailySet.name };
  }, [dayIndex]);

  const [sentences, setSentences] = useState<Sentence[]>(selected);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledWords, setShuffledWords] = useState<string[]>([]);
  const [userSentence, setUserSentence] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [feedback, setFeedback] = useState<null | "correct" | "wrong">(null);
  const [showAnswer, setShowAnswer] = useState("");

  useEffect(() => {
    prepareSentence(sentences[0]);
  }, []);

  const cleanSentence = (s: string) => s.replace(/[.?]/g, "");

  const prepareSentence = (sentence: Sentence) => {
    const words = cleanSentence(sentence.finnish).split(" ");
    setShuffledWords(shuffle(words));
    setUserSentence([]);
    setFeedback(null);
    setShowAnswer("");
  };

  const handleWordClick = (word: string) => {
    setUserSentence((prev) => [...prev, word]);
  };

  const handleCheck = () => {
    const target = cleanSentence(sentences[currentIndex].finnish);
    const userAnswer = userSentence.join(" ");
    setAttempts((a) => a + 1);

    if (userAnswer === target) {
      setScore((s) => s + 1);
      setFeedback("correct");
    } else {
      setFeedback("wrong");
      setShowAnswer(sentences[currentIndex].finnish);
    }

    setTimeout(() => {
      if (currentIndex + 1 < sentences.length) {
        setCurrentIndex((i) => i + 1);
        prepareSentence(sentences[currentIndex + 1]);
      } else {
        setShowPopup(true);
      }
    }, 2000);
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg relative">
      <h2 className="text-xl text-teal-300 font-bold mb-4">
        {name} — Arrange the Sentence ({score}/{attempts})
      </h2>

      <p className="text-teal-400 mb-2 italic">
        {sentences[currentIndex]?.english}
      </p>

      <div className={`flex flex-wrap gap-2 mb-4 ${feedback ? "opacity-50" : ""}`}>
        {shuffledWords.map((word, idx) => (
          <button
            key={idx}
            onClick={() => handleWordClick(word)}
            disabled={userSentence.includes(word)}
            className={`px-3 py-2 rounded-lg ${
              userSentence.includes(word)
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : "bg-gray-800 hover:bg-teal-600 text-white"
            }`}
          >
            {word.toLowerCase()}
          </button>
        ))}
      </div>

      <div className="bg-gray-800 p-4 rounded mb-4 min-h-[50px] text-teal-200">
        {userSentence.join(" ")}
      </div>

      {feedback && (
        <div className={`text-center mb-4 text-lg font-bold ${
          feedback === "correct" ? "text-green-400" : "text-red-400"
        }`}>
          {feedback === "correct"
            ? "✅ Correct!"
            : `❌ Wrong! Correct: ${showAnswer}`}
        </div>
      )}

      <button
        onClick={handleCheck}
        disabled={userSentence.length === 0 || feedback !== null}
        className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700"
      >
        Submit
      </button>

      {showPopup && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
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
                <h3 className="text-red-400 text-xl font-bold mb-4">❌ Try Again</h3>
                <p className="text-teal-200 mb-4">You scored {score}/10. You need at least 7 to pass.</p>
                <button
                  onClick={() => {
                    setCurrentIndex(0);
                    setShowPopup(false);
                 //   startChallenge();
                  }}
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

export default GenarateDailyChallengeThree;
