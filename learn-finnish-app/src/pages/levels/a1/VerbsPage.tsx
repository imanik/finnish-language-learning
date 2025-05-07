import React from 'react';
import { Link } from 'react-router-dom';
import { verbData } from '../../../data/basicA1';

import ConjugationTable from '../../../components/ConjugationTable';

function VerbsPage()  {
  return (
  
   <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
        <Link to="/beginars" className="text-teal-700 hover:underline bg-teal-100 mb-6 inline-block fixed top-0 left-0 w-full  px-4 py-2 shadow-md">
          ← Back to Beginars Lesson
        </Link>
  
  
  
        
  
        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-8 mt-8">
              
                <h2 className="text-2xl font-semibold text-teal-800 mb-6 mt-6">✅ A1 Lesson - First 100 Basic Finnish Verbs</h2>
  
                <h2 className="text-xl font-semibold text-teal-700 mb-2">📌 1 → 20:</h2>      
                      <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                                
                    
                            <ConjugationTable items={verbData.basicVerbs} min={0} max={19} isVocab={true}/>
        
                              
                      </section>
                    
                <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">

                <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
                            <h3 className="text-xl font-medium text-teal-700 mb-2">🔤 Verb Structure in Finnish</h3>
                            <p className="text-gray-700">In Finnish, every verb has a basic form called the infinitive, usually ending in -a or -ä (e.g. syödä to eat). From that base, we form different versions to express who is doing the action and if it’s affirmative or negative.
                            </p>
                            <ul className=" text-gray-700 space-y-2 m-6">
                            <li> For now, we’ll focus on the first person singular form (minä I).</li>
                            </ul>
                            
                    </div>

                </section>

                <Link to={`/beginars/most-common-verbs/basic-verbs/basic-verbs-quiz`}>
                          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                            Basic Verbs Vocabulary Exercises
                          </button>
                        </Link>


                                
          </div>
  
          
  
  
  
        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
              
        <h2 className="text-xl font-semibold text-teal-700 mb-2">📌 20 → 40:</h2>
  
                            
                      <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                                
                    
                      <ConjugationTable items={verbData.basicVerbs} min={20} max={39} isVocab={true}/>
        
                              
                      </section>
                    
                      <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">

                      <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
                                  <h3 className="text-xl font-medium text-teal-700 mb-2">🔢 What Are Verb Types?</h3>
                                  <p className="text-gray-700">Finnish verbs are divided into six types, based on how they behave when conjugated. Knowing the verb type helps you guess how to use new verbs, especially their present tense forms.
                                  </p>
                                  <ul className="text-gray-700 space-y-2 m-6">
                                  <li>Here’s a quick guide to the types:</li>
                                  </ul>
                                  <ul className=" text-gray-700 space-y-2 m-6">
                                  <li>VT-1.	<span className="text-teal-700">Ends in -a/-ä preceded by 2+ consonants or vowels	puhua (to speak)</span> → minä puhun</li>
                                  <li>VT-2.	<span className="text-teal-700">Ends in -da/-dä	syödä (to eat)</span> → minä syön</li>
                                  <li>VT-3.  <span className="text-teal-700">Ends in -la/-lä, -na/-nä, -ra/-rä, -sta/-stä	tulla (to come)</span> → minä tulen</li>
                                  <li>VT-4.  <span className="text-teal-700">Ends in -ata/-ätä	pelata (to play)</span> → minä pelaan</li>
                                  <li>VT-5.  <span className="text-teal-700">Ends in -ita/-itä	tarvita (to need)</span> → minä tarvitsen</li>
                                  <li>VT-6.  <span className="text-teal-700">Ends in -eta/-etä	rare;</span>  not in top 100</li>
                                  </ul>

                                  <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> We'll mark each verb in the list with its verb type (VT) so you can start to spot patterns.
                                  </p>
                          </div>

                      </section>
                      <Link to={`/beginars/most-common-verbs/basic-verbs/hard-verbs-quiz`}>
                          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                            Hard Verbs Vocabulary Exercises
                          </button>
                        </Link> 
                                
          </div>
  
          <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
                
          <h2 className="text-xl font-semibold text-teal-700 mb-2">📌 40 → 60:</h2> 
  
                              
                        <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                                  
                      
                        <ConjugationTable items={verbData.basicVerbs} min={40} max={59} isVocab={true}/>
          
                                
                        </section>

                        <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">

                          <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
                                      <h3 className="text-xl font-medium text-teal-700 mb-2">✅ Positive vs ❌ Negative Forms</h3>
                                      <p className="text-gray-700">In Finnish, negative sentences use a special <span className="text-teal-700">negative verb (en, et, ei, emme, ette, eivät)</span> plus the <span className="text-teal-700">main verb stem</span>.
                                      </p>
                                      <ul className="text-gray-700 space-y-2 m-6">
                                      <li>📌 Examples:</li>
                                      </ul>
                                      <ul className=" list-disc text-gray-700 space-y-2 m-6">
                                      <li>	<span className="text-teal-700">minä syön </span> → I eat</li>
                                      <li>	<span className="text-teal-700">minä en syö </span> → I don’t eat</li>
                                      <li>  <span className="text-teal-700">minä rakastan </span> → I love</li>
                                      <li>  <span className="text-teal-700">minä en rakasta </span> → I don’t love</li>
                                      </ul>

                                      <p className="text-teal-600 mt-2"><strong>📌 Notice:</strong>  How in negative sentences, the verb stem loses its personal ending.
                                      </p>
                              </div>

                          </section> 
                       
                                  
            </div>
  
            <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
                  
            <h2 className="text-xl font-semibold text-teal-700 mb-2">📌 60 → 80:</h2> 
  
                                
                          <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                                    
                        
                          <ConjugationTable items={verbData.basicVerbs} min={60} max={79} isVocab={true} />
            
                                  
                          </section>

                          <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">

                            <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
                                        <h3 className="text-xl font-medium text-teal-700 mb-2">📖 Learning from Patterns</h3>
                                        {/* <p className="text-gray-700">In Finnish, negative sentences use a special <span className="text-teal-700">negative verb (en, et, ei, emme, ette, eivät)</span> plus the <span className="text-teal-700">main verb stem</span>.
                                        </p> */}
                                        <h4 className="text-lg font-semibold text-teal-700 mb-2">1. Olla (to be) – VT3</h4>
                                        <ul className=" list-disc text-gray-700 space-y-2 m-6">
                                        <li>	<span className="text-teal-700">minä olen   </span> → I am</li>
                                        <li>	<span className="text-teal-700">minä en ole   </span> → I am not</li>
                                        </ul>
                                        <h4 className="text-lg font-semibold text-teal-700 mb-2">2. Syödä (to eat) – VT2</h4>
                                        <ul className="text-gray-700 space-y-2 m-6">
                                        <li>	<span className="text-teal-700">minä syön    </span> → I eat</li>
                                        <li>	<span className="text-teal-700">minä en syö    </span> → I don’t eat</li>
                                        </ul>
                                        <h4 className="text-lg font-semibold text-teal-700 mb-2">3. Pelata (to play sports) – VT4</h4>
                                        <ul className="text-gray-700 space-y-2 m-6">
                                        <li>	<span className="text-teal-700">minä pelaan    </span> → I play</li>
                                        <li>	<span className="text-teal-700">minä en pelaa    </span> → I don’t play</li>
                                        </ul>
                                        <h4 className="text-lg font-semibold text-teal-700 mb-2">4. Nukkua (to sleep) – VT1</h4>
                                        <ul className="text-gray-700 space-y-2 m-6">
                                        <li>	<span className="text-teal-700">minä nukun    </span> → I sleep</li>
                                        <li>	<span className="text-teal-700">minä en nuku   </span> → I don’t sleep</li>
                                        </ul>
                                        <h4 className="text-lg font-semibold text-teal-700 mb-2">5. Ajatella (to think) – VT3</h4>
                                        <ul className="text-gray-700 space-y-2 m-6">
                                        <li>	<span className="text-teal-700">minä ajattelen    </span> → I think</li>
                                        <li>	<span className="text-teal-700">minä en ajattele    </span> → I don’t think</li>
                                        </ul>

                                        <p className="text-teal-600 mt-2"><strong>📌 Notice:</strong>  How in negative sentences, the verb stem loses its personal ending.
                                        </p>
                                </div>

                            </section>
                        
                          
                                    
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
                  
              <h2 className="text-xl font-semibold text-teal-700 mb-2">📌 80 → 100:</h2> 

                              
                        <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                                  
                      
                        <ConjugationTable items={verbData.basicVerbs} min={80} max={verbData.basicVerbs.length-1} isVocab={true} />
          
                                
                        </section>

                        <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">

                          <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
                                      <h3 className="text-xl font-medium text-teal-700 mb-2">💡 Special Notes</h3>
                                    {/* <p className="text-gray-700">In Finnish, negative sentences use a special <span className="text-teal-700">negative verb (en, et, ei, emme, ette, eivät)</span> plus the <span className="text-teal-700">main verb stem</span>.
                                    </p> */}
                                      <ul className="text-gray-700 space-y-2 m-6">
                                      <li>📌 Examples:</li>
                                      </ul>
                                      <ul className=" list-disc text-gray-700 space-y-2 m-6">
                                      <li>Some verbs change their stem	<span className="text-teal-700">(like tehdä → minä teen, nähdä → minä näen).</span> These are irregular and must be memorized.</li>
                                      <li>	Some verbs have contextual uses. For example:</li>
                                      <li>  <span className="text-teal-700">soittaa</span> can mean to play an instrument or to call someone.</li>
                                      <li>  <span className="text-teal-700">pelata </span>  is used for playing structured games (sports, video games).</li>
                                      </ul>

                                      {/* <p className="text-teal-600 mt-2"><strong>📌 Notice:</strong>  How in negative sentences, the verb stem loses its personal ending.
                                      </p> */}
                              </div>

                          </section>
                      
                       
                                  
            </div>
             
      </div>
  );
};

export default VerbsPage;


