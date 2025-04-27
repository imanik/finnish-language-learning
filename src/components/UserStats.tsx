import React from "react";
import { useQuiz } from "./QuizContext";

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
  console.log("Homepage quizScore", quizScore);
  
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

  return (
    <div>
      <h2 className="text-2xl font-semibold text-teal-700 mb-4">Your Stats</h2>
      <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
        <div className="mb-4">
          <p className="text-teal-600 mt-2">
            <span className="font-medium"><strong>🧠 Score:</strong></span> {quizScore.correct}/{quizScore.total} ({currentScore}%)
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
            <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: `${currentScore}%` }} />
          </div>
        </div>

        <p className="text-teal-600 mt-2"><strong>Quizzes Solved:</strong> {quizScore.total}</p>
        <p className="text-teal-600 mt-2"><strong>Correct Answers:</strong> {quizScore.correct}</p>
        <p className="text-teal-600 mt-2"><strong>Level:</strong> {currentLevel}</p>
        <p className="text-teal-600 mt-2"><strong>Quizzes left:</strong> {quizzesToNext}</p>
        <p className="text-teal-600 mt-2">
          <strong>Next Milestone:</strong><br />
          Complete {nextMilestone} quizzes with ≥ {requiredScore}%
        </p>
        <p className="text-teal-700 font-medium mt-2">{levelUpMessage()}</p>
      </section>
    </div>
  );
}

export default UserStats;
