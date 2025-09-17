import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { LINGVANEX_API_KEY, LINGVANEX_ENDPOINT } from "../../config";
import { introductionQuestions } from "../../data/conversationData";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";


interface AnswerState {
  [key: string]: string;
}



// Utility: normalize text for comparison
const normalize = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ").trim();

function ConversationPractice() {
  const [englishAnswers, setEnglishAnswers] = useState<AnswerState>({});
  const [finnishAnswers, setFinnishAnswers] = useState<AnswerState>({});
  const [translations, setTranslations] = useState<AnswerState>({});
  const [feedbacks, setFeedbacks] = useState<AnswerState>({});
  const [finnishMode, setFinnishMode] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState<number>(0);

  const questionRefs = introductionQuestions.map(() => React.createRef<HTMLDivElement>());

  const handleEnglishChange = (id: number, value: string) => setEnglishAnswers(prev => ({ ...prev, [id]: value }));
  const handleFinnishChange = (id: number, value: string) => setFinnishAnswers(prev => ({ ...prev, [id]: value }));

  const handleTranslate = async (id: number) => {
    try {
      const response = await axios.post(
        LINGVANEX_ENDPOINT,
        { from: "en", to: "fi", data: englishAnswers[id] || "", platform: "api" },
        { headers: { Authorization: `Bearer ${LINGVANEX_API_KEY}`, "Content-Type": "application/json" } }
      );
      setTranslations(prev => ({ ...prev, [id]: response.data.result }));
    } catch { setTranslations(prev => ({ ...prev, [id]: "Translation error" })); }
  };

  const handleCheckFinnish = async (id: number) => {
    if (!finnishMode) return;
    try {
      const userInput = finnishAnswers[id] || "";
      const originalEnglish = englishAnswers[id] || "";
      const response = await axios.post(
        LINGVANEX_ENDPOINT,
        { from: "fi", to: "en", data: userInput, platform: "api" },
        { headers: { Authorization: `Bearer ${LINGVANEX_API_KEY}`, "Content-Type": "application/json" } }
      );
      const backToEnglish = response.data.result || "";
      if (normalize(backToEnglish) === normalize(originalEnglish)) {
        setFeedbacks(prev => ({ ...prev, [id]: "correct" }));
      } else {
        setFeedbacks(prev => ({ ...prev, [id]: `❌ Expected: "${originalEnglish}" but got "${backToEnglish}"` }));
      }
    } catch { setFeedbacks(prev => ({ ...prev, [id]: "Error checking answer" })); }
  };


    // Text-to-Speech for Finnish pronunciation
      const playPronunciation = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fi-FI';
    window.speechSynthesis.speak(utterance);
  };

  const allEnglishAnswered = introductionQuestions.every(q => englishAnswers[q.id]?.trim());


  return (
<div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
      <Link
        to="/"
        className="text-teal-700 hover:underline bg-teal-100 mb-6 inline-block fixed top-0 left-0 w-full px-4 py-2 shadow-md"
      >
        ← Back to Home
      </Link>

    <div>
         <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-8 mt-16">
        <h2 className="text-2xl font-semibold text-teal-800 mb-4">
            {finnishMode ? "Try in Finnish 🇫🇮" : "Practice Conversation"}
        </h2>
        <p className="text-gray-700 mb-4">
          Practice simple conversations in English and Finnish. Start with English, then switch to Finnish mode for a challenge!
        </p>

      {introductionQuestions.map((q, index) => {
        const isActive = index === activeQuestion;
        const isAnswered = index < activeQuestion;

        return (
<div
            key={q.id}
            ref={questionRefs[index]}
            className={`bg-gray-800 rounded-xl shadow-xl p-6 max-w-xl mx-auto mb-6 transform transition-all duration-700 ease-out
                ${isActive ? "translate-y-0 opacity-100  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" : isAnswered ? "translate-y-0 opacity-100 bg-teal-600 border border-teal-100" : "translate-y-6 opacity-60"}`}
          >
            <p className="mb-4 text-lg">
              <strong className="text-teal-400 neon-text ">Q:</strong>{" "}
              <span className="text-white">{finnishMode ? q.questionFi : q.questionEn}</span>
            </p>
            
            <p className="mb-4 text-lg">
              <strong className="text-teal-400 neon-text ">K:</strong>{" "}
              <span className="text-teal-300">{q.questionFi}</span>
              
            </p>

            {isActive && (

                
                <p className="mb-4 text-lg">
              <strong className="text-teal-400 neon-text ">Remaining:</strong>{" "}
              <span className="text-teal-300">{introductionQuestions.length-activeQuestion}</span>
            </p>
            )

            }



            {!finnishMode ? (
              <>
                <input
                  type="text"
                  placeholder="Type in English"
                  value={englishAnswers[q.id] || ""}
                  onChange={(e) => handleEnglishChange(q.id, e.target.value)}
                  disabled={!isActive}
                  className="border border-teal-400 bg-gray-900 text-white rounded-lg p-3 w-full mb-4 neon-input focus:ring-2 focus:ring-teal-200 transition shadow-neon"
                />
                <div className="flex gap-3">
                  <button
                    onClick={() => handleTranslate(q.id)}
                    
                    className="bg-teal-800 text-white hover:bg-teal-200 hover:text-black px-4 py-2 rounded-lg neon-button shadow-neon transition-transform hover:scale-105"
                  >
                    Translate
                  </button>
                  {isActive && englishAnswers[q.id]?.trim() && index < introductionQuestions.length - 1 && (
                    <button
                      onClick={() => {
                        setActiveQuestion(activeQuestion + 1);
                        questionRefs[activeQuestion + 1].current?.scrollIntoView({ behavior: "smooth", block: "center" });
                      }}
                      className="bg-teal-700 text-white hover:bg-teal-300 hover:text-black  px-4 py-2 rounded-lg neon-button shadow-neon transition-transform hover:scale-105"
                    >
                      Continue →
                    </button>
                  )}
                </div>
                {translations[q.id] && (
                  <p className="mt-3 text-cyan-400 neon-text flex items-center gap-2 transition-opacity duration-700">
                    <CheckCircleIcon className="h-5 w-5 animate-pulse text-cyan-400" />
                    Finnish: {translations[q.id]}
                    <span className="text-teal-300"> 
                                <button
                                  onClick={() =>  playPronunciation(translations[q.id])}
                                  className="ml-2 text-blue-400 hover:text-blue-600 transition hover:scale-110"
                                  title="Listen"
                                >
                                  🔊
                                </button></span>
                  </p>
                )}
              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Type in Finnish"
                  value={finnishAnswers[q.id] || ""}
                  onChange={(e) => handleFinnishChange(q.id, e.target.value)}
                  className="border border-blue-500 bg-gray-900 text-white rounded-lg p-3 w-full mb-4 neon-input focus:ring-2 focus:ring-pink-400 transition shadow-neon"
                />
                <button
                  onClick={() => handleCheckFinnish(q.id)}
                  className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-lg neon-button shadow-neon transition-transform hover:scale-105"
                >
                  Check
                </button>

                {feedbacks[q.id] && (
                  <p className={`mt-3 flex items-center gap-2 neon-text transition-all duration-700 ease-in-out
                      ${feedbacks[q.id] === "correct" ? "text-green-400" : "text-red-500"}`}>
                    {feedbacks[q.id] === "correct" ? (
                      <CheckCircleIcon className="h-5 w-5 animate-pulse text-green-400" />
                    ) : (
                      <XCircleIcon className="h-5 w-5 animate-pulse text-red-500" />
                    )}
                    {feedbacks[q.id] === "correct" ? "✅ Correct!" : feedbacks[q.id]}
                  </p>
                )}
              </>
            )}
          </div>
        );
      })}

      {!finnishMode && (
        <div className="text-center mt-6">
          <button
            onClick={() => setFinnishMode(true)}
            disabled={!allEnglishAnswered}
            className={`px-6 py-3 rounded-lg text-white text-lg neon-button shadow-neon transition-transform hover:scale-105 ${
              !allEnglishAnswered ? "opacity-40 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            Start Finnish Mode →
          </button>
        </div>
      )}

      {finnishMode && (
        <div className="text-center mt-6">
          <button
            onClick={() => alert("🎉 You completed the conversation practice!")}
            className="px-6 py-3 rounded-lg bg-pink-500 text-white text-lg neon-button shadow-neon hover:bg-pink-600 transition-transform hover:scale-105"
          >
            Finish
          </button>
        </div>
      )}
    </div>
    </div>
    </div>
  );
}

export default ConversationPractice;








