  import React from "react";
  import { Link } from "react-router-dom";
  import { animalData, bodyPartData } from "../../../data/basicA1";


  interface Food {
    english: string,
    finnish: string,
    pronunciation?: string,
  }

  interface ConjugationTableProps {
    days: Food[];
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
          {days
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

  function AnimalsPage(){

      
  return (

  <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
        
  
        <Link to="/beginars" className="text-teal-700 hover:underline bg-teal-100 mb-6 inline-block fixed top-0 left-0 w-full  px-4 py-2 shadow-md">
          ← Back to Beginars Lesson
        </Link>
  



        
  <div className="mt-16">
        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
              
                                <h2 className="text-2xl font-semibold text-teal-800 mb-4">🐾 Finnish Lesson: Animals → Eläimet</h2>
                            {/* <!-- Header --> */}
                                {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  → let’s learn how to describe it in Finnish!</h4> */}
              
                                  <h2 className="text-2xl font-semibold text-teal-600 mb-3">🐶 1. Pets → Lemmikkieläimet</h2>
                          <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                              {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
                  
                              <ConjugationTable days={animalData.animals} min={0} max={7} isVocab={true} />
                              
                              
                                          {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                          </section>
                          <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                                    <h3 className="text-xl font-medium text-teal-700 mb-2">📌 Examples:</h3>
                                    <p className="text-gray-700"></p>
                                    <ul className="list-disc text-gray-700 space-y-2 m-6">
                                          <li>Minulla on koira. → I have a dog.</li>
                                          <li>Kissani on söpö. → My cat is cute.</li>
                                        </ul>
                          </section>
                          <Link to={`/beginars/most-common-animals/animals/basic-animals-quiz`}>
                              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                              Basic Animals Vocabulary Exercises
                              </button>
                          </Link>
              </div>
        
              <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
              
                                {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish → Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}
                            {/* <!-- Header --> */}
                                {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  → let’s learn how to describe it in Finnish!</h4> */}
              
                          <h2 className="text-2xl font-semibold text-teal-600 mb-3">🐄 2. Farm Animals → Maatilan eläimet</h2>
                          <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                              {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
                  
                              <ConjugationTable days={animalData.animals} min={8} max={12} isVocab={true} />
                              
                              
                                          {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                          </section>
                          <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                                    <h3 className="text-xl font-medium text-teal-700 mb-2">📌 Examples:</h3>
                                    <p className="text-gray-700"></p>
                                    <ul className="list-disc text-gray-700 space-y-2 m-6">
                                          <li>Lehmä on pellolla. → The cow is in the field.</li>
                                          <li>Hevonen juoksee nopeasti. → The horse runs fast.</li>
                                        </ul>
                          </section>
                          <Link to={`/beginars/most-common-animals/animals/animals-sentence-quiz`}>
                              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                              Basic Animals In Sentence Exercises
                              </button>
                          </Link>
                          {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
              
                                {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish → Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}
                            {/* <!-- Header --> */}
                                {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  → let’s learn how to describe it in Finnish!</h4> */}
              
                          <h2 className="text-2xl font-semibold text-teal-600 mb-3">🐻 3. Wild Animals → Villieläimet</h2>
                          <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                              {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
                  
                              <ConjugationTable days={animalData.animals} min={13} max={17} isVocab={true} />
                              
                              
                                          {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                          </section>
                          <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                                    <h3 className="text-xl font-medium text-teal-700 mb-2">📌 Examples:</h3>
                                    <p className="text-gray-700"></p>
                                    <ul className="list-disc text-gray-700 space-y-2 m-6">
                                          <li>Karhu asuu metsässä. → The bear lives in the forest.</li>
                                          <li>Orava syö pähkinöitä. → The squirrel eats nuts.</li>
                                        </ul>
                          </section>
                          {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
              
                                {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish → Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}
                            {/* <!-- Header --> */}
                                {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  → let’s learn how to describe it in Finnish!</h4> */}
              
                          <h2 className="text-2xl font-semibold text-teal-600 mb-3">🐘 4. Zoo Animals → Eläintarhan eläimet</h2>
                          <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                              {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
                  
                              <ConjugationTable days={animalData.animals} min={18} max={23} isVocab={true} />
                              
                              
                                          {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                          </section>
                          <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                                    <h3 className="text-xl font-medium text-teal-700 mb-2">📌 Examples:</h3>
                                    <p className="text-gray-700"></p>
                                    <ul className="list-disc text-gray-700 space-y-2 m-6">
                                          <li>Lapset menevät eläintarhaan. → The children go to the zoo.</li>
                                          <li>Leijona on suuri kissaeläin. → The lion is a big cat.</li>
                                        </ul>
                          </section>
                          {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
              
                                {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish → Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}
                            {/* <!-- Header --> */}
                                {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  → let’s learn how to describe it in Finnish!</h4> */}
              
                          <h2 className="text-2xl font-semibold text-teal-600 mb-3">🐦 5. Birds → Linnut</h2>
                          <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                              {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
                  
                              <ConjugationTable days={animalData.animals} min={24} max={29} isVocab={true} />
                              
                              
                                          {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                          </section>
                          <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                                    <h3 className="text-xl font-medium text-teal-700 mb-2">📌 Examples:</h3>
                                    <p className="text-gray-700"></p>
                                    <ul className="list-disc text-gray-700 space-y-2 m-6">
                                          <li>Lintu laulaa puussa. → The bird is singing in the tree.</li>
                                          <li>Joutsen ui järvessä. → The swan swims in the lake.</li>
                                        </ul>
                          </section>
                          {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
              
                                {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish → Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}
                            {/* <!-- Header --> */}
                                {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  → let’s learn how to describe it in Finnish!</h4> */}
              
                          <h2 className="text-2xl font-semibold text-teal-600 mb-3">🐟 6. Sea Animals → Merieläimet</h2>
                          <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                              {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
                  
                              <ConjugationTable days={animalData.animals} min={30} max={34} isVocab={true} />
                              
                              
                                          {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                          </section>
                          <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                                    <h3 className="text-xl font-medium text-teal-700 mb-2">📌 Examples:</h3>
                                    <p className="text-gray-700"></p>
                                    <ul className="list-disc text-gray-700 space-y-2 m-6">
                                          <li>Delfiini on älykäs eläin. → The dolphin is an intelligent animal.</li>
                                          <li>Valas on maailman suurin eläin. → The whale is the world’s largest animal.</li>
                                        </ul>
                          </section>
        
            
                          {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
              
                                {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish → Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}
                            {/* <!-- Header --> */}
                                {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  → let’s learn how to describe it in Finnish!</h4> */}
              
                          <h2 className="text-2xl font-semibold text-teal-600 mb-3">🐜 7. Insects → Hyönteiset</h2>
                          <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                              {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
                  
                              <ConjugationTable days={animalData.animals} min={35} max={52} isVocab={true} />
                              
                              
                                          {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                          </section>
                          <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                                    <h3 className="text-xl font-medium text-teal-700 mb-2">📌 Examples:</h3>
                                    <p className="text-gray-700"></p>
                                    <ul className="list-disc text-gray-700 space-y-2 m-6">
                                          <li>Mehiläinen tekee hunajaa. → The bee makes honey.</li>
                                          <li>Pidän kauniista perhosista. → I like beautiful butterflies.</li>
                                        </ul>
                          </section>


        
            
                          {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
              </div>
            
            
      </div>
      </div>

        );

  }


  export default AnimalsPage;