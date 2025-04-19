import React from "react";
import { Link } from "react-router-dom";
import { clothesData } from "../../../data/basicA1";


interface Clothes {
  english: string,
  finnish: string,
  pronunciation?: string,
}

interface ConjugationTableProps {
  days: Clothes[];
  min?: number;
  max?: number;
  isVocab?: boolean;
}

function ConjugationTable({ days, min, max, isVocab } :ConjugationTableProps) {
// console.log("ConjugationTable loaded", families);
return (
<div className="mb-6">
  <h4 className="text-lg font-semibold text-teal-600 mb-2"></h4>
  <table className="table-auto w-full text-gray-600">
    <thead>
    {isVocab ?   
        <tr className="bg-teal-100">
        <th className="px-4 py-2">English</th>
        <th className="px-4 py-2">Finnish</th>
        <th className="px-4 py-2">Pronunciation</th> 
        <th className="px-4 py-2">Listen</th>
        </tr>
         :
         
         <tr className="bg-teal-100">
        <th className="px-4 py-2">English</th>
        <th className="px-4 py-2">Finnish</th>
        <th className="px-4 py-2"></th>
        <th className="px-4 py-2">Listen</th>
          </tr>
        }
      
    </thead>
    <tbody>
      {days
      .filter((_, index) => {
      if (min !== undefined && max !== undefined) {
      return index >= min && index <= max;
      }
      return true;
      }).map((item, index) => (
        //  {if (index >== 0 && index <== 10)
          
      
        <tr key={index}>
          <td>{item.english}</td>
          <td>{item.finnish}</td>
          <td>{item.pronunciation}</td> {/* Fixed typo: "pronounciation" -> "pronunciation" */}
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
      //  }
      ))}
    </tbody>
  </table>
</div>
);
}

function ClothesPage(){

    
return (

 <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
      <Link to="/beginars" className="text-teal-700 hover:underline mb-6 inline-block">
        ← Back to Beginars Lesson
      </Link>



      

      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
      
                        <h2 className="text-2xl font-semibold text-teal-800 mb-4">👕 A1 Finnish – Clothes & Accessories (Vaatteet ja Asusteet)</h2>
                    {/* <!-- Header --> */}
                        {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}
      
                          <h2 className="text-2xl font-semibold text-teal-600 mb-3">👗 Vaatteet – Clothes</h2>
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                      {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
          
                      <ConjugationTable days={clothesData.clothes} min={0} max={31} isVocab={true} />
                      
                      
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
          
                      <ConjugationTable days={clothesData.clothes} min={32} max={51} isVocab={true} />
                      
                      
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
          
                      <ConjugationTable days={clothesData.clothes} min={52} max={65} isVocab={true} />
                      
                      
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
          
                      <ConjugationTable days={clothesData.clothes} min={66} max={77} isVocab={true} />
                      
                      
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
          
                      <ConjugationTable days={clothesData.clothes} min={78} max={88} isVocab={true} />
                      
                      
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
          
                      <ConjugationTable days={clothesData.clothes} min={89} max={clothesData.clothes.length-1} isVocab={true} />
                      
                      
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

      );

}


export default ClothesPage;