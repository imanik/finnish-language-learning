import React, {useState} from "react";
import { Link } from "react-router-dom";
import CardWrapper from "./wrapper/CardWrapper";



function Grammars() {

  const [showPronunciation, setShowPronunciation] = useState(false);
  
  const playPronunciation = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "fi-FI";
    window.speechSynthesis.speak(utterance);
  };

  const grammars = [

    { english: "Verbs", finnish: "Verbit", pronunciation: "ver-bit" },
    { english: "Nouns", finnish: "Substantiivit", pronunciation: "sub-stan-ti-i-vit" },
    { english: "Sentences", finnish: "Lauseet", pronunciation: "lau-seet" },
    { english: "Others", finnish: "Muut", pronunciation: "muut" },

  ];

  return (
    <CardWrapper title="Finnish Grammar (Coming Soon)">

      <p className="text-gray-700 mb-4">Finnish grammar is known for its complexity, including cases, vowel harmony, and agglutination.</p>
      
      <button
        onClick={() => setShowPronunciation(!showPronunciation)}
        className="bg-teal-900 text-white px-4 py-2 rounded hover:bg-teal-300 hover:text-teal-900 transform hover:scale-110 transition duration-200 mb-4"
      >
        {showPronunciation ? "Hide Pronunciation" : "Show Pronunciation"}
      </button>
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg border border-teal-700 p-4 mb-6">
      <ul className="list-disc pl-5 text-teal-200">
        {grammars.map((grammar, index) => (
          <li key={index} className="flex items-center justify-between m-2">
            <span>
              {grammar.english} - {grammar.finnish}{' '}
              {showPronunciation && <span className="text-gray-500">({grammar.pronunciation})</span>}
            </span>
            <button
              onClick={() => playPronunciation(grammar.finnish)}
              className="ml-2 bg-gray-900 text-teal-300  px-2 py-1 rounded hover:bg-teal-500 transform hover:scale-110 transition duration-200"
              >
              🔊
            </button>
          </li>


))}
      </ul>
      
</section>
      
      <Link to="/grammars">
        <button className="mt-4 bg-gray-900 text-teal-300  px-4 py-2 rounded hover:bg-teal-300 hover:text-teal-900 transform hover:scale-110 transition duration-200 m-2">
          Learn More
        </button>
      </Link>
    </CardWrapper>
  );
  
  }


export default Grammars;