import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { a1Topics } from "../data";

// Define types for topic components
interface TopicComponents {
  [key: string]: React.FC;
}

// Define translation response type
interface TranslationResponse {
  translatedText: string;
}

// Define topic components
const topicComponents: TopicComponents = {
  "language-basics": () => <div>Language Basics Component</div>,
  "basic-greetings": () => <div>Greetings Component</div>,
};

function BeginarsPage() {


  const { topic, subtopic, child } = useParams<{ topic?: string; subtopic?: string; child?: string }>();
  const [searchWord, setSearchWord] = useState("");
  const [translation, setTranslation] = useState("");

  const toSlug = (text: string): string =>
    text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

  const handleTranslate = async () => {
    try {
      const apiKey = 'a_jtAZtjUGaQkvUO3an57P0czNVmvlVSPdIBKe4N9XGw5F8bzttlkrPpj2tmVhiJCxl0NnNGsnTBOdY64k'; // Remove after fix

//      const apiKey = import.meta.env?.VITE_LINGVANEX_API_KEY as string;
      console.log('API Key:', apiKey); // Debug log
      if (!apiKey) throw new Error("API key missing in .env");
      const response = await axios.post<TranslationResponse>(
        "https://api.lingvanex.com/v1/translate",
        { text: searchWord, source: "en", target: "fi" },
        { headers: { Authorization: `Bearer ${apiKey}` } }
      );
      setTranslation(response.data.translatedText || "No translation found");
    } catch (error: any) {
      console.error("Translation error:", error.message);
      setTranslation("Error translating: " + (error.response?.data?.message || error.message));
    }
  };

  const getDynamicContent = (): React.ReactNode => {
    const matchedTopic = a1Topics.find((t) => toSlug(t.title) === topic);
    if (!matchedTopic && topic) {
      return (
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-teal-800 mb-4">Not Found</h2>
          <p className="text-gray-600">Topic not found.</p>
        </div>
      );
    }

    const matchedSubtopic = matchedTopic?.subtopics?.find((s) => toSlug(s.title) === subtopic);
    if (topic && subtopic && !child) {
      if (!matchedSubtopic) {
        return (
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-teal-800 mb-4">Not Found</h2>
            <p className="text-gray-600">Subtopic not found.</p>
          </div>
        );
      }
      const SubtopicComponent = topicComponents[toSlug(matchedSubtopic.title)];
      if (SubtopicComponent) {
        return <SubtopicComponent />;
      }
      return (
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-teal-800 mb-4">{matchedSubtopic.title}</h2>
          <p className="text-gray-600">Content coming soon!</p>
        </div>
      );
    }
    return null;
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
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold text-teal-800 mb-4">Translate to Finnish</h2>
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
          {translation && <p className="mt-4 text-gray-800">{translation}</p>}
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold text-teal-800 mb-4">Beginner Finnish Topics</h2>
          <h4 className="text-xl font-semibold text-teal-700 mb-6">Level A1: A1.1 to A1.3</h4>
          <div className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
            <blockquote className="text-xl italic font-semibold text-gray-500 dark:text-white mb-6">
              “Can understand and use familiar everyday expressions and very basic phrases aimed at the satisfaction of needs of a concrete type. Can introduce him/herself and others and can ask and answer questions about personal details such as where he/she lives, people he/she knows and things he/she has. Can interact in a simple way provided the other person talks slowly and clearly and is prepared to help.”
              <br />
              <br />- Council of Europe
            </blockquote>
          </div>
          <h3 className="text-xl font-semibold text-teal-700 mb-2">Level A1 Summary</h3>
          <div className="bg-white rounded-lg border border-gray-300 p-4">
            <p className="text-gray-600 mb-4">
              The A1 level of the Common European Framework of Reference for Languages (CEFR) is the beginner stage, often called "Elementary" or "Breakthrough." At this level, learners are expected to understand and use basic vocabulary and grammar to handle everyday situations, such as introducing themselves, asking simple questions, and talking about daily routines or immediate needs. For Finnish, a language with a complex grammatical structure, the A1 curriculum focuses on foundational elements that are practical and manageable for beginners.
            </p>
            <p className="text-gray-600 mb-4">
              Below, I’ll provide a daily life grammar roadmap tailored to Finnish at the A1 level. This roadmap emphasizes the essential grammar topics needed for basic communication in daily life scenarios{" "}
              <span className="text-xl text-red-500">(e.g., greetings, shopping, directions, time, family).</span>
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
          <h3 className="text-xl font-semibold text-teal-700 mb-2">Topics</h3>
          {a1Topics && a1Topics.length > 0 ? (
            a1Topics.map((topic) => (
              <div key={topic.title}>
                <h3 className="text-xl font-semibold text-teal-700 mb-2">{topic.title}</h3>
                <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                  {topic.subtopics && topic.subtopics.length > 0 && (
                    <ul className="ml-6 list-disc">
                      {topic.subtopics.map((subtopic) => (
                        <li key={subtopic.title}>
                          <Link to={`/beginars/${toSlug(topic.title)}/${toSlug(subtopic.title)}`}>
                            <span className="text-teal-900 font-medium hover:text-teal-600"> {subtopic.title} (Explanation)</span>
                          </Link>
                          {subtopic.childTopics && subtopic.childTopics.length > 0 && (
                            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 mt-2">
                              {subtopic.childTopics.map((child) => (
                                <li key={child}>
                                  <Link
                                    to={`/beginars/${toSlug(topic.title)}/${toSlug(subtopic.title)}/${toSlug(child)}`}
                                  >
                                    <span className="text-teal-700 font-medium hover:text-teal-300">{child}</span>
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

        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
          <h2 className="text-2xl font-semibold text-teal-800 mb-4">A1 Finnish Grammar Roadmap for Daily Life</h2>
          <h4 className="text-xl font-semibold text-teal-700 mb-6">Goals of A1 Grammar (Coming Soon)</h4>
          <div className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
            <ul className="list-disc pl-6">
              <li className="text-orange-600 font-semibold mb-2">
                <span className="text-teal-500">Understand:</span>
                <br />
                Simple sentences and questions <br />
                (e.g., <span className="italic">Missä olet?</span> – "Where are you?").
              </li>
              <li className="text-purple-600 font-semibold mb-2">
                <span className="text-teal-500">Produce:</span>
                <br />
                Basic statements and responses <br />
                (e.g., <span className="italic">Olen kotona</span> – "I’m at home").
              </li>
              <li className="text-yellow-600 font-semibold">
                <span className="text-teal-500">Interact:</span>
                <br />
                Handle greetings, introductions, and common requests <br />
                (e.g., <span className="italic">Haluan vettä</span> – "I want water").
              </li>
            </ul>
          </div>
        </div>

        {getDynamicContent()}
      </div>
    </div>
  );
}

export default BeginarsPage;