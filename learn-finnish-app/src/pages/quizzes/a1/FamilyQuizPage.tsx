import React from "react";
import { Link, useParams } from "react-router-dom";
import { familyData } from "../../../data/basicA1";
import SetupQuiz from "../../../components/SetupQuiz"; // Changed to SetupQuiz
import NavWrapper from '../../../components/wrapper/NavWrapper';
import BodyWrapper from '../../../components/wrapper/BodyWrapper';


interface Family {
  english: string;
  finnish: string;
  pronunciation: string;
}



// FamilyQuizzes Component
function FamilyQuizPage() {

  // Function to start the quiz by selecting a random family member.
  const {child} = useParams<{child?: string}>();

 const keyType = child ?
   child
   .toLowerCase() // Convert to lowercase for consistency (e.g., "Basic-Family-Quiz" -> "basic-family-quiz").
   .replace("-quiz", "") // Remove "-quiz" suffix (e.g., "basic-family-quiz" -> "basic-family").
   .replace("basic-family", "basicFamily") // Replace "basic-family" with "basicFamily".
   .replace("extended-family", "extendedFamily") // Replace "extended-family" with "extendedFamily".
   .replace("step-family", "stepFamily") // Replace "step-family" with "stepFamily".
   .replace("marital-status", "maritalStatus") // Replace "marital-status" with "maritalStatus".
    .replace("hard-family", "hardFamily") // Replace "hard-family" with "hardFamily".
: "basicFamily";  // Default to "numbers" if child is undefined
 
    // console.log("numberTypeKey",keyType);
 
   const quizTypeMap: Record<string, string> = {
    basicFamily: "basic", // Maps "basicFamily" to "basic".
    extendedFamily: "extended", // Maps "extendedFamily" to "extended".
    stepFamily: "step", // Maps "stepFamily" to "step".
    maritalStatus: "marital", // Maps "maritalStatus" to "marital".
    hardFamily: "hard", // Maps "hardFamily" to "hard".

   };
   
   const quizType = (quizTypeMap[keyType] ===  "extended" ? "extended" : quizTypeMap[keyType] === "step" ? "step" : quizTypeMap[keyType] === "hard" ? "hard" : "basic" ) as  "basic" | "extended" | "step" | "marital" | "hard"; // Determine quiz type based on numberTypeKey
 
   const allItems = (familyData[keyType as keyof typeof familyData] || familyData.basicFamily) as Family[] ; // Type assertion to Number[]
   
   const title = (quizType === "hard" ? "Hard Family " : quizType === "extended" ? "Extended Family " : quizType === "step" ? "Step Family " : quizType === "marital" ? "Marital Status " : "Basic Family ");


    // console.log("Map",quizTypeMap);
 



   return (
     <BodyWrapper>

      <NavWrapper link="/beginars/family/family-members" title="← Back to Basic Family Members Lessons"> </NavWrapper>

          <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType}  title={title} />
    </div>

      </BodyWrapper>


  );
}

export default FamilyQuizPage;

