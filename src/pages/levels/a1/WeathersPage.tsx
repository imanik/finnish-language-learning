
import React, { useState} from "react";
import { Link } from "react-router-dom";
import { weatherData } from "../../../data/basicA1";

    interface Weather {
        english: string,
        finnish: string,
        pronunciation?: string,
    }

    interface ConjugationTableProps {
        days: Weather[];
        min?: number;
        max?: number;
        isVocab?: boolean;
    }

function ConjugationTable({ days, min, max, isVocab } :ConjugationTableProps) {
    // console.log("ConjugationTable loaded", families);
    return (
      <div className="mb-6 overflow-x-auto">
      <h4 className="text-lg font-semibold text-teal-600 mb-2"></h4>
      <div className="min-w-full inline-block align-middle">
          <table className="table-auto w-full text-gray-600 border-collapse">
          <thead>
          {isVocab ?   
              <tr className="bg-teal-100">
              <th className="px-4 py-2">English</th>
              <th className="px-4 py-2">Finnish</th>
              <th className="px-4 py-2">Pronunciation</th> 
              <th className="px-4 py-2">Listen</th>
              </tr>
               :
               
               <tr className="bg-teal-100">
              <th className="px-4 py-2">English</th>
              <th className="px-4 py-2">Finnish</th>
              <th className="px-4 py-2"></th>
              <th className="px-4 py-2">Listen</th>
                </tr>
              }
            
          </thead>
          <tbody>
            {days
            .filter((_, index) => {
            if (min !== undefined && max !== undefined) {
            return index >= min && index <= max;
            }
            return true;
            }).map((item, index) => (
              //  {if (index >== 0 && index <== 10)
                
            
              <tr key={index}>
                <td>{item.english}</td>
                <td>{item.finnish}</td>
                <td>{item.pronunciation}</td> {/* Fixed typo: "pronounciation" -> "pronunciation" */}
                <td className="px-4 py-2">
                <button
                        onClick={() => {
                        const utterance = new SpeechSynthesisUtterance(item.finnish);
                        utterance.lang = 'fi-FI';
                        window.speechSynthesis.speak(utterance);
                        }}
                        className="ml-2 bg-teal-300 text-white px-2 py-1 rounded hover:bg-teal-600 transform hover:scale-110 transition duration-200"
                    >
                        <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-blue-600 hover:text-blue-800 cursor-pointer"
                  >
                    <path d="M5 3.868v16.264a1 1 0 0 0 1.528.849l13.056-8.132a1 1 0 0 0 0-1.698L6.528 3.019A1 1 0 0 0 5 3.868z" />
                  </svg>
                    </button>
                </td>
              </tr>
            //  }
            ))}
          </tbody>
        </table>
      </div>
      </div>
    );
  }

function WeathersPage() {
    
    return (
<div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
      <Link to="/beginars" className="text-teal-700 hover:underline mb-6 inline-block">
        ← Back to Beginars Lesson
      </Link>


          <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

                  <h2 className="text-2xl font-semibold text-teal-800 mb-4">🧊 Talking About the Weather – Puhutaan säästä!</h2>
              {/* <!-- Header --> */}
                  {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}

                    <h2 className="text-2xl font-semibold text-teal-600 mb-3">🧩 🔹 1. Vocabulary: Weather Nouns & Adjectives</h2>
            <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
    
                <ConjugationTable days={weatherData.basicWeathers} min={0} max={11} isVocab={true} />
                
                
                            {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
            </section>
            {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}
            
    
            <Link to={`/beginars/basic-words/basic-adjective/basic-adjective-quiz`}>
                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                Basic Weathers Vocabulary Exercises
                </button>
            </Link>
    
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

                {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🗓️ Days of the Week – Viikonpäivät (A1 Level)</h2> */}
                {/* <!-- Header --> */}
                {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}

                  <h2 className="text-2xl font-semibold text-teal-600 mb-3">🗣️ Asking About the Weather</h2>
                <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}

                 <ConjugationTable days={weatherData.weatherSentences} min={30} max={42} isVocab={false} />


                         
                </section>
                


          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

                {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🗓️ Days of the Week – Viikonpäivät (A1 Level)</h2> */}
                {/* <!-- Header --> */}
                {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}

                  <h2 className="text-2xl font-semibold text-teal-600 mb-3">🧩 Using Adjectives: Nominative vs. Partitive</h2>
               


                <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                {/* <p className="text-gray-700 mb-4">Adjectives answer <span className="font-medium">Millainen?</span> (What kind?). Learn these pairs to describe people and things!</p> */}

                {/* <!-- Basic Adjective Pairs --> */}
                    
                
                        <p className="text-gray-700 ">🧾 Nominative form (used with "päivä"):</p>
                        <ul className="list-disc text-gray-700 space-y-2 m-6">
                              <li>On pilvinen päivä. → It’s a cloudy day.</li>
                              <li>On sateinen päivä. → It’s a rainy day.</li>
                              <li>On aurinkoinen päivä. → It’s a sunny day.</li>
                        </ul>
                        <p className="text-gray-700 ">🧾 Partitive form (used alone):</p>
                        <ul className="list-disc text-gray-700 space-y-2 m-6">
                              <li>On pilvistä. → It’s cloudy.</li>
                              <li>On sateista. → It’s rainy.</li>
                              <li>On aurinkoista. → It’s sunny.</li>
                        </ul>

                    <p className="text-teal-600 mt-2 mb-4"><strong>❗ Note:</strong> Don’t use “Se” in front of weather phrases. For example, say “On kylmä” (It’s cold), not “Se on kylmä”. </p>
                      
                                  {/* <p className="text-teal-600 mt-2"><strong>Quick Rule:</strong> These use a pattern ending in “toista” (teen).</p> */}
                    

                

                </section>



          </div>
          <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

                {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🗓️ Days of the Week – Viikonpäivät (A1 Level)</h2> */}
                {/* <!-- Header --> */}

                  <h2 className="text-2xl font-semibold text-teal-600 mb-3">❄️ Weather Phrases</h2>


                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}

                 <ConjugationTable days={weatherData.weatherSentences} min={0} max={12} isVocab={false} />


                         
                </section>

    
          
    
            <Link to={`/beginars/basic-words/basic-adjective/sentence-month-quiz`}>
                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                Basic Weathers In Sentence Exercises
                </button>
            </Link>
    
          </div>


        </div>
        
    );


}

export default WeathersPage;


