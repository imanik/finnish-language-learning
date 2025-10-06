import React, { createContext, useContext, useState, useEffect } from "react";

export interface QuizScore {
  correct: number;
  total: number;

}

interface QuizContextProps {
  quizScore: QuizScore;
  setQuizScore: React.Dispatch<React.SetStateAction<QuizScore>>;
  handleQuizComplete?: (wasCorrect: boolean) => void;
}

const QuizContext = createContext<QuizContextProps | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
 
  const getInitialQuizScore = (): QuizScore => {
    const stored = localStorage.getItem("overAllQuizScore");
    return stored ? JSON.parse(stored) : { correct: 0, total: 0 };
  };

  const [quizScore, setQuizScore] = useState<QuizScore>(getInitialQuizScore);
  // const [quizScore, setQuizScore] = useState<QuizScore>(() => {
  //   const stored = localStorage.getItem("overAllQuizScore");
  //   return stored ? JSON.parse(stored) : { correct: 0, total: 0 };
 
  // });

  useEffect(() => {
    localStorage.setItem("overAllQuizScore", JSON.stringify(quizScore));
  }, [quizScore]);

  return (
    <QuizContext.Provider value={{ quizScore, setQuizScore }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) throw new Error("useQuiz must be used within a QuizProvider");
  return context;
};
