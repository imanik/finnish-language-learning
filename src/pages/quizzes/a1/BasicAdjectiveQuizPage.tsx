
import React from "react";
import { Link, useParams } from "react-router-dom";
import { adjectivesData } from "../../../data/basicA1";
import SetupQuiz from "../../../components/SetupQuiz"; // Changed to SetupQuiz



// Define types
interface Adjective {
  finnish: string;
  english: string;
  pronunciation: string;
}




function BasicAdjectiveQuizPage() {
  
  const {child} = useParams<{child?: string}>();

 const keyType = child ?
   child
   .toLowerCase()
   .replace("-quiz", "")
   .replace("basic-adjectives", "basicAdjectives") // Convert "basic-adjectives" to "basicAdjectives"
   : "basicAdjectives"; // Default to "numbers" if child is undefined
 
   // console.log("numberTypeKey",numberTypeKey);
 
   const quizTypeMap: Record<string, string> = {
    basicAdjectives: "basic adjectives vocabulary",
   };
   
   const quizType = (quizTypeMap[keyType] || "basic") as "basic"; // Determine quiz type based on numberTypeKey
 
   const allItems = (adjectivesData[keyType as keyof typeof adjectivesData] || adjectivesData.basicAdjectives) as Adjective[] ; // Type assertion to Number[]
   
    // console.log("Map",quizTypeMap);
 



   return (
    <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
    <Link to="/beginars/adjective/good-bad-ugly" className="text-teal-700 hover:underline bg-teal-100 mb-6 inline-block fixed top-0 left-0 w-full  px-4 py-2 shadow-md">
      ← Back to Basic Adjectives Lessons
    </Link>
          <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType}  />
    </div>
    </div>


  );
}


export default BasicAdjectiveQuizPage;