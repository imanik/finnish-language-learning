import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContent from './MainContent';

import BasicAdjectivePage from './pages/levels/a1/BasicAdjectivePage';
import NationalityPage from './pages/levels/a1/NationalityPage';
import WhatLanguages from './pages/levels/a1/WhatLanguages';
import GreetingsPage from './pages/levels/a1/GreetingsPage';
import NumbersPage from './pages/levels/a1/NumbersPage';
import BeginarsPage from './pages/BeginarsPage';
import GrammarsPage from './pages/GrammarsPage';
import NounsPage from './pages/NounsPage';
import VerbsPage from './pages/VerbsPage';
import FamilyPage from './pages/levels/a1/FamilyPage';
import LocationPage from './pages/levels/a1/LocationPage';
import FamilyQuizzes from './pages/quizzes/a1/FamilyQuizzes';
import NationalityQuizzes from './pages/quizzes/a1/NationalityQuizzes';
import WhatLanguageQuizzes from './pages/quizzes/a1/WhatLanguageQuizzes';
import BasicAdjectiveQuizzes from './pages/quizzes/a1/BasicAdjectiveQuizzes';
import TheFinnishVerbtypesQuiz from './pages/quizzes/verbs/TheFinnishVerbtypesQuiz';

interface QuizScore {
  correct: number;
  total: number;
}

function App() {
  const basename = process.env.NODE_ENV === 'development' ? '/learn-finnish-app' : '/learn-finnish-app';

  const [quizScore, setQuizScore] = useState<QuizScore>(() => {
    const storedScore = localStorage.getItem("quizscore");
    return storedScore ? JSON.parse(storedScore) : { correct: 71, total: 84 };
  });

  useEffect(() => {
    localStorage.setItem("quizscore", JSON.stringify(quizScore));
  }, [quizScore]);

  const handleQuizComplete = (wasCorrect: boolean) => {
    setQuizScore((prev: QuizScore) => ({
      total: prev.total + 1,
      correct: wasCorrect ? prev.correct + 1 : prev.correct,
    }));
  };

  return (
    <BrowserRouter basename={basename}>
      <Routes>
      <Route path="/" element={<MainContent quizScore={quizScore} handleQuizComplete={handleQuizComplete} />} />
      <Route path="/" element={<MainContent quizScore={quizScore} handleQuizComplete={handleQuizComplete} />} />
        <Route path="/greetings" element={<GreetingsPage />} />
        <Route path="/numbers" element={<NumbersPage />} />
        <Route path="/grammars" element={<GrammarsPage />} />
        <Route path="/nouns" element={<NounsPage />} />
        <Route path="/nouns/:topic" element={<NounsPage />} />
        <Route path="/nouns/:topic/:subtopic" element={<NounsPage />} />
        <Route path="/verbs" element={<VerbsPage />} />
        <Route path="/verbs/:topic" element={<VerbsPage />} />
        <Route path="/verbs/:topic/:subtopic" element={<VerbsPage />} />
        <Route path="/verbs/:topic/:subtopic/quiz/:verbtype" element={<TheFinnishVerbtypesQuiz />} />
        <Route path="/verbs/:topic/:subtopic/:child" element={<VerbsPage />} />
        <Route path="/beginars" element={<BeginarsPage />} />
        <Route path="/beginars/what-languages" element={<WhatLanguages />} />
        <Route path="/beginars/what-languages/:subtopic" element={<WhatLanguages />} />
        <Route path="/beginars/what-languages/:subtopic/:child" element={<WhatLanguageQuizzes />} />
        <Route path="/beginars/family/:topic" element={<FamilyPage />} />
        <Route path="/beginars/family/:subtopic" element={<FamilyPage />} />
        <Route path="/beginars/family/:subtopic/:child" element={<FamilyQuizzes />} />
        <Route path="/beginars/nationality/:topic" element={<NationalityPage />} />
        <Route path="/beginars/nationality/:subtopic" element={<NationalityPage />} />
        <Route path="/beginars/nationality/:subtopic/:child" element={<NationalityQuizzes />} />
        <Route path="/beginars/location/:topic" element={<LocationPage />} />
        <Route path="/beginars/location/:subtopic" element={<LocationPage />} />
        <Route path="/beginars/basic-words/:topic" element={<BasicAdjectivePage />} />
        <Route path="/beginars/basic-words/:subtopic" element={<BasicAdjectivePage />} />
        <Route path="/beginars/basic-words/:subtopic/:child" element={<BasicAdjectiveQuizzes />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;



// import OthersPage from './pages/OthersPage';
// import GreetingsQuizPage from './pages/GreetingsQuizPage';
// Add converted files
// import NumbersQuizPage from './pages/NumbersQuizPage';
// import SentencesPage from './pages/SentencesPage';
// import ColorsPage from './pages/ColorsPage';
// import MonthsPage from './pages/MonthsPage';
// import DaysPage from './pages/DaysPage';



 {/* */}


      {/* <Route path="/greetings/quiz" element={<GreetingsQuizPage />} /> */}
      {/* <Route path="/numbers/quiz" element={<NumbersQuizPage />} /> */}
      {/* <Route path="/colors" element={<ColorsPage />} /> */}
      {/* <Route path="/days" element={<DaysPage />} /> */}
      {/* <Route path="/months" element={<MonthsPage />} /> */}
      {/* <Route path="/sentences" element={<SentencesPage />} /> */}
      {/* <Route path="/sentences/:topic" element={<SentencesPage />} /> */}
      {/* <Route path="/sentences/:topic/:subtopic" element={<SentencesPage />} /> */}
      {/* <Route path="/others" element={<OthersPage />} /> */}
      {/* <Route path="/others/:topic" element={<OthersPage />} /> */}