import React from "react";
import { Link } from "react-router-dom";
import { familyData } from "../../../data/basicA1";


  interface Family {
    finnish: string,
    english: string,
    pronunciation: string,
  }

  interface ConjugationTableProps {
    families: Family[];
  }



function ConjugationTable({ families } :ConjugationTableProps) {
  console.log("ConjugationTable loaded", families);
  return (
    <div className="mb-6">
      <h4 className="text-lg font-semibold text-teal-600 mb-2"></h4>
      <table className="table-auto w-full text-gray-600">
        <thead>
          <tr className="bg-teal-100">
            <th className="px-4 py-2">English</th>
            <th className="px-4 py-2">Finnish</th>
            <th className="px-4 py-2">Pronunciation</th>
          </tr>
        </thead>
        <tbody>
          {families.map((item, index) => (
            <tr key={index}>
              <td>{item.english}</td>
              <td>{item.finnish}</td>
              <td>{item.pronunciation}</td> {/* Fixed typo: "pronounciation" -> "pronunciation" */}
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FamilyPage(){

    
return (

 <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
      <Link to="/beginars" className="text-teal-700 hover:underline mb-6 inline-block">
        ← Back to Beginars Lesson
      </Link>



      {/* Verbtype 1 Section */}
      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
        <h3 className="text-xl font-semibold text-teal-700 mb-2">1. Basic Family Vocabulary (Must For Level A)</h3>



        <ConjugationTable families={familyData.basicFamily}/>

        

        <Link to={`/beginars/family/family-members/basic-family-quiz`}>
          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
             Family Basic Exercises
          </button>
        </Link>

        
      {/* Introduction Section */}
      </div>

      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">



        <h3 className="text-xl font-semibold text-teal-700 mb-2">2. Extended Family Vocabulary</h3>
        
        <ConjugationTable families={familyData.extendedFamily}/>
        
        <Link to={`/beginars/family/family-members/extended-family-quiz`}>
          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
             Family Extended Exercises
          </button>
        </Link>
      </div>

      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">



          <h3 className="text-xl font-semibold text-teal-700 mb-2">2. Step Family Vocabulary</h3>

          <ConjugationTable families={familyData.stepFamily}/>

          <Link to={`/beginars/family/family-members/step-family-quiz`}>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
              Step Family Exercises
            </button>
          </Link>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

            <h3 className="text-xl font-semibold text-teal-700 mb-2">2. Marital Status Vocabulary</h3>

            <ConjugationTable families={familyData.maritalStatus}/>

            <Link to={`/beginars/family/family-members/marital-status-quiz`}>
              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                Marital Status Exercises
              </button>
            </Link>
          </div>
    </div>

      );

}


export default FamilyPage;