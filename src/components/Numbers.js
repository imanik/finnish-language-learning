    // src/components/Numbers.js
    import React, { useState } from 'react';
import { Link } from 'react-router-dom';

    function Numbers() {
    const [showPronunciation, setShowPronunciation] = useState(false);

    const numbers = [
        { english: '1', finnish: 'Yksi',  pronunciation: 'YUK-si' },
        { english: '2', finnish: 'Kaksi', pronunciation: 'KAHK-si' },
        { english: '3', finnish: 'Kolme', pronunciation: 'KOL-me' },
        // { english: '4', finnish: 'Neljä', pronunciation: 'NEL-ya' },
        // { english: '5', finnish: 'Viisi', pronunciation: 'VEE-si' },
    ];

    const playPronunciation = (text) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'fi-FI';
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg mb-6 w-full max-w-md transform hover:scale-105 hover:rotate-2 transition duration-300 border border-teal-300 hover:shadow-xl font-['Roboto']">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Finnish Numbers</h2>
        <button
            onClick={() => setShowPronunciation(!showPronunciation)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transform hover:scale-110 transition duration-200 mb-4"
        >
            {showPronunciation ? 'Hide Pronunciation' : 'Show Pronunciation'}
        </button>

        <ul className="list-disc pl-5 text-gray-700">
            {numbers.map((number, index) => (
                <li key={index} className="flex items-center justify-between m-2">
                <span>
                    {number.english} - {number.finnish}{' '}
                    {showPronunciation && <span className="text-gray-500">({number.pronunciation})</span>}
                </span>
                <button
                    onClick={() => playPronunciation(number.finnish)}
                    className="ml-2 bg-teal-500 text-white px-2 py-1 rounded hover:bg-teal-600 transform hover:scale-110 transition duration-200"
                >
                    Play
                </button>
                </li>
            ))}
        </ul>

        <Link to="/numbers">
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                Learn More
            </button>
        </Link>

        <Link to="/numbers/quiz">
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200">
                Quiz
            </button>       
        </Link>
        </div>
    );
    }

    export default Numbers;