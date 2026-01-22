
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { clothesData } from '../../../data/basicA1'; 
// Removed unused basicA1 import
import SetupQuiz from '../../../components/SetupQuiz';
import NavWrapper from '../../../components/wrapper/NavWrapper';
import BodyWrapper from '../../../components/wrapper/BodyWrapper';

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


        <BodyWrapper>
     <NavWrapper link="/beginars/most-common-clothes-and-wearings/clothes-wearings" title="← Back to Basic  Clothes & Wearings Lessons"> </NavWrapper>
          <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType} title= {title}/>
    </div>
    </BodyWrapper>
  );
}

export default ClothesWearingsQuizPage;
