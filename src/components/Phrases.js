// src/components/Phrases.js
import React from 'react';

function Phrases() {
  const phrases = [
    { english: 'How are you?', finnish: 'Kuinka voit?', pronunciation: 'KWEHN-ka VOYT' },
    { english: 'Thank you', finnish: 'Kiitos', pronunciation: 'KEE-tos' },
    { english: 'Yes', finnish: 'Kyllä', pronunciation: 'KYL-la' },
    { english: 'No', finnish: 'Ei', pronunciation: 'AY' },
    { english: 'Goodbye', finnish: 'Näkemiin', pronunciation: 'NAH-ke-meen' },
    { english: 'Please', finnish: 'Ole hyvä', pronunciation: 'OH-leh HOO-va' },
    { english: 'I’m sorry', finnish: 'Anteeksi', pronunciation: 'AHN-teek-si' },
  ];

  const playPronunciation = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fi-FI';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Finnish Phrases</h2>
      <ul className="list-disc pl-5 text-gray-700 mb-4">
        {phrases.map((phrase, index) => (
          <li key={index} className="flex items-center justify-between m-2">
            <span>
              {phrase.english} - {phrase.finnish}{' '}
              <span className="text-gray-500">({phrase.pronunciation})</span>
            </span>
            <button
              onClick={() => playPronunciation(phrase.finnish)}
              className="ml-2 bg-teal-500 text-white px-2 py-1 rounded hover:bg-teal-600"
            >
              Play
            </button>
          </li>
        ))}
      </ul>
      <p className="text-sm text-gray-600">
        <strong>Grammar Tip:</strong> Finnish uses a Subject-Verb-Object order (e.g., "Minä syön omenan" - "I eat an apple"), but word order can be flexible for emphasis.
      </p>
    </div>
  );
}

export default Phrases;