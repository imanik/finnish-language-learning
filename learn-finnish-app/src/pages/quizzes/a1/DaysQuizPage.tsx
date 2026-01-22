
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { dayData } from '../../../data/basicA1'; 
// Removed unused basicA1 import
import SetupQuiz from '../../../components/SetupQuiz';
import NavWrapper from '../../../components/wrapper/NavWrapper';
import BodyWrapper from '../../../components/wrapper/BodyWrapper';


interface Day {
  english: string;
  finnish: string;
  pronunciation?: string;
}


function DaysQuizPage() {
  
  const {child} = useParams<{child?: string}>();

 const keyType = child ?
   child
   .toLowerCase()
   .replace("-quiz", "")
   .replace("basic-days", "basicDays") // Convert "basic-numbers" to "basicNumbers"
   .replace("days-sentence", "daysSentence") // Convert "basic-numbers" to "basicNumbers"
    .replace("hard-days", "hardDays") // Convert "basic-numbers" to "basicNumbers"
   : "basicDays"; // Default to "numbers" if child is undefined
 
    // console.log("numberTypeKey",keyType);
 
   const quizTypeMap: Record<string, string> = {
     basicDays: "basic",
    daysSentence: "sentence",
    hardDays: "hard",

   };
   
   const quizType = (quizTypeMap[keyType] === "sentence" ? "sentence" : quizTypeMap[keyType] === "hard" ? "hard" : "basic") as "basic" | "sentence" | "hard"; // Determine quiz type based on numberTypeKey
 
   const allItems = (dayData[keyType as keyof typeof dayData] || dayData.basicDays) as Day[] ; // Type assertion to Number[]
   
    // console.log("Map",quizTypeMap);

   const title = (quizType === "hard" ? "Hard Days " : quizType === "sentence" ? "Days in Sentence " : "Basic Days ");
 



   return (


             <BodyWrapper>
     <NavWrapper link="/beginars/day/sunday-or-monday" title="← Back to Basic  Days Lessons"> </NavWrapper>
          <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType} title= {title}/>
    </div>
    </BodyWrapper>


  );
}

export default DaysQuizPage;
