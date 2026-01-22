
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { bodyPartData } from '../../../data/basicA1'; 
// Removed unused basicA1 import
import SetupQuiz from '../../../components/SetupQuiz';
import NavWrapper from '../../../components/wrapper/NavWrapper';
import BodyWrapper from '../../../components/wrapper/BodyWrapper';


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

        <BodyWrapper>
     <NavWrapper link="/beginars/most-common-body-parts/body-parts" title="← Back to Basic BodyParts Lessons"> </NavWrapper>
          <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType} title={title} />
    </div>
    </BodyWrapper>

  );
}

export default BodyPartsQuizPage;
