
import React from 'react';
import {Link, useParams} from 'react-router-dom';
import { colorData } from '../../../data/basicA1';
import SetupQuiz from '../../../components/SetupQuiz'; // Changed to SetupQuiz

interface Color {
  english: string;
  finnish: string;
  pronunciation?: string; // optional
}



 function ColorsQuizPage() {
  const {child} = useParams<{child?: string}>();

  // const keyType = child ?
  //   child
  //   .toLowerCase()
  //   .replace("-quiz", "")
  //   .replace("basic-colors", "basicColors") // Convert "basic-adjectives" to "basicAdjectives"
  //   .replace("extended-colors", "extendedColors") // Convert "basic-adjectives" to "basicAdjectives"
  //   : "basicColors"; // Default to "numbers" if child is undefined
  
    const keyType = child
    ? child
        .toLowerCase() // Convert to lowercase for consistency (e.g., "Basic-Family-Quiz" -> "basic-family-quiz").
        .replace("-quiz", "") // Remove "-quiz" suffix (e.g., "basic-family-quiz" -> "basic-family").
        .replace("basic-colors", "basicColors") // Replace "basic-family" with "basicFamily".
        .replace("extended-colors", "extendedColors") // Replace "extended-family" with "extendedFamily".
        .replace("step-family", "stepFamily") // Replace "step-family" with "stepFamily".
        .replace("marital-status", "maritalStatus") // Replace "marital-status" with "maritalStatus".
    : "basicColors";

     console.log("Child",child);
     console.log("numberTypeKey",keyType);
  
    const quizTypeMap: Record<string, string> = {
      basicColors: "basic colors vocabulary",
      extendedColors: "extended colors vocabulary",
    };
    
    const quizType = (quizTypeMap[keyType] || "basic") as "basic" | "extended"; // Determine quiz type based on numberTypeKey
  
    const allItems = (colorData[keyType as keyof typeof colorData] || colorData.basicColors) as Color[] ; // Type assertion to Number[]
    
      
  
 
 
 
    return (

           <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
           <Link to="/beginars/color/rainbow" className="text-teal-700 hover:underline bg-teal-100 mb-6 inline-block fixed top-0 left-0 w-full  px-4 py-2 shadow-md">
             ← Back to Basic Color Lessons
           </Link>

           <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType}  />
    </div>
     
     </div>
 
 
   );
};

export default ColorsQuizPage;