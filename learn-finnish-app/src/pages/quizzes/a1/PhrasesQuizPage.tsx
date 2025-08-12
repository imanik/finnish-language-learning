
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { phraseData } from '../../../data/basicA1'; 
// Removed unused basicA1 import
import SetupQuiz from '../../../components/SetupQuiz';


interface Phrases {
  english: string;
  finnish: string;
  pronunciation?: string;
}


function PhrasesQuizPage() {
  
  const {child} = useParams<{child?: string}>();

 const keyType = child ?
   child
   .toLowerCase()
   .replace("-quiz", "")
  //  .replace("basic-phrases", "phrases") // Convert "basic-numbers" to "basicNumbers"
  .replace("phrases-sentence", "phrasesSentence") // Convert "basic-numbers" to "basicNumbers"
   : "phrases"; // Default to "numbers" if child is undefined
 
    // console.log("numberTypeKey",keyType);
 
   const quizTypeMap: Record<string, string> = {
     phrases: "phrases vocabulary",
     phrasesSentence: "phrases in sentence",

   };
   
   const quizType = (quizTypeMap[keyType] || "basic") as "basic" | "sentence"; // Determine quiz type based on numberTypeKey
 
   const allItems = (phraseData[keyType as keyof typeof phraseData] || phraseData.phrases) as Phrases[] ; // Type assertion to Number[]
   
    // console.log("Map",quizTypeMap);
 



   return (
    <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
    <Link to="/beginars/some-survival-finnish-phrases/phrases" className="text-teal-700 hover:underline bg-teal-100 mb-6 inline-block fixed top-0 left-0 w-full  px-4 py-2 shadow-md">
      ← Back to Basic Phrases Lessons
    </Link>
          <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType}  />
    </div>
    </div>


  );
}

export default PhrasesQuizPage;
