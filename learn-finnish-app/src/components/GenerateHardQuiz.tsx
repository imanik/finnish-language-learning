import React from "react";

interface QuizItem {
  english: string;
  finnish: string;
  pronunciation?: string;
}

// This component is a placeholder for an advanced quiz feature in a Finnish learning app.
interface GenerateHardQuizProps<T extends QuizItem> {

  item: T; // Array of items to quiz on
  quizType?: string; // Type of quiz (e.g., "basic verbs", "sentence verbs")
  onNext : () => void; // Function to load the next question,
  onAnswer  : (isCorrect: boolean) => void; // Callback when user answers,

  handleQuizComplete?: (wasCorrect: boolean) => void;
  

}

function GenerateHardQuiz<T extends QuizItem>({
  item,
  quizType,
  onNext,
  onAnswer,
  handleQuizComplete
}: GenerateHardQuizProps<T>) {

  const [userGuess, setUserGuess] = React.useState<string>("");
  const [feedback, setFeedback] = React.useState<string>("");
  // const [showAnswer, setShowAnswer] = React.useState<string>("");
  // const [correctAnswer, setCorrectAnswer] = React.useState<string>("");

    const normalizeFinnish = (word: string) => {
      return word.replace(/ä/g, "a").replace(/ö/g, "o");
    };

    const correctAnswers = item.finnish
      .toLowerCase()
      .split(",")
      .map((word) => normalizeFinnish(word.trim()));

    //  console.log("correctAnswers = ",correctAnswers);
     const correctAnswer = normalizeFinnish(correctAnswers[0]);

     console.log("correctAnswer",correctAnswer);

   

  //  console.log("item",correctAnswer);

  const checkAnswer = () => {


    if (userGuess.toLowerCase() === correctAnswer) {
      setFeedback('Correct!');
      
      
      if (handleQuizComplete) {
        handleQuizComplete(true); // Call the handleQuizComplete function if provided
      }
      onAnswer(true); // Call the onAnswer callback with true
      // setShowAnswer(item.finnish);
      
    }else {
      setFeedback(`Try Again! "${item.english}" in Finnish is "${item.finnish}" Type ("${correctAnswer}").`);
      }

      onNext(); // Call the onNext function to load the next question 
      setUserGuess(''); // Clear the input field
  }

  return (
    <div >
       <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      {/* Quiz Question */}
      <h3 className="text-xl font-semibold text-teal-700 mb-4">
        What is the meaning of "<span className="text-xl text-red-500">{item.english}</span>"?
      </h3>
<div className="flex space-x-2 mb-4">
            <input
            type="text"
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            placeholder="Type your guess"
            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
            onClick={checkAnswer}
            className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-900 transform hover:scale-110 transition duration-200"
            >
            Check Answer
            </button>
        </div>
        <p className={`mb-2 ${feedback.includes('Correct') ? 'text-green-600' : 'text-red-600'}`}>
            {feedback}
        </p>

    </div>
    </div>
  );

}

export default GenerateHardQuiz;