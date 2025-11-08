import React from 'react';
import { Link } from "react-router-dom";
import CardWrapper from './CardWrapper';

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

  const playPronunciation = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fi-FI';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <CardWrapper title="Finnish Days of the Week">

      <button
        onClick={() => setShowPronunciation(!showPronunciation)}
        className="bg-teal-900 text-white px-4 py-2 rounded hover:bg-teal-300 hover:text-teal-900 transform hover:scale-110 transition duration-200 mb-4"
      >
        {showPronunciation ? 'Hide Pronunciation' : 'Show Pronunciation'} 
      </button>

       <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg border border-teal-700 p-4 mb-6">

      <ul className="list-disc pl-5 text-teal-200">
        {days.map((day, index) => (
          <li key={index} className="flex items-center justify-between m-2">
            <span>
              {day.english} - {day.finnish}{' '}
              {showPronunciation && <span className="text-gray-500">({day.pronunciation})</span>}
            </span>
            <button
              onClick={() => playPronunciation(day.finnish)}
              className="ml-2 bg-gray-900 text-teal-300 shadow-sm shadow-teal-900 px-2 py-1 rounded hover:bg-teal-500 hover:text-teal-900 transform hover:scale-110 transition duration-200"
            >
              🔊
            </button>
          </li>
        ))}
      </ul>
        </section>

      <p className="text-sm text-gray-600 mt-4">
        <strong>Tip:</strong> Finnish days of the week are not capitalized unless at the beginning of a sentence. 
        For example, "maanantai" (Monday) is not capitalized in the middle of a sentence.     
      </p>

      

      <Link to="/beginars/day/sunday-or-monday">
            <button className="mt-4 bg-gray-900 text-teal-300  shadow-sm shadow-teal-900 px-4 py-2 rounded hover:bg-teal-300 hover:text-teal-900 transform hover:scale-110 transition duration-200">
                Learn More
            </button>
        </Link>
      
    </CardWrapper>

  );
}

export default Days;