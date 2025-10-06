import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { LINGVANEX_API_KEY, LINGVANEX_ENDPOINT } from "../config"; // ✅ used config file
import { a1Conversation } from "../data";
import BodyWrapper from "../components/BodyWrapper";
import PageWrapper from "../components/PageWrapper";



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
    <BodyWrapper >
      <Link
        to="/"
        className="text-teal-700 hover:underline bg-teal-100 mb-6 inline-block fixed top-0 left-0 w-full px-4 py-2 shadow-md"
      >
        ← Back to Home
      </Link>

      <div className="mt-16">
        {/* 🔥 Translate Box */}
       <PageWrapper title="Translate to Finnish">
          
          <div className="flex space-x-2 mb-4">
            <input
            type="text"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
            placeholder="Type your guess"
            className="bg-gray-900 border border-teal-800 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
            onClick={handleTranslate}
            className="bg-gradient-to-r from-purple-500 to-teal-500 text-white px-4 py-2 rounded hover:bg-teal-300 hover:text-teal-900 transform hover:scale-110 transition duration-200"
            >
            Translate
            </button>
        </div>
       
          {translation && (
            <p className="mt-4 text-gray-800">
              <strong>Result:</strong> {translation}
            </p>
          )}
        
    


            <PageWrapper title="Topics">
                  {a1Conversation && a1Conversation.length > 0 ? (
                    a1Conversation.map((topic) => (
                      <div key={topic.title}>
                        <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                          <h3 className="text-xl font-semibold text-teal-200 mb-2">{topic.title}</h3>
                          {topic.subtopics && topic.subtopics.length > 0 && (
                            <ul className="ml-6 list-disc">
                              {topic.subtopics.map((subtopic) => (
                                <li key={subtopic.title}>
                                   <h4 className="text-xl font-semibold text-teal-300 mb-2">{subtopic.title}</h4>
                                  
                                  {subtopic.childTopics && subtopic.childTopics.length > 0 && (
                                    <ul className="list-disc list-inside text-teal-400 space-y-2 mb-4 mt-2  ">
                                      {subtopic.childTopics.map((child) => (
                                        <li key={child} >
                                          <Link
                                            to={`/conversation/${toSlug(child)}`}
                                          >
                                            <span className="text-teal-300 font-medium hover:text-teal-100">{child}</span>
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
            </PageWrapper>
      </PageWrapper>
                </div>
    </BodyWrapper>
  );
}

export default ConversationPage;
