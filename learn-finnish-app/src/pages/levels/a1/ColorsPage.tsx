import React from "react";
import { Link } from "react-router-dom";
import { colorData } from "../../../data/basicA1";
import ConjugationTable from "../../../components/ConjugationTable";
import BodyWrapper from "../../../components/BodyWrapper";
import NavWrapper from "../../../components/NavWrapper";

function ColorsPage(){

// console.log("Here me");
    
return (

<BodyWrapper>
                
            <NavWrapper link="/beginars" title="← Back to Beginars Lesson"> </NavWrapper>


        <div className="mt-16">
        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

        {/* <!-- Header --> */}
            <h2 className="text-2xl font-semibold text-teal-800 mb-4">🟣 Lesson: Colors – Värit</h2>
            <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4>


        {/* <!-- Warm-Up Section --> */}
            <h2 className="text-2xl font-semibold text-teal-600 mb-3">📘 Vocabulary: Basic Colors (Perusvärit)</h2>
            <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
            <p className="text-gray-700 mb-2">Let’s start by basic colors!</p>

            <ConjugationTable items={colorData.basicColors} min={0} max={colorData.basicColors.length-1} isVocab={true} />
            
            
        </section>

        <Link to={`/beginars/color/rainbow/basic-colors-quiz`}>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
            Basic Colors Exercises
            </button>
        </Link>

        </div>
        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

{/* <!-- Header --> */}
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">🌈 Extended Shades – Värisävyt</h2>
              <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔵 Shades of Blue | 🔴 Shades of Red | 🟢 Shades of Green | 🟤 Other Shades</span> – Sinisen sävyt | Punaisen sävyt | Vihreän sävyt | </h4>

                  <p className="text-gray-600 mb-6"></p>

                  {/* <!-- Warm-Up Section --> */}
                      {/* <h2 className="text-2xl font-semibold text-teal-600 mb-3">📘 Vocabulary: Basic Colors (Perusvärit)</h2> */}
            <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                  {/* <p className="text-gray-700 mb-2">Let’s start by basic items!</p> */}

                  <ConjugationTable items={colorData.extendedColors} min={0} max={colorData.extendedColors.length-1} isVocab={true} />
            </section>
            <Link to={`/beginars/color/rainbow/extended-items-quiz`}>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
            Extended Colors Exercises
            </button>
        </Link>

        </div>
        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

          {/* <!-- Header --> */}
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">❓ Grammar Tips</h2>
                  {/* <!-- Warm-Up Section --> */}                    
              <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                    <ul className="  text-gray-700 space-y-2 m-4">
                      <li>Use the question word minkävärinen (what color) to ask about an object’s color.</li>
                      <li>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                          <li>vihreä takki (green coat) → vihreässä takissa (in the green coat)</li>
                          <li>musta talo (black house) → mustassa talossa (in the black house)</li>
                          <li>vihreät housut (green pants) → ?</li>
                        </ul>
                      </li>
                    </ul>
                      
                  <p className="text-gray-600 mb-6">👉 Always match the case ending and plural form of the noun.</p>                  
            </section>

        </div>
        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

          {/* <!-- Header --> */}
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">🗣️ Sayings with Colors – Sanontoja väreillä</h2>
              <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">These expressions use colors in a metaphorical way.</span></h4>
                  {/* <!-- Warm-Up Section --> */}                    
              <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                    <ul className="  text-gray-700 space-y-2 m-4">
                      <li>“Ruoho on aina vihreämpää aidan toisella puolella.”</li>
                      <li>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                          <li>Literal: The grass is always greener on the other side of the fence.</li>
                          <li>Meaning: Things always seem better elsewhere.</li>
                        </ul>
                      </li>
                      <li>“Rakkaus on aiheuttanut minulle harmaita hiuksia.”</li>
                      <li>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                          <li>Literal: Love has caused me grey hairs.</li>
                          <li>Meaning: Love has caused trouble or stress.</li>
                        </ul>
                      </li>
                      <li>“Hän ajoi punaisia päin.”</li>
                      <li>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                          <li>Literal: He drove up to the reds.</li>
                          <li> Meaning: He drove through a red light.</li>
                        </ul>
                      </li>
                    </ul>
                      
                  <p className="text-gray-600 mb-6">🎉 Great job! You’ve learned the basics and shades of Finnish colors, plus how to use them in context. Up </p>                  
            </section>

        </div>
</div>
</BodyWrapper>

);

}


export default ColorsPage;

