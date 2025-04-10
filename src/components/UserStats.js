import React from "react";
import { Link, useParams } from "react-router-dom";

function UserStats({ quizScore, handleQuizComplete }) {

  const { child } = useParams();
  console.log("child from useParams:", child); // Debug: "basic-family-quiz"
  // Derived values
  const milestoneInterval = 50;
  const requiredScore = 75; // Minimum score to level up (%)
  const currentScore = quizScore.total > 0 ? Math.round((quizScore.correct / quizScore.total) * 100 * 10) / 10 : 0; // e.g., 84.5%
  const completedMilestones = Math.floor(quizScore.total / milestoneInterval); // Number of 50-quiz blocks completed
  const currentLevel = completedMilestones > 0 && currentScore >= requiredScore ? completedMilestones : 0; // Level only increases if score ≥ 75%
  const nextMilestone = (currentLevel + 1) * milestoneInterval; // Next target (e.g., 100 if level 1)
  const quizzesToNext = nextMilestone - quizScore.total; // Quizzes remaining to next milestone

  // Level-up message logic
  const levelUpMessage = () => {
    
 
    if (quizScore.total >= nextMilestone && currentScore >= requiredScore) {
      return `Congratulations! You've reached Level ${currentLevel + 1}!`;
    } else if (quizScore.total >= nextMilestone && currentScore < requiredScore) {
      return `Almost there! Improve your score to ≥ ${requiredScore}% to reach Level ${currentLevel + 1}.`;
    }
    return `Practice more to reach Level ${currentLevel + 1}.`;
  };

  return (
    <div >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Stats</h2>
      <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
      {/* Score */}
      <div className="mb-4">
        <p className="text-gray-700">
          <span className="font-medium">Score:</span> {quizScore.correct}/{quizScore.total} ({currentScore}%)
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
          <div
            className="bg-teal-600 h-2.5 rounded-full"
            style={{ width: `${currentScore}%` }}
          ></div>
        </div>
      </div>

      {/* Quizzes Solved */}
      <p className="text-gray-700 mb-2">
        <span className="font-medium">Quizzes Solved:</span> {quizScore.total}
      </p>

      {/* Correct Answers */}
      <p className="text-gray-700 mb-2">
        <span className="font-medium">Correct Answers:</span> {quizScore.correct}
      </p>

      {/* Current Level */}
      <p className="text-gray-700 mb-2">
        <span className="font-medium">Level:</span> {currentLevel}
      </p>

          <p className="text-gray-700 mb-2">
        <span className="font-medium">Quizzes left:</span> {quizzesToNext} 
      </p>

      {/* Next Milestone */}
      <p className="text-gray-700 mb-4">
        <span className="font-medium">Next Milestone:</span> Complete {nextMilestone} quizzes with ≥ {requiredScore}% 
        
      </p>
  

      {/* Level-Up Message */}
      <p className="text-teal-700 font-medium mb-4">{levelUpMessage()}</p>

      {/* Button */}
    </section>
    </div>
  );
}

export default UserStats;