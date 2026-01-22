
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { illnessData } from '../../../data/basicA1'; 
// Removed unused basicA1 import
import SetupQuiz from '../../../components/SetupQuiz';
import NavWrapper from '../../../components/wrapper/NavWrapper';
import BodyWrapper from '../../../components/wrapper/BodyWrapper';

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
  .replace("basic-illness", "illness") // Convert "basic-numbers" to "basicNumbers"
  .replace("illness-sentence", "illnessSentence") // Convert "basic-numbers" to "basicNumbers"
  .replace("hard-illness", "hardIllness")
   : "illness"; // Default to "numbers" if child is undefined
 
    // console.log("numberTypeKey",keyType);
 
   const quizTypeMap: Record<string, string> = {
     illness: "basic",
     illnessSentence: "sentence",
     hardIllness: "hard",

   };
   
   const quizType = (quizTypeMap[keyType] === "sentence" ? "sentence" : quizTypeMap[keyType] === "hard" ? "hard" : "basic") as "basic" | "sentence" | "hard"; // Determine quiz type based on numberTypeKey
 
   const allItems = (illnessData[keyType as keyof typeof illnessData] || illnessData.illness) as Illness[] ; // Type assertion to Number[]
   
    // console.log("Map",quizTypeMap);
   const title =  quizType === "sentence" ? "Illness in Sentence " : quizType === "hard" ? "Hard Illness " : "Basic Illness";




   return (


         <BodyWrapper>

      <NavWrapper link="/beginars/talking-about-simple-illnesses/illness" title="← Back to Basic Illness Lessons"> </NavWrapper>

          <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType}  title={title} />
    </div>

      </BodyWrapper>


  );
}

export default IllnessQuizPage;
