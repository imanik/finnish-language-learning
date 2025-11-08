    // src/components/Numbers.js
    import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CardWrapper from './CardWrapper';
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
        <CardWrapper title="Finnish Numbers">
        <button
            onClick={() => setShowPronunciation(!showPronunciation)}
            className="bg-teal-900 text-white px-4 py-2 rounded hover:bg-teal-300 hover:text-teal-900 transform hover:scale-110 transition duration-200 mb-4"
        >
            {showPronunciation ? 'Hide Pronunciation' : 'Show Pronunciation'}
        </button>

        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg border border-teal-700 p-4 mb-6">


        <ul className="list-disc pl-5 text-teal-200">
            {numbers.map((number, index) => (
                <li key={index} className="flex items-center justify-between m-2">
                <span>
                    {number.english} - {number.finnish}{' '}
                    {showPronunciation && <span className="text-teal-200">({number.pronunciation})</span>}
                </span>
                <button
                    onClick={() => playPronunciation(number.finnish)}
                    className="ml-2 bg-gray-900 text-teal-300  px-2 py-1 rounded hover:bg-teal-500 transform hover:scale-110 transition duration-200"
                >
                    🔊
                </button>
                </li>
            ))}
        </ul>
        </section>

        <Link to="/beginars/number/ready-one-two-three">
        {/* <Link to="/beginars/number/${a1Topics.}`}"> */}
            <button className="mt-4 bg-gray-900 text-teal-300 shadow-sm shadow-teal-900 px-4 py-2 rounded hover:bg-teal-300 hover:text-teal-900 transform hover:scale-110 transition duration-200 m-2">
                Learn More
            </button>
        </Link>

        </CardWrapper>
    );
    }

    export default Numbers;