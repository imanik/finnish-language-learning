
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { bodyPartData } from '../../../data/basicA1'; 
// Removed unused basicA1 import
import SetupQuiz from '../../../components/SetupQuiz';


interface BodyPart {
  english: string;
  finnish: string;
  pronunciation?: string;
}


function BodyPartsQuizPage() {
  
  const {child} = useParams<{child?: string}>();

 const keyType = child ?
   child
   .toLowerCase()
   .replace("-quiz", "")
   .replace("basic-body-parts", "bodyParts")
   .replace("hard-body-parts",  "hardBodyParts") // Convert "basic-numbers" to "basicNumbers"
  //  .replace("sentence-bodyParts", "sentenceBodyParts") // Convert "basic-numbers" to "basicNumbers"
   : "bodyParts"; // Default to "numbers" if child is undefined
 
    //  console.log("numberTypeKey",keyType);
 
   const quizTypeMap: Record<string, string> = {
     bodyParts: "basic",
      hardBodyParts: "hard",
    // sentenceBodyParts: "sentence bodyParts",

   };
   
   const quizType = (quizTypeMap[keyType] === "hard" ? "hard" : "basic") as "basic" | "hard"; // Determine quiz type based on numberTypeKey
 
   const allItems = (bodyPartData[keyType as keyof typeof bodyPartData] || bodyPartData.bodyParts) as BodyPart[] ; // Type assertion to Number[]
   
    //  console.log("Key",keyType);
    //  console.log("Map",quizType);
 
  const title = (quizType === "hard" ? "Hard Body Parts " : "Basic Body Parts ");


   return (
    <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
    <Link to="/beginars/most-common-body-parts/body-parts" className="text-teal-700 hover:underline bg-teal-100 mb-6 inline-block fixed top-0 left-0 w-full  px-4 py-2 shadow-md">
      ← Back to Basic BodyParts Lessons
    </Link>
          <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType} title={title} />
    </div>
    </div>


  );
};

export default BodyPartsQuizPage;
