    import React from 'react';
    import { Link } from 'react-router-dom';
    import { greetingsData } from '../../../data/basicA1';

import ConjugationTable from '../../../components/ConjugationTable';
import BodyWrapper from '../../../components/BodyWrapper';
import NavWrapper from '../../../components/NavWrapper';



      function GreetingsPage() {
    

   return (
 <BodyWrapper>
                
            <NavWrapper link="/beginars" title="← Back to Beginars Lesson"> </NavWrapper>

         <div className="mt-16">
   
        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
        
                              <h2 className="text-2xl font-semibold text-teal-600 mb-3">🔢 List of Greetings in Finnish</h2>
                  
                              {/* <p className="text-gray-600 mb-4">
                      To say you speak a certain language, you use the verb puhua. This verb is a partitive verb. This means that you have to put the language in the partitive (the extra "a" below) behind the verb puhua.
                      </p> */}

                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                      
                          <ConjugationTable items={greetingsData.basicGreetings} min={0} max={greetingsData.basicGreetings.length-1} isVocab={true}  />
                                   
                  </section>
              
                      <Link to={`/beginars/greeting/how-are-you/basic-greeting-quiz`}>
                        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                          Basic Greeting Exercises
                        </button>
                      </Link>
              
        </div>

        
   


           </div>
           </BodyWrapper>
       );
   
   
   }
    

    export default GreetingsPage;