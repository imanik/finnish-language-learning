
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { monthData } from '../../../data/basicA1'; 
// Removed unused basicA1 import
import SetupQuiz from '../../../components/SetupQuiz';
import NavWrapper from '../../../components/wrapper/NavWrapper';
import BodyWrapper from '../../../components/wrapper/BodyWrapper';

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
   .replace("months-sentence", "monthsSentence") // Convert "basic-numbers" to "basicNumbers"
   .replace("hard-months", "hardMonths")
   : "basicMonths"; // Default to "numbers" if child is undefined
 
    // console.log("numberTypeKey",keyType);
 
   const quizTypeMap: Record<string, string> = {
     basicMonths: "basic",
     sentenceMonths: "sentence",
     hardMonths: "hard",


   };
   
   const quizType = (quizTypeMap[keyType] === "sentence" ? "sentence" : quizTypeMap[keyType] === "hard" ? "hard" : "basic") as "basic" | "sentence" | "hard"; // Determine quiz type based on numberTypeKey
 
   const allItems = (monthData[keyType as keyof typeof monthData] || monthData.basicMonths) as Month[] ; // Type assertion to Number[]
   
    //  console.log("Map",quizType);

   const title = quizType === "sentence" ? "Months In Sentence" : quizType === "hard" ? "Hard Months " : "Basic Months ";
 



   return (

             <BodyWrapper>

      <NavWrapper link="/beginars/month/january-to-december" title="← Back to Basic Months Lessons"> </NavWrapper>

          <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType}  title={title} />
    </div>

      </BodyWrapper>




  );
}

export default MonthsQuizPage;
