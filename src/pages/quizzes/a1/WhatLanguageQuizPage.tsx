import React from "react";
import { Link, useParams } from "react-router-dom";
import { langaugeData } from "../../../data/basicA1";
import SetupQuiz from "../../../components/SetupQuiz"; // Changed to SetupQuiz


interface Language {
  english: string,
  finnish: string,
}



function WhatLanguageQuizPage() {

    const { child } = useParams<{child : string}>();

   

    const keyType =  child ? 
    child
    .toLowerCase()
    .replace("-quiz","")
    .replace("basic-language","basicLanguage")
    .replace("sentence-language","sentenceLanguage")
    : "basicLanguage";

    const quizTypeMap: Record<string, string> = {
      basicLanguage: 'basic language', 
      sentenceLanguage: 'sentence language', 
    };

    const quizType = quizTypeMap[keyType] as 'basic' | 'sentence';

    const allItems = (langaugeData[keyType as keyof typeof langaugeData] || langaugeData.basicLanguage) as Language[];


   // Render the component UI.
   return (
    <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
    <Link to="/beginars/what-languages/basic-language" className="text-teal-700 hover:underline mb-6 inline-block">
      ← Back to Basic Language Lessons
    </Link>
      <SetupQuiz items={allItems} quizType={quizType}  />
    </div>


  );
   

}

export default WhatLanguageQuizPage;

