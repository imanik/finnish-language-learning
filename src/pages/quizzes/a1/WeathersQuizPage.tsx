
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { weatherData } from '../../../data/basicA1'; 
// Removed unused basicA1 import
import SetupQuiz from '../../../components/SetupQuiz';


interface Weather {
  english: string;
  finnish: string;
  pronunciation?: string;
}


function WeathersQuizPage() {
  
  const {child} = useParams<{child?: string}>();

 const keyType = child ?
   child
   .toLowerCase()
   .replace("-quiz", "")
   .replace("basic-weathers", "basicWeathers") // Convert "basic-numbers" to "basicNumbers"
   .replace("weathers-sentence", "weathersSentence") // Convert "basic-numbers" to "basicNumbers"
   : "basicWeathers"; // Default to "numbers" if child is undefined
 
    // console.log("numberTypeKey",keyType);
 
   const quizTypeMap: Record<string, string> = {
     basicWeathers: "basic weathers",
    sentenceWeathers: " weathers in sentence",

   };
   
   const quizType = (quizTypeMap[keyType] || "basic") as "basic" | "sentence"; // Determine quiz type based on numberTypeKey
 
   const allItems = (weatherData[keyType as keyof typeof weatherData] || weatherData.basicWeathers) as Weather[] ; // Type assertion to Number[]
   
     console.log("Map",quizType);
 



   return (
    <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
    <Link to="/beginars/weather/summer-or-winter" className="text-teal-700 hover:underline bg-teal-100 mb-6 inline-block fixed top-0 left-0 w-full  px-4 py-2 shadow-md">
      ← Back to Basic Weathers Lessons
    </Link>
          <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType}  />
    </div>
    </div>


  );
};

export default WeathersQuizPage;
