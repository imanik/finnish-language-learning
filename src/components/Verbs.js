import React from "react";
import { Link } from "react-router-dom";

function Verbs() {
  return (
    <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Finnish Verbs</h2>
      <p className="text-gray-700 mb-4">Learn about Finnish verb conjugation and tenses.</p>
      <Link to="/verbs">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Learn More</button>
      </Link>
    </div>
  );
}

export default Verbs;