import React from "react";
import { Link } from "react-router-dom";
import { familyData } from "../../../data/basicA1";


  interface Family {
    finnish: string,
    english: string,
    pronunciation?: string,
  }

  interface ConjugationTableProps {
    families: Family[];
    min?: number;
    max?: number;
    isVocab?: boolean;
  }



function ConjugationTable({ families, min, max, isVocab } :ConjugationTableProps) {
  console.log("ConjugationTable loaded", families);
  return (
    <div className="mb-6 overflow-x-auto">
  <h4 className="text-lg font-semibold text-teal-600 mb-2"></h4>
  <div className="min-w-full inline-block align-middle">
    <table className="table-auto w-full text-gray-600 border-collapse">
      <thead>
        {isVocab ? (
          <tr className="bg-teal-100">
            <th className="px-4 py-2">English</th>
            <th className="px-4 py-2">Finnish</th>
            <th className="px-4 py-2">Pronunciation</th>
            <th className="px-4 py-2">Listen</th>
          </tr>
        ) : (
          <tr className="bg-teal-100">
            <th className="px-4 py-2">English</th>
            <th className="px-4 py-2">Finnish</th>
            <th className="px-4 py-2"></th>
            <th className="px-4 py-2">Listen</th>
          </tr>
        )}
      </thead>
      <tbody>
        {families
          .filter((_, index) => {
            if (min !== undefined && max !== undefined) {
              return index >= min && index <= max;
            }
            return true;
          })
          .map((item, index) => (
            <tr key={index}>
              <td className="px-4 py-2">{item.english}</td>
              <td className="px-4 py-2">{item.finnish}</td>
              <td className="px-4 py-2">{item.pronunciation}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => {
                    const utterance = new SpeechSynthesisUtterance(item.finnish);
                    utterance.lang = 'fi-FI';
                    window.speechSynthesis.speak(utterance);
                  }}
                  className="ml-2 bg-teal-300 text-white px-2 py-1 rounded hover:bg-teal-600 transform hover:scale-110 transition duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-blue-600 hover:text-blue-800 cursor-pointer"
                  >
                    <path d="M5 3.868v16.264a1 1 0 0 0 1.528.849l13.056-8.132a1 1 0 0 0 0-1.698L6.528 3.019A1 1 0 0 0 5 3.868z" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
</div>

  );
}

function FamilyPage(){

    
return (

 <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
      <Link to="/beginars" className="text-teal-700 hover:underline mb-6 inline-block">
        ← Back to Beginars Lesson
      </Link>



      

      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
            
              <h2 className="text-xl font-semibold text-teal-700 mb-2">1. Basic Family Vocabulary (Must For Level A)</h2>

                          
                    <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                              
                  
                          <ConjugationTable families={familyData.basicFamily}  isVocab={true}/>
      
                            
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
                              
                  
                    <ConjugationTable families={familyData.extendedFamily}/>
      
                            
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
                                
                    
                      <ConjugationTable families={familyData.stepFamily}/>
        
                              
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
                                  
                      
                        <ConjugationTable families={familyData.maritalStatus}/>
          
                                
                        </section>
                      
                        <Link to={`/beginars/family/family-members/marital-status-quiz`}>
                          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                            Marital Status Vocabulary Exercises
                          </button>
                        </Link>
                                  
            </div>

      

           
    </div>

      );

}


export default FamilyPage;