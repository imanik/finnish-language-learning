
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { weatherData } from '../../../data/basicA1'; 
// Removed unused basicA1 import
import SetupQuiz from '../../../components/SetupQuiz';
import BodyWrapper from '../../../components/BodyWrapper';
import NavWrapper from '../../../components/NavWrapper';

interface Weather {
  english: string;
  finnish: string;
  pronunciation?: string;
}


function WeathersQuizPage() {
  
  const {child} = useParams<{child?: string}>();

 const keyType = child ?
   child
   .toLowerCase()
   .replace("-quiz", "")
   .replace("basic-weathers", "basicWeathers") // Convert "basic-numbers" to "basicNumbers"
   .replace("weathers-sentence", "weathersSentence") // Convert "basic-numbers" to "basicNumbers"
   .replace("hard-weathers", "hardWeathers") // Convert "basic-numbers" to "basicNumbers"
   
   : "basicWeathers"; // Default to "numbers" if child is undefined
 
    // console.log("numberTypeKey",keyType);
 
   const quizTypeMap: Record<string, string> = {
     basicWeathers: "basic",
     sentenceWeathers: "sentence",
     hardWeathers: "hard",

   };
   
   const quizType = (quizTypeMap[keyType] === "sentence" ? "sentence" : quizTypeMap[keyType] === "hard" ? "hard" : "basic") as "basic" | "sentence" | "hard"; // Determine quiz type based on numberTypeKey
 
   const allItems = (weatherData[keyType as keyof typeof weatherData] || weatherData.basicWeathers) as Weather[] ; // Type assertion to Number[]
   

   const title = quizType === "sentence" ? "Weathers in sentence " : quizType === "hard" ? "Hard Weathers " : "basic weathers ";
    //  console.log("Map",quizType);
 



   return (
                 <BodyWrapper>

      <NavWrapper link="/beginars/weather/summer-or-winter" title="← Back to Basic Weathers Lessons"> </NavWrapper>

          <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType}  title={title} />
    </div>

      </BodyWrapper>

  );
}

export default WeathersQuizPage;
