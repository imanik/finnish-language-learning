import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";


interface QuizItem {
  english: string;
  finnish: string;
  pronunciation?: string;
}

interface GenarateQuizProps {
  items: QuizItem[];
  onMatch: (isCorrect: boolean) => void;
  handleMatchingComplete: (wasCorrect: boolean) => void;
}

function shuffled<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

function GenarateMatchQuiz({ items, onMatch, handleMatchingComplete }: GenarateQuizProps) {
  const [quizItems, setQuizItems] = useState<QuizItem[] | null>(null);
  const [shuffledEnglish, setShuffledEnglish] = useState<QuizItem[] | null>(null);
  const [selectedFinnish, setSelectedFinnish] = useState<QuizItem | null>(null);
  const [selectedEnglish, setSelectedEnglish] = useState<QuizItem | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set());
  const [animKey, setAnimKey] = useState<number>(0); // 👈 triggers animation reset

  useEffect(() => {
    startChallenge();
  }, []);

  const startChallenge = () => {
    const selectedQuizItems = shuffled(items).slice(0, 10);
    setQuizItems(selectedQuizItems);
    setShuffledEnglish(shuffled(selectedQuizItems));
    setMatchedPairs(new Set());
    setSelectedEnglish(null);
    setSelectedFinnish(null);
    setAnimKey((prev) => prev + 1); // 👈 trigger new animation
  };

  useEffect(() => {
    if (selectedFinnish && selectedEnglish) {
      if (selectedFinnish.english === selectedEnglish.english) {
        onMatch(true);
        handleMatchingComplete(true);
        setMatchedPairs((prev) => new Set(prev).add(selectedFinnish.english));
      } else {
        onMatch(false);
        handleMatchingComplete(false);
      }

      setTimeout(() => {
        setSelectedFinnish(null);
        setSelectedEnglish(null);
      }, 800);
    }
  }, [selectedFinnish, selectedEnglish]);

  const containerVariants = {
    initial: { opacity: 0, rotateX: 90, y: -30 },
    animate: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },

    },
    exit: { opacity: 0, rotateX: -90, y: 30, transition: { duration: 0.4 } },
  };




  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 rounded-lg border border-teal-800 shadow-lg relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={animKey} // 👈 ensures animation restarts each reset
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="grid grid-cols-2 gap-8"
        >
          {/* Finnish side */}
          <div>
            <h2 className="text-teal-300 font-bold mb-2">Finnish</h2>
            {quizItems &&
              quizItems.map((item, index) => {
                const isMatched = matchedPairs.has(item.english);
                return (
                  <button
                    key={index}
                    className={`block w-full p-2 mb-2 bg-gray-900 shadow-lg shadow-teal-900/50 rounded transition duration-200 text-teal-400
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
            {shuffledEnglish &&
              shuffledEnglish.map((item, index) => {
                const isMatched = matchedPairs.has(item.english);
                return (
                  <button
                    key={index}
                    className={`block w-full p-2 mb-2 bg-gray-900 shadow-lg shadow-teal-900/50 rounded transition duration-200 text-teal-400
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
        </motion.div>
      </AnimatePresence>

      <button
        onClick={startChallenge}
        className="m-4 bg-teal-800 text-white px-4 py-2 rounded hover:bg-teal-600 transition"
      >
        Reset
      </button>
    </div>
  );
}

export default GenarateMatchQuiz;
