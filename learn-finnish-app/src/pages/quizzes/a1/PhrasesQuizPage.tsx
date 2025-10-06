
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { phraseData } from '../../../data/basicA1'; 
// Removed unused basicA1 import
import SetupQuiz from '../../../components/SetupQuiz';
import BodyWrapper from '../../../components/BodyWrapper';
import NavWrapper from '../../../components/NavWrapper';



interface Phrases {
  english: string;
  finnish: string;
  pronunciation?: string;
}


function PhrasesQuizPage() {
  
  const {child} = useParams<{child?: string}>();

 const keyType = child ?
   child
   .toLowerCase()
   .replace("-quiz", "")
  //  .replace("basic-phrases", "phrases") // Convert "basic-numbers" to "basicNumbers"
  .replace("phrases-sentence", "phrasesSentence") // Convert "basic-numbers" to "basicNumbers"
   : "phrases"; // Default to "numbers" if child is undefined
 
    // console.log("numberTypeKey",keyType);
 
   const quizTypeMap: Record<string, string> = {
     basicPhrases: "basic",
    sentencePhrases: "sentence",
    hardPhrases: "hard",
   };


   
   const quizType = (quizTypeMap[keyType] || "sentence" ? "sentence" : quizTypeMap[keyType] === "hard" ? "hard" : "basic") as "basic" | "ordinal" | "sentence" | "hard"; // Determine quiz type based on numberTypeKey
 
   const allItems = (phraseData[keyType as keyof typeof phraseData] || phraseData.phrases) as Phrases[] ; // Type assertion to Number[]
   
    // console.log("Map",quizTypeMap);
 
  const title = quizType === "sentence" ? "Phrases In Sentence " : quizType === "hard" ? "hard phrases " : "basic phrases ";



   return (


                     <BodyWrapper>

      <NavWrapper link="/beginars/some-survival-finnish-phrases/phrases" title="← Back to Basic Phrases Lessons"> </NavWrapper>

          <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType}  title={title} />
    </div>

      </BodyWrapper>



  );
}

export default PhrasesQuizPage;
