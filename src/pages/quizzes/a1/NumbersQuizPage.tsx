
import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {numberData} from '../../../data/basicA1'; // Removed unused basicA1 import
import SetupQuiz from '../../../components/SetupQuiz'; // Changed to SetupQuiz
import { keyboard } from '@testing-library/user-event/dist/keyboard';

interface Number {
  english: string;
  finnish: string;
  pronunciation: string;
}




function NumbersQuizPage() {

  const {child} = useParams<{child?: string}>();
  

  const keyType = child ?
  child
  .toLowerCase()
  .replace("-quiz", "")
  .replace("basic-numbers", "basicNumbers") // Convert "basic-numbers" to "basicNumbers"
  .replace("ordinal-numbers", "ordinalNumbers") // Replace "extended-family" with "extendedFamily".
  .replace("sentence-numbers", "sentenceNumbers") // Replace "step-family" with "stepFamily".
  .replace("hard-numbers", "hardNumbers") // Convert "basic-numbers" to "basicNumbers"
  : "basicNumbers"; // Default to "numbers" if child is undefined

  // console.log("numberTypeKey",numberTypeKey);

  const quizTypeMap: Record<string, string> = {
    basicNumbers: "basic",
    ordinalNumbers: "ordinal",
    sentenceNumbers: "sentence",
    hardNumbers: "hard",
  };
  
  const quizType = (quizTypeMap[keyType] === "sentence" ? "sentence" : quizTypeMap[keyType] === "hard" ? "hard" : "basic") as "basic" | "ordinal" | "sentence" | "hard"; // Determine quiz type based on numberTypeKey

  const allItems = (numberData[keyType as keyof typeof numberData] || numberData.basicNumbers) as Number[] ; // Type assertion to Number[]
  
  const title = quizType === "sentence" ? "Numbers In Sentence " : quizType === "hard" ? "hard numbers " : "basic numbers ";

  return (
    <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
    <Link to="/beginars/number/ready-one-two-three" className="text-teal-700 hover:underline bg-teal-100 mb-6 inline-block fixed top-0 left-0 w-full  px-4 py-2 shadow-md">
      ← Back to Basic Number Lessons
    </Link>

    <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType} title={title} />
    </div>

</div>
);
};

export default NumbersQuizPage;