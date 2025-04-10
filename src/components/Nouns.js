// src/components/Nouns.js
import React, { useState } from 'react';

// function Nouns Epidemic() {
function Nouns () {
  const nounCases = [
    {
      noun: 'omena (apple)',
      cases: [
        { caseName: 'Nominative (basic form)', finnish: 'omena', pronunciation: 'OH-meh-na', usage: 'Subject', example: 'Omena on punainen. (The apple is red.)' },
        { caseName: 'Partitive (partial object)', finnish: 'omenaa', pronunciation: 'OH-meh-naa', usage: 'After certain verbs', example: 'Syön omenaa. (I’m eating an apple.)' },
        { caseName: 'Genitive (possession)', finnish: 'omenan', pronunciation: 'OH-meh-nan', usage: 'Possession', example: 'Omenan väri on punainen. (The apple’s color is red.)' },
        { caseName: 'Inessive (location inside)', finnish: 'omenassa', pronunciation: 'OH-meh-nas-sa', usage: 'Inside something', example: 'Siemenet ovat omenassa. (The seeds are in the apple.)' },
        { caseName: 'Elative (motion out of)', finnish: 'omenasta', pronunciation: 'OH-meh-nas-ta', usage: 'Out of something', example: 'Otan siemenet omenasta. (I take the seeds out of the apple.)' },
      ],
    },
  ];

  const playPronunciation = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fi-FI';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg mb-6 w-full max-w-md transform hover:scale-105 hover:rotate-2 transition duration-300 border border-teal-300 hover:shadow-xl font-['Roboto']">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Finnish Noun Cases</h2>
      {nounCases.map((noun, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-medium text-gray-700">{noun.noun}</h3>
          <ul className="list-disc pl-5 text-gray-700">
            {noun.cases.map((nounCase, idx) => (
              <li key={idx} className="flex flex-col mb-2 m-2">
                <div className="flex items-center justify-between">
                  <span>
                    {nounCase.caseName}: {nounCase.finnish}{' '}
                    <span className="text-gray-500">({nounCase.pronunciation})</span> - {nounCase.usage}
                  </span>
                  <button
                    onClick={() => playPronunciation(nounCase.finnish)}
                    className="ml-2 bg-teal-500 text-white px-2 py-1 rounded hover:bg-teal-600 transform hover:scale-110 transition duration-200"
                  >
                    Play
                  </button>
                </div>
                <span className="text-sm text-gray-600 italic">{nounCase.example}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p className="text-sm text-gray-600">
        <strong>Tip:</strong> Finnish has 15 cases! They change the noun’s ending based on its role in the sentence.
      </p>
    </div>
  );
}

export default Nouns;