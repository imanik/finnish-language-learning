
import React, { useState} from "react";
import { Link } from "react-router-dom";
import { monthData } from "../../../data/basicA1";

import ConjugationTable from "../../../components/ConjugationTable";


function DaysPage() {
    
    return (
<div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
      <Link to="/beginars" className="text-teal-700 hover:underline bg-teal-100 mb-6 inline-block fixed top-0 left-0 w-full  px-4 py-2 shadow-md">
        ← Back to Beginars Lesson
      </Link>

      <div className="mt-8">

          <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

                  <h2 className="text-2xl font-semibold text-teal-800 mb-4">🧭 Kuukaudet – The Months (A1 Level)</h2>
              {/* <!-- Header --> */}
                  {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}

                    <h2 className="text-2xl font-semibold text-teal-600 mb-3">🧩 Topic 1: The Months – Kuukaudet</h2>
            <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
    
                <ConjugationTable items={monthData.basicMonths} min={0} max={11} isVocab={true} />
                
                
                            <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p>
            </section>
    
            <Link to={`/beginars/month/january-to-december/basic-months-quiz`}>
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

                <ConjugationTable items={monthData.basicMonths} min={12} max={23} isVocab = {true}/>


                         
                </section>
                <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                {/* <p className="text-gray-700 mb-4">Adjectives answer <span className="font-medium">Millainen?</span> (What kind?). Learn these pairs to describe people and things!</p> */}

                {/* <!-- Basic Adjective Pairs --> */}
                    <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
                    <p className="text-teal-600 mt-2 mb-4"><strong>🧠 Tips:</strong> Use the -ssa ending for “in [month] </p>
                
                        <p className="text-gray-700 ">🧾 Examples:</p>
                        <ul className="list-disc text-gray-700 space-y-2 m-6">
                              <li>Olen lomalla kesäkuussa. → I’m on vacation in June.</li>
                              <li>Synnyin helmikuussa. → I was born in February.</li>
                        </ul>
                                  {/* <p className="text-teal-600 mt-2"><strong>Quick Rule:</strong> These use a pattern ending in “toista” (teen).</p> */}
                    </div>

                </section>



          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

                {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🗓️ Days of the Week – Viikonpäivät (A1 Level)</h2> */}
                {/* <!-- Header --> */}
                {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}

                  <h2 className="text-2xl font-semibold text-teal-600 mb-3">🧩 Topic 3: “From January – Until June” – Using the Elative (-sta) & Illative (-hun)</h2>
                <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}

                <ConjugationTable items={monthData.basicMonths} min={24} max={47} isVocab={true}/>

                </section>
                <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                {/* <p className="text-gray-700 mb-4">Adjectives answer <span className="font-medium">Millainen?</span> (What kind?). Learn these pairs to describe people and things!</p> */}

                {/* <!-- Basic Adjective Pairs --> */}
                    
                    <p className="text-teal-600 mt-2 mb-4"><strong>🧠 Tips:</strong> say “from [month]” using -sta & say “until [month]” using -hun </p>
                
                        <p className="text-gray-700 ">🧾 Examples:</p>
                        <ul className="list-disc text-gray-700 space-y-2 m-6">
                              <li>Työskentelen maaliskuusta elokuuhun. → I work from March until August.</li>
                              <li>Kurssi kestää tammikuusta toukokuuhun. → The course lasts from January until May.</li>
                        </ul>

                      
                                  {/* <p className="text-teal-600 mt-2"><strong>Quick Rule:</strong> These use a pattern ending in “toista” (teen).</p> */}
                    

                

                </section>



          </div>
          <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

                {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🗓️ Days of the Week – Viikonpäivät (A1 Level)</h2> */}
                {/* <!-- Header --> */}
                {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}

                  <h2 className="text-2xl font-semibold text-teal-600 mb-3">🧩 Topic 4: “Starting From” – With Adverbs: alkaen, lähtien</h2>


                <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                {/* <p className="text-gray-700 mb-4">Adjectives answer <span className="font-medium">Millainen?</span> (What kind?). Learn these pairs to describe people and things!</p> */}

                {/* <!-- Basic Adjective Pairs --> */}
                    <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
                            <h3 className="text-xl font-medium text-teal-700 mb-2">🧠 Content:</h3>
                            <p className="text-gray-700"></p>
                            <ul className="list-disc text-gray-700 space-y-2 m-6">
                                  <li>Olen töissä tammikuusta alkaen. → I’ve been working starting from January.</li>
                                  <li>Opiskelen syyskuusta lähtien → I study starting from September.</li>
                            </ul>
                            <p className="text-teal-600 mt-2 mb-4"><strong>🧠 Tips:</strong> Combine with -sta form and adverbs alkaen or lähtien</p>
                            {/* <h3 className="text-xl font-medium text-teal-700 mb-2">📌 Examples:</h3> */}
                            <p className="text-gray-700">📌 alkaen and lähtien are interchangeable at A1 level. They always come after the month in the -sta form.</p>
                           
                            {/* <p className="text-teal-600 mt-2"><strong>Quick Rule:</strong> These use a pattern ending in “toista” (teen).</p> */}
                    </div>

                </section>

          </div>
          <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

                {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🗓️ Days of the Week – Viikonpäivät (A1 Level)</h2> */}
                {/* <!-- Header --> */}
                {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}

                  <h2 className="text-2xl font-semibold text-teal-600 mb-3">🧩 Topic 5: “Until” – With Adverb: asti</h2>
                <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
                    <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
                          <h3 className="text-xl font-medium text-teal-700 mb-2">🧠 Content:</h3>
                            <p className="text-gray-700"></p>
                            <ul className="list-disc text-gray-700 space-y-2 m-6">
                                  <li>Aurinko paistaa lokakuuhun asti. → The sun shines until October.</li>
                                  <li>Olen lomalla syyskuuhun asti. → I’m on vacation until September.</li>
                            </ul>
                          
                            <p className="text-teal-600 mt-2 mb-4">🧠 Remember: Use -hun ending with asti → elokuuhun asti, maaliskuuhun asti</p>
                            
                    </div>
                
                          {/* <p className="text-teal-600 mt-2"><strong>📝  💬 Examples:</strong><br></br> Koulu alkaa maanantaina. – School starts on Monday. </p> */}
                </section>

          </div>


          <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

          <h2 className="text-2xl font-semibold text-teal-600 mb-3">🧩 Topic 6: “By” – With Adverb: mennessä</h2>
                <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
                    <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
                          <h3 className="text-xl font-medium text-teal-700 mb-2">🧠 Content:</h3>
                            <p className="text-gray-700"></p>
                            <ul className="list-disc text-gray-700 space-y-2 m-6">
                                  <li>Maksa lasku tammikuuhun mennessä! → Pay the bill by January!</li>
                                  <li>Joulukuuhun mennessä tiedämme vastaukset. → By December, we will know the answers.</li>
                            </ul>
                          
                            <p className="text-teal-600 mt-2 mb-4">👀 Tip: mennessä = by [time], so use -hun form again.</p>
                            
                    </div>
                
                          {/* <p className="text-teal-600 mt-2"><strong>📝  💬 Examples:</strong><br></br> Koulu alkaa maanantaina. – School starts on Monday. </p> */}
                </section>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

          <h2 className="text-2xl font-semibold text-teal-600 mb-3">🧩 Topic 7: “Last month, This month, Next month”</h2>
                <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
                    <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
                          <h3 className="text-xl font-medium text-teal-700 mb-2">📌 Expressions:</h3>
                            <p className="text-gray-700"></p>
                            <ul className="list-disc text-gray-700 space-y-2 m-6">
                                  <li>viime kuussa → last month</li>
                                  <li>tässä kuussa → this month</li>
                                  <li>ensi kuussa → next month</li>
                  
                            </ul>
                          
                            <h3 className="text-xl font-medium text-teal-700 mb-2">🧠 Content:</h3>
                            <p className="text-gray-700"></p>
                            <ul className="list-disc text-gray-700 space-y-2 m-6">
                                  <li>Muutin Suomeen viime kuussa. → I moved to Finland last month.</li>
                                  <li>Matkustan Tallinnaan ensi kuussa. → I will travel to Tallinn next month.</li>
                                  <li>Tässä kuussa on paljon töitä. → There is a lot of work this month.</li>
                  
                            </ul>
                            <p className="text-teal-600 mt-2 mb-4">⚠️ Note: Learners often mistakenly say viime kuukausi – this is incorrect. Use kuussa with these expressions.</p>
                            
                    </div>

                          {/* <p className="text-teal-600 mt-2"><strong>📝  💬 Examples:</strong><br></br> Koulu alkaa maanantaina. – School starts on Monday. </p> */}
                </section>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

          <h2 className="text-2xl font-semibold text-teal-600 mb-3">🧩 Topic 8: Frequency – How many times a month?</h2>
                <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
                    <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
                          <h3 className="text-xl font-medium text-teal-700 mb-2">📌 Expressions:</h3>
                            <p className="text-gray-700"></p>
                            <ul className="list-disc text-gray-700 space-y-2 m-6">
                                  <li>kerran kuussa → once a month</li>
                                  <li>kaksi kertaa kuussa → twice a month</li>
                                  <li>kolme kertaa kuussa → three times a month</li>
                  
                            </ul>
                          
                            <h3 className="text-xl font-medium text-teal-700 mb-2">🧠 Content:</h3>
                            <p className="text-gray-700"></p>
                            <ul className="list-disc text-gray-700 space-y-2 m-6">
                                  <li>Syön kalaa kerran kuussa. → I eat fish once a month.</li>
                                  <li>Käyn uimassa kaksi kertaa kuussa. → I go swimming twice a month.</li>
                  
                            </ul>
                            <p className="text-teal-600 mt-2 mb-4">🧠 "Kerta(a)" means "times" → kerran = once, kaksi kertaa = twice</p>
                            
                    </div>

                          {/* <p className="text-teal-600 mt-2"><strong>📝  💬 Examples:</strong><br></br> Koulu alkaa maanantaina. – School starts on Monday. </p> */}
                </section>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

          <h2 className="text-2xl font-semibold text-teal-600 mb-3">🧩 Topic 9: Past & Future – Time Ago and In the Future</h2>
                <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
                    <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
                          <h3 className="text-xl font-medium text-teal-700 mb-2">📌 Focus:</h3>
                            <p className="text-gray-700"></p>
                            <ul className="list-disc text-gray-700 space-y-2 m-6">
                                  <li>Use sitten for the past</li>
                                  <li>Use päästä / kuluttua for the future</li>
                  
                            </ul>
                          
                            <h3 className="text-xl font-medium text-teal-700 mb-2">🧠 Content:</h3>
                            <p className="text-teal-600 mt-2 mb-4"><strong>🔙 Past:</strong></p>
                            <ul className="list-disc text-gray-700 space-y-2 m-6">
                                  <li>kuukausi sitten → a month ago</li>
                                  <li>kaksi kuukautta sitten → two months ago</li>
                  
                            </ul>
                            <p className="text-gray-700">📌 sitten goes after the time span.</p>
                            <ul className="list-disc text-gray-700 space-y-2 m-6">
                                  <li>🧾 Synnytin vauvani kuukausi sitten. →  I gave birth a month ago.</li>
                                  </ul>
                            <p className="text-teal-600 mt-2 mb-4"><strong>🔜 Future:</strong></p>
                            <ul className="list-disc text-gray-700 space-y-2 m-6">
                                  <li>Syön kalaa kerran kuussa. → I eat fish once a month.</li>
                                  <li>Käyn uimassa kaksi kertaa kuussa. → I go swimming twice a month.</li>
                  
                            </ul>
                            <p className="text-gray-700">📌 päästä and kuluttua are interchangeable. Use genitive form.</p>
                            <ul className="list-disc text-gray-700 space-y-2 m-6">
                                  <li>🧾 Kurssini alkaa kuukauden päästä. → My course starts in a month.</li>
                                  </ul>
                            <p className="text-teal-600 mt-2 mb-4">🧠 "Kerta(a)" means "times" → kerran = once, kaksi kertaa = twice</p>
                            
                    </div>

                          {/* <p className="text-teal-600 mt-2"><strong>📝  💬 Examples:</strong><br></br> Koulu alkaa maanantaina. – School starts on Monday. </p> */}
                </section>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

          <h2 className="text-2xl font-semibold text-teal-600 mb-3">🧩 Topic 10: Bonus Vocabulary – Related Time Expressions</h2>
                <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
                    <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
                          {/* <h3 className="text-xl font-medium text-teal-700 mb-2">📌 Expressions:</h3> */}
                            <p className="text-gray-700"></p>
                            <ul className="list-disc text-gray-700 space-y-2 m-6">
                                  <li>kuukausi = month</li>
                                  <li>viikko = week</li>
                                  <li>päivä = day</li>
                                  <li>vuosi = year</li>
                                  <li>milloin? = when?</li>
                                  <li>mihin mennessä? = by when?</li>
                                  <li>kuinka kauan? = how long?</li>
                  
                            </ul>
   
                    </div>

                          {/* <p className="text-teal-600 mt-2"><strong>📝  💬 Examples:</strong><br></br> Koulu alkaa maanantaina. – School starts on Monday. </p> */}
                </section>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

               
                    <h2 className="text-2xl font-semibold text-teal-600 mb-3">🧩 Topic 11: Some Sentence Examples.</h2>
            <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
    
                <ConjugationTable items={monthData.monthsSentence} min={0} max={9} isVocab={false} />
                
                
                            {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
            </section>
    
            <Link to={`/beginars/month/january-to-december/sentence-months-quiz`}>
                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                Basic Months In Sentence Exercises
                </button>
            </Link>
    
          </div>


        </div>
        </div>
        
    );


}

export default DaysPage;


