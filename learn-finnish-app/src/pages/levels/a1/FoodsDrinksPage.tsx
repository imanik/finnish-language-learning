  import React from "react";
  import { Link } from "react-router-dom";
  import { foodData } from "../../../data/basicA1";

  import ConjugationTable from "../../../components/ConjugationTable";
import BodyWrapper from "../../../components/BodyWrapper";
import NavWrapper from "../../../components/NavWrapper";
  

  function FoodsDrinksPage(){

      
  return (

<BodyWrapper>
                
            <NavWrapper link="/beginars" title="← Back to Beginars Lesson"> </NavWrapper>



        <div className="mt-16">

        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
        
                          <h2 className="text-2xl font-semibold text-teal-800 mb-4">🥗 A1 Finnish – Food & Drinks (Ruoka ja Juomat)</h2>
                      {/* <!-- Header --> */}
                          {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}
        
                            <h2 className="text-2xl font-semibold text-teal-600 mb-3">🍽️ Yleisiä sanoja – General Words</h2>
                    <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                        {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
            
                        <ConjugationTable items={foodData.foodsDrinks} min={0} max={12} isVocab={true} />
                        
                        
                                    {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                    </section>
                    {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
        
                          {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish – Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}
                      {/* <!-- Header --> */}
                          {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}
        
                    <h2 className="text-2xl font-semibold text-teal-600 mb-3">🥦 Vihannekset – Vegetables</h2>
                    <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                        {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
            
                        <ConjugationTable items={foodData.foodsDrinks} min={13} max={37} isVocab={true} />
                        
                        
                                    {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                    </section>
                    {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
        </div>
        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
        
                          {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish – Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}
                      {/* <!-- Header --> */}
                          {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}
        
                    <h2 className="text-2xl font-semibold text-teal-600 mb-3">🥫 Mauste & Muut elintarvikkeet – Spice & Other Food Items</h2>
                    <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                        {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
            
                        <ConjugationTable items={foodData.foodsDrinks} min={38} max={76} isVocab={true} />
                        
                        
                                    {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                    </section>
                    {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
        </div>
        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
        
                          {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish – Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}
                      {/* <!-- Header --> */}
                          {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}
        
                    <h2 className="text-2xl font-semibold text-teal-600 mb-3">🍎 Hedelmät ja marjat – Fruits & Berries</h2>
                    <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                        {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
            
                        <ConjugationTable items={foodData.foodsDrinks} min={77} max={98} isVocab={true} />
                        
                        
                                    {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                    </section>
                    {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
        </div>
        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
        
                          {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish – Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}
                      {/* <!-- Header --> */}
                          {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}
        
                    <h2 className="text-2xl font-semibold text-teal-600 mb-3">🍞 Leipä ja viljat – Bread & Grains</h2>
                    <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                        {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
            
                        <ConjugationTable items={foodData.foodsDrinks} min={99} max={122} isVocab={true} />
                        
                        
                                    {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                    </section>
                    {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
        </div>
        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
        
                          {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish – Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}
                      {/* <!-- Header --> */}
                          {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}
        
                    <h2 className="text-2xl font-semibold text-teal-600 mb-3">🧀 Maito ja maitotuotteet – Milk & Dairy Products</h2>
                    <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                        {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
            
                        <ConjugationTable items={foodData.foodsDrinks} min={123} max={141} isVocab={true} />
                        
                        
                                    {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                    </section>
                    {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
        </div>
        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
        
                          {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish – Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}
                      {/* <!-- Header --> */}
                          {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}
        
                    <h2 className="text-2xl font-semibold text-teal-600 mb-3">🍗 Liha ja kala – Meat & Fish</h2>
                    <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                        {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
            
                        <ConjugationTable items={foodData.foodsDrinks} min={142} max={171} isVocab={true} />
                        
                        
                                    {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                    </section>
                    {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
        </div>
        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
        
                          {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish – Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}
                      {/* <!-- Header --> */}
                          {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}
        
                    <h2 className="text-2xl font-semibold text-teal-600 mb-3">☕ Juomat – Drinks</h2>
                    <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                        {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
            
                        <ConjugationTable items={foodData.foodsDrinks} min={172} max={foodData.foodsDrinks.length-1} isVocab={true} />
                        
                        
                                    {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                    </section>
                    <Link to={`/beginars/most-common-foods-and-drinks/foods-drinks/foods-drinks-quiz`}>
                        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                        Basic Food & Drinks Vocabulary Exercises
                        </button>
                    </Link>
      
                    {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
        </div>

            
      </div>
      </BodyWrapper>

        );

  }


  export default FoodsDrinksPage;