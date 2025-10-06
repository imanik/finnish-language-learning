
import React from 'react';
import {Link, useParams} from 'react-router-dom';
import { colorData } from '../../../data/basicA1';
import SetupQuiz from '../../../components/SetupQuiz'; // Changed to SetupQuiz
import BodyWrapper from '../../../components/BodyWrapper';
import NavWrapper from '../../../components/NavWrapper';

interface Color {
  english: string;
  finnish: string;
  pronunciation?: string; // optional
}



 function ColorsQuizPage() {
  const {child} = useParams<{child?: string}>();


    const keyType = child
    ? child
        .toLowerCase() // Convert to lowercase for consistency (e.g., "Basic-Family-Quiz" -> "basic-family-quiz").
        .replace("-quiz", "") // Remove "-quiz" suffix (e.g., "basic-family-quiz" -> "basic-family").
        .replace("basic-colors", "basicColors") // Replace "basic-family" with "basicFamily".
        .replace("extended-colors", "extendedColors") // Replace "extended-family" with "extendedFamily".
        .replace("hard-colors", "hardColors") // Replace "extended-family" with "extendedFamily".
    : "basicColors";

  
    const quizTypeMap: Record<string, string> = {
      basicColors: "basic",
      extendedColors: "extended",
      hardColors: "hard",
    };
    
    const quizType = (quizTypeMap[keyType] === "extended" ? "extended" : quizTypeMap[keyType] === "hard" ? "hard" : "basic") as "basic" | "hard" | "extended"; // Determine quiz type based on numberTypeKey
    const allItems = (colorData[keyType as keyof typeof colorData] || colorData.basicColors) as Color[] ; // Type assertion to Number[]
    
    console.log("Map",keyType);
    const title = (quizType === "hard" ? "Hard Colors " : quizType === "extended" ? "Extended Colors " : "Basic Colors ");
 
    return (


         <BodyWrapper>
     <NavWrapper link="/beginars/color/rainbow" title="← Back to Basic  Color Lessons"> </NavWrapper>
          <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType} title= {title}/>
    </div>
    </BodyWrapper>
 
   );
}

export default ColorsQuizPage;