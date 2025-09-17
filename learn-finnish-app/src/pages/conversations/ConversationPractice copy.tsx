import React, { useState, createRef } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { LINGVANEX_API_KEY, LINGVANEX_ENDPOINT } from "../../config";

// Example questions
const introductionQuestions = [
  { id: 1, questionEn: "What is your name?", questionFi: "Mikä on nimesi?" },
  { id: 2, questionEn: "Where are you from?", questionFi: "Mistä olet kotoisin?" },
  { id: 3, questionEn: "How old are you?", questionFi: "Kuinka vanha olet?" },
];

function ConversationPracticeCopy() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [englishAnswers, setEnglishAnswers] = useState<{ [key: number]: string }>({});
  const [translations, setTranslations] = useState<{ [key: number]: string }>({});
  const [feedback, setFeedback] = useState<{ [key: number]: string }>({});

  // Refs for smooth scrolling
const questionRefs = introductionQuestions.map(() => React.createRef<HTMLDivElement>());


  // Input handling
  const handleEnglishChange = (id: number, value: string) =>
    setEnglishAnswers((prev) => ({ ...prev, [id]: value }));

  // Translation
  const handleTranslate = async (id: number) => {
    try {
      const response = await axios.post(
        `${LINGVANEX_ENDPOINT}/translate`,
        {
          from: "en",
          to: "fi",
          data: englishAnswers[id],
          platform: "api",
        },
        {
          headers: {
            Authorization: `Bearer ${LINGVANEX_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      
      
      const result = (response.data as { result: string }).result;

      
      setTranslations((prev) => ({ ...prev, [id]: result }));
      setFeedback((prev) => ({ ...prev, [id]: "✅ Translation complete!" }));
    } catch (error: any) {
      console.error("Translation error:", error.message);
      setFeedback((prev) => ({
        ...prev,
        [id]: "❌ Error translating. Try again.",
      }));
    }
  };

  // Listen pronunciation
  const handleListen = async (id: number) => {
    const text = translations[id];
    if (!text) return;
    try {
      const audio = new Audio(
        `https://api-b2b.backenster.com/b1/api/v3/tts?text=${encodeURIComponent(
          text
        )}&lang=fi&voice=fi-FI&platform=api&key=${LINGVANEX_API_KEY}`
      );
      await audio.play();
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col lg:flex-row font-['Orbitron']">
      {/* Left side: Questions */}
      <div className="flex-1 p-6">
        {introductionQuestions.map((q, index) => {
          const isActive = index === activeQuestion;

          return (
            <div
              key={q.id}
              ref={questionRefs[index]}
              className={`bg-gray-800 rounded-xl shadow-xl p-6 max-w-xl mx-auto mb-6 transform transition-all duration-700 ease-out
                ${isActive ? "translate-y-0 opacity-100" : "translate-y-6 opacity-80"}`}
            >
              <p className="text-lg font-semibold mb-3 neon-text">
                Q: {q.questionFi} ({q.questionEn})
              </p>

              {/* Input */}
              <input
                type="text"
                placeholder="Type your answer in English..."
                value={englishAnswers[q.id] || ""}
                onChange={(e) => handleEnglishChange(q.id, e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              />

              {/* Translate button */}
              {isActive && (
                <button
                  onClick={() => handleTranslate(q.id)}
                  className="mt-3 bg-gradient-to-r from-pink-500 to-blue-500 px-4 py-2 rounded-lg font-bold neon-button transition-transform hover:scale-105"
                >
                  Translate
                </button>
              )}

              {/* Translation + Feedback */}
              {translations[q.id] && (
                <p className="mt-3 text-cyan-400 neon-text flex items-center gap-2 transition-opacity duration-700">
                  <CheckCircleIcon className="h-5 w-5 animate-pulse text-cyan-400" />
                  Finnish: {translations[q.id]}
                  <button
                    onClick={() => handleListen(q.id)}
                    className="ml-2 text-blue-400 hover:text-blue-600 transition hover:scale-110"
                    title="Listen"
                  >
                    🔊
                  </button>
                </p>
              )}
              {feedback[q.id] && <p className="mt-2 text-sm">{feedback[q.id]}</p>}

              {/* Continue button only if translated */}
              {isActive &&
                translations[q.id] &&
                index < introductionQuestions.length - 1 && (
                  <button
                    onClick={() => {
                      setActiveQuestion(activeQuestion + 1);
                      questionRefs[activeQuestion + 1].current?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }}
                    className="mt-4 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg neon-button shadow-neon transition-transform hover:scale-105"
                  >
                    Continue →
                  </button>
                )}
            </div>
          );
        })}
      </div>

      {/* Right side: Remaining Questions */}
      <div className="lg:w-72 lg:ml-6 mt-6 lg:mt-0 p-4">
        <div className="bg-gray-800 rounded-xl p-4 shadow-lg sticky top-20 max-h-[80vh] overflow-y-auto">
          <h2 className="text-lg font-bold text-pink-400 neon-text mb-2">
            Remaining Questions
          </h2>
          <ul className="space-y-2">
            {introductionQuestions.map((q, index) => (
              <li
                key={q.id}
                className={`p-2 rounded-lg cursor-pointer transition hover:bg-pink-500 hover:text-white neon-text ${
                  index < activeQuestion ? "opacity-50" : "opacity-100 font-semibold"
                }`}
                onClick={() => {
                  setActiveQuestion(index);
                  questionRefs[index].current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              >
                {index + 1}. {q.questionEn}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ConversationPracticeCopy;
