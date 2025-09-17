import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { LINGVANEX_API_KEY, LINGVANEX_ENDPOINT } from "../config"; // ✅ used config file
import { a1Topics } from "../data";



function ConversationPage() {
  const { topic, subtopic, child } = useParams<{
    topic?: string;
    subtopic?: string;
    child?: string;
  }>();

  const [searchWord, setSearchWord] = useState("");
  const [translation, setTranslation] = useState("");

  const handleTranslate = async () => {
    try {
      const response = await axios.post(
        LINGVANEX_ENDPOINT, // ✅ from config
        {
          from: "en",
          to: "fi",
          data: searchWord,
          platform: "api",
        },
        {
          headers: {
            Authorization: `Bearer ${LINGVANEX_API_KEY}`, // ✅ from config
            "Content-Type": "application/json",
          },
        }
      );

      setTranslation(response.data.result || "No translation found");
    } catch (error: any) {
      console.error("Translation error:", error.message);
      setTranslation(
        "Error translating: " +
          (error.response?.data?.message || error.message)
      );
    }
  };


  return (
    <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
      <Link
        to="/"
        className="text-teal-700 hover:underline bg-teal-100 mb-6 inline-block fixed top-0 left-0 w-full px-4 py-2 shadow-md"
      >
        ← Back to Home
      </Link>

      <div className="mt-16">
        {/* 🔥 Translate Box */}
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold text-teal-800 mb-4">
            Translate to Finnish
          </h2>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter English word (e.g., 'cat')"
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              onClick={handleTranslate}
              className="bg-gradient-to-r from-purple-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Translate
            </button>
          </div>
          {translation && (
            <p className="mt-4 text-gray-800">
              <strong>Result:</strong> {translation}
            </p>
          )}
        </div>
        <div className="g-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto mb-8">
<div className="flex gap-4">

            <Link to="/conversation/introduction">
                <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-900 transform hover:scale-110 transition duration-200">
                    Learn More
                </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConversationPage;
