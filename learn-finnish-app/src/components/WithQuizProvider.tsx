import { QuizProvider } from './QuizContext'; // import QuizProvider
import UserStats from './UserStats';

interface MainContentProps {
  quizScore: { correct: number; total: number };
  handleQuizComplete: (wasCorrect: boolean) => void;
}


function UserStatsWithProvider({ quizScore, handleQuizComplete }: MainContentProps) {
  return (
    <QuizProvider>
      <UserStats quizScore={quizScore} handleQuizComplete={handleQuizComplete} />
    </QuizProvider>
  );
}

export default UserStatsWithProvider;