import React from 'react';
// import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContent from './components/MainContent';
// import {loginUser} from './api';
// import {loginUser, signupUser} from './api';
import { QuizProvider } from './components/QuizContext';
import { AuthProvider } from './contexts/AuthContext';




import UnderConstructionPage from './pages/levels/a1/UnderConstructionPage';
import RoomsFurnituresPage from './pages/levels/a1/RoomsFurnituresPage';
import ClothesWearingsPage from './pages/levels/a1/ClothesWearingsPage';
import BasicAdjectivePage from './pages/levels/a1/BasicAdjectivePage';
import NationalityPage from './pages/levels/a1/NationalityPage';
import FoodsDrinksPage from './pages/levels/a1/FoodsDrinksPage';
import GreetingsPage from './pages/levels/a1/GreetingsPage';
import BodyPartsPage from './pages/levels/a1/BodyPartsPage';
import WhatLanguages from './pages/levels/a1/WhatLanguages';
import WeathersPage from './pages/levels/a1/WeathersPage';
import LocationPage from './pages/levels/a1/LocationPage';
import IllnesssPage from './pages/levels/a1/IllnessPage';
import NumbersPage from './pages/levels/a1/NumbersPage';
import AnimalsPage from './pages/levels/a1/AnimalsPage';
import PhrasesPage from './pages/levels/a1/PhrasesPage';
import MonthsPage from './pages/levels/a1/MonthsPage';
import ColorsPage from './pages/levels/a1/ColorsPage';
import PlacesPage from './pages/levels/a1/PlacesPage';
import FamilyPage from './pages/levels/a1/FamilyPage';
import VerbsPage from './pages/levels/a1/VerbsPage';
import DaysPage from './pages/levels/a1/DaysPage';
import BeginarsPage from './pages/BeginarsPage';
// import GrammarsPage from './pages/GrammarsPage';
// import NounsPage from './pages/NounsPage';
import DaysQuizPage from './pages/quizzes/a1/DaysQuizPage';
import VerbsQuizPage from './pages/quizzes/a1/VerbsQuizPage';
import FamilyQuizPage from './pages/quizzes/a1/FamilyQuizPage';
import MonthsQuizPage from './pages/quizzes/a1/MonthsQuizPage';
import ColorsQuizPage from './pages/quizzes/a1/ColorsQuizPage';
import PlacesQuizPage from './pages/quizzes/a1/PlacesQuizPage';
import IllnessQuizPage from './pages/quizzes/a1/IllnessQuizPage';
import PhrasesQuizPage from './pages/quizzes/a1/PhrasesQuizPage';
import NumbersQuizPage from './pages/quizzes/a1/NumbersQuizPage';
import AnimalsQuizPage from './pages/quizzes/a1/AnimalsQuizPage';
import WeathersQuizPage from './pages/quizzes/a1/WeathersQuizPage';
import BodyPartsQuizPage from './pages/quizzes/a1/BodyPartsQuizPage';
import GreetingsQuizPage from './pages/quizzes/a1/GreetingsQuizPage';
import FoodsDrinksQuizPage from './pages/quizzes/a1/FoodsDrinksQuizPage';
import NationalityQuizPage from './pages/quizzes/a1/NationalityQuizPage';
import WhatLanguageQuizPage from './pages/quizzes/a1/WhatLanguageQuizPage';
import BasicAdjectiveQuizPage from './pages/quizzes/a1/BasicAdjectiveQuizPage';
import RoomsFurnituresQuizPage from './pages/quizzes/a1/RoomsFurnitersQuizPage';
import ClothesWearingsQuizPage from './pages/quizzes/a1/ClothesWearingsQuizPage';


import Login from './components/backend/Login';
import Signup from './components/backend/Signup';
import Dashboard from './pages/DashboardPage';


function App() {

  const basename = process.env.NODE_ENV === 'development' ? '/' : '/';


  return (

    <AuthProvider> 
    <QuizProvider>
    <BrowserRouter basename={basename}>
      <Routes>
    
        {/* <Route path="/" element={<MainContent quizScore={quizScore} handleQuizComplete={handleQuizComplete} />} /> */}
        {/* <Route path="/" element={<MainContent quizScore={quizScore} handleQuizComplete={handleQuizComplete} />} /> */}

        <Route path="/" element={<MainContent />} />

        <Route path="/beginars" element={<BeginarsPage />} />

        <Route path="/beginars/what-languages/:topic" element={<WhatLanguages />} />
        <Route path="/beginars/what-languages/:subtopic/:child" element={<WhatLanguageQuizPage />} />

        
        <Route path="/beginars/family/:topic" element={<FamilyPage />} />
        <Route path="/beginars/family/:subtopic/:child" element={<FamilyQuizPage />} />
        
        <Route path="/beginars/nationality/:topic" element={<NationalityPage />} />
        <Route path="/beginars/nationality/:subtopic/:child" element={<NationalityQuizPage />} />
        
        <Route path="/beginars/location/:topic" element={<LocationPage />} />
        <Route path="/beginars/location/:subtopic" element={<LocationPage />} />
        
        <Route path="/beginars/greeting/:topic" element={<GreetingsPage />} />
        <Route path="/beginars/greeting/:subtopic/:child" element={<GreetingsQuizPage />} />

        <Route path="/beginars/color/:topic" element={<ColorsPage />} />
        <Route path="/beginars/color/:subtopic/:child" element={<ColorsQuizPage />} />

        <Route path="/beginars/number/:topic" element={<NumbersPage />} />
        <Route path="/beginars/number/:subtopic/:child" element={<NumbersQuizPage />} />
        
        <Route path="/beginars/day/:topic" element={<DaysPage />} />
        <Route path="/beginars/day/:subtopic/:child" element={<DaysQuizPage />} />
        
        <Route path="/beginars/month/:topic" element={<MonthsPage />} />
        <Route path="/beginars/month/:subtopic/:child" element={<MonthsQuizPage />} />
        
        <Route path="/beginars/weather/:topic" element={<WeathersPage />} />
        <Route path="/beginars/weather/:subtopic/:child" element={<WeathersQuizPage />} />
        
        <Route path="/beginars/most-common-rooms-and-furnitures/:topic" element={<RoomsFurnituresPage />} />
        <Route path="/beginars/most-common-rooms-and-furnitures/:subtopic/:child" element={<RoomsFurnituresQuizPage />} />

        <Route path="/beginars/most-common-foods-and-drinks/:topic" element={<FoodsDrinksPage />} />
        <Route path="/beginars/most-common-foods-and-drinks/:subtopic/:child" element={<FoodsDrinksQuizPage />} />
        
        <Route path="/beginars/most-common-clothes-and-wearings/:topic" element={<ClothesWearingsPage />} />
        <Route path="/beginars/most-common-clothes-and-wearings/:subtopic/:child" element={<ClothesWearingsQuizPage />} />

        <Route path="/beginars/most-common-body-parts/:topic" element={<BodyPartsPage />} />
        <Route path="/beginars/most-common-body-parts/:subtopic/:child" element={<BodyPartsQuizPage />} />
        
        <Route path="/beginars/most-common-places-in-the-city/:topic" element={<PlacesPage />} />
        <Route path="/beginars/most-common-places-in-the-city/:subtopic/:child" element={<PlacesQuizPage />} />


        <Route path="/beginars/most-common-animals/:topic" element={<AnimalsPage />} />
        <Route path="/beginars/most-common-animals/:subtopic/:child" element={<AnimalsQuizPage />} />
       
        <Route path="/beginars/adjective/:subtopic" element={<BasicAdjectivePage />} />
        <Route path="/beginars/adjective/:subtopic/:child" element={<BasicAdjectiveQuizPage />} /> 
       
        <Route path="/beginars/most-common-verbs/:topic" element={<VerbsPage />} />
        <Route path="/beginars/most-common-verbs/:subtopic/:child" element={<VerbsQuizPage />} />

        <Route path="/beginars/talking-about-simple-illnesses/:topic" element={<IllnesssPage />} />
        <Route path="/beginars/talking-about-simple-illnesses/:subtopic/:child" element={<IllnessQuizPage />} />

        {/* <Route path="/beginars/talking-about-simple-illnesses/:topic" element={<UnderConstructionPage />} /> */}
        <Route path="/beginars/some-survival-finnish-phrases/:topic" element={<PhrasesPage />} />
        <Route path="/beginars/some-survival-finnish-phrases/:subtopic/:child" element={<PhrasesQuizPage />} />

        <Route path="/beginars/basic-knowledge-about-telling-the-time/:topic" element={<UnderConstructionPage />} />
        <Route path="//grammars" element={<UnderConstructionPage />} />



        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

</Routes>
        
 
      
    </BrowserRouter>
 </QuizProvider>
 </AuthProvider>


    
  );


// async function handleLogin() {
//   try {
//     const user = await loginUser("test@example.com", "password123");
//     console.log("Logged in user:", user);
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       console.error("Login error:", error.message);
//     } else {
//       console.error("Unknown error during login", error);
//     }
//   }
// }



}


export default App;



