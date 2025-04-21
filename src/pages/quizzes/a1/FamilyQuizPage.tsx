import React from "react";
import { Link, useParams } from "react-router-dom";
import { familyData } from "../../../data/basicA1";
import SetupQuiz from "../../../components/SetupQuiz"; // Changed to SetupQuiz

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
: "basicFamily";  // Default to "numbers" if child is undefined
 
    console.log("numberTypeKey",keyType);
 
   const quizTypeMap: Record<string, string> = {
    basicFamily: "basic family", // Maps "basicFamily" to "basic".
    extendedFamily: "extended family", // Maps "extendedFamily" to "extended".
    stepFamily: "step family", // Maps "stepFamily" to "step".
    maritalStatus: "marital status", // Maps "maritalStatus" to "marital".

   };
   
   const quizType = (quizTypeMap[keyType] || "basic") as  "basic" | "extended" | "step" | "marital"; // Determine quiz type based on numberTypeKey
 
   const allItems = (familyData[keyType as keyof typeof familyData] || familyData.basicFamily) as Family[] ; // Type assertion to Number[]
   
    // console.log("Map",quizTypeMap);
 



   return (
    <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
    <Link to="/beginars/family/family-members" className="text-teal-700 hover:underline mb-6 inline-block">
      ← Back to Basic Family Lessons
    </Link>
      <SetupQuiz items={allItems} quizType={quizType}  />
    </div>


  );
}

export default FamilyQuizPage;

