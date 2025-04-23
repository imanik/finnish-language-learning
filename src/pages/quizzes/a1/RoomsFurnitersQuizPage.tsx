
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { roomData } from '../../../data/basicA1'; 
// Removed unused basicA1 import
import SetupQuiz from '../../../components/SetupQuiz';


interface RoomsFurniture {
  english: string;
  finnish: string;
  pronunciation?: string;
}


function RoomsFurnituresQuizPage() {
  
  const {child} = useParams<{child?: string}>();

 const keyType = child ?
   child
   .toLowerCase()
   .replace("-quiz", "")
   .replace("rooms-furnitures", "roomsFurnitures") // Convert "basic-numbers" to "basicNumbers"
  //  .replace("sentence-roomsFurnitures", "sentenceRoomsFurnitures") // Convert "basic-numbers" to "basicNumbers"
   : "roomsFurnitures"; // Default to "numbers" if child is undefined
 
    // console.log("numberTypeKey",keyType);
 
   const quizTypeMap: Record<string, string> = {
     roomsFurnitures: "Rooms, Furnitures",
    // sentenceRoomsFurnitures: "sentence roomsFurnitures",

   };
   
   const quizType = (quizTypeMap[keyType] || "basic") as "basic"; // Determine quiz type based on numberTypeKey
 
   const allItems = (roomData[keyType as keyof typeof roomData] || roomData.roomsFurnitures) as RoomsFurniture[] ; // Type assertion to Number[]
   
    //  console.log("Map",quizType);
 



   return (
    <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
    <Link to="/beginars/most-common-rooms-and-furnitures/rooms-furnitures" className="text-teal-700 hover:underline bg-teal-100 mb-6 inline-block fixed top-0 left-0 w-full  px-4 py-2 shadow-md">
      ← Back to Basic Rooms & Furnitures Lessons
    </Link>
    <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType}  />
    </div>
    </div>


  );
};

export default RoomsFurnituresQuizPage;
