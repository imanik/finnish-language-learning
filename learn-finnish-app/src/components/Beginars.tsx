
import React from "react";
import { Link } from "react-router-dom";

function Beginars() {
  return (
    <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-semibold text-teal-700 mb-4">Beginner Finnish Topics</h2>
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
    </div>
  );
}


export default Beginars;