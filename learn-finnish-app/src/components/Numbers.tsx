    // src/components/Numbers.js
    import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { a1Topics } from '../data';

    function Numbers() {
    const [showPronunciation, setShowPronunciation] = useState(false);

    const numbers = [
        { english: '1', finnish: 'Yksi',  pronunciation: 'YUK-si' },
        { english: '2', finnish: 'Kaksi', pronunciation: 'KAHK-si' },
        { english: '3', finnish: 'Kolme', pronunciation: 'KOL-me' },
        // { english: '4', finnish: 'Neljä', pronunciation: 'NEL-ya' },
        // { english: '5', finnish: 'Viisi', pronunciation: 'VEE-si' },
    ];

    const playPronunciation = (text: string) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'fi-FI';
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">Finnish Numbers</h2>
        <button
            onClick={() => setShowPronunciation(!showPronunciation)}
            className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-900 transform hover:scale-110 transition duration-200 mb-4"
        >
            {showPronunciation ? 'Hide Pronunciation' : 'Show Pronunciation'}
        </button>

        <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">


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
        </section>

        <Link to="/beginars/number/ready-one-two-three">
        {/* <Link to="/beginars/number/${a1Topics.}`}"> */}
            <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-900 transform hover:scale-110 transition duration-200 m-2">
                Learn More
            </button>
        </Link>

        </div>
    );
    }

    export default Numbers;