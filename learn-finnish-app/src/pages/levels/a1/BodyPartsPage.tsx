import React from "react";
import { Link } from "react-router-dom";
import { bodyPartData } from "../../../data/basicA1";
import ConjugationTable from "../../../components/ConjugationTable";
import BodyWrapper from "../../../components/wrapper/BodyWrapper";
import NavWrapper from "../../../components/wrapper/NavWrapper";
import PageWrapper from "../../../components/wrapper/PageWrapper";



function BodyPartsPage(){

    
return (

<BodyWrapper>
                
            <NavWrapper link="/beginars" title="← Back to Beginars Lesson"> </NavWrapper>



      <div className="mt-16">

      <PageWrapper title="🧍‍♂️ A1 Finnish – Body Parts – Kehonosat"> 
                    {/* <!-- Header --> */}
                        {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">“The world is colorful (värikäs)”</span>  – let’s learn how to describe it in Finnish!</h4> */}
      
                          <h2 className="text-2xl font-semibold text-teal-600 mb-3">🧠 1. The Head and Face – Pää ja kasvot</h2>
                  <section className="bg-gray-900 rounded-lg border border-teal-900 p-4 mb-6">
                      {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
          
                      <ConjugationTable items={bodyPartData.bodyParts} min={0} max={21} isVocab={true} />
                      
                      
                                  {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                  </section>
                  <Link to={`/beginars/most-common-body-parts/body-parts/body-parts-quiz`}>
                      <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                      Basic Body Parts Vocabulary Exercises
                      </button>
                  </Link>
                  {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
      </PageWrapper>

      <PageWrapper title="🫀 2. The Torso – Vartalo">
                  <section className="bg-gray-900 rounded-lg border border-teal-900 p-4 mb-6">
                      {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
          
                      <ConjugationTable items={bodyPartData.bodyParts} min={22} max={36} isVocab={true} />
                      
                      
                                  {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                  </section>
                  {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
      </PageWrapper>
      <PageWrapper title="💪 3. The Arms and Hands – Kädet">
                  <section className="bg-gray-900 rounded-lg border border-teal-900 p-4 mb-6">
                      {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
          
                      <ConjugationTable items={bodyPartData.bodyParts} min={37} max={53} isVocab={true} />
                      
                      
                                  {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                  </section>
                  {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
      </PageWrapper>
      <PageWrapper title="🦵 4. The Legs and Feet – Jalat">
                  <section className="bg-gray-900 rounded-lg border border-teal-900 p-4 mb-6">
                      {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
          
                      <ConjugationTable items={bodyPartData.bodyParts} min={54} max={bodyPartData.bodyParts.length-1} isVocab={true} />
                      
                      
                                  {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                  </section>

                  {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
      </PageWrapper>
      <PageWrapper title="🧾 Useful Phrases with Bodyparts (Sayings – Sanontoja)s">
                  <section className="bg-gray-900 rounded-lg border border-teal-900 p-4 mb-6">
                      {/* <p className="text-gray-700 mb-2">These are regular counting numbers: one, two, three...</p> */}
          
                      <div className="mb-6 overflow-x-auto">
                      {/* <h4 className="text-lg font-semibold text-teal-600 mb-2"></h4> */}
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
      </PageWrapper>
    </div>
    </BodyWrapper>

      );

}


export default BodyPartsPage;