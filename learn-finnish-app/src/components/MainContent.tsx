import React from 'react';
import { useLocation } from 'react-router-dom';
import UserStats from './UserStats';
import Beginars from './Beginars';
import Greetings from './Greetings';
import Numbers from './Numbers';
import Colors from './Colors';
import Days from './Days';
import Months from './Months';
import Grammars from './Grammars';
import { useQuiz } from './QuizContext'; // Make sure to import useQuiz

function MainContent() {
  // Get quizScore and handleQuizComplete directly from the context
  const { quizScore, handleQuizComplete } = useQuiz();

  const location = useLocation();
  const containerClass = location.pathname === "/"
    ? "bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg w-full max-w-md"
    : "bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6";

  return (
    <div className="min-h-screen bg-teal-50 p-6 grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center font-['Roboto']">
      <h1 className="text-4xl font-bold text-teal-800 mb-8 col-span-full text-center">
        Welcome to Finnish Learning
      </h1>
      <div className={containerClass}>
        {/* Directly using the context's quizScore and handleQuizComplete */}
        <UserStats quizScore={quizScore} handleQuizComplete={handleQuizComplete} />
      </div>
      <Beginars />
      <Greetings />
      <Numbers />
      <Colors />
      <Days />
      <Months />
      <Grammars />
    </div>
  );
}

export default MainContent;
