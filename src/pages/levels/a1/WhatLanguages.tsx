import React from "react";
import { Link, useParams } from "react-router-dom";
import { langaugeData } from '../../../data/basicA1';


// Define the shape of a Language object
interface Language {
  english: string,
  finnish: string,
}

interface ConjugationTableProps {
  languages: Language[];
  highlightLastLetter?: boolean; // Optional prop with default value
}



    function ConjugationTable({ languages, highlightLastLetter = false }: ConjugationTableProps) {
      console.log("ConjugationTable loaded", languages); // Fixed: log 'languages', not 'language'


          return (
            <div className="mb-6 overflow-x-auto">
            <h4 className="text-lg font-semibold text-teal-600 mb-2"></h4>
            <div className="min-w-full inline-block align-middle">
                <table className="table-auto w-full text-gray-600 border-collapse">
                <thead>
                  <tr className="bg-teal-100">
                    <th className="px-4 py-2">Finnish</th>
                    <th className="px-4 py-2">English</th>
                  </tr>
                </thead>
                <tbody>
                  {languages.map((langItem, index) => (
                    <tr key={index}>
                      <td>{langItem.finnish}</td>              
                      <td>{langItem.english}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
          );
        }


function WhatLanguages(){

    
return (

 <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
      <Link to="/beginars" className="text-teal-700 hover:underline mb-6 inline-block">
        ← Back to Beginars Lesson
      </Link>

      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
      
                    <h2 className="text-xl font-semibold text-teal-700 mb-2">1. List of Languages in Finnish</h2>
                    <p className="text-gray-600 mb-4">
                    To say you speak a certain language, you use the verb puhua. This verb is a partitive verb. This means that you have to put the language in the partitive (the extra "a" below) behind the verb puhua.
                    </p>
                           
                    <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                        
            
                        <ConjugationTable languages={langaugeData.basicLanguage} highlightLastLetter={true}/>

                        
                        <p className="text-gray-600 mb-4">
                        * The language hindi gets an -ä instead of an -a (hindiä instead of hindia). This is also the case for venäjää instead of venäjäa. This is due to vowel harmony rules. The same would also be true for friisi (puhun friisiä), simlish (puhun simlishiä) and khmer (puhun khmeriä).
                        </p>
                    </section>
            
                    <Link to={`/beginars/what-languages/basic-language/basic-language-quiz`}>
                      <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                        Basic Language Exercises
                      </button>
                    </Link>
                        
      </div>

      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
      
                    <h2 className="text-xl font-semibold text-teal-700 mb-2">2. Questions about what languages you speak</h2>
                    
                    <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                        
            
                        <ConjugationTable languages={langaugeData.sentenceLanguage} highlightLastLetter={true}/>

                      
                    </section>
            
                    <Link to={`/beginars/what-languages/basic-language/sentence-language-quiz`}>
                      <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                        Sentence Language Exercises
                      </button>
                    </Link>
                        
      </div>

    </div>

      );

}


export default WhatLanguages;