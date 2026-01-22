
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { roomData } from '../../../data/basicA1'; 
// Removed unused basicA1 import
import SetupQuiz from '../../../components/SetupQuiz';
import NavWrapper from '../../../components/wrapper/NavWrapper';
import BodyWrapper from '../../../components/wrapper/BodyWrapper';



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
   .replace("basic-rooms-furnitures", "roomsFurnitures") // Convert "basic-numbers" to "basicNumbers"
   .replace("hard-rooms-furnitures", "hardRoomsFurnitures")
  //  .replace("sentence-roomsFurnitures", "sentenceRoomsFurnitures") // Convert "basic-numbers" to "basicNumbers"
   : "roomsFurnitures"; // Default to "numbers" if child is undefined
 
    // console.log("numberTypeKey",keyType);
 
   const quizTypeMap: Record<string, string> = {
     roomsFurnitures: "basic",
     hardRoomsFurnitures: "hard",
    // sentenceRoomsFurnitures: "sentence roomsFurnitures",

   };
   
   const quizType = (quizTypeMap[keyType] === "hard" ? "hard" : "basic") as "basic" | "hard"; // Determine quiz type based on numberTypeKey
 
   const allItems = (roomData[keyType as keyof typeof roomData] || roomData.roomsFurnitures) as RoomsFurniture[] ; // Type assertion to Number[]
   
   const title = quizType === "hard" ? "hard Rooms, Funrnitures " : "basic Rooms, Funrnitures "
    //  console.log("Map",quizType);
 



   return (


                 <BodyWrapper>

      <NavWrapper link="/beginars/most-common-rooms-and-furnitures/rooms-furnitures" title="← Back to Basic Rooms & Furnitures Lessons"> </NavWrapper>

          <div className='mt-16'>
      <SetupQuiz items={allItems} quizType={quizType}  title={title} />
    </div>

      </BodyWrapper>
  );
}

export default RoomsFurnituresQuizPage;
