// src/components/Months.js
import React from 'react';
import { Link } from 'react-router-dom';
import CardWrapper from './wrapper/CardWrapper';

function Months() {
  const months = [
    { english: 'January', finnish: 'Tammikuu', pronunciation: 'TAM-mee-koo' },
    { english: 'February', finnish: 'Helmikuu', pronunciation: 'HEL-mee-koo' },
    { english: 'March', finnish: 'Maaliskuu', pronunciation: 'MAH-lis-koo' },
    { english: 'April', finnish: 'Huhtikuu', pronunciation: 'HUH-tee-koo' },
    { english: 'May', finnish: 'Toukokuu', pronunciation: 'TOH-koo-koo' },
    { english: 'June', finnish: 'Kesäkuu', pronunciation: 'KEH-sa-koo' },
  ];

  const playPronunciation = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fi-FI';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <CardWrapper title="Finnish Months">

      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg border border-teal-700 p-4 mb-6">

      <ul className="list-disc pl-5 text-teal-200">
        {months.map((month, index) => (
          <li key={index} className="flex items-center justify-between m-2">
            <span>
              {month.english} - {month.finnish}{' '}
              <span className="text-gray-500">({month.pronunciation})</span>
            </span>
            <button
              onClick={() => playPronunciation(month.finnish)}
              className="ml-2 bg-gray-900 text-teal-300  px-2 py-1 rounded hover:bg-teal-900"
            >
              🔊
            </button>
          </li>
        ))}
      </ul>
      </section>

              <Link to="/beginars/month/january-to-december">
              {/* <Link to="/beginars/number/${a1Topics.}`}"> */}
                  <button className="mt-4 bg-gray-900 text-teal-300 shadow-sm shadow-teal-900 px-4 py-2 rounded hover:bg-teal-300 hover:text-teal-900 transform hover:scale-110 transition duration-200 m-2">
                      Learn More
                  </button>
              </Link>
    </CardWrapper>
  );
}

export default Months;