
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { clothesData } from '../../../data/basicA1'; 
// Removed unused basicA1 import
import SetupQuiz from '../../../components/SetupQuiz';


interface ClothesWearings {
  english: string;
  finnish: string;
  pronunciation?: string;
}


function ClothesWearingsQuizPage() {
  
  const {child} = useParams<{child?: string}>();

 const keyType = child ?
   child
   .toLowerCase()
   .replace("-quiz", "")
   .replace("clothes-wearings", "clothesWearings") // Convert "basic-numbers" to "basicNumbersNumbers"
   .replace("hard-clothes-wearings", "hardClothesWearings") // Convert "basic-numbers" to "basicNumbers"
  //  .replace("sentence-clothesWearings", "sentenceClothesWearings") // Convert "basic-numbers" to "basicNumbers"
   : "clothesWearings"; // Default to "numbers" if child is undefined
 
    // console.log("numberTypeKey",keyType);
 
   const quizTypeMap: Record<string, string> = {
     clothesWearings: "basic",
      hardClothesWearings: "hard",
    // sentenceClothesWearings: "sentence clothesWearings",

   };
   
   const quizType = (quizTypeMap[keyType] === "hard" ? "hard" : "basic") as "basic" | "hard"; // Determine quiz type based on numberTypeKey
 
   const allItems = (clothesData[keyType as keyof typeof clothesData] || clothesData.clothesWearings) as ClothesWearings[] ; // Type assertion to Number[]
   
    //  console.log("Map",quizType);

  const title = (quizType === "hard" ? "Hard Clothes & Wearings " : "Basic Clothes & Wearings ");
 



   return (
    <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
    <Link to="/beginars/most-common-clothes-and-wearings/clothes-wearings" className="text-teal-700 hover:underline bg-teal-100 mb-6 inline-block fixed top-0 left-0 w-full  px-4 py-2 shadow-md">
      ← Back to Basic Clothes & Wearings Lessons
    </Link>
          <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType}  />
    </div>
    </div>


  );
};

export default ClothesWearingsQuizPage;
