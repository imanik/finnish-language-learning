
import React from 'react';
import {  useParams } from 'react-router-dom';
import { animalData } from '../../../data/basicA1'; 
// Removed unused basicA1 import
import SetupQuiz from '../../../components/SetupQuiz';
import NavWrapper from '../../../components/NavWrapper';
import BodyWrapper from '../../../components/BodyWrapper';


interface Animal {
  english: string;
  finnish: string;
  pronunciation?: string;
}


function AnimalsQuizPage() {
  
  const {child} = useParams<{child?: string}>();

 const keyType = child ?
   child
    .toLowerCase()
    .replace("-quiz", "")
    .replace("basic-animals", "animals") // Convert "basic-numbers" to "basicNumbers"
    .replace("animals-sentence", "animalsSentence") // Convert "basic-numbers" to "basicNumbers"
    .replace("hard-animals", "hardAnimals") // Convert "basic-numbers" to "basicNumbers"
   : "animals"; // Default to "numbers" if child is undefined
 
    //  console.log("numberTypeKey",keyType);
 
   const quizTypeMap: Record<string, string> = {
     animals: "basic",
     hardAnimals: "hard",
     animalsSentence: "sentence",

   };
   
   const quizType = (quizTypeMap[keyType] === "sentence" ? "sentence" : quizTypeMap[keyType] === "hard" ? "hard" : "basic") as "basic" | "hard" | "sentence" ; // Determine quiz type based on numberTypeKey
 
   const allItems = (animalData[keyType as keyof typeof animalData] || animalData.animals) as Animal[] ; // Type assertion to Number[]
   
    //  console.log("Map",quizTypeMap);
  const title = (quizType === "hard" ? "Hard Animals " : quizType === "sentence" ? "Animals in Sentence " : "Basic Animals ");



   return (
   
    <BodyWrapper>
     <NavWrapper link="/beginars/family/family-members" title="← Back to Basic Animals Lessons"> </NavWrapper>
          <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType} title={title} />
    </div>
    </BodyWrapper>


  );
}

export default AnimalsQuizPage;
