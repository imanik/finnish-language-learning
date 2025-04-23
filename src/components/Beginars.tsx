
import React from "react";
import { Link } from "react-router-dom";

function Beginars() {
  return (
    <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Beginner Finnish Topics</h2>
      <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
      <p className="text-gray-700 mb-4">Level A1: A1.1 to A1.3</p>
      <p className="text-gray-700 mb-4">You can find information about level A1 on this page. Hopefully it gives you some insight as to where to start when you’re just starting out with learning the Finnish language.</p>
      
      </section>
      <Link to="/beginars">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Learn More</button>
      </Link>
    </div>
  );
}


export default Beginars;