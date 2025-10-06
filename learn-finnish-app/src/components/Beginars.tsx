
import React from "react";
import { Link } from "react-router-dom";
import CardWrapper from "./CardWrapper";

function Beginars() {
  return (
<CardWrapper title="Beginner Finnish Topics">
      
      <section className="bg-gray-900 rounded-lg border border-teal-700 p-4 mb-6">
      <p className="text-teal-300 mb-4">Level A1: A1.1 to A1.3</p>
      <p className="text-gray-300 mb-4">You can find information about level A1 on this page. Hopefully it gives you some insight as to where to start when you’re just starting out with learning the Finnish language.</p>
      
      </section>
      <Link to="/beginars">
        <button className="bg-teal-900 text-white px-4 py-2 rounded hover:bg-teal-300 hover:text-teal-900 transform hover:scale-110 transition duration-200">Vocabulary</button>
      </Link>
      <br /><br />
      <Link to="/conversation">
        <button className="bg-teal-900 text-white px-4 py-2 rounded hover:bg-teal-300 hover:text-teal-900 transform hover:scale-110 transition duration-200">Conversation</button>
      </Link>
            <br /><br />
      <Link to="/daily-challenge">
        <button className="bg-teal-900 text-white px-4 py-2 rounded hover:bg-teal-300 hover:text-teal-900 transform hover:scale-110 transition duration-200">Daily Challenge</button>
      </Link>
    </CardWrapper >
  );
}


export default Beginars;