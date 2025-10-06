
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { placeData } from '../../../data/basicA1'; 
// Removed unused basicA1 import
import SetupQuiz from '../../../components/SetupQuiz';
import BodyWrapper from '../../../components/BodyWrapper';
import NavWrapper from '../../../components/NavWrapper';



interface Place {
  english: string;
  finnish: string;
  pronunciation?: string;
}


function PlacesQuizPage() {
  
  const {child} = useParams<{child?: string}>();

 const keyType = child ?
   child
   .toLowerCase()
   .replace("-quiz", "")
   .replace("basic-places", "places") // Convert "basic-numbers" to "basicNumbers"
    .replace("places-sentence", "placesSentence") // Convert "basic-numbers" to "basicNumbers"
    .replace("hard-places", "hardPlaces")
   : "places"; // Default to "numbers" if child is undefined
 
    // console.log("numberTypeKey",keyType);
 
   const quizTypeMap: Record<string, string> = {
     places: "basic",
     placesSentence: "sentence",
     hadPlaces: "hard",

   };
   
   const quizType = (quizTypeMap[keyType] === "sentence" ? "sentence" : quizTypeMap[keyType] === "hard" ? "hard" : "basic") as "basic" | "sentence" | "hard"; // Determine quiz type based on numberTypeKey
 
   const allItems = (placeData[keyType as keyof typeof placeData] || placeData.places) as Place[] ; // Type assertion to Number[]
   
   const title = quizType === "sentence" ? "Places in sentence " : quizType === "hard" ? "Hard Places " : " Basic Places ";
    // console.log("Map",quizTypeMap);
 



   return (

                 <BodyWrapper>

      <NavWrapper link="/beginars/most-common-places-in-the-city/places" title="← Back to Basic Places Lessons"> </NavWrapper>

          <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType}  title={title} />
    </div>

      </BodyWrapper>

  );
}

export default PlacesQuizPage;
