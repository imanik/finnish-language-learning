import React from "react";
import { Link } from "react-router-dom";
import { clothesData } from "../../../data/basicA1";


import ConjugationTable from "../../../components/ConjugationTable";

function ClothesWearingsPage(){

    
return (

 <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
      <Link to="/beginars" className="text-teal-700 hover:underline bg-teal-100 mb-6 inline-block fixed top-0 left-0 w-full  px-4 py-2 shadow-md">
        ← Back to Beginars Lesson
      </Link>


      <div className="mt-16">
      

      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
      
                        <h2 className="text-2xl font-semibold text-teal-800 mb-4">👕 A1 Finnish – Clothes & Accessories (Vaatteet ja Asusteet)</h2>
                    {/* <!-- Header --> */}
                        {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}
      
                          <h2 className="text-2xl font-semibold text-teal-600 mb-3">👗 Vaatteet – Clothes</h2>
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                      {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
          
                      <ConjugationTable items={clothesData.clothesWearings} min={0} max={31} isVocab={true} />
                      
                      
                                  {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                  </section>
                  {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
      </div>

      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
      
                        {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish – Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}
                    {/* <!-- Header --> */}
                        {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}
      
                  <h2 className="text-2xl font-semibold text-teal-600 mb-3">🧤 Asusteet – Accessories</h2>
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                      {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
          
                      <ConjugationTable items={clothesData.clothesWearings} min={32} max={51} isVocab={true} />
                      
                      
                                  {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                  </section>
                  {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
      </div>
      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
      
                        {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish – Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}
                    {/* <!-- Header --> */}
                        {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}
      
                  <h2 className="text-2xl font-semibold text-teal-600 mb-3">🧵 Vaatteiden osat – Parts of Clothes</h2>
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                      {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
          
                      <ConjugationTable items={clothesData.clothesWearings} min={52} max={65} isVocab={true} />
                      
                      
                                  {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                  </section>
                  {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
      </div>
      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
      
                        {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish – Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}
                    {/* <!-- Header --> */}
                        {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}
      
                  <h2 className="text-2xl font-semibold text-teal-600 mb-3">🧶 Materiaalit – Materials</h2>
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                      {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
          
                      <ConjugationTable items={clothesData.clothesWearings} min={66} max={77} isVocab={true} />
                      
                      
                                  {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                  </section>
                  {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
      </div>
      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
      
                        {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish – Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}
                    {/* <!-- Header --> */}
                        {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}
      
                  <h2 className="text-2xl font-semibold text-teal-600 mb-3">🎨 Kuviot – Patterns</h2>
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                      {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
          
                      <ConjugationTable items={clothesData.clothesWearings} min={78} max={88} isVocab={true} />
                      
                      
                                  {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                  </section>
                  {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
      </div>
      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
      
                        {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish – Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}
                    {/* <!-- Header --> */}
                        {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}
      
                  <h2 className="text-2xl font-semibold text-teal-600 mb-3">👟 Jalkineet – Footwear</h2>
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                      {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
          
                      <ConjugationTable items={clothesData.clothesWearings} min={89} max={clothesData.clothesWearings.length-1} isVocab={true} />
                      
                      
                                  {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                  </section>
                   <Link to={`/beginars/basic-words/basic-adjective/basic-adjective-quiz`}>
                      <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                      Basic Clothes & Wearings Vocabulary Exercises
                      </button>
                  </Link>
     
                  {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
      </div>

           
    </div>
    </div>

      );

}


export default ClothesWearingsPage;