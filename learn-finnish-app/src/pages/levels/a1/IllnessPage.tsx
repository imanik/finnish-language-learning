import React from 'react';
import { Link } from 'react-router-dom';
import { illnessData } from '../../../data/basicA1';
import ConjugationTable from '../../../components/ConjugationTable';
import BodyWrapper from "../../../components/wrapper/BodyWrapper";
import NavWrapper from "../../../components/wrapper/NavWrapper";





function IllnesssPage()  {
  return (
  
<BodyWrapper>
                
            <NavWrapper link="/beginars" title="← Back to Beginars Lesson"> </NavWrapper>
  
  
  
        
  
        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-8 mt-8">
              
                <h2 className="text-2xl font-semibold text-teal-800 mb-6 mt-6">✅ A1 Lesson - Being Sick and Illnesses</h2>
  
                <h2 className="text-xl font-semibold text-teal-700 mb-2">📌 1 → 20:</h2>      
                      <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                                
                    
                            <ConjugationTable items={illnessData.illness} min={0} max={19} isVocab={true}/>
        
                              
                      </section>
                      <Link to={`/beginars/talking-about-simple-illnesses/illnesss/illnesss-quiz`}>
                          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                            Basic Illnesss Vocabulary Exercises
                          </button>
                        </Link>
                    
               


                                
          </div>
  
          
  
  
  
        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
              
        <h2 className="text-xl font-semibold text-teal-700 mb-2">📌 20 → 40:</h2>
  
                            
                      <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                                
                    
                      <ConjugationTable items={illnessData.illness} min={20} max={39} isVocab={true}/>
        
                              
                      </section>
                    
                      
                                
          </div>
  
          <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
                
          <h2 className="text-xl font-semibold text-teal-700 mb-2">📌 40 → 60:</h2> 
  
                              
                        <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                                  
                      
                        <ConjugationTable items={illnessData.illness} min={40} max={illnessData.illness.length-1} isVocab={true}/>
          
                                
                        </section>

                                                 
                                  
            </div>
  
            <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
                  
            <h2 className="text-xl font-semibold text-teal-700 mb-2">📌 Illness In Sentence:</h2> 
  
                                
                          <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                                    
                        
                          <ConjugationTable items={illnessData.illnessSentence} min={0} max={illnessData.illnessSentence.length-1} isVocab={true} />
            
                                  
                          </section>
                          <Link to={`/beginars/talking-about-simple-illnesses/illnesss/illnesss-sentence-quiz`}>
                          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                            Basic Illnesss In Sentence Exercises
                          </button>
                        </Link>

                          
                        
                          
                                    
              </div>

              
             
      </BodyWrapper>
  );
}

export default IllnesssPage;


