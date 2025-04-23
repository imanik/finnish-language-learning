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
          .replace("basic-greeting", "basicGreeting")
      : "basicGreeting";
  
  
  
    const quizTypeMap: Record<string, string> = {
      basicGreeting: "basic",
    };
    const quizType = (quizTypeMap[keyType] || "basic") as "basic";
  
   
      const allItems = (greetingsData[keyType as keyof typeof greetingsData] || greetingsData.basicGreetings) as Greeting[] ; // Type assertion to Number[]
      
       // console.log("Map",quizTypeMap);
    
   
   



   // Render the component UI.
   return (
    <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
    <Link to="/beginars/greeting/how-are-you" className="text-teal-700 hover:underline bg-teal-100 mb-6 inline-block fixed top-0 left-0 w-full  px-4 py-2 shadow-md">
      ← Back to Basic Greetings Lessons
    </Link>
          <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType}  />
    </div>
    </div>


  );
}

    export default GreetingsQuizPage;