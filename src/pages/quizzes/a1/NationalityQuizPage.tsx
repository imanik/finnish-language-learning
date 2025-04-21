import React from "react";
import { Link, useParams } from "react-router-dom";
import { nationalityData } from "../../../data/basicA1";
import SetupQuiz from "../../../components/SetupQuiz"; // Changed to SetupQuiz


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
            nationalitySentence : 'Nationality Sentence',
          }

          const quizType = (quizTypeMap[keyType] || 'basic') as 'basic';
          const allItems = (nationalityData[keyType as keyof typeof nationalityData] || nationalityData.nationalty) as Nationality[] ; // Type assertion to Number[]
      
// Render the component UI.
return (
<div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
<Link to="/beginars/nationality/what-nationality-are-you" className="text-teal-700 hover:underline mb-6 inline-block">
 ← Back to Nationality Lessons
</Link>
 <SetupQuiz items={allItems} quizType={quizType}  />
</div>


);
  
}

export default NationalityQuizPage;