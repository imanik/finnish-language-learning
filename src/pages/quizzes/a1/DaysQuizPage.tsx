
import React from 'react';
import { useParams } from 'react-router-dom';
import { numberData } from '../../../data/basicA1'; 
// Removed unused basicA1 import
import SetupQuiz from '../../../components/SetupQuiz';


interface Number {
  english: string;
  finnish: string;
  pronunciation?: string;
}


function DaysQuizPage() {
  
  const {child} = useParams<{child?: string}>();

 const numberTypeKey = child ?
   child
   .toLowerCase()
   .replace("-quiz", "")
   .replace("basic-numbers", "basicNumbers") // Convert "basic-numbers" to "basicNumbers"
   .replace("ordinal-numbers", "ordinalNumbers") // Replace "extended-family" with "extendedFamily".
   .replace("sentence-numbers", "sentenceNumbers") // Replace "step-family" with "stepFamily".
   : "basicNumbers"; // Default to "numbers" if child is undefined
 
   // console.log("numberTypeKey",numberTypeKey);
 
   const quizTypeMap: Record<string, string> = {
     basicNumbers: "basic",
     ordinalNumbers: "ordinal",
     sentenceNumbers: "sentence",
   };
   
   const quizType = (quizTypeMap[numberTypeKey] || "basic") as "basic" | "ordinal" | "sentence"; // Determine quiz type based on numberTypeKey
 
   const allNumbers = (numberData[numberTypeKey as keyof typeof numberData] || numberData.basicNumbers) as Number[] ; // Type assertion to Number[]
   
  //  console.log("allNumbers",allNumbers);
 



   return (
    <div>
      <h2>Days Quiz</h2>
      <SetupQuiz items={allNumbers} quizType={quizType} />
    </div>


  );
};

export default DaysQuizPage;
