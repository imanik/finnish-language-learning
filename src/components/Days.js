import React, { useState } from 'react';

function Days() {

  const [showPronunciation, setShowPronunciation] = React.useState(false);



  const days = [
    { english: 'Monday', finnish: 'Maanantai', pronunciation: 'MAH-nan-tai' },
    { english: 'Tuesday', finnish: 'Tiistai', pronunciation: 'TEES-tai' },
    { english: 'Wednesday', finnish: 'Keskiviikko', pronunciation: 'KES-kee-vee-kko' },
    { english: 'Thursday', finnish: 'Torstai', pronunciation: 'TORS-tai' },
    { english: 'Friday', finnish: 'Perjantai', pronunciation: 'PER-yan-tai' },
    { english: 'Saturday', finnish: 'Lauantai', pronunciation: 'LAU-an-tai' },
    { english: 'Sunday', finnish: 'Sunnuntai', pronunciation: 'SOON-noon-tai' },
  ];

  const playPronunciation = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fi-FI';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg mb-6 w-full max-w-md transform hover:scale-105 hover:rotate-2 transition duration-300 border border-teal-300 hover:shadow-xl font-['Roboto']">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Finnish Days of the Week</h2>

      <button
        onClick={() => setShowPronunciation(!showPronunciation)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transform hover:scale-110 transition duration-200 mb-4"
      >
        {showPronunciation ? 'Hide Pronunciation' : 'Show Pronunciation'} 
      </button>
      <ul className="list-disc pl-5 text-gray-700">
        {days.map((day, index) => (
          <li key={index} className="flex items-center justify-between m-2">
            <span>
              {day.english} - {day.finnish}{' '}
              {showPronunciation && <span className="text-gray-500">({day.pronunciation})</span>}
            </span>
            <button
              onClick={() => playPronunciation(day.finnish)}
              className="ml-2 bg-teal-500 text-white px-2 py-1 rounded hover:bg-teal-600 transform hover:scale-110 transition duration-200"
            >
              Play
            </button>
          </li>
        ))}
      </ul>
      <p className="text-sm text-gray-600 mt-4">
        <strong>Tip:</strong> Finnish days of the week are not capitalized unless at the beginning of a sentence. 
        For example, "maanantai" (Monday) is not capitalized in the middle of a sentence.     
      </p>
      
    </div>
  );
}

export default Days;