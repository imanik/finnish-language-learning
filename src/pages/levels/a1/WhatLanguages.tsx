import React from "react";
import { Link } from "react-router-dom";
import { langaugeData } from '../../../data/basicA1';


import ConjugationTable from '../../../components/ConjugationTable';


function WhatLanguages(){

    
return (

 <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
      <Link to="/beginars" className="text-teal-700 hover:underline bg-teal-100 mb-6 inline-block fixed top-0 left-0 w-full  px-4 py-2 shadow-md">
        ← Back to Beginars Lesson
      </Link>

      <div className="mt-16">

      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
      
                    <h2 className="text-xl font-semibold text-teal-700 mb-2">1. List of Languages in Finnish</h2>
                    <p className="text-gray-600 mb-4">
                    To say you speak a certain language, you use the verb puhua. This verb is a partitive verb. This means that you have to put the language in the partitive (the extra "a" below) behind the verb puhua.
                    </p>
                           
                    <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                        
            
                        <ConjugationTable items={langaugeData.basicLanguage} />

                        
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
                        
            
                        <ConjugationTable items={langaugeData.languageSentence} />

                      
                    </section>
            
                    <Link to={`/beginars/what-languages/basic-language/language-sentence-quiz`}>
                      <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                         Language in Sentence Exercises
                      </button>
                    </Link>
                        
      </div>

    </div>
    </div>

      );

}


export default WhatLanguages;