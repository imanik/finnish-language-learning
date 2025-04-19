import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContent from './components/MainContent';

import BasicAdjectivePage from './pages/levels/a1/BasicAdjectivePage';
import RoomFurnituresPage from './pages/levels/a1/RoomFurnituresPage';
import NationalityPage from './pages/levels/a1/NationalityPage';
import FoodDrinksPage from './pages/levels/a1/FoodDrinksPage';
import GreetingsPage from './pages/levels/a1/GreetingsPage';
import WeathersPage from './pages/levels/a1/WeathersPage';
import NumbersPage from './pages/levels/a1/NumbersPage';
import MonthsPage from './pages/levels/a1/MonthsPage';
import ColorsPage from './pages/levels/a1/ColorsPage';
import DaysPage from './pages/levels/a1/DaysPage';
import BeginarsPage from './pages/BeginarsPage';
import GrammarsPage from './pages/GrammarsPage';
import NounsPage from './pages/NounsPage';
import VerbsPage from './pages/VerbsPage';
import FamilyPage from './pages/levels/a1/FamilyPage';
import ClothesPage from './pages/levels/a1/ClothesPage';
import LocationPage from './pages/levels/a1/LocationPage';
import WhatLanguages from './pages/levels/a1/WhatLanguages';
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
  const basename = process.env.NODE_ENV === 'development' ? '/learn-finnish-app' : '/';

  const [quizScore, setQuizScore] = useState<QuizScore>(() => {
    const storedScore = localStorage.getItem("overAllQuizScore");
    return storedScore ? JSON.parse(storedScore) : { correct: 0, total: 0 };
  });

  useEffect(() => {
    localStorage.setItem("overAllQuizScore", JSON.stringify(quizScore));
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
        {/* <Route path="/greetings" element={<GreetingsPage />} /> */}
        {/* <Route path="/numbers" element={<NumbersPage />} /> */}
        {/* <Route path="/grammars" element={<GrammarsPage />} /> */}
        {/* <Route path="/nouns" element={<NounsPage />} /> */}
       
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
        
        <Route path="/beginars/color/:topic" element={<ColorsPage />} />
        <Route path="/beginars/greeting/:topic" element={<GreetingsPage />} />
        <Route path="/beginars/number/:topic" element={<NumbersPage />} />
        <Route path="/beginars/day/:topic" element={<DaysPage />} />
        <Route path="/beginars/month/:topic" element={<MonthsPage />} />
        <Route path="/beginars/weather/:topic" element={<WeathersPage />} />
        <Route path="/beginars/most-common-rooms-and-furnitures/:topic" element={<RoomFurnituresPage />} />
        <Route path="/beginars/most-common-foods-and-drinks/:topic" element={<FoodDrinksPage />} />
        <Route path="/beginars/most-common-clothes-and-wearings/:topic" element={<ClothesPage />} />
        {/* <Route path="/beginars/basic-words/adjective/:topic" element={<BasicAdjectivePage />} /> */}
        <Route path="/beginars/adjective/:subtopic" element={<BasicAdjectivePage />} />
        {/* <Route path="/beginars/adjective/:subtopic/:child" element={<BasicAdjectiveQuizzes />} />  */}
        <Route path="/beginars/adjective/:subtopic/:child" element={<BasicAdjectiveQuizzes />} /> 
        {/* <Route path="/beginars/basic-words/color/:subtopic" element={<ColorsPage />} /> */}
        {/* <Route path="/beginars/basic-words/:subtopic/:child" element={<BasicAdjectiveQuizzes />} />  */}
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