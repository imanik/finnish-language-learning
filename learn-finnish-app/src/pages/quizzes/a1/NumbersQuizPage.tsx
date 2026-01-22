
import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {numberData} from '../../../data/basicA1'; // Removed unused basicA1 import
import SetupQuiz from '../../../components/SetupQuiz'; // Changed to SetupQuiz
import NavWrapper from '../../../components/wrapper/NavWrapper';
import BodyWrapper from '../../../components/wrapper/BodyWrapper';

// import { keyboard } from '@testing-library/user-event/dist/keyboard';

interface NumberItem {
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

   const allItems = (numberData[keyType as keyof typeof numberData] || numberData.basicNumbers) as NumberItem[] ; // Type assertion to Number[]
   
  
  const title = quizType === "sentence" ? "Numbers In Sentence " : quizType === "hard" ? "hard numbers " : "basic numbers ";

  return (

                 <BodyWrapper>

      <NavWrapper link="/beginars/number/ready-one-two-three" title="← Back to Basic Number Lessons"> </NavWrapper>

          <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType}  title={title} />
    </div>

      </BodyWrapper>
  )
}

export default NumbersQuizPage;