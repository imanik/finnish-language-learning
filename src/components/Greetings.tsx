// src/components/Greetings.js
import React from 'react';
import { Link } from 'react-router-dom';

function Greetings() {


  const [showPronunciation, setShowPronunciation] = React.useState(false);
  

  const greets = [
    { english: 'Hello', finnish: 'Hei', pronunciation: 'hay' },
    { english: 'Hi', finnish: 'Moi', pronunciation: 'moy' },
    { english: 'Good day', finnish: 'Hyvää päivää', pronunciation: 'hoo-vah pah-ee-vah' },
  ];

  const playPronunciation = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fi-FI';
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Finnish Greetings</h2>
      <button
        onClick={() => setShowPronunciation(!showPronunciation)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transform hover:scale-110 transition duration-200 mb-4"
      >
        {showPronunciation ? 'Hide Pronunciation' : 'Show Pronunciation'}
      </button>

      <ul className="list-disc pl-5 text-gray-700">
        {greets.map((greet, index) => (
          <li key={index} className="flex items-center justify-between m-2">
            <span>
              {greet.english} - {greet.finnish}{' '}
              {showPronunciation && <span className="text-gray-500">({greet.pronunciation})</span>}
            </span>
            <button
              onClick={() => playPronunciation(greet.finnish)}
              className="ml-2 bg-teal-500 text-white px-2 py-1 rounded hover:bg-teal-600 transform hover:scale-110 transition duration-200"
            >
              Play
            </button>
          </li>
        ))}
      </ul>
      
      {/* // Inside your component (e.g., Greetings.js): */}
<Link to="/beginars/greeting/how-are-you">
  <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200">
    Learn More
  </button>
</Link>

<Link to="/greetings/quiz">
  <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
    Quiz
  </button>
</Link>

      
    </div>
  );
}

export default Greetings;