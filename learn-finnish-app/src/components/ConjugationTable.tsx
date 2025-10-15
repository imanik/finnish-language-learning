
import React, { useState, useEffect} from 'react';


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

 console.log("items",items)
  const [showPronunciation, setShowPronunciation] = useState(false);
  const [page, setPage] = useState(0)
  const itemsPerPage = 10

  const start = page * itemsPerPage
  const end = start + itemsPerPage
  const visibleItems = items
  .slice(min ?? 0, (max ?? items.length) + 1)
  .slice(page * itemsPerPage, (page + 1) * itemsPerPage);

console.log("Rendering visibleItems:", visibleItems.length, visibleItems);



  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.getVoices(); // this may help preload
    }
  }, []);

    const playPronunciation = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fi-FI';
    window.speechSynthesis.speak(utterance);
  };
  
// console.log("ConjugationTable loaded", illnesss);
return (
  <div className="mb-6  overflow-x-auto">
  {/* <h4 className="text-lg font-semibold text-teal-600 mb-2"></h4> */}
  <button
        onClick={() => setShowPronunciation(!showPronunciation)}
        className="bg-teal-900 text-white ml-2 px-4 py-2 rounded hover:bg-teal-800 transform hover:scale-110 transition duration-200 mb-4"
      >
        {showPronunciation ? 'Hide Pronunciation' : 'Show Pronunciation'}
      </button>
  <div className="min-w-full  inline-block align-middle border border-teal-800 rounded-lg overflow-hidden">
    <table className="min-w-full divide-y divide-teal-800">
      <thead className="bg-teal-900">
        <tr>
          <th className="px-6 py-3 text-left text-sm font-medium text-teal-500 uppercase tracking-wider">
            English
          </th>
          <th className="px-6 py-3 text-left text-sm font-medium text-teal-500 uppercase tracking-wider">
            Finnish
          </th>
          {showPronunciation && 
          <th className="px-6 py-3 text-left text-sm font-medium text-teal-500 uppercase tracking-wider">
          {isVocab ? "Pronunciation" : ""}
          </th>
          } 
          <th className="px-6 py-3 text-left text-sm font-medium text-teal-500 uppercase tracking-wider">
            Listen
          </th>
        </tr>
      </thead>
      <tbody key={page} className="divide-y divide-teal-800 bg-gray-900 animate-fadeIn">

        {visibleItems.map((item, index) => (
           
            <tr key={index} className="hover:bg-teal-700 transition duration-200">
              <td className="px-6 py-4 text-sm text-teal-400">{item.english}</td>
              <td className="px-6 py-4 text-sm text-teal-400">{item.finnish}</td>
              {showPronunciation &&
              <td className="px-6 py-4 text-sm">
               {isVocab ? item.pronunciation : ""}
              </td>
              }
              <td className="px-6 py-4">
                 <button
              onClick={() => playPronunciation(item.finnish)}
              className="ml-2 bg-teal-900 text-white px-2 py-1 rounded hover:bg-teal-500 hover:text-teal-900 transform hover:scale-110 transition duration-200"
            >
              🔊
            </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
    <div className="flex justify-between bg-gray-900">
  <button
    disabled={page === 0}
    onClick={() => setPage(p => p - 1)}
    className="px-4 py-2 bg-teal-800 text-white rounded disabled:opacity-40"
  >
    ← Prev
  </button>
  <button
    disabled={end >= items.length}
    onClick={() => setPage(p => p + 1)}
    className="px-4 py-2 bg-teal-800 text-white rounded disabled:opacity-40"
  >
    Next →
  </button>
</div>

  </div>
</div>


);
}

export default ConjugationTable;