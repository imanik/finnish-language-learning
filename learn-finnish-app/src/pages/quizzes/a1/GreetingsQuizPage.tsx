import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {greetingsData} from '../../../data/basicA1';
import SetupQuiz from '../../../components/SetupQuiz'; // Changed to SetupQuiz
import NavWrapper from '../../../components/wrapper/NavWrapper';
import BodyWrapper from '../../../components/wrapper/BodyWrapper';
    
    interface Greeting {

      english: string,
      finnish: string,
      pronunciation: string,

    }

 
   
    
 function GreetingsQuizPage() {

   const { child } = useParams<{ child?: string }>();
  
  
    const keyType = child
      ? child
          .toLowerCase()
          .replace("-quiz", "")
          .replace("basic-greetings", "basicGreetings")
          .replace("hard-greetings", "hardGreetings") // Convert "basic-numbers" to "basicNumbers"
          
      : "basicGreeting";
  
  
  
    const quizTypeMap: Record<string, string> = {
      basicGreetings: "basic",
      hardGreetings: "hard",
    };
    const quizType = (quizTypeMap[keyType] === "hard" ? "hard" : "basic") as "basic" | "hard";
  
   
      const allItems = (greetingsData[keyType as keyof typeof greetingsData] || greetingsData.basicGreetings) as Greeting[] ; // Type assertion to Number[]
      
       // console.log("Map",quizTypeMap);
      const title = quizType === "hard" ? "Hard Greetings " : "Basic Greetings ";
   
   



   // Render the component UI.
   return (

     <BodyWrapper>

      <NavWrapper link="/beginars/greeting/how-are-you" title="← Back to Basic Greetings Lessons"> </NavWrapper>

          <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType}  title={title} />
    </div>

      </BodyWrapper>

  );
}

    export default GreetingsQuizPage;