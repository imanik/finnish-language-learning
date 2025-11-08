import React, { useEffect, useState, useMemo } from "react";
import { datasets } from "../../data/datasets";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";

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


interface GenarateDailyChallengeOneProps<T extends ChallengeItem> {
  onNext: () => void; // Function to load next question
  onAnswer: (isCorrect: boolean) => void; // Callback when user answers
  onReset: () => void; // Function to reset the quiz
   handleQuizComplete: (wasCorrect: boolean) => void;
   onComplete?: (success: boolean) => void;
}

function GenarateDailyChallengeOne<T extends ChallengeItem>({
  onNext,
  onAnswer,
  onReset,
  handleQuizComplete,
  onComplete,
} : GenarateDailyChallengeOneProps<T> ) {
  // === Step 1: Pick ONE dataset once per component mount ===
  const { randomSet, dataset, keyType, allItems } = useMemo(() => {
    const randomSet = datasets[Math.floor(Math.random() * datasets.length)];
    const dataset = randomSet?.data || {};
    const keys = Object.keys(dataset);
    const keyType = keys[Math.floor(Math.random() * keys.length)] as keyof typeof dataset;
    const allItems = Array.isArray(dataset[keyType])
      ? (dataset[keyType] as ChallengeItem[])
      : [];
    console.log("✅ Picked dataset:", keyType, allItems.length, "items");
    return { randomSet, dataset, keyType, allItems };
  }, []); // ✅ runs only once

  // === Step 2: States ===
  const [quizItems, setQuizItems] = useState<ChallengeItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [animate, setAnimate] = useState<string>('enter')
  const [isActive, setIsActive] = useState<boolean>(false)
  const [challengeState, setChallengeState] =
    useState<ChallengeState<ChallengeItem> | null>(null);

  // === Step 3: Initialize quiz ===
  useEffect(() => {
    startChallenge();
  }, []);

  const startChallenge = () => {
    if (!Array.isArray(allItems) || allItems.length === 0) {
      console.error("❌ Invalid dataset:", randomSet);
      return;
    }

    const selectedQuizItems = shuffle(allItems).slice(0, 10);
    setQuizItems(selectedQuizItems);
    setCurrentIndex(0);
    setScore(0);
    setFinished(false);
    console.log("🎯 Starting quiz with", selectedQuizItems.length, "questions");
  };

  // === Step 4: Load new question ===
  useEffect(() => {
    if (quizItems.length === 0 || currentIndex >= quizItems.length) return;

    const correctAnswer = quizItems[currentIndex];
    const incorrectOptions: ChallengeItem[] = [];
    const used = new Set([correctAnswer.finnish]);

    while (incorrectOptions.length < 3 && incorrectOptions.length < allItems.length - 1) {
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
  }, [quizItems, currentIndex, allItems]);

  // === Step 5: Submit + Results (same as before) ===


   // Function to handle the Submit button click
  const handleSubmit = () => {
    if (!challengeState || selected === null) return; // Guard clause: return if quizState isn't ready or no answer selected
    

    setIsActive(true)
   // console.log('isActive,', quizState)
    const isAnswerCorrect = selected === challengeState.correctAnswer;
    setIsCorrect(isAnswerCorrect); // Store result
    onAnswer(isAnswerCorrect); // Inform parent component
    handleQuizComplete(isAnswerCorrect); // Call the quiz completion handler
  };


    const handleNextQuestion = () => {

    setCurrentIndex((prev) => prev + 1);
    setAnimate("exit")
    setIsActive(false)
    setTimeout(() => {
      onNext()
      setAnimate('enter')

    },600)

  }
  useEffect(() => {
    if (quizItems.length > 0 && currentIndex >= quizItems.length) {
      setFinished(true);
      onComplete?.(true);
    }
  }, [currentIndex, quizItems, onComplete]);

  // === Step 6: Render ===
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
          <button
            onClick={() => onComplete?.(true)}
            className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700"
          >
            Next Challenge →
          </button>
        ) : (
          <button
            onClick={startChallenge}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Restart
          </button>
        )}
      </div>
    );
  }

  if (!challengeState)
    return <div className="text-gray-400 text-center">Loading question...</div>;

  return (
    <div className={`transition-all duration-300 ease-in-out ${animate === 'enter' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
      <h4 className="text-lg text-gray-200 mb-4">
        What is the meaning of{" "}
        <span className="text-red-400 font-bold">"{challengeState.question}"</span>?
      </h4>

      {challengeState.shuffledOptions.map((option, index) => (
        <div key={index} className={` ${isActive && option.finnish === challengeState.correctAnswer ?  'border border-teal-900': ' '} rounded-xl shadow-xl p-6 max-w-xl mx-auto mb-6 
                 transition transform duration-300 ease-out
                 hover:-translate-y-1 hover:scale-105`}>
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
          className="mt-4 bg-gray-900 text-teal-300  shadow-sm shadow-teal-900 px-4 py-2 rounded hover:bg-teal-300 hover:text-teal-900 transform hover:scale-110 transition duration-200"
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
            className="mt-3 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700"
          >
            Next
          </button>
        </div>
      )}

       <p className="mt-8 text-lg">
              <span className="text-teal-300 ml-2">{quizItems.length-currentIndex}</span>
              <ArrowDownCircleIcon className="h-5 w-5 animate-pulse text-cyan-400" />{" "}
            </p>
    </div>
  );
}

export default GenarateDailyChallengeOne;
