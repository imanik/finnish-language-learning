import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { LINGVANEX_API_KEY, LINGVANEX_ENDPOINT } from "../../config";
import { conversationData, Question } from "../../data/conversationData";

import { CheckCircleIcon, ArrowDownCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
// ... icons import etc.


interface AnswerState {
  [key: string]: string;
}

// Utility: normalize text for comparison
const normalize = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ").trim();

function ConversationPractice() {
  const { child } = useParams<{ child: string }>();
  const navigate = useNavigate();

  // ✅ Load correct questions based on child param
  const questions: Question[] = conversationData[child || "introduction"] || [];

  const [englishAnswers, setEnglishAnswers] = useState<Record<string, string>>({});
   const [finnishAnswers, setFinnishAnswers] = useState<AnswerState>({});
   const [translations, setTranslations] = useState<AnswerState>({});
   const [feedbacks, setFeedbacks] = useState<AnswerState>({});
  const [finnishMode, setFinnishMode] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState<number>(0);

  const questionRefs = questions.map(() => React.createRef<HTMLDivElement>());

  // ... keep your handleEnglishChange, handleTranslate, handleCheckFinnish, playPronunciation as is
const handleEnglishChange = (id: number, value: string) => setEnglishAnswers(prev => ({ ...prev, [id]: value }));
  const handleFinnishChange = (id: number, value: string) => setFinnishAnswers(prev => ({ ...prev, [id]: value }));

  const handleTranslate = async (id: number) => {
    try {
      const response = await axios.post(
        LINGVANEX_ENDPOINT,
        { from: "en", to: "fi", data: englishAnswers[id] || "", platform: "api" },
        { headers: { Authorization: `Bearer ${LINGVANEX_API_KEY}`, "Content-Type": "application/json" } }
      );
      
      const result = (response.data as { result: string }).result;
      setTranslations(prev => ({ ...prev, [id]: result }));
    } catch { setTranslations(prev => ({ ...prev, [id]: "Translation error" })); }
  };

  function isSimilar(a: string, b: string, threshold = 0.7): boolean {
  const normalize = (str: string) =>
    str.toLowerCase().replace(/[.,!?]/g, "").trim();

  const wordsA = normalize(a).split(/\s+/);
  const wordsB = normalize(b).split(/\s+/);

  const matches = wordsA.filter(word => wordsB.includes(word)).length;
  const ratio = matches / Math.max(wordsA.length, wordsB.length);

  return ratio >= threshold;
}


  const handleCheckFinnish = async (id: number) => {
    if (!finnishMode) return;
    try {
      const userInput = finnishAnswers[id] || "";
      console.log("User input:", userInput);
      console.log("Expected Finnish:", finnishAnswers[id]);
      const originalFinnish = finnishAnswers[id] || "";
      const response = await axios.post(
        LINGVANEX_ENDPOINT,
        { from: "en", to: "fi", data: userInput, platform: "api" },
        { headers: { Authorization: `Bearer ${LINGVANEX_API_KEY}`, "Content-Type": "application/json" } }
      );
      const backToFinnish = (response.data as { result: string }).result || "";

      if (isSimilar(backToFinnish, originalFinnish, 0.9)) {
  setFeedbacks(prev => ({ ...prev, [id]: "✅ Perfect!" }));
} else if (isSimilar(backToFinnish, originalFinnish, 0.6)) {
  setFeedbacks(prev => ({ ...prev, [id]: "⚠️ Almost correct (synonym/word order difference)" }));
} else {
  setFeedbacks(prev => ({ ...prev, [id]: `❌ Expected: "${backToFinnish}" but got "${originalFinnish}"` }));
}

    } catch { setFeedbacks(prev => ({ ...prev, [id]: "Error checking answer" })); }
  };


    // Text-to-Speech for Finnish pronunciation
      const playPronunciation = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fi-FI';
    window.speechSynthesis.speak(utterance);
  };




  const allEnglishAnswered = questions.every(q => englishAnswers[q.id]?.trim());
  const allFinnishAnswered = questions.every(q => finnishAnswers[q.id]?.trim());

  const conversationMenu = () => {
    navigate("/conversation");
  };

  return (
<div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
      <Link
        to="/conversation"
        className="text-teal-700 hover:underline bg-teal-100 mb-6 inline-block fixed top-0 left-0 w-full px-4 py-2 shadow-md"
      >
        ← Back to Home
      </Link>

       <div>
         <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-8 mt-16">
        <h2 className="text-2xl font-semibold text-teal-800 mb-4">
            {finnishMode ? "Try in Finnish 🇫🇮" : child?.toUpperCase() +" Conversation Practice"}
        </h2>
        <p className="text-gray-700 mb-4">
          Practice simple conversations in English and Finnish. Start with English, then switch to Finnish mode for a challenge!
        </p>

         <p className="text-gray-700 mb-8">
         Note: Try different sentence structures and vocabulary. The AI translation may not always match exactly, but aim for similar meaning.
        </p>


        {questions.map((q, index) => {
        const isAnswered = index < activeQuestion;   // ✅ works for both modes
  const isActive = index === activeQuestion;

        return (
<div
            key={q.id}
            ref={questionRefs[index]}
            className={`bg-gray-900 rounded-xl shadow-xl p-6 max-w-xl mx-auto mb-6 transform transition-all duration-700 ease-out
                ${isActive ? "translate-y-0 opacity-100  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" : isAnswered ? "translate-y-0 opacity-100 bg-teal-900 border border-teal-100" : "translate-y-6 opacity-60"}`}
          >
            <p className="mb-4 text-lg">
              <strong className="text-teal-400 neon-text ">{finnishMode ? "K: " : "Q: " }</strong>{" "}
              <span className="text-white">{finnishMode ? q.questionFi : q.questionEn}</span>
            </p>
            
            <p className="mb-4 text-lg">
              <strong className="text-teal-400 neon-text ">{finnishMode ? "Q: " : "K: " }</strong>{" "}
              <span className="text-teal-300">{finnishMode ? q.questionEn : q.questionFi}</span>
           
                  
              
            </p>



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
                  {isActive && englishAnswers[q.id]?.trim() && index < questions.length - 1 && (
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

                
            {isActive && (

                
                <p className="mt-8 text-lg">
              <span className="text-teal-300 ml-2">{questions.length-activeQuestion}</span>
              <ArrowDownCircleIcon className="h-5 w-5 animate-pulse text-cyan-400" />{" "}
            </p>
            )

            }

              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Type in Finnish"
                  value={finnishAnswers[q.id] || ""}
                  onChange={(e) => handleFinnishChange(q.id, e.target.value)}
                  className="border border-teal-200 bg-gray-900 text-white rounded-lg p-3 w-full mb-4 neon-input focus:ring-2 focus:ring-pink-400 transition shadow-neon"
                />
{isActive && finnishAnswers[q.id]?.trim() && (
        <button
          onClick={async () => {
            await handleCheckFinnish(q.id); // ✅ wait for check
            const nextIndex = activeQuestion + 1;
            if (nextIndex < questions.length) {
              setActiveQuestion(nextIndex);
              questionRefs[nextIndex].current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }
          }}
          className="mt-3 bg-teal-700 text-white hover:text-black hover:bg-teal-300 px-4 py-2 rounded-lg neon-button shadow-neon transition-transform hover:scale-105"
        >
          Check
        </button>
      )}


                     {feedbacks[q.id] && (
        <p
          className={`mt-3 flex items-center gap-2 neon-text transition-all duration-700 ease-in-out
            ${feedbacks[q.id] === "✅ Correct!" ? "text-green-400" : "text-red-500"}`}
        >
          {feedbacks[q.id] === "✅ Correct!" ? (
            <CheckCircleIcon className="h-5 w-5 animate-pulse text-green-400" />
          ) : (
            <XCircleIcon className="h-5 w-5 animate-pulse text-red-500" />
          )}
          {feedbacks[q.id]}
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
      onClick={() => {
        setFinnishMode(true)
        setActiveQuestion(0); // Start from last question
        questionRefs[questions.length - 1].current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }}
      disabled={!allEnglishAnswered}
      className={`px-6 py-3 rounded-lg text-white text-lg transition-transform hover:scale-105 ${
        !allEnglishAnswered
          ? "opacity-40 cursor-not-allowed"
          : "bg-teal-900 hover:text-teal-900 hover:bg-teal-300"
      }`}
    >
      Start Finnish Mode →
    </button>
  </div>
)}

{finnishMode && (
  <div className="text-center mt-6">
    <button
      onClick={() => conversationMenu()}
      className={`px-6 py-3 rounded-lg text-white text-lg transition-transform hover:scale-105 ${
        !allFinnishAnswered
          ? "opacity-40 cursor-not-allowed"
          : "bg-teal-900 hover:text-teal-900 hover:bg-teal-300"
      }`}
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
