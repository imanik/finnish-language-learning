// src/components/Months.js
import React from 'react';

function Months() {
  const months = [
    { english: 'January', finnish: 'Tammikuu', pronunciation: 'TAM-mee-koo' },
    { english: 'February', finnish: 'Helmikuu', pronunciation: 'HEL-mee-koo' },
    { english: 'March', finnish: 'Maaliskuu', pronunciation: 'MAH-lis-koo' },
    { english: 'April', finnish: 'Huhtikuu', pronunciation: 'HUH-tee-koo' },
    { english: 'May', finnish: 'Toukokuu', pronunciation: 'TOH-koo-koo' },
    { english: 'June', finnish: 'Kesäkuu', pronunciation: 'KEH-sa-koo' },
  ];

  const playPronunciation = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fi-FI';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg mb-6 w-full max-w-md transform hover:scale-105 hover:rotate-2 transition duration-300 border border-teal-300 hover:shadow-xl font-['Roboto']">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Finnish Months</h2>
      <ul className="list-disc pl-5 text-gray-700">
        {months.map((month, index) => (
          <li key={index} className="flex items-center justify-between m-2">
            <span>
              {month.english} - {month.finnish}{' '}
              <span className="text-gray-500">({month.pronunciation})</span>
            </span>
            <button
              onClick={() => playPronunciation(month.finnish)}
              className="ml-2 bg-teal-500 text-white px-2 py-1 rounded hover:bg-teal-600"
            >
              Play
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Months;