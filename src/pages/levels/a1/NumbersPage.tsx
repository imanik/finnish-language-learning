
  import React, { useState} from "react";
  import { Link } from "react-router-dom";
  import { numberData } from "../../../data/basicA1";

      interface Number {
          english: string,
          finnish: string,
          pronunciation?: string,
      }

      interface ConjugationTableProps {
          numbers: Number[];
          min?: number;
          max?: number;
      }

  function ConjugationTable({ numbers, min, max } :ConjugationTableProps) {
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
              {numbers
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
      );
    }

  function NumbersPage() {
      
      return (
  <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
        <Link to="/beginars" className="text-teal-700 hover:underline mb-6 inline-block">
          ← Back to Beginars Lesson
        </Link>


            <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

                    <h2 className="text-2xl font-semibold text-teal-800 mb-4">🧮 The Numbers in Finnish – Numerot</h2>
                {/* <!-- Header --> */}
                    {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}

                      <h2 className="text-2xl font-semibold text-teal-600 mb-3">🔢 1. Cardinal Numbers (Perusluvut)</h2>
              <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                  <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p>
      
                  <ConjugationTable numbers={numberData.numbers} min={0} max={10} />
                  
                  
              </section>
      
              <Link to={`/beginars/basic-words/basic-adjective/basic-adjective-quiz`}>
                  <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                  Basic Numbers Exercises
                  </button>
              </Link>
      
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
          
                        {/* <!-- Header --> */}
                        <h2 className="text-2xl font-semibold text-teal-800 mb-4">🧮 Numbers 11-20 </h2>
          
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                  {/* <p className="text-gray-700 mb-4">Adjectives answer <span className="font-medium">Millainen?</span> (What kind?). Learn these pairs to describe people and things!</p> */}

                  {/* <!-- Basic Adjective Pairs --> */}
                      <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
                              <h3 className="text-xl font-medium text-teal-700 mb-2">a.Numbers 11 to 20</h3>
                              <p className="text-gray-700"></p>
                              <ul className="list-disc text-gray-700 space-y-2 m-6">
                                    <li>11 →  Huoneessa on yksitoista maalausta. → There are eleven paintings.</li>
                                    <li>12 →	Keittiössä on kaksitoista ulkofileetä. →	There are twelve sirloins.</li>
                                    <li>13 →	Eteisessä on kolmetoista tuuletinta. →	There are thirteen fans.</li>
                                    <li>14-19 → (same pattern as above)</li>
                                    <li>20 →	Autossa on kaksikymmentä kirvestä. →	There are twenty axes in the car.</li>
                                  </ul>
                              <p className="text-teal-600 mt-2"><strong>Quick Rule:</strong> These use a pattern ending in “toista” (teen).</p>
                      </div>

                  {/* <!-- Using with Nouns --> */}
                      <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
                              <h3 className="text-xl font-medium text-teal-700 mb-2">b. From 21 to 30 (and beyond)</h3>
                              {/* <p className="text-gray-700">Put the adjective before the noun to describe it!</p> */}
                              <ul className="list-disc text-gray-700 space-y-2 m-6">
                                    <li>21 →  kaksi(2) + kymmentä(10) + yksi(1) → kaksikymmentäyksi</li>
                                    <li>22 →	kaksi(2) + kymmentä(10) + kaksi(2) → kaksikymmentäkaksi</li>
                                    <li>30 →	kolme(3) + kymmentä(10) → kolmekymmentä</li>
                                    <li>99 →	yhdeksän(9) + kymmentä(10) + yhdeksän(9) → yhdeksänkymmentäyhdeksän</li>
                              </ul>
                              <p className="text-teal-600 mt-2"><strong>Quick Rule:</strong> Just stack the number words!</p>
                      </div>
                  </section>

                  <Link to={`/beginars/basic-words/basic-adjective/basic-adjective-quiz`}>
                  <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                  Basic Number in Sentences Exercises
                  </button>
                  </Link>

          
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

                    {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🧮 The Numbers in Finnish – Numerot</h2> */}
                {/* <!-- Header --> */}
                    {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}

                      <h2 className="text-2xl font-semibold text-teal-600 mb-3">🔢 The Tens</h2>
                  {/* <p className="text-gray-700 mb-2">These end in -toista, like the cardinal form:</p> */}
              <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
      
                  <ConjugationTable numbers={numberData.numbers} min={11} max={18} />
                  
                  
              </section>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

                    {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🧮 The Numbers in Finnish – Numerot</h2> */}
                {/* <!-- Header --> */}
                    {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}

                      <h2 className="text-2xl font-semibold text-teal-600 mb-3">🧮 Larger Numbers</h2>
                  {/* <p className="text-gray-700 mb-2">These end in -toista, like the cardinal form:</p> */}
              <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
      
                  <ConjugationTable numbers={numberData.numbers} min={19} max={numberData.numbers.length-1} />
                  
                  
              </section>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

                    {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4"> The Numbers in Finnish – Numerot</h2> */}
                {/* <!-- Header --> */}
                    {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}

                      <h2 className="text-2xl font-semibold text-teal-600 mb-3">🥇 2. Ordinal Numbers (Järjestysluvut)</h2>
                  <p className="text-gray-700 mb-2">These are for position or order: first, second, third...</p>
              <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
      
                  <ConjugationTable numbers={numberData.ordinalNumbers} min={0} max={9} />
                                
              </section>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
          
                        {/* <!-- Header --> */}
                        <h2 className="text-2xl font-semibold text-teal-800 mb-4">🧮 More Ordinal Numbers  </h2>
          
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                  {/* <p className="text-gray-700 mb-4">Adjectives answer <span className="font-medium">Millainen?</span> (What kind?). Learn these pairs to describe people and things!</p> */}

                  {/* <!-- Basic Adjective Pairs --> */}
                      <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
                              <h3 className="text-xl font-medium text-teal-700 mb-2">a. Ordinal Numbers 11 to 19</h3>
                              <p className="text-gray-700">These end in -toista, like the cardinal form:</p>
                              <ul className="list-disc text-gray-700 space-y-2 m-6">
                                    <li>11th → yhdes + toista → yhdestoista</li>
                                    <li>12th →	kahdes + toista →	kahdestoista</li>
                                    <li>13th →	kolmas + toista →	kolmastoista</li>
                                    <li>14th-19th → (same pattern as above)</li>
                              </ul>
                              {/* <p className="text-teal-600 mt-2"><strong>Quick Rule:</strong> These use a pattern ending in “toista” (teen).</p> */}
                      </div>

                  {/* <!-- Using with Nouns --> */}
                      <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
                              <h3 className="text-xl font-medium text-teal-700 mb-2">b. From 21 to 30 </h3>
                              <p className="text-gray-700">Combine the parts:</p>
                              <ul className="list-disc text-gray-700 space-y-2 m-6">
                                    <li>20 →	kahdes + kymmenes → kahdeskymmenes</li>
                                    <li>21 →  kahdes + kymmenes + ensimmäinen → kahdeskymmenesensimmäinen</li>
                                    <li>25 →	kahdes + kymmenes + viides → kahdeskymmenesviides</li>
                                    <li>30 →	kolmas + kymmenes → kolmaskymmenes</li>
                              </ul>
                              <p className="text-teal-600 mt-2"><strong>Quick Rule:</strong> Just stack the number words!</p>
                      </div>
                  </section>

          
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

                    {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4"> The Numbers in Finnish – Numerot</h2> */}
                {/* <!-- Header --> */}
                    {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}

                      <h2 className="text-2xl font-semibold text-teal-600 mb-3">🥇 Tens and Hundreds</h2>
                  {/* <p className="text-gray-700 mb-2">These are for position or order: first, second, third...</p> */}
              <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
      
                  <ConjugationTable numbers={numberData.ordinalNumbers} min={10} max={numberData.ordinalNumbers.length-1} />
                                
              </section>

              <Link to={`/beginars/basic-words/basic-adjective/basic-adjective-quiz`}>
                  <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                  Ordinal Numbers Exercises
                  </button>
                </Link>
            </div>

          </div>
          
      );


  }

  export default NumbersPage;


