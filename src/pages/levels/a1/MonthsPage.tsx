
import React, { useState} from "react";
import { Link } from "react-router-dom";
import { monthData } from "../../../data/basicA1";

    interface Day {
        english: string,
        finnish: string,
        pronunciation?: string,
    }

    interface ConjugationTableProps {
        days: Day[];
        min?: number;
        max?: number;
        isVocab?: boolean;
    }

function ConjugationTable({ days, min, max, isVocab } :ConjugationTableProps) {
    // console.log("ConjugationTable loaded", families);
    return (
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-teal-600 mb-2"></h4>
        <table className="table-auto w-full text-gray-600">
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
    );
  }

function DaysPage() {
    
    return (
<div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
      <Link to="/beginars" className="text-teal-700 hover:underline mb-6 inline-block">
        ← Back to Beginars Lesson
      </Link>


          <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

                  <h2 className="text-2xl font-semibold text-teal-800 mb-4">🧭 Kuukaudet – The Months (A1 Level)</h2>
              {/* <!-- Header --> */}
                  {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}

                    <h2 className="text-2xl font-semibold text-teal-600 mb-3">🧩 Topic 1: The Months – Kuukaudet</h2>
            <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
    
                <ConjugationTable days={monthData.basicMonths} min={0} max={11} isVocab={true} />
                
                
                            <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p>
            </section>
    
            <Link to={`/beginars/basic-words/basic-adjective/basic-adjective-quiz`}>
                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                Basic Months Vocabulary Exercises
                </button>
            </Link>
    
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

                {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🗓️ Days of the Week – Viikonpäivät (A1 Level)</h2> */}
                {/* <!-- Header --> */}
                {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}

                  <h2 className="text-2xl font-semibold text-teal-600 mb-3">🧩 Topic 2: “In January” – Using the Inessive (-ssa)</h2>
                <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}

                <ConjugationTable days={monthData.basicMonths} min={12} max={23} isVocab = {true}/>


                          <p className="text-teal-600 mt-2"><strong>🧠 Tips:</strong><br></br> Use the -ssa ending for “in [month] </p>
                
                          <p className="text-gray-700">🧾 Examples:</p>
                            <ul className="list-disc text-gray-700 space-y-2 m-6">
                                  <li>Olen lomalla kesäkuussa. → I’m on vacation in June.</li>
                                  <li>Synnyin helmikuussa. → I was born in February.</li>
                            </ul>
                </section>



          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

                {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🗓️ Days of the Week – Viikonpäivät (A1 Level)</h2> */}
                {/* <!-- Header --> */}
                {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}

                  <h2 className="text-2xl font-semibold text-teal-600 mb-3">🔁 3. Saying "Every [Day]" → Use -(i)sin or joka + base form</h2>
                <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}

                <ConjugationTable days={monthData.basicMonths} min={24} max={monthData.basicMonths.length-1} isVocab={true}/>


                          <p className="text-teal-600 mt-2"><strong>🧾 Examples:</strong>
                          <br></br>
                          <br></br>
                          Käyn <span className="text-red-500">joka tiistai</span> kuntosalilla. – I go to the gym every Tuesday.
                          <br></br>
                          Me syömme ravintolassa <span className="text-red-500">perjantaisin.</span> – We eat at a restaurant on Fridays.</p>
                </section>



          </div>
          <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

                {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🗓️ Days of the Week – Viikonpäivät (A1 Level)</h2> */}
                {/* <!-- Header --> */}
                {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}

                  <h2 className="text-2xl font-semibold text-teal-600 mb-3">⏳ 4. Time Span: From [Day] → Until [Day]</h2>
                <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}

                <ConjugationTable days={monthData.basicMonths} min={21} max={monthData.basicMonths.length-1} isVocab = {true}/>


                          <p className="text-teal-600 mt-2"><strong>📝  Use -sta/-stä (elative = "from") and -hVn (illative = "to/until")</strong><br></br> </p>
                </section>

                <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                {/* <p className="text-gray-700 mb-4">Adjectives answer <span className="font-medium">Millainen?</span> (What kind?). Learn these pairs to describe people and things!</p> */}

                {/* <!-- Basic Adjective Pairs --> */}
                    <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
                            <h3 className="text-xl font-medium text-teal-700 mb-2">⛅ Common Words:</h3>
                            <p className="text-gray-700"></p>
                            <ul className="list-disc text-gray-700 space-y-2 m-6">
                                  <li>alkaen, lähtien → starting from</li>
                                  <li>asti → until</li>
                                  <li>mennessä → by</li>
                            </ul>
                            <h3 className="text-xl font-medium text-teal-700 mb-2">📌 Examples:</h3>
                            <p className="text-gray-700"></p>
                            <ul className="list-disc text-gray-700 space-y-2 m-6">
                                  <li>Olen lomalla sunnuntaihin asti. → I’m on vacation until Sunday.</li>
                                  <li>Tiistaihin mennessä pitää olla valmis. → I must be ready by Tuesday.</li>
                                  <li>Matkustan keskiviikosta perjantaihin. → I travel from Wednesday till Friday.</li>
                                </ul>
                            {/* <p className="text-teal-600 mt-2"><strong>Quick Rule:</strong> These use a pattern ending in “toista” (teen).</p> */}
                    </div>

                </section>

          </div>
          <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

                {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🗓️ Days of the Week – Viikonpäivät (A1 Level)</h2> */}
                {/* <!-- Header --> */}
                {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}

                  <h2 className="text-2xl font-semibold text-teal-600 mb-3">🔄 5. Last, This, and Next [Day]</h2>
                <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
                    <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
                          <h3 className="text-xl font-medium text-teal-700 mb-2">⛅ Combine viime, tänä, ensi + essive form:</h3>
                            <p className="text-gray-700"></p>
                            <ul className="list-disc text-gray-700 space-y-2 m-6">
                                  <li>viime maanantaina → Last Monday</li>
                                  <li>tänä maanantaina → This Monday</li>
                                  <li>ensi maanantaina → Next Monday</li>
                            </ul>
                            <h3 className="text-xl font-medium text-teal-700 mb-2">📌 Examples:</h3>
                            <p className="text-gray-700"></p>
                            <ul className="list-disc text-gray-700 space-y-2 m-6">
                                  <li>Viime maanantaina myöhästyin bussista → I was late for the bus last Monday.</li>
                                  <li>Ensi tiistaina on syntymäpäiväni. → Next Tuesday is my birthday.</li>
                                  {/* <li>Matkustan keskiviikosta perjantaihin. → I travel from Wednesday till Friday.</li> */}
                                </ul>
                            {/* <p className="text-teal-600 mt-2"><strong>Quick Rule:</strong> These use a pattern ending in “toista” (teen).</p> */}
                    </div>

                    <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
                          <h3 className="text-xl font-medium text-teal-700 mb-2">🎯 Quick Recap:</h3>
                            <p className="text-gray-700"></p>
                            <ul className="list-disc text-gray-700 space-y-2 m-6">
                                  <li>Use -na for “on [day]”</li>
                                  <li>Use -isin or joka for “every [day]”</li>
                                  <li>Use -sta → -hin for time spans</li>
                            </ul>
                            
                            {/* <p className="text-teal-600 mt-2"><strong>Quick Rule:</strong> These use a pattern ending in “toista” (teen).</p> */}
                    </div>
                


                          {/* <p className="text-teal-600 mt-2"><strong>📝  💬 Examples:</strong><br></br> Koulu alkaa maanantaina. – School starts on Monday. </p> */}
                </section>

          </div>


          <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

                  {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🧮 The Numbers in Finnish – Numerot</h2> */}
              {/* <!-- Header --> */}
                  {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}

                    <h2 className="text-2xl font-semibold text-teal-600 mb-3">💬 6. Random Example Sentences</h2>
                {/* <p className="text-gray-700 mb-2">These end in -toista, like the cardinal form:</p> */}
            <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
    
                <ConjugationTable days={monthData.sentenceMonths} min={0} max={monthData.sentenceMonths.length-1} isVocab={false} />
                
                
            </section>
            <Link to={`/beginars/basic-words/basic-adjective/basic-adjective-quiz`}>
                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                Basic Days In Sentence Exercises
                </button>
            </Link>
          </div>

          

          

          

        </div>
        
    );


}

export default DaysPage;


