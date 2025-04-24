
import React from 'react';


interface Items {
  finnish: string,
  english: string,
  pronunciation?: string,
}

interface ConjugationTableProps {
  items: Items[];
  min?: number;
  max?: number;
  isVocab?: boolean;
}



function ConjugationTable({ items, min, max, isVocab } :ConjugationTableProps) {

  const [showPronunciation, setShowPronunciation] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.getVoices(); // this may help preload
    }
  }, []);
  
// console.log("ConjugationTable loaded", illnesss);
return (
  <div className="mb-6 overflow-x-auto">
  <h4 className="text-lg font-semibold text-teal-600 mb-2"></h4>
  <button
        onClick={() => setShowPronunciation(!showPronunciation)}
        className="bg-teal-500 text-white ml-2 px-4 py-2 rounded hover:bg-teal-800 transform hover:scale-110 transition duration-200 mb-4"
      >
        {showPronunciation ? 'Hide Pronunciation' : 'Show Pronunciation'}
      </button>
  <div className="min-w-full inline-block align-middle border border-gray-200 rounded-lg overflow-hidden">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-teal-100">
        <tr>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
            English
          </th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
            Finnish
          </th>
          {showPronunciation && 
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
          {isVocab ? "Pronunciation" : ""}
          </th>
          } 
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
            Listen
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {items
          .filter((_, index) => {
            if (min !== undefined && max !== undefined) {
              return index >= min && index <= max;
            }
            return true;
          })
          .map((item, index) => (
            <tr key={index} className="hover:bg-teal-50 transition duration-200">
              <td className="px-6 py-4 text-sm">{item.english}</td>
              <td className="px-6 py-4 text-sm">{item.finnish}</td>
              {showPronunciation &&
              <td className="px-6 py-4 text-sm">
               {isVocab ? item.pronunciation : ""}
              </td>
              }
              <td className="px-6 py-4">
                <button 
                 onClick={() => {
                  const synth = window.speechSynthesis;
                
                  const speak = () => {
                    const voices = synth.getVoices();
                    const utterance = new SpeechSynthesisUtterance(item.finnish);
                    utterance.lang = 'fi-FI';
                
                    const finnishVoice = voices.find(v => v.lang === 'fi-FI');
                    if (finnishVoice) {
                      utterance.voice = finnishVoice;
                    } else if (voices.length > 0) {
                      utterance.voice = voices[0]; // fallback voice
                    }
                
                    synth.speak(utterance);
                  };
                
                  // If voices are not yet loaded, wait for them
                  if (synth.getVoices().length === 0) {
                    synth.onvoiceschanged = speak;
                  } else {
                    speak();
                  }

                  console.log(window.speechSynthesis.getVoices());

                }}
                
                  className="bg-teal-500 text-white px-3 py-1 rounded hover:bg-teal-600 transition duration-200 flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M5 3.868v16.264a1 1 0 0 0 1.528.849l13.056-8.132a1 1 0 0 0 0-1.698L6.528 3.019A1 1 0 0 0 5 3.868z" />
                  </svg>
                  Play
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
</div>


);
}

export default ConjugationTable;