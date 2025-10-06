
  import React from "react";
  import { Link } from "react-router-dom";
  import { numberData } from "../../../data/basicA1";

  import ConjugationTable from "../../../components/ConjugationTable";
import BodyWrapper from "../../../components/BodyWrapper";
import NavWrapper from "../../../components/NavWrapper";
  

  function NumbersPage() {
      
      return (
<BodyWrapper>
                
            <NavWrapper link="/beginars" title="← Back to Beginars Lesson"> </NavWrapper>

        <div className="mt-8">

            <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

                    <h2 className="text-2xl font-semibold text-teal-800 mb-4">🧮 The Numbers in Finnish – Numerot</h2>
                {/* <!-- Header --> */}
                    {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}

                      <h2 className="text-2xl font-semibold text-teal-600 mb-3">🔢 1. Cardinal Numbers (Perusluvut)</h2>
              <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                  <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p>
      
                  <ConjugationTable items={numberData.basicNumbers} min={0} max={10} isVocab={true} />
                  
                  
              </section>
      
              <Link to={`/beginars/number/ready-one-two-three/basic-numbers-quiz`}>
                  <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                  Basic Numbers Exercises
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
      
                  <ConjugationTable items={numberData.basicNumbers} min={11} max={18} isVocab={true} />
                  
                  
              </section>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

                    {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🧮 The Numbers in Finnish – Numerot</h2> */}
                {/* <!-- Header --> */}
                    {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}

                      <h2 className="text-2xl font-semibold text-teal-600 mb-3">🧮 Larger Numbers</h2>
                  {/* <p className="text-gray-700 mb-2">These end in -toista, like the cardinal form:</p> */}
              <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
      
                  <ConjugationTable items={numberData.basicNumbers} min={19} max={numberData.basicNumbers.length-1} isVocab={true} />
                  
                  
              </section>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
          
          {/* <!-- Header --> */}
          <h2 className="text-2xl font-semibold text-teal-800 mb-4">🧮 Numbers in Sentence 11-20 </h2>

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

    <Link to={`/beginars/number/ready-one-two-three/sentence-numbers-quiz`}>
    <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
    Basic Number in Sentences Exercises
    </button>
    </Link>


</div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

                    {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4"> The Numbers in Finnish – Numerot</h2> */}
                {/* <!-- Header --> */}
                    {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}

                      <h2 className="text-2xl font-semibold text-teal-600 mb-3">🥇 2. Ordinal Numbers (Järjestysluvut)</h2>
                  <p className="text-gray-700 mb-2">These are for position or order: first, second, third...</p>
              <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
      
                  <ConjugationTable items={numberData.ordinalNumbers} min={0} max={9} isVocab={true} />
                                
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
      
                  <ConjugationTable items={numberData.ordinalNumbers} min={10} max={numberData.ordinalNumbers.length-1} isVocab={true} />
                                
              </section>

              <Link to={`/beginars/number/ready-one-two-three/ordinal-numbers-quiz`}>
                  <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                  Ordinal Numbers Exercises
                  </button>
                </Link>
            </div>

          </div>
          </BodyWrapper>
          
      );


  }

  export default NumbersPage;


