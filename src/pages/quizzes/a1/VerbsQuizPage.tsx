
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { verbData } from '../../../data/basicA1'; 
// Removed unused basicA1 import
import SetupQuiz from '../../../components/SetupQuiz';
import GenerateHardQuiz from '../../../components/GenerateHardQuiz';


interface Verb {
  english: string;
  finnish: string;
  pronunciation?: string;
}


function VerbsQuizPage() {
  
  const {child} = useParams<{child?: string}>();

 const keyType = child ?
   child
   .toLowerCase()
   .replace("-quiz", "")
   .replace("basic-verbs", "basicVerbs") // Convert "basic-numbers" to "basicNumbers"
   .replace("hard-verbs",  "hardVerbs") // Convert "basic-numbers" to "basicNumbers"
   : "basicVerbs"; // Default to "numbers" if child is undefined
 
    // console.log("numberTypeKey",keyType);
 
   const quizTypeMap: Record<string, string> = {
     basicVerbs: "basic verbs",
     hardVerbs:  "hard",
    // sentenceVerbs: "sentence verbs",

   };
   
   const quizType = (quizTypeMap[keyType] || "basic") as "basic"; // Determine quiz type based on numberTypeKey
 
   const allItems = (verbData[keyType as keyof typeof verbData] || verbData.basicVerbs) as Verb[] ; // Type assertion to Number[]
   
    //  console.log("Map",quizType);
 



   return (
    <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
    <Link to="/beginars/most-common-verbs/basic-verbs" className="text-teal-700 hover:underline bg-teal-100 mb-6 inline-block fixed top-0 left-0 w-full  px-4 py-2 shadow-md">
      ← Back to Basic Verbs Lessons
    </Link>
          <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType}  />
    </div>
    {/* <div className='mt-16'>
      <GenerateHardQuiz items={allItems} quizType={quizType}  />
    </div> */}
    </div>


  );
};

export default VerbsQuizPage;
