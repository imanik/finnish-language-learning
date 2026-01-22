
import React from "react";
import { Link } from "react-router-dom";
import { weatherData } from "../../../data/basicA1";

import ConjugationTable from "../../../components/ConjugationTable";
import BodyWrapper from "../../../components/wrapper/BodyWrapper";
import NavWrapper from "../../../components/wrapper/NavWrapper";

    

function WeathersPage() {
    
    return (

<BodyWrapper>
                
            <NavWrapper link="/beginars" title="← Back to Beginars Lesson"> </NavWrapper>

      <div className="mt-16">

          <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

                  <h2 className="text-2xl font-semibold text-teal-800 mb-4">🧊 Talking About the Weather – Puhutaan säästä!</h2>
              {/* <!-- Header --> */}
                  {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}

                    <h2 className="text-2xl font-semibold text-teal-600 mb-3">🧩 🔹 1. Vocabulary: Weather Nouns & Adjectives</h2>
            <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
    
                <ConjugationTable items={weatherData.basicWeathers} min={0} max={11} isVocab={true} />
                
                
                            {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
            </section>
            {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}
            
    
            <Link to={`/beginars/weather/summer-or-winter/basic-weathers-quiz`}>
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

                 <ConjugationTable items={weatherData.weathersSentence} min={30} max={42} isVocab={false} />


                         
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

                 <ConjugationTable items={weatherData.weathersSentence} min={0} max={12} isVocab={false} />


                         
                </section>

    
          
    
            <Link to={`/beginars/weather/summer-or-winter/sentence-weathers-quiz`}>
                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                Basic Weathers In Sentence Exercises
                </button>
            </Link>
    
          </div>


        </div>
        </BodyWrapper>
        
    );


}

export default WeathersPage;


