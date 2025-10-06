import React from 'react';
import { Link } from 'react-router-dom';
import { verbData } from '../../../data/basicA1';

import ConjugationTable from '../../../components/ConjugationTable';
import BodyWrapper from '../../../components/BodyWrapper';
import NavWrapper from '../../../components/NavWrapper';
import PageWrapper from '../../../components/PageWrapper';


function VerbsPage()  {
  return (
  
<BodyWrapper>
                
            <NavWrapper link="/beginars" title="← Back to Beginars Lesson"> </NavWrapper>
  
  
  
        
  
        <PageWrapper title='✅ A1 Lesson - First 100 Basic Finnish Verbs'>
  
                <h2 className="text-xl font-semibold text-teal-700 mb-2">📌 1 → 100:</h2>      
                      <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                                
                    
                            <ConjugationTable items={verbData.basicVerbs} min={0} max={100} isVocab={true}/>
        
                              
                      </section>
                    
                <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">

                <div className=" p-4 rbg-gray-900 rounded-lg mb-4">
                            <h3 className="text-xl font-medium text-teal-700 mb-2">🔤 Verb Structure in Finnish</h3>
                            <p className="text-teal-400">In Finnish, every verb has a basic form called the infinitive, usually ending in -a or -ä (e.g. syödä to eat). From that base, we form different versions to express who is doing the action and if it’s affirmative or negative.
                            </p>
                            <ul className=" text-teal-400 space-y-2 m-6">
                            <li> For now, we’ll focus on the first person singular form (minä I).</li>
                            </ul>
                            
                    </div>

                </section>

                <Link to={`/beginars/most-common-verbs/basic-verbs/basic-verbs-quiz`}>
                          <button className="mt-4 bg-teal-900 text-white px-4 py-2 rounded hover:bg-teal-600 transform hover:scale-110 transition duration-200 m-2">
                            Basic Verbs Vocabulary Exercises
                          </button>
                        </Link>


                                
          </PageWrapper>
  
          
  
  
  
        <PageWrapper title='🔢 What Are Verb Types'>
                    
                      <section className="bg-gray-900 rounded-lg border border-teal-800  p-4 mb-6">

                      <div className=" p-4 rbg-gray-900 rounded-lg   mb-4">
                                  
                                  <p className="text-teal-400">Finnish verbs are divided into six types, based on how they behave when conjugated. Knowing the verb type helps you guess how to use new verbs, especially their present tense forms.
                                  </p>
                                  <ul className="text-teal-400 space-y-2 m-6">
                                  <li>Here’s a quick guide to the types:</li>
                                  </ul>
                                  <ul className=" text-teal-400 space-y-2 m-6">
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
                          <button className="mt-4 bg-teal-900 text-white px-4 py-2 rounded hover:bg-teal-500 transform hover:scale-110 transition duration-200 m-2">
                            Hard Verbs Vocabulary Exercises
                          </button>
                        </Link> 
                                
            </PageWrapper>
  
         <PageWrapper title='✅ Positive vs ❌ Negative Forms'>

         
                
                        <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">

                          <div className=" p-4 rbg-gray-900 rounded-lg mb-4">
                                      <p className="text-teal-400">In Finnish, negative sentences use a special <span className="text-teal-700">negative verb (en, et, ei, emme, ette, eivät)</span> plus the <span className="text-teal-700">main verb stem</span>.
                                      </p>
                                      <ul className="text-teal-400 space-y-2 m-6">
                                      <li>📌 Examples:</li>
                                      </ul>
                                      <ul className=" list-disc text-teal-400 space-y-2 m-6">
                                      <li>	<span className="text-teal-700">minä syön </span> → I eat</li>
                                      <li>	<span className="text-teal-700">minä en syö </span> → I don’t eat</li>
                                      <li>  <span className="text-teal-700">minä rakastan </span> → I love</li>
                                      <li>  <span className="text-teal-700">minä en rakasta </span> → I don’t love</li>
                                      </ul>

                                      <p className="text-teal-600 mt-2"><strong>📌 Notice:</strong>  How in negative sentences, the verb stem loses its personal ending.
                                      </p>
                              </div>

                          </section> 
                       
                                  
            </PageWrapper>
  
            <PageWrapper title='📖 Learning from Patterns'>                              


                          <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">

                            <div className=" p-4 rbg-gray-900 rounded-lg mb-4">
                                    
                                        <h4 className="text-lg font-semibold text-teal-700 mb-2">1. Olla (to be) – VT3</h4>
                                        <ul className=" list-disc text-teal-400 space-y-2 m-6">
                                        <li>	<span className="text-teal-700">minä olen   </span> → I am</li>
                                        <li>	<span className="text-teal-700">minä en ole   </span> → I am not</li>
                                        </ul>
                                        <h4 className="text-lg font-semibold text-teal-700 mb-2">2. Syödä (to eat) – VT2</h4>
                                        <ul className="text-teal-400 space-y-2 m-6">
                                        <li>	<span className="text-teal-700">minä syön    </span> → I eat</li>
                                        <li>	<span className="text-teal-700">minä en syö    </span> → I don’t eat</li>
                                        </ul>
                                        <h4 className="text-lg font-semibold text-teal-700 mb-2">3. Pelata (to play sports) – VT4</h4>
                                        <ul className="text-teal-400 space-y-2 m-6">
                                        <li>	<span className="text-teal-700">minä pelaan    </span> → I play</li>
                                        <li>	<span className="text-teal-700">minä en pelaa    </span> → I don’t play</li>
                                        </ul>
                                        <h4 className="text-lg font-semibold text-teal-700 mb-2">4. Nukkua (to sleep) – VT1</h4>
                                        <ul className="text-teal-400 space-y-2 m-6">
                                        <li>	<span className="text-teal-700">minä nukun    </span> → I sleep</li>
                                        <li>	<span className="text-teal-700">minä en nuku   </span> → I don’t sleep</li>
                                        </ul>
                                        <h4 className="text-lg font-semibold text-teal-700 mb-2">5. Ajatella (to think) – VT3</h4>
                                        <ul className="text-teal-400 space-y-2 m-6">
                                        <li>	<span className="text-teal-700">minä ajattelen    </span> → I think</li>
                                        <li>	<span className="text-teal-700">minä en ajattele    </span> → I don’t think</li>
                                        </ul>

                                        <p className="text-teal-600 mt-2"><strong>📌 Notice:</strong>  How in negative sentences, the verb stem loses its personal ending.
                                        </p>
                                </div>

                            </section>
                        
                          
                                    
              </PageWrapper>

              <PageWrapper title='💡 Special Notes'>

                        <section className="bg-gray-900 rounded-lg  p-4 mb-6">

                          <div className=" p-4 rbg-gray-900 rounded-lg border border-teal-800 mb-4">
                                     
                                      <ul className="text-teal-400 space-y-2 m-6">
                                      <li>📌 Examples:</li>
                                      </ul>
                                      <ul className=" list-disc text-teal-400 space-y-2 m-6">
                                      <li>Some verbs change their stem	<span className="text-teal-700">(like tehdä → minä teen, nähdä → minä näen).</span> These are irregular and must be memorized.</li>
                                      <li>	Some verbs have contextual uses. For example:</li>
                                      <li>  <span className="text-teal-700">soittaa</span> can mean to play an instrument or to call someone.</li>
                                      <li>  <span className="text-teal-700">pelata </span>  is used for playing structured games (sports, video games).</li>
                                      </ul>

                                      {/* <p className="text-teal-600 mt-2"><strong>📌 Notice:</strong>  How in negative sentences, the verb stem loses its personal ending.
                                      </p> */}
                              </div>

                          </section>
                      
                       
                                  
            </PageWrapper>
             
      </BodyWrapper>
  );
}

export default VerbsPage;


