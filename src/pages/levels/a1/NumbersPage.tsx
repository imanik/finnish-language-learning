
import React, { useState} from "react";
import { Link } from "react-router-dom";
import { mathData } from "../../../data/basicA1";

    interface Number {
        english: string,
        finnish: string,
        pronunciation: string,
    }

    interface ConjugationTableProps {
        numbers: Number[];
    }

function ConjugationTable({ numbers } :ConjugationTableProps) {
    // console.log("ConjugationTable loaded", families);
    return (
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-teal-600 mb-2"></h4>
        <table className="table-auto w-full text-gray-600">
          <thead>
            <tr className="bg-teal-100">
              <th className="px-4 py-2">English</th>
              <th className="px-4 py-2">Finnish</th>
              <th className="px-4 py-2">Pronunciation</th>
              <th className="px-4 py-2">Listen</th>
            </tr>
          </thead>
          <tbody>
            {numbers.map((item, index) => (
              <tr key={index}>
                <td>{item.english}</td>
                <td>{item.finnish}</td>
                <td>{item.pronunciation}</td> {/* Fixed typo: "pronounciation" -> "pronunciation" */}
                <td> <button
                    onClick={() => {
                    const utterance = new SpeechSynthesisUtterance(item.finnish);
                    utterance.lang = 'fi-FI';
                    window.speechSynthesis.speak(utterance);
                    }}
                    className="ml-2 bg-teal-500 text-white px-2 py-1 rounded hover:bg-teal-600 transform hover:scale-110 transition duration-200"
                >
                    Play
                </button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

function NumbersPage() {
    
    // const [showPronunciation, setShowPronunciation] = useState(false);
    
    
    // const playPronunciation = (text: string) => {
    //     const utterance = new SpeechSynthesisUtterance(text);
    //     utterance.lang = "fi-FI";
    //     window.speechSynthesis.speak(utterance);
    // };

    return (
<div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
      <Link to="/beginars" className="text-teal-700 hover:underline mb-6 inline-block">
        ← Back to Beginars Lesson
      </Link>



      {/* Verbtype 1 Section */}
      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
        <h3 className="text-xl font-semibold text-teal-700 mb-2">1. List of Languages in Finnish</h3>
        <p className="text-gray-600 mb-4">
        To say you speak a certain language, you use the verb puhua. This verb is a partitive verb. This means that you have to put the language in the partitive (the extra "a" below) behind the verb puhua.
        </p>


        <ConjugationTable numbers={mathData.numbers} />

        
        <p className="text-gray-600 mb-4">
        * The language hindi gets an -ä instead of an -a (hindiä instead of hindia). This is also the case for venäjää instead of venäjäa. This is due to vowel harmony rules. The same would also be true for friisi (puhun friisiä), simlish (puhun simlishiä) and khmer (puhun khmeriä).
        </p>

        <Link to={`/beginars/what-languages/language-basics/language-quiz`}>
          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
            Basic Language Exercises
          </button>
        </Link>

        
      {/* Introduction Section */}
      </div>

            <Link to="/numbers/quiz">
                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                    Quiz
                </button>  
            </Link>
        </div>
    );


}

export default NumbersPage;
