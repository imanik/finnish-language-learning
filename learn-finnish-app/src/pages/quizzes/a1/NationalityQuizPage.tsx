import React from "react";
import { Link, useParams } from "react-router-dom";
import { nationalityData } from "../../../data/basicA1";
import SetupQuiz from "../../../components/SetupQuiz"; // Changed to SetupQuiz
import NavWrapper from '../../../components/wrapper/NavWrapper';
import BodyWrapper from '../../../components/wrapper/BodyWrapper';


interface Nationality {
  english: string,
  finnish: string,

}





function NationalityQuizPage() {

      const { child } = useParams<{child: string}>();

  // Determine the key to access family data based on the URL parameter 'child'.
  // If child exists, transform it (e.g., "basic-family-quiz" -> "basicFamily"), otherwise default to "basicFamily".

          const keyType = child ?
          child
          .toLowerCase()
          .replace("-quiz","")
          .replace("nationality-sentence","nationalitySentence") 
          : "nationalitySentence";

          // Create a map for type "basic"

          const quizTypeMap: Record<string, string> = {
            basicNationality: "basic",
            sentenceNationality: "sentence",
            hardNationality: "hard",
          }

          const  quizType = (quizTypeMap[keyType] === "sentence" ? "sentence" : quizTypeMap[keyType] === "hard" ? "hard" : "basic") as "basic" | "sentence" | "hard"; 
          const allItems = (nationalityData[keyType as keyof typeof nationalityData] || nationalityData.nationalty) as Nationality[] ; // Type assertion to Number[]

            const title = quizType === "sentence" ? "Nationality In Sentence" : quizType === "hard" ? "Hard Nationality " : "Basic Nationality ";
 
      
// Render the component UI.
return (


             <BodyWrapper>

      <NavWrapper link="/beginars/nationality/what-nationality-are-you" title="← Back to Basic Nationality Lessons"> </NavWrapper>

          <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType}  title={title} />
    </div>

      </BodyWrapper>

);
  
}

export default NationalityQuizPage;