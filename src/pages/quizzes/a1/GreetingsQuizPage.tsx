import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {greetingsData} from '../../../data/basicA1';
import SetupQuiz from '../../../components/SetupQuiz'; // Changed to SetupQuiz

    
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
    <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
    <Link to="/beginars/greeting/how-are-you" className="text-teal-700 hover:underline bg-teal-100 mb-6 inline-block fixed top-0 left-0 w-full  px-4 py-2 shadow-md">
      ← Back to Basic Greetings Lessons
    </Link>
          <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType} title={title}  />
    </div>
    </div>


  );
}

    export default GreetingsQuizPage;