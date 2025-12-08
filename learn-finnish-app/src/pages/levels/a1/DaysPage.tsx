
import React from "react";
import { Link } from "react-router-dom";
import { dayData } from "../../../data/basicA1";
import ConjugationTable from "../../../components/ConjugationTable";
import BodyWrapper from "../../../components/BodyWrapper";
import NavWrapper from "../../../components/NavWrapper";
import PageWrapper from "../../../components/PageWrapper";



function DaysPage() {
    
    return (
<BodyWrapper>
                
            <NavWrapper link="/beginars" title="← Back to Beginars Lesson"> </NavWrapper>

            
        <PageWrapper title='🗓️ Days of the Week – Viikonpäivät (A1 Level)'>
      
                      <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                                
                    
                            <ConjugationTable items={dayData.basicDays} min={0} max={6} isVocab={true} />
        
                          <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong>  Weekdays in Finnish are not capitalized!</p>    
                      </section>
                    


                <Link to={`/beginars/most-common-verbs/basic-verbs/basic-verbs-quiz`}>
                          <button className="mt-4 bg-teal-900 text-white px-4 py-2 rounded hover:bg-teal-600 transform hover:scale-110 transition duration-200 m-2">
                            Basic Verbs Vocabulary Exercises
                          </button>
                        </Link>


                                
          </PageWrapper>

          
          <PageWrapper title='🕒 2. Saying "On [Day]" → Use the Essive Case (-na)'>

                  <h2 className="text-2xl font-semibold text-teal-600 mb-3"></h2>
                <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
               

                <ConjugationTable items={dayData.basicDays} min={7} max={13} isVocab = {true}/>


                          <p className="text-teal-600 mt-2"><strong>📝  Use this when something happens once, e.g.:</strong><br></br> Koulu alkaa maanantaina. – School starts on Monday. </p>
                </section>



           </PageWrapper>

          <PageWrapper title='🔁 3. Saying "Every [Day]" → Use -(i)sin or joka + base form'>



                  <h2 className="text-2xl font-semibold text-teal-600 mb-3"></h2>
                
                <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
               

                  <ConjugationTable items={dayData.basicDays} min={14} max={20} isVocab={true}/>
                
                </section>
                
                <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mt-6 mb-6">

                <div className=" p-4 bg-black rounded-lg mb-4">
                            <h3 className="text-xl font-medium text-teal-500 mb-2">💬 You can also use "JOKA" Examples:</h3>
                            <p className="text-gray-800"></p>
                            <ul className="list-disc text-teal-400 space-y-2 m-6">
                            <li> Käyn <span className="text-red-500">joka tiistai</span> kuntosalilla. → I go to the gym every Tuesday.</li>
                            <li>Me syömme ravintolassa <span className="text-red-500">perjantaisin.</span> → We eat at a restaurant on Fridays.</li>
                            </ul>
                            
                    </div>

                </section>



          </PageWrapper>
          <PageWrapper title='⏳ 4. Time Span: From [Day] → Until [Day]'>

       
                  <h2 className="text-2xl font-semibold text-teal-600 mb-3"></h2>
                
                <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
               

                <ConjugationTable items={dayData.basicDays} min={21} max={dayData.basicDays.length-1} isVocab = {true}/>
                          
                </section>

                <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                {/* <p className="text-gray-700 mb-4">Adjectives answer <span className="font-medium">Millainen?</span> (What kind?). Learn these pairs to describe people and things!</p> */}

                {/* <!-- Basic Adjective Pairs --> */}
                    <div className=" p-4 bg-black rounded-lg  mb-4">
                            <h3 className="text-xl font-medium text-teal-700 mb-2">⛅ Common Words:</h3>
                            <p className="text-gray-700"></p>
                            <ul className="list-disc text-teal-400 space-y-2 m-6">
                                  <li>alkaen, lähtien → starting from</li>
                                  <li>asti → until</li>
                                  <li>mennessä → by</li>
                            </ul>
                            <h3 className="text-xl font-medium text-teal-700 mb-2">📌 Examples:</h3>
                            <p className="text-gray-700"></p>
                            <ul className="list-disc text-teal-400 space-y-2 m-6">
                                  <li>Olen lomalla sunnuntaihin asti. → I’m on vacation until Sunday.</li>
                                  <li>Tiistaihin mennessä pitää olla valmis. → I must be ready by Tuesday.</li>
                                  <li>Matkustan keskiviikosta perjantaihin. → I travel from Wednesday till Friday.</li>
                                </ul>
                            {/* <p className="text-teal-600 mt-2"><strong>Quick Rule:</strong> These use a pattern ending in “toista” (teen).</p> */}
                    </div>

                </section>

          </PageWrapper>
          <PageWrapper title='🔄 5. Last, This, and Next [Day]'>

                {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🗓️ Days of the Week – Viikonpäivät (A1 Level)</h2> */}
                {/* <!-- Header --> */}
                {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}

                  <h2 className="text-2xl font-semibold text-teal-600 mb-3"></h2>
                <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
               
                    <div className=" p-4 bg-black rounded-lg  mb-4">
                          <h3 className="text-xl font-medium text-teal-700 mb-2">⛅ Combine viime, tänä, ensi + essive form:</h3>
                            <p className="text-gray-700"></p>
                            <ul className="list-disc text-teal-400 space-y-2 m-6">
                                  <li>viime maanantaina → Last Monday</li>
                                  <li>tänä maanantaina → This Monday</li>
                                  <li>ensi maanantaina → Next Monday</li>
                            </ul>
                            <h3 className="text-xl font-medium text-teal-700 mb-2">📌 Examples:</h3>
                            <p className="text-gray-700"></p>
                            <ul className="list-disc text-teal-400 space-y-2 m-6">
                                  <li>Viime maanantaina myöhästyin bussista → I was late for the bus last Monday.</li>
                                  <li>Ensi tiistaina on syntymäpäiväni. → Next Tuesday is my birthday.</li>
                                  {/* <li>Matkustan keskiviikosta perjantaihin. → I travel from Wednesday till Friday.</li> */}
                                </ul>
                            {/* <p className="text-teal-600 mt-2"><strong>Quick Rule:</strong> These use a pattern ending in “toista” (teen).</p> */}
                    </div>

                    <div className=" p-4 bg-black rounded-lg  mb-4">
                          <h3 className="text-xl font-medium text-teal-700 mb-2">🎯 Quick Recap:</h3>
                            <p className="text-gray-700"></p>
                            <ul className="list-disc text-teal-400 space-y-2 m-6">
                                  <li>Use -na for “on [day]”</li>
                                  <li>Use -isin or joka for “every [day]”</li>
                                  <li>Use -sta → -hin for time spans</li>
                            </ul>
                            
                    </div>
                


                          {/* <p className="text-teal-600 mt-2"><strong>📝  💬 Examples:</strong><br></br> Koulu alkaa maanantaina. – School starts on Monday. </p> */}
                </section>

          </PageWrapper>


           <PageWrapper title='💬 6. Random Example Sentences'>

                  {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🧮 The Numbers in Finnish – Numerot</h2> */}
              {/* <!-- Header --> */}
                  {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}

                    <h2 className="text-2xl font-semibold text-teal-600 mb-3"></h2>
                {/* <p className="text-gray-700 mb-2">These end in -toista, like the cardinal form:</p> */}
            <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
    
                <ConjugationTable items={dayData.daysSentence} min={0} max={dayData.daysSentence.length-1} isVocab={false} />
                
                
            </section>
            <Link to={`/beginars/day/sunday-or-monday/sentence-days-quiz`}>
                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                Basic Days In Sentence Exercises
                </button>
            </Link>
          </PageWrapper>

           <PageWrapper title='🗓️ 7.   Alkurutiinit'>

           <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                            

                          <div className=" p-4 bg-black rounded-lg  mt-4 mb-4">

                                      <h2 className="text-2xl text-teal-400 font-bold"> <br /> <span className='text-teal-700 text-xl'> Daily Routine Questions</span> 
                                      </h2>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                        <div className="bg-black border border-gray-900 rounded-lg p-4">
                                          <h4 className="text-teal-400 font-semibold mb-2">🔹 Päivä – Day</h4>
                                          <p className="text-teal-600 text-sm italic mb-2">Question: Mikä päivä tänään on? </p>
                                          <p className="text-teal-600 text-sm italic">Answer: Tänään on torstai. → Today is Thursday. </p>
                                        </div>

                                        <div className="bg-black border border-gray-900 rounded-lg p-4">
                                          <h4 className="text-teal-400 font-semibold mb-2">🔹 Päivämäärä – Date</h4>
                                          <p className="text-teal-600 text-sm italic mb-2">Question: Monesko päivä tänään on?</p>
                                          <p className="text-teal-600 text-sm italic">Answer: Tänään on kahdeskymmenes seitsemäs marraskuuta. → Today is the 27th of November.</p>
                                        </div>

                                        <div className="bg-black border border-gray-900 rounded-lg p-4">
                                          <h4 className="text-teal-400 font-semibold mb-2">🔹 Kuukausi – Month</h4>
                                          <p className="text-teal-600 text-sm italic mb-2">Question: Mikä kuukausi nyt on?</p>
                                          <p className="text-teal-600 text-sm italic">Answer: Nyt on marraskuu. → It is November now.</p>
                                        </div>

                                        <div className="bg-black border border-gray-900 rounded-lg p-4">
                                          <h4 className="text-teal-400 font-semibold mb-2">🔹 Kello – Time</h4>
                                          <p className="text-teal-600 text-sm italic mb-2">Question: Paljonko kello on? / Mitä kello on?</p>
                                          <p className="text-teal-600 text-sm italic">Answer: Kello on 9.20. = 20 yli 9. → It is 9:20.</p>
                                        </div>

                                        <div className="bg-black border border-gray-900 rounded-lg p-4">
                                          <h4 className="text-teal-400 font-semibold mb-2">🔹 Vuosi – Year</h4>
                                          <p className="text-teal-600 text-sm italic mb-2">Question: Mikä vuosi nyt on?</p>
                                          <p className="text-teal-600 text-sm italic">Answer: Nyt on kaksituhatta kaksikymmentäviisi → Now it is 2026</p>
                                        </div>

                                        <div className="bg-black border border-gray-900 rounded-lg p-4">
                                          <h4 className="text-teal-400 font-semibold mb-2">🔹 Sää – Weather</h4>
                                          <p className="text-teal-600 text-sm italic mb-2">Question: Millainen sää tänään on?</p>
                                          <p className="text-teal-600 text-sm italic">Answer: Tänään on kylmä. → Today is cold. </p>
                                        </div>

                                        
                                      </div>
                                   {/* <p className="text-teal-600 mt-4"><strong>🧠 Key Idea:</strong> Partitive means: some, not full, not complete, not exact.
                                  </p> */}
                            </div>
                          </section>
        </PageWrapper>
        </BodyWrapper>
        
    );


}

export default DaysPage;

