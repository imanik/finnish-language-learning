import React from "react";
import { Link } from "react-router-dom";
import { placeData } from "../../../data/basicA1";


interface Place {
  english: string,
  finnish: string,
  pronunciation?: string,
}

interface ConjugationTableProps {
  days: Place[];
  min?: number;
  max?: number;
  isVocab?: boolean;
}

function ConjugationTable({ days, min, max, isVocab } :ConjugationTableProps) {
// console.log("ConjugationTable loaded", families);
return (
  <div className="mb-6 overflow-x-auto">
  <h4 className="text-lg font-semibold text-teal-600 mb-2"></h4>
  <div className="min-w-full inline-block align-middle">
      <table className="table-auto w-full text-gray-600 border-collapse">
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
      
                        <h2 className="text-2xl font-semibold text-teal-800 mb-4"> 🇫🇮 A1 Lesson: Places in the City  - Paikkoja kaupungissa</h2>
                    {/* <!-- Header --> */}
                        {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  → let’s learn how to describe it in Finnish!</h4> */}
      
                          <h2 className="text-2xl font-semibold text-teal-600 mb-3">🏙️ 1. Places for Daily Business</h2>
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                      {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
          
                      <ConjugationTable days={placeData.places} min={0} max={7} isVocab={true} />
                      
                      
                                  {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                  </section>
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                            <h3 className="text-xl font-medium text-teal-700 mb-2">📌 Examples:</h3>
                            <p className="text-gray-700"></p>
                            <ul className="list-disc text-gray-700 space-y-2 m-6">
                                  <li> Menemme pankkiin. → We are going to the bank.</li>
                                  <li>Missä on lähin kauppa? → Where is the nearest shop?</li>
                                </ul>
                  </section>
      </div>

      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
      
                        {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish → Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}
                    {/* <!-- Header --> */}
                        {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  → let’s learn how to describe it in Finnish!</h4> */}
      
                  <h2 className="text-2xl font-semibold text-teal-600 mb-3">🍽️ 2. Places to Eat and Drink</h2>
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                      {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
          
                      <ConjugationTable days={placeData.places} min={8} max={12} isVocab={true} />
                      
                      
                                  {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                  </section>
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                            <h3 className="text-xl font-medium text-teal-700 mb-2">📌 Examples:</h3>
                            <p className="text-gray-700"></p>
                            <ul className="list-disc text-gray-700 space-y-2 m-6">
                                  <li>Syön lounasta kahvilassa. → I eat lunch in the café.</li>
                                  <li>Hän työskentelee ravintolassa. → He/She works in a restaurant.</li>
                                </ul>
                  </section>
                  {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
      </div>
      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
      
                        {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish → Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}
                    {/* <!-- Header --> */}
                        {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  → let’s learn how to describe it in Finnish!</h4> */}
      
                  <h2 className="text-2xl font-semibold text-teal-600 mb-3">🏥 3. Health-Related Places</h2>
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                      {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
          
                      <ConjugationTable days={placeData.places} min={13} max={17} isVocab={true} />
                      
                      
                                  {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                  </section>
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                            <h3 className="text-xl font-medium text-teal-700 mb-2">📌 Examples:</h3>
                            <p className="text-gray-700"></p>
                            <ul className="list-disc text-gray-700 space-y-2 m-6">
                                  <li>Minä olen apteekissa. → I am at the pharmacy.</li>
                                  <li>Me menemme terveyskeskukseen. → We are going to the health center.</li>
                                </ul>
                  </section>
                  {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
      </div>
      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
      
                        {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish → Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}
                    {/* <!-- Header --> */}
                        {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  → let’s learn how to describe it in Finnish!</h4> */}
      
                  <h2 className="text-2xl font-semibold text-teal-600 mb-3">🏫 4. Types of Schools</h2>
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                      {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
          
                      <ConjugationTable days={placeData.places} min={18} max={23} isVocab={true} />
                      
                      
                                  {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                  </section>
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                            <h3 className="text-xl font-medium text-teal-700 mb-2">📌 Examples:</h3>
                            <p className="text-gray-700"></p>
                            <ul className="list-disc text-gray-700 space-y-2 m-6">
                                  <li>Lapseni käy päiväkotia. → My child goes to daycare.</li>
                                  <li>Opiskelen yliopistossa. → I study at the university.</li>
                                </ul>
                  </section>
                  {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
      </div>
      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
      
                        {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish → Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}
                    {/* <!-- Header --> */}
                        {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  → let’s learn how to describe it in Finnish!</h4> */}
      
                  <h2 className="text-2xl font-semibold text-teal-600 mb-3">🏋️ 5. Hobby & Leisure Places</h2>
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                      {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
          
                      <ConjugationTable days={placeData.places} min={24} max={29} isVocab={true} />
                      
                      
                                  {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                  </section>
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                            <h3 className="text-xl font-medium text-teal-700 mb-2">📌 Examples:</h3>
                            <p className="text-gray-700"></p>
                            <ul className="list-disc text-gray-700 space-y-2 m-6">
                                  <li>Hän lukee kirjastoissa usein. → He/She reads in libraries often.</li>
                                  <li>Käyn kuntosalilla kolme kertaa viikossa. → I go to the gym three times a week.</li>
                                </ul>
                  </section>
                  {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
      </div>
      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
      
                        {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish → Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}
                    {/* <!-- Header --> */}
                        {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  → let’s learn how to describe it in Finnish!</h4> */}
      
                  <h2 className="text-2xl font-semibold text-teal-600 mb-3">🚗 6. Transportation & Travel</h2>
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                      {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
          
                      <ConjugationTable days={placeData.places} min={30} max={34} isVocab={true} />
                      
                      
                                  {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                  </section>
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                            <h3 className="text-xl font-medium text-teal-700 mb-2">📌 Examples:</h3>
                            <p className="text-gray-700"></p>
                            <ul className="list-disc text-gray-700 space-y-2 m-6">
                                  <li>Asun lähellä rautatieasemaa. → I live near the train station.</li>
                                  <li>Odottamme bussia bussipysäkillä. → We are waiting for the bus at the stop.</li>
                                </ul>
                  </section>

     
                  {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
      </div>
      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
      
                        {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish → Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}
                    {/* <!-- Header --> */}
                        {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  → let’s learn how to describe it in Finnish!</h4> */}
      
                  <h2 className="text-2xl font-semibold text-teal-600 mb-3">🌳 7. Outdoor and Public Areas</h2>
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                      {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
          
                      <ConjugationTable days={placeData.places} min={35} max={52} isVocab={true} />
                      
                      
                                  {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                  </section>
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                            <h3 className="text-xl font-medium text-teal-700 mb-2">📌 Examples:</h3>
                            <p className="text-gray-700"></p>
                            <ul className="list-disc text-gray-700 space-y-2 m-6">
                                  <li>Kävelen torille. → I walk to the marketplace.</li>
                                  <li>Lapset leikkivät puistossa. → The children are playing in the park.</li>
                                </ul>
                  </section>

     
                  {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
      </div>
      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
      
                        {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish → Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}
                    {/* <!-- Header --> */}
                        {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  → let’s learn how to describe it in Finnish!</h4> */}
      
                  <h2 className="text-2xl font-semibold text-teal-600 mb-3">🏠 8. Types of Buildings</h2>
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                      {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
          
                      <ConjugationTable days={placeData.places} min={53} max={placeData.places.length-1} isVocab={true} />
                      
                      
                                  {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                  </section>
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                            <h3 className="text-xl font-medium text-teal-700 mb-2">📌 Examples:</h3>
                            <p className="text-gray-700"></p>
                            <ul className="list-disc text-gray-700 space-y-2 m-6">
                                  <li>Kirkko on vanha ja kaunis. → The church is old and beautiful.</li>
                                  <li>He asuvat kerrostalossa. → They live in an apartment building.</li>
                                </ul>
                  </section>
                  <Link to={`/beginars/basic-words/basic-adjective/basic-adjective-quiz`}>
                      <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                      Basic Places Vocabulary Exercises
                      </button>
                  </Link>

     
                  {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
      </div>
      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
      
                        {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish → Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}
                    {/* <!-- Header --> */}
                        {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  → let’s learn how to describe it in Finnish!</h4> */}
      
                  <h2 className="text-2xl font-semibold text-teal-600 mb-3">💡 Tip: Learn the Location Cases!</h2>
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                            <h3 className="text-xl font-medium text-teal-700 mb-2">📌 Examples:</h3>
                            <p className="text-gray-700"></p>
                            <ul className="list-disc text-gray-700 space-y-2 m-6">
                                  <li>Missä? (in/at the place) → kirjastossa (in the library)</li>
                                  <li>Mihin? (to the place) → kirjastoon (to the library)</li>
                                  <li>Mistä? (from the place) → kirjastosta (from the library)</li>
                                </ul>
                  </section>

                  
     
                  {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
      </div>

           
    </div>

      );

}


export default ClothesPage;