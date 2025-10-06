import React from "react";
import { Link } from "react-router-dom";
import { familyData } from "../../../data/basicA1";

import ConjugationTable from "../../../components/ConjugationTable";
import BodyWrapper from "../../../components/BodyWrapper";
import NavWrapper from "../../../components/NavWrapper";
import PageWrapper from "../../../components/PageWrapper";





function FamilyPage(){

    
return (

<BodyWrapper>
                
            <NavWrapper link="/beginars" title="← Back to Beginars Lesson"> </NavWrapper>



      <div className="mt-16"> 

      <PageWrapper title="1. Basic Family Vocabulary (Must For Level A)">
            
              

                          
                    <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                              
                  
                          <ConjugationTable items={familyData.basicFamily } min={0} max={familyData.basicFamily.length-1} isVocab={true}/>
      
                            
                    </section>
                  
                          <Link to={`/beginars/family/family-members/basic-family-quiz`}>
                            <button className="mt-4 bg-teal-900 text-white px-4 py-2 rounded hover:bg-teal-600 transform hover:scale-110 transition duration-200 m-2">
                              Family Basic Vocabulary Exercises
                            </button>
                          </Link>
                              
        </PageWrapper>

        



     <PageWrapper title="2. Extended Family Vocabulary">

                          
                    <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                              
                  
                    <ConjugationTable items={familyData.extendedFamily } min={0} max={familyData.extendedFamily.length-1} isVocab={true}/>
      
                            
                    </section>
                  
                    <Link to={`/beginars/family/family-members/extended-family-quiz`}>
                      <button className="mt-4 bg-teal-900 text-white px-4 py-2 rounded hover:bg-teal-600 transform hover:scale-110 transition duration-200 m-2">
                        Family Extended Vocabulary Exercises
                      </button>
                    </Link>
                              
        </PageWrapper>

       <PageWrapper title="3. Step Family Vocabulary">

                            
                      <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                                
                    
                      <ConjugationTable items={familyData.stepFamily} min={0} max={familyData.stepFamily.length-1} isVocab={true}/>
        
                              
                      </section>
                    
                      <Link to={`/beginars/family/family-members/step-family-quiz`}>
                        <button className="mt-4 bg-teal-900 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                          Step Family Vocabulary Exercises
                        </button>
                      </Link>
                                
          </PageWrapper>

          <PageWrapper title="4. Marital Status Vocabulary">

                              
                        <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                                  
                      
                        <ConjugationTable items={familyData.maritalStatus} min={0} max={familyData.maritalStatus.length-1} isVocab={true}/>
          
                                
                        </section>
                      
                        <Link to={`/beginars/family/family-members/marital-status-quiz`}>
                          <button className="mt-4 bg-teal-900 text-white px-4 py-2 rounded hover:bg-teal-600 transform hover:scale-110 transition duration-200 m-2">
                            Marital Status Vocabulary Exercises
                          </button>
                        </Link>            
            </PageWrapper>
        </div>
    </BodyWrapper>

      );

}


export default FamilyPage;