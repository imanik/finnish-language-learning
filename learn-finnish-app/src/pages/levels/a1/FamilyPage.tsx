import React from "react";
import { Link } from "react-router-dom";
import { familyData } from "../../../data/basicA1";

import ConjugationTable from "../../../components/ConjugationTable";



function FamilyPage(){

    
return (

 <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
      <Link to="/beginars" className="text-teal-700 hover:underline bg-teal-100 mb-6 inline-block fixed top-0 left-0 w-full  px-4 py-2 shadow-md">
        ← Back to Beginars Lesson
      </Link>



      <div className="mt-16"> 

      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
            
              <h2 className="text-xl font-semibold text-teal-700 mb-2">1. Basic Family Vocabulary (Must For Level A)</h2>

                          
                    <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                              
                  
                          <ConjugationTable items={familyData.basicFamily } min={0} max={familyData.basicFamily.length-1} isVocab={true}/>
      
                            
                    </section>
                  
                          <Link to={`/beginars/family/family-members/basic-family-quiz`}>
                            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                              Family Basic Vocabulary Exercises
                            </button>
                          </Link>
                              
        </div>

        



      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
            
              <h2 className="text-xl font-semibold text-teal-700 mb-2">2. Extended Family Vocabulary</h2>

                          
                    <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                              
                  
                    <ConjugationTable items={familyData.extendedFamily } min={0} max={familyData.extendedFamily.length-1} isVocab={true}/>
      
                            
                    </section>
                  
                    <Link to={`/beginars/family/family-members/extended-family-quiz`}>
                      <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                        Family Extended Vocabulary Exercises
                      </button>
                    </Link>
                              
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
              
                <h2 className="text-xl font-semibold text-teal-700 mb-2">3. Step Family Vocabulary</h2>

                            
                      <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                                
                    
                      <ConjugationTable items={familyData.stepFamily} min={0} max={familyData.stepFamily.length-1} isVocab={true}/>
        
                              
                      </section>
                    
                      <Link to={`/beginars/family/family-members/step-family-quiz`}>
                        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                          Step Family Vocabulary Exercises
                        </button>
                      </Link>
                                
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
                
                  <h2 className="text-xl font-semibold text-teal-700 mb-2">4. Marital Status Vocabulary</h2>

                              
                        <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                                  
                      
                        <ConjugationTable items={familyData.maritalStatus} min={0} max={familyData.maritalStatus.length-1} isVocab={true}/>
          
                                
                        </section>
                      
                        <Link to={`/beginars/family/family-members/marital-status-quiz`}>
                          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                            Marital Status Vocabulary Exercises
                          </button>
                        </Link>
                                  
            </div>

      

           
    </div>
    </div>

      );

}


export default FamilyPage;