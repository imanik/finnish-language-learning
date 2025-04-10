import React from 'react';
import { useLocation } from 'react-router-dom';
import UserStats from './components/UserStats';
import Beginars from './components/Beginars';
import Greetings from './components/Greetings';
import Numbers from './components/Numbers';
import Colors from './components/Colors';
import Days from './components/Days';
import Months from './components/Months';
import Grammars from './components/Grammars';

interface MainContentProps {
  quizScore: { correct: number; total: number };
  handleQuizComplete: (wasCorrect: boolean) => void;
}

function MainContent({ quizScore, handleQuizComplete }: MainContentProps) {
  const location = useLocation();
  const containerClass = location.pathname === "/"
    ? "bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg w-full max-w-md"
    : "bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6";

  return (
    <div className="min-h-screen bg-teal-50 p-6 grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center font-['Roboto']">
      <h1 className="text-4xl font-bold text-teal-700 mb-8 col-span-full text-center">
        Welcome to Finnish Learning
      </h1>
      <div className={containerClass}>
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