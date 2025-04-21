
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { monthData } from '../../../data/basicA1'; 
// Removed unused basicA1 import
import SetupQuiz from '../../../components/SetupQuiz';


interface Month {
  english: string;
  finnish: string;
  pronunciation?: string;
}


function MonthsQuizPage() {
  
  const {child} = useParams<{child?: string}>();

 const keyType = child ?
   child
   .toLowerCase()
   .replace("-quiz", "")
   .replace("basic-months", "basicMonths") // Convert "basic-numbers" to "basicNumbers"
   .replace("sentence-months", "sentenceMonths") // Convert "basic-numbers" to "basicNumbers"
   : "basicMonths"; // Default to "numbers" if child is undefined
 
    // console.log("numberTypeKey",keyType);
 
   const quizTypeMap: Record<string, string> = {
     basicMonths: "basic months",
    sentenceMonths: "sentence months",

   };
   
   const quizType = (quizTypeMap[keyType] || "basic") as "basic" | "sentence"; // Determine quiz type based on numberTypeKey
 
   const allItems = (monthData[keyType as keyof typeof monthData] || monthData.basicMonths) as Month[] ; // Type assertion to Number[]
   
     console.log("Map",quizType);
 



   return (
    <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
    <Link to="/beginars/month/january-to-december" className="text-teal-700 hover:underline mb-6 inline-block">
      ← Back to Basic Months Lessons
    </Link>
      <SetupQuiz items={allItems} quizType={quizType}  />
    </div>


  );
};

export default MonthsQuizPage;
