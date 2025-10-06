
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { verbData } from '../../../data/basicA1'; 
// Removed unused basicA1 import
import SetupQuiz from '../../../components/SetupQuiz';
import BodyWrapper from '../../../components/BodyWrapper';
import NavWrapper from '../../../components/NavWrapper';

interface Verb {
  english: string;
  finnish: string;
  pronunciation?: string;
}


function VerbsQuizPage() {
  
  const {child} = useParams<{child?: string}>();

 const keyType = child ?
   child
   .toLowerCase()
   .replace("-quiz", "")
   .replace("basic-verbs", "basicVerbs") // Convert "basic-numbers" to "basicNumbers"
   .replace("hard-verbs",  "hardVerbs") // Convert "basic-numbers" to "basicNumbers"
   : "basicVerbs"; // Default to "numbers" if child is undefined
 
    // console.log("numberTypeKey",keyType);
 
   const quizTypeMap: Record<string, string> = {
     basicVerbs: "basic verbs",
     hardVerbs:  "hard",
    // sentenceVerbs: "sentence verbs",

   };
   

  const quizType = (quizTypeMap[keyType] === "hard" ? "hard" : "basic") as "basic" | "hard"; // Determine quiz type based on numberTypeKey
 
   const allItems = (verbData[keyType as keyof typeof verbData] || verbData.basicVerbs) as Verb[] ; // Type assertion to Number[]
   
      console.log("Map",keyType);

  const title = (quizType === "hard" ? "Hard Verbs " : "Basic Verbs ");
 
   return (


                 <BodyWrapper>

      <NavWrapper link="/beginars/most-common-verbs/basic-verbs" title="← Back to Basic Verbs Lessons"> </NavWrapper>

          <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType}  title={title} />
    </div>

      </BodyWrapper>

  );
}

export default VerbsQuizPage;
