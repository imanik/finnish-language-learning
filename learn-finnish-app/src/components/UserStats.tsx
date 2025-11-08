import React from "react";
import { useQuiz } from "../contexts/QuizContext";
import { useTheme } from "../contexts/ThemeContext";

import { useLocation } from 'react-router-dom';

interface QuizScore {
  correct: number;
  total: number;
}

interface UserStatsProps {
  quizScore?: QuizScore; // 👈 optional
  handleQuizComplete?: (wasCorrect: boolean) => void;
}

function UserStats({ quizScore: propsScore, handleQuizComplete }: UserStatsProps) {

  
  
  const { quizScore: contextScore } = useQuiz();
  
  const quizScore = propsScore || contextScore; // 👈 use props if available, otherwise context
  // console.log("Homepage quizScore", quizScore);
  
  const milestoneInterval = 50;
  const requiredScore = 70;
  const currentScore =
    quizScore.total > 0
      ? Math.round((quizScore.correct / quizScore.total) * 100 * 10) / 10
      : 0;

  const completedMilestones = Math.floor(quizScore.total / milestoneInterval);
  const currentLevel =
    completedMilestones > 0 && currentScore >= requiredScore ? completedMilestones : 0;

  const nextMilestone = (currentLevel + 1) * milestoneInterval;
  const quizzesToNext = nextMilestone - quizScore.total;

  const levelUpMessage = () => {
    if (quizScore.total >= nextMilestone && currentScore >= requiredScore) {
      return `🎉 Congratulations! You've reached Level ${currentLevel + 1}!`;
    } else if (quizScore.total >= nextMilestone && currentScore < requiredScore) {
      return `⚠️ Almost there! Improve your score to ≥ ${requiredScore}% to reach Level ${currentLevel + 1}.`;
    }
    return `📘 Practice more to reach Level ${currentLevel + 1}.`;
  };

  const {theme} = useTheme();
  
    let mainBg = 'bg-gradient-to-br from-teal-50 to-teal-200'
  
    if(theme === 'light'){
        mainBg = "bg-gradient-to-br from-teal-50 to-teal-200";
    }else{
     mainBg = ' bg-gradient-to-br from-black via-gray-800 to-gray-900 shadow-sm shadow-teal-900'
      
    }

    const location = useLocation();
  const containerClass = location.pathname === "/"
    ? `${mainBg} p-6 rounded-lg shadow-lg w-full max-w-md`
    : `${mainBg} p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6`;


  return (
    
 <div className={containerClass}> 
     <h3 className="text-xl font-semibold text-teal-200 mb-4">
          Your Stats
        </h3>
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg border border-teal-800 p-4 mb-6">
            
        <div className="mb-4">
          <p className="text-teal-200 mt-2">
            <span className="font-medium"><strong>🧠 Score:</strong></span> {quizScore.correct}/{quizScore.total} ({currentScore}%)
          </p>
          <div className="w-full bg-teal-900 rounded-full h-2.5 mt-1">
            <div className="bg-teal-600 h-2.5 rounded-full shadow-lg shadow-teal-900 rounded " style={{ width: `${currentScore}%` }} />
          </div>
        </div>

          {/* Info */}
        <div className="space-y-3">
          <div className="flex justify-between text-teal-200 block w-full p-2 mb-2 bg-gray-900 shadow-sm shadow-teal-900 rounded">
            <span className="font-medium">Quizzes Solved</span>
            <span className="text-bold text-3xl animate-pulse">{quizScore.total}</span>
          </div>
          <div className="flex justify-between text-teal-200 block w-full p-2 mb-2 bg-gray-900 shadow-sm shadow-teal-900/50 rounded">
            <span className="font-medium">Correct Answers</span>
            <span className="text-bold text-3xl animate-pulse">{quizScore.correct}</span>
          </div>
       
          <div className="flex justify-between text-teal-200 block w-full p-2 mb-2 bg-gray-900 shadow-sm shadow-teal-900/50 rounded">
            <span className="font-medium">Level</span>
            <span className="text-bold text-3xl animate-pulse">{currentLevel}</span>
          </div>

          <div className="flex justify-between text-teal-200 block w-full p-2 mb-2 bg-gray-900 shadow-sm shadow-teal-900/50 rounded">
            <span className="font-medium">Quizzes left</span>
            <span className="text-bold text-3xl animate-pulse">{quizzesToNext}</span>
          </div>

          <div className="flex justify-between text-teal-200 block w-full p-2 mb-2 bg-gray-900 shadow-sm shadow-teal-900/50 rounded">
            <span className="font-medium">Next Milestone</span>
            <span>Complete {nextMilestone} quizzes with ≥ {requiredScore}%</span>
          </div>

          <div className="flex justify-between text-teal-200 block w-full p-2 mb-2 bg-gray-900 shadow-sm shadow-teal-900/50 rounded">
            <span className="font-medium">{levelUpMessage()}</span>
          </div>


        </div>


      </section>
      </div>

  );
}

export default UserStats;
