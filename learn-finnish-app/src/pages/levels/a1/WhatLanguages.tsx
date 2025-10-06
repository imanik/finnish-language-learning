import React from "react";
import { Link } from "react-router-dom";
import { langaugeData } from '../../../data/basicA1';
import ConjugationTable from '../../../components/ConjugationTable';
import BodyWrapper from "../../../components/BodyWrapper";
import NavWrapper from "../../../components/NavWrapper";
import PageWrapper from "../../../components/PageWrapper";



function WhatLanguages(){

    
return (

<BodyWrapper>
                
      <NavWrapper link="/beginars" title="← Back to Beginars Lesson"> </NavWrapper>

      <div className="mt-16">

      <PageWrapper title="1. List of Languages in Finnish">
      
                    <p className="text-teal-500 mb-4">
                    To say you speak a certain language, you use the verb puhua. This verb is a partitive verb. This means that you have to put the language in the partitive (the extra "a" below) behind the verb puhua.
                    </p>
                           
                    <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                        
            
                        <ConjugationTable items={langaugeData.basicLanguage} min={0} max={langaugeData.basicLanguage.length-1} />

                        
                        <p className="text-gray-600 mb-4">
                        * The language hindi gets an -ä instead of an -a (hindiä instead of hindia). This is also the case for venäjää instead of venäjäa. This is due to vowel harmony rules. The same would also be true for friisi (puhun friisiä), simlish (puhun simlishiä) and khmer (puhun khmeriä).
                        </p>
                    </section>
            
                    <Link to={`/beginars/what-languages/basic-language/basic-language-quiz`}>
                      <button className="mt-4 bg-teal-900 text-white px-4 py-2 rounded hover:bg-teal-600 transform hover:scale-110 transition duration-200 m-2">
                        Basic Language Exercises
                      </button>
                    </Link>
      </PageWrapper>
                        
     

      <PageWrapper title="2. Questions about what languages you speak">
      
                    
                    
                    <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                        
            
                        <ConjugationTable items={langaugeData.languageSentence} min={0} max={langaugeData.languageSentence.length-1} isVocab= {false} />

                      
                    </section>
            
                    <Link to={`/beginars/what-languages/basic-language/language-sentence-quiz`}>
                      <button className="mt-4 bg-teal-900 text-white px-4 py-2 rounded hover:bg-teal-600 transform hover:scale-110 transition duration-200 m-2">
                         Language in Sentence Exercises
                      </button>
                    </Link>
            
    </PageWrapper>
    </div>
    </BodyWrapper>

      );

}


export default WhatLanguages;