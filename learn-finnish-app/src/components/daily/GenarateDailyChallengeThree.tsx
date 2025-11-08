import React, { useState, useEffect } from "react";
import { datasets } from "../../data/datasets";

interface Sentence {
  finnish: string;
  english: string;
  pronunciation?: string
}



function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function GenarateDailyChallengeThree({ onComplete }: { onComplete?: (success: boolean) => void }) {

      // pick random dataset
const randomSet = datasets[Math.floor(Math.random() * datasets.length)];
const dataset = randomSet.data;

// detect which key exists — Sentence or normal
const keys = Object.keys(dataset);
const hasSentence = keys.find(k => k.toLowerCase().includes("sentence"));
const keyType = hasSentence || keys[0]; // use sentence if available, otherwise vocab

const allItems = dataset[keyType as keyof typeof dataset] as Sentence[];



  const [sentences, setSentences] = useState<Sentence[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [shuffledWords, setShuffledWords] = useState<string[]>([]);
  const [userSentence, setUserSentence] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);
  const [showPopup, setShowPopup] = useState(false);

  // feedback state
  const [feedback, setFeedback] = useState<null | "correct" | "wrong">(null);
  const [showAnswer, setShowAnswer] = useState<string>("");

  useEffect(() => {
    startChallenge();
  }, []);

  const startChallenge = () => {
    const selected = shuffle(allItems).slice(0, 10);
    setSentences(selected);
    setCurrentIndex(0);
    setScore(0);
    setAttempts(0);
    setShowPopup(false);
    setFeedback(null);
    prepareSentence(selected[0]);
  };

  const prepareSentence = (sentence: Sentence) => {
    const words = sentence.finnish.replace(".", "").replace("?","").split(" ");
    setShuffledWords(shuffle(words));
    setUserSentence([]);
    setFeedback(null);
    setShowAnswer("");
  };

  const handleWordClick = (word: string) => {
    setUserSentence((prev) => [...prev, word]);
  };

  const handleCheck = () => {
    const target = sentences[currentIndex].finnish.replace(".", "").replace("?","");
    const correctSentence = target.split(" ").join(" ");
    const userAnswer = userSentence.join(" ");

    setAttempts((prev) => prev + 1);

    if (userAnswer === correctSentence) {
      setScore((prev) => prev + 1);
      setFeedback("correct");
    } else {
      setFeedback("wrong");
      setShowAnswer(sentences[currentIndex].finnish);
    }

    // transition to next after delay
    setTimeout(() => {
      if (currentIndex + 1 < sentences.length) {
        setCurrentIndex((prev) => prev + 1);
        prepareSentence(sentences[currentIndex + 1]);
      } else {
        currentIndex >= 10 ? setShowPopup(true) : setShowPopup(false)
      }
    }, 2500); // wait 1.5s before moving on
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg relative">
      <h2 className="text-xl text-teal-300 font-bold mb-4">
        Arrange the Sentence ({score}/{attempts})
      </h2>

      {/* English hint */}
      <p className="text-teal-400 mb-2 italic">
        {sentences[currentIndex]?.english}
      </p>

      {/* Word buttons */}
      <div
        className={`flex flex-wrap gap-2 mb-4 transition-opacity duration-500 ${
          feedback ? "opacity-50 pointer-events-none" : "opacity-100"
        }`}
      >
        {shuffledWords.map((word, idx) => (
          <button
            key={idx}
            onClick={() => handleWordClick(word)}
            disabled={userSentence.includes(word)}
            className={`px-3 py-2 rounded-lg transition duration-200 ${
              userSentence.includes(word)
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : "bg-gray-800 hover:bg-teal-600 text-white"
            }`}
          >
            {word.toLowerCase()}
          </button>
        ))}
      </div>

      {/* User sentence */}
      <div className="bg-gray-800 p-4 rounded mb-4 min-h-[50px] text-teal-200">
        {userSentence.join(" ")}
      </div>

      {/* Feedback */}
      {feedback && (
        <div
          className={`text-center mb-4 text-lg font-bold transition-all duration-500 ${
            feedback === "correct" ? "text-green-400" : "text-red-400"
          }`}
        >
          {feedback === "correct" ? "✅ Correct!" : `❌ Wrong! Correct: ${showAnswer}`}
        </div>
      )}

      <button
        onClick={handleCheck}
        disabled={userSentence.length === 0 || feedback !== null}
        className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700"
      >
        Submit
      </button>

      {/* Popup modal */}
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
        </div>
      )}
    </div>
  );
}

export default GenarateDailyChallengeThree;
