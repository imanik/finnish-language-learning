
import React from "react";
import { Link, useParams } from "react-router-dom";
import { adjectivesData } from "../../../data/basicA1";
import SetupQuiz from "../../../components/SetupQuiz"; // Changed to SetupQuiz
import BodyWrapper from "../../../components/BodyWrapper";
import NavWrapper from "../../../components/NavWrapper";


// Define types
interface Adjective {
  finnish: string;
  english: string;
  pronunciation: string;
}




function BasicAdjectiveQuizPage() {
  
  const {child} = useParams<{child?: string}>();

 const keyType = child ?
   child
   .toLowerCase()
   .replace("-quiz", "")
   .replace("basic-adjectives", "basicAdjectives") // Convert "basic-adjectives" to "basicAdjectives"
   .replace("hard-adjectives", "hardAdjectives") // Convert "basic-adjectives" to "basicAdjectives"
   : "basicAdjectives"; // Default to "numbers" if child is undefined
 
  //  console.log("numberTypeKey",keyType);
 
   const quizTypeMap: Record<string, string> = {
    basicAdjectives: "basic",
    hardAdjectives: "hard",
   };
   
   const quizType = (quizTypeMap[keyType] === "hard" ? "hard" : "basic") as "basic" | "hard"; // Determine quiz type based on numberTypeKey
 
   const allItems = (adjectivesData[keyType as keyof typeof adjectivesData] || adjectivesData.basicAdjectives) as Adjective[] ; // Type assertion to Number[]
   
    //  console.log("Map",quizType);

    const title = (quizType === "hard" ? "Hard Adjectives " : "Basic Adjectives ");
 



   return (


        <BodyWrapper>
     <NavWrapper link="/beginars/adjective/good-bad-ugly" title="← Back to Basic Adjectives Lessons"> </NavWrapper>
          <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType} title={title} />
    </div>
    </BodyWrapper>


  );
}


export default BasicAdjectiveQuizPage;