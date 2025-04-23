import React from "react";
import { Link } from "react-router-dom";
import { bodyPartData } from "../../../data/basicA1";


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

function BodyPartsPage(){

    
return (

 <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
      <Link to="/beginars" className="text-teal-700 hover:underline bg-teal-100 mb-6 inline-block fixed top-0 left-0 w-full  px-4 py-2 shadow-md">
        ← Back to Beginars Lesson
      </Link>



      <div className="mt-16">

      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
      
                        <h2 className="text-2xl font-semibold text-teal-800 mb-4">🧍‍♂️ A1 Finnish – Body Parts – Kehonosat </h2>
                    {/* <!-- Header --> */}
                        {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}
      
                          <h2 className="text-2xl font-semibold text-teal-600 mb-3">🧠 1. The Head and Face – Pää ja kasvot</h2>
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                      {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
          
                      <ConjugationTable days={bodyPartData.bodyParts} min={0} max={21} isVocab={true} />
                      
                      
                                  {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                  </section>
                  <Link to={`/beginars/most-common-body-parts/body-parts/body-parts-quiz`}>
                      <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                      Basic Body Parts Vocabulary Exercises
                      </button>
                  </Link>
                  {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
      </div>

      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
      
                        {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish – Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}
                    {/* <!-- Header --> */}
                        {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}
      
                  <h2 className="text-2xl font-semibold text-teal-600 mb-3">🫀 2. The Torso – Vartalo</h2>
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                      {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
          
                      <ConjugationTable days={bodyPartData.bodyParts} min={22} max={36} isVocab={true} />
                      
                      
                                  {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                  </section>
                  {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
      </div>
      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
      
                        {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish – Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}
                    {/* <!-- Header --> */}
                        {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}
      
                  <h2 className="text-2xl font-semibold text-teal-600 mb-3">💪 3. The Arms and Hands – Kädet</h2>
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                      {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
          
                      <ConjugationTable days={bodyPartData.bodyParts} min={37} max={53} isVocab={true} />
                      
                      
                                  {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                  </section>
                  {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
      </div>
      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
      
                        {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish – Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}
                    {/* <!-- Header --> */}
                        {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}
      
                  <h2 className="text-2xl font-semibold text-teal-600 mb-3">🦵 4. The Legs and Feet – Jalat</h2>
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                      {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
          
                      <ConjugationTable days={bodyPartData.bodyParts} min={54} max={bodyPartData.bodyParts.length-1} isVocab={true} />
                      
                      
                                  {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                  </section>

                  {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
      </div>
      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
      
                        {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish – Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}
                    {/* <!-- Header --> */}
                        {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}
      
                  <h2 className="text-2xl font-semibold text-teal-600 mb-3">🧾 Useful Phrases with Bodyparts (Sayings – Sanontoja)s</h2>
                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                      {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
          
                      <div className="mb-6 overflow-x-auto">
                      <h4 className="text-lg font-semibold text-teal-600 mb-2"></h4>
                      <div className="min-w-full inline-block align-middle">
                          <table className="table-auto w-full text-gray-600 border-collapse">
                      <thead>
                      
                          <tr className="bg-teal-100">
                          <th className="px-4 py-2">Finnish</th>
                          <th className="px-4 py-2">Literal Meaning</th>
                          <th className="px-4 py-2">Actual Meaning</th> 
                          </tr>
                          
                          

                      </thead>
                      <tbody>
                        
                            <tr >
                            <td >Häneltä meni sormi suuhun.</td>
                            <td>His finger went into his mouth.</td>
                            <td>He didn’t know what to do.</td>
                            </tr>    
                            <tr >
                            <td>Nyt pitää ottaa järki käteen.	</td>
                            <td>Take the wits in the hand.</td>
                            <td>Time to be smart.</td>
                            </tr>
                            <tr>
                            <td>Hän otti kynän kauniiseen käteen.</td>
                            <td>Took the pen in a beautiful hand.</td>
                            <td>She understood and fixed her mistake.</td>
                            </tr>
                            <tr>
                            <td>Häntä pestiin kiireestä kantapäähän.</td>
                            <td>Washed from top of head to heel.</td>
                            <td>Washed from head to toe.</td>
                            </tr>
                            <tr>
                            <td>Tiina juoksi kieli vyön alla.</td>
                            <td>Tiina ran with tongue under the belt.</td>
                            <td>She was in a great hurry.</td>
                            </tr>
                      
                        
                      </tbody>
                    </table>
                      
                      </div>
                      </div>
                                  {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                  </section>
                  {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
      </div>
     
      

        



      


           
    </div>
    </div>

      );

}


export default BodyPartsPage;