import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { LINGVANEX_API_KEY, LINGVANEX_ENDPOINT } from "../config"; // ✅ used config file
import { a1Conversation } from "../data";



function ConversationPage() {
  const { topic, subtopic, child } = useParams<{
    topic?: string;
    subtopic?: string;
    child?: string;
  }>();

  const [searchWord, setSearchWord] = useState("");
  const [translation, setTranslation] = useState("");
  
  const toSlug = (text: string): string =>
    text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

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

      const data = response.data as { result?: string };
      
      setTranslation(data.result || "No translation found");
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
        <div className="bg-gradient-to-br from-teal-50 to-teal-200 rounded-xl shadow-lg p-6 max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold text-teal-800 mb-4">
            Translate to Finnish
          </h2>
          <div className="flex space-x-2 mb-4">
            <input
            type="text"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
            placeholder="Type your guess"
            className="bg-gray-900 border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
            onClick={handleTranslate}
            className="bg-gradient-to-r from-purple-500 to-teal-500 text-white px-4 py-2 rounded hover:bg-teal-300 hover:text-teal-900 transform hover:scale-110 transition duration-200"
            >
            Translate
            </button>
        </div>
          {/* <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter English word or sentence(e.g., 'cat')"
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
              className="p-3 bg-gray-900 border border-gray-300 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              onClick={handleTranslate}
              className="bg-gradient-to-r from-purple-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Translate
            </button>
          </div> */}
          {translation && (
            <p className="mt-4 text-gray-800">
              <strong>Result:</strong> {translation}
            </p>
          )}
        </div>
        <div className="bg-gradient-to-br from-teal-50 to-teal-200 rounded-xl shadow-lg p-6 max-w-2xl mx-auto mb-8">

          <div className="text-center">
            <Link to="/conversation/introduction">
                <button className="mt-4 bg-teal-900 text-white px-4 py-2 rounded hover:bg-teal-300 hover:text-teal-900 transform hover:scale-110 transition duration-200">
                   Start Now
                </button>
            </Link>
          </div>
        </div>


        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-2">Topics</h3>
                  {a1Conversation && a1Conversation.length > 0 ? (
                    a1Conversation.map((topic) => (
                      <div key={topic.title}>
                        <section className="bg-gray-900 rounded-lg border border-gray-300 p-4 mb-6">
                        <h3 className="text-xl font-semibold text-teal-200 mb-2">{topic.title}</h3>
                          {topic.subtopics && topic.subtopics.length > 0 && (
                            <ul className="ml-6 list-disc">
                              {topic.subtopics.map((subtopic) => (
                                <li key={subtopic.title}>
                                  <Link to={`/beginars/${toSlug(topic.title)}/${toSlug(subtopic.title)}`}>
                                    <span className="text-teal-300 font-medium hover:text-teal-600"> {subtopic.title} (Explanation)</span>
                                  </Link>
                                  {subtopic.childTopics && subtopic.childTopics.length > 0 && (
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 mt-2  ">
                                      {subtopic.childTopics.map((child) => (
                                        <li key={child} >
                                          <Link
                                            to={`/conversation/${toSlug(child)}`}
                                          >
                                            <span className="text-teal-300 font-medium hover:text-teal-300">{child}</span>
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </li>
                              ))}
                            </ul>
                          )}
                        </section>
                      </div>
                    ))
                  ) : (
                    <p>Loading topics...</p>
                  )}
                </div>
      </div>
    </div>
  );
}

export default ConversationPage;
