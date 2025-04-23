
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { illnessData } from '../../../data/basicA1'; 
// Removed unused basicA1 import
import SetupQuiz from '../../../components/SetupQuiz';


interface Illness {
  english: string;
  finnish: string;
  pronunciation?: string;
}


function IllnessQuizPage() {
  
  const {child} = useParams<{child?: string}>();

 const keyType = child ?
   child
   .toLowerCase()
   .replace("-quiz", "")
  //  .replace("basic-illness", "illness") // Convert "basic-numbers" to "basicNumbers"
  .replace("illness-sentence", "illnessSentence") // Convert "basic-numbers" to "basicNumbers"
   : "illness"; // Default to "numbers" if child is undefined
 
    // console.log("numberTypeKey",keyType);
 
   const quizTypeMap: Record<string, string> = {
     illness: "illness vocabulary",
     illnessSentence: "illness in sentence",

   };
   
   const quizType = (quizTypeMap[keyType] || "basic") as "basic" | "sentence"; // Determine quiz type based on numberTypeKey
 
   const allItems = (illnessData[keyType as keyof typeof illnessData] || illnessData.illness) as Illness[] ; // Type assertion to Number[]
   
    // console.log("Map",quizTypeMap);
 



   return (
    <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
    <Link to="/beginars/talking-about-simple-illnesses/illnesss" className="text-teal-700 hover:underline bg-teal-100 mb-6 inline-block fixed top-0 left-0 w-full  px-4 py-2 shadow-md">
      ← Back to Basic Illness Lessons
    </Link>
          <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType}  />
    </div>
    </div>


  );
};

export default IllnessQuizPage;
