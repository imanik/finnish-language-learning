
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { animalData } from '../../../data/basicA1'; 
// Removed unused basicA1 import
import SetupQuiz from '../../../components/SetupQuiz';


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
    <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
    <Link to="/beginars/most-common-animals/animals" className="text-teal-700 hover:underline bg-teal-100 mb-6 inline-block fixed top-0 left-0 w-full  px-4 py-2 shadow-md">
      ← Back to Basic Animals Lessons
    </Link>
          <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType} title={title} />
    </div>
    </div>


  );
};

export default AnimalsQuizPage;
