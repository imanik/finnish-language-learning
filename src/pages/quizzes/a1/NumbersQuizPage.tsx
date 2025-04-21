
import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {numberData} from '../../../data/basicA1'; // Removed unused basicA1 import
import SetupQuiz from '../../../components/SetupQuiz'; // Changed to SetupQuiz

interface Number {
  english: string;
  finnish: string;
  pronunciation: string;
}




function NumbersQuizPage() {

  const {child} = useParams<{child?: string}>();
  

  const numberTypeKey = child ?
  child
  .toLowerCase()
  .replace("-quiz", "")
  .replace("basic-numbers", "basicNumbers") // Convert "basic-numbers" to "basicNumbers"
  .replace("ordinal-numbers", "ordinalNumbers") // Replace "extended-family" with "extendedFamily".
  .replace("sentence-numbers", "sentenceNumbers") // Replace "step-family" with "stepFamily".
  : "basicNumbers"; // Default to "numbers" if child is undefined

  // console.log("numberTypeKey",numberTypeKey);

  const quizTypeMap: Record<string, string> = {
    basicNumbers: "basic numbers",
    ordinalNumbers: "ordinal numbers",
    sentenceNumbers: "sentence numbers",
  };
  
  const quizType = (quizTypeMap[numberTypeKey] || "basic") as "basic" | "ordinal" | "sentence"; // Determine quiz type based on numberTypeKey

  const allItems = (numberData[numberTypeKey as keyof typeof numberData] || numberData.basicNumbers) as Number[] ; // Type assertion to Number[]
  

  return (
    <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
    <Link to="/beginars/number/ready-one-two-three" className="text-teal-700 hover:underline mb-6 inline-block">
      ← Back to Basic Number Lessons
    </Link>

<SetupQuiz items={allItems} quizType={quizType} />

</div>
);
};

export default NumbersQuizPage;