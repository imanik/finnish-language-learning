
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




function BasicAdjectiveQuizzes() {
  
  const {child} = useParams<{child?: string}>();

 const keyType = child ?
   child
   .toLowerCase()
   .replace("-quiz", "")
   .replace("basic-adjectives", "basicAdjectives") // Convert "basic-adjectives" to "basicAdjectives"
   : "basicAdjectives"; // Default to "numbers" if child is undefined
 
   // console.log("numberTypeKey",numberTypeKey);
 
   const quizTypeMap: Record<string, string> = {
    basicAdjectives: "basic adjectives",
   };
   
   const quizType = (quizTypeMap[keyType] || "basic") as "basic"; // Determine quiz type based on numberTypeKey
 
   const allItems = (adjectivesData[keyType as keyof typeof adjectivesData] || adjectivesData.basicAdjectives) as Adjective[] ; // Type assertion to Number[]
   
    // console.log("Map",quizTypeMap);
 



   return (
    <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
    <Link to="/beginars/adjective/good-bad-ugly" className="text-teal-700 hover:underline mb-6 inline-block">
      ← Back to Basic Adjectives Lessons
    </Link>
      <SetupQuiz items={allItems} quizType={quizType}  />
    </div>


  );
}


export default BasicAdjectiveQuizzes;