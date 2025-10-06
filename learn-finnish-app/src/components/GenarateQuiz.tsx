import React, { useState, useEffect } from "react";
// import UserStats from '../components/UserStats';

// Define the structure of a quiz item (vocabulary term)
interface QuizItem {
  english: string;
  finnish: string;
  pronunciation?: string; // optional
}

// Define the structure for the current quiz state (holds question + options)
interface QuizState<T extends QuizItem> {
  question: string;
  correctAnswer: string;
  shuffledOptions: T[];
}

// Props for GenerateQuiz component — made generic using <T extends QuizItem>
interface GenerateQuizProps<T extends QuizItem> {
  item: T; // Current quiz question item
  optionsPool: T[]; // All options to generate incorrect answers
  onNext: () => void; // Function to load next question
  onAnswer: (isCorrect: boolean) => void; // Callback when user answers
  onReset: () => void; // Function to reset the quiz
 // Optional quiz type, not yet used
  // quizScore: QuizScore;
   handleQuizComplete: (wasCorrect: boolean) => void;
}

// Main GenerateQuiz functional component with generic type <T>
function GenerateQuiz<T extends QuizItem>({
  item,
  optionsPool,
  onNext,
  onAnswer,
  onReset,
   handleQuizComplete,
  
}: GenerateQuizProps<T>) {

  // Stores the user's selected answer (value: finnish term)
  const [selected, setSelected] = useState<string | null>(null);

  // Whether the user's answer is correct or not (null = unanswered)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // Stores the current quiz question, correct answer, and answer options
  const [quizState, setQuizState] = useState<QuizState<T> | null>(null);

  const [animate, setAnimate] = useState<string>('enter')

  const [isActive, setIsActive] = useState<boolean>(false)


  // This effect runs whenever a new question item is passed to this component
  useEffect(() => {
    const correctAnswer = item; // The current correct answer
    const incorrectOptions: T[] = []; // Array to hold 3 wrong options
    const used = new Set([correctAnswer.finnish]); // Track used answers to avoid duplicates

    // Loop until we get 3 incorrect (non-duplicate) options
    while (incorrectOptions.length < 3) {
      const rand = Math.floor(Math.random() * optionsPool.length);
      const opt = optionsPool[rand];
      if (!used.has(opt.finnish)) {
        incorrectOptions.push(opt);
        used.add(opt.finnish); // Mark this answer as used
      }
    }

    // Combine correct + incorrect and shuffle the options randomly
    const shuffledOptions = [...incorrectOptions, correctAnswer].sort(() => Math.random() - 0.5);

    // Set the quiz state with the new question and answer options
    setQuizState({
      question: correctAnswer.english,
      correctAnswer: correctAnswer.finnish,
      shuffledOptions
    });

    // Reset selection and answer correctness when question changes
    setSelected(null);
    setIsCorrect(null);
  }, [item, optionsPool]);

  
  // Function to handle the Submit button click
  const handleSubmit = () => {
    if (!quizState || selected === null) return; // Guard clause: return if quizState isn't ready or no answer selected
    

    setIsActive(true)
    console.log('isActive,', quizState)
    const isAnswerCorrect = selected === quizState.correctAnswer;
    setIsCorrect(isAnswerCorrect); // Store result
    onAnswer(isAnswerCorrect); // Inform parent component
    handleQuizComplete(isAnswerCorrect); // Call the quiz completion handler
  };

  const handleNextQuestion = () => {

    setAnimate("exit")
    setIsActive(false)
    setTimeout(() => {
      onNext()
      setAnimate('enter')

    },600)

  }

  // Render nothing until quizState is ready
  if (!quizState) return null;

  return (
    <div>

    <div className={`transition-all duration-300 ease-in-out ${animate === 'enter' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
      {/* Quiz Question */}
      <h3 className="text-xl font-semibold text-teal-200 mb-4">
        What is the meaning of "<span className="text-xl text-red-500">{quizState.question}</span>"?
      </h3>

      {/* List of Options */}
        {quizState.shuffledOptions.map((option, index) => (
      <div className={` ${isActive && option.finnish === quizState.correctAnswer ?  'border border-teal-900': ' '} rounded-xl shadow-xl p-6 max-w-xl mx-auto mb-6 
                 transition transform duration-300 ease-out
                 hover:-translate-y-1 hover:scale-105`}>
          <label key={index} className="block">
            <input
              type="radio"
              name="languageQuiz"
              value={option.finnish}
              checked={selected === option.finnish}
              onChange={() => setSelected(option.finnish)}
              disabled={isCorrect !== null} // Disable selection after answer is submitted
              className="mr-2 "
            />
             <span className="text-teal-200 focus:ring-teal-500 border-gray-300">{option.finnish}</span>
            <span className="text-gray-400 ml-2">
              ({option.pronunciation ?? " "}) {/* Optional pronunciation */}
            </span>
          </label>
      </div>
        ))}

      {/* Submit / Feedback / Next Buttons */}
      {isCorrect === null ? (
        // Show Submit only if question hasn't been answered
        <button
          onClick={handleSubmit}
          className="mt-4 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700 transform hover:scale-110 transition duration-200"
        >
          Submit
        </button>
      ) : (
        // If question is answered, show feedback and navigation buttons
        <div className="mt-4">
          <p className={isCorrect ? "text-green-600" : "text-red-600"}>
            {isCorrect
              ? "Correct!"
              : `Wrong! The correct answer is "${quizState.correctAnswer}".`}
          </p>
          <button
            onClick={handleNextQuestion}
            className="mt-2 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700 m-4"
          >
            Next Question
          </button>
          <button
            onClick={onReset}
            className="m-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Reset Score
          </button>
        </div>
      )}
    </div>
    </div>
  );
}

export default GenerateQuiz;
