
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { foodData } from '../../../data/basicA1'; 
// Removed unused basicA1 import
import SetupQuiz from '../../../components/SetupQuiz';
import BodyWrapper from '../../../components/BodyWrapper';
import NavWrapper from '../../../components/NavWrapper';

interface FoodsDrinks {
  english: string;
  finnish: string;
  pronunciation?: string;
}


function FoodsDrinksQuizPage() {
  
  const {child} = useParams<{child?: string}>();

 const keyType = child ?
   child
   .toLowerCase()
   .replace("-quiz", "")
   .replace("basic-foods-drinks", "foodsDrinks") // Convert "basic-numbers" to "basicNumbers"
    .replace("hard-foods-drinks", "hardFoodsDrinks") // Convert "basic-numbers" to "basicNumbers"
  //  .replace("sentence-foodsDrinks", "sentenceFoodsDrinks") // Convert "basic-numbers" to "basicNumbers"
   : "foodsDrinks"; // Default to "numbers" if child is undefined
 
     console.log("numberTypeKey",keyType);
 
   const quizTypeMap: Record<string, string> = {
     foodsDrinks: "basic",
      hardFoodsDrinks: "hard",
    // sentenceFoodsDrinks: "sentence foodsDrinks",

   };
   
   const quizType = (quizTypeMap[keyType] === "hard" ? "hard" : "basic") as "basic" | "hard"; // Determine quiz type based on numberTypeKey
 
   const allItems = (foodData[keyType as keyof typeof foodData] || foodData.foodsDrinks) as FoodsDrinks[] ; // Type assertion to Number[]
   
      console.log("Map",quizType);

  const title = (quizType === "hard" ? "Hard Foods & Drinks " : "Basic Foods & Drinks ");
 



   return (


     <BodyWrapper>

      <NavWrapper link="/beginars/most-common-foods-and-drinks/foods-drinks" title="← Back to Basic Foods & Drinks Lessons"> </NavWrapper>

          <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType}  title={title} />
    </div>

      </BodyWrapper>

  );
}

export default FoodsDrinksQuizPage;
