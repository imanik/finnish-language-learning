    import React from 'react';
    import { Link } from 'react-router-dom';
    import { greetingsData } from '../../../data/basicA1';

   
    interface Greeting {
      english: string,
      finnish: string,
      pronunciation: string,
  }

  interface ConjugationTableProps {
      greetings: Greeting[];
  }
   
    function GreetingsPage() {

    

    
    function ConjugationTable({ greetings } :ConjugationTableProps) {
        // console.log("ConjugationTable loaded", families);
        return (
          <div className="mb-6 overflow-x-auto">
          <h4 className="text-lg font-semibold text-teal-600 mb-2"></h4>
          <div className="min-w-full inline-block align-middle">
              <table className="table-auto w-full text-gray-600 border-collapse">
              <thead>
                <tr className="bg-teal-100">
                  <th className="px-4 py-2">English</th>
                  <th className="px-4 py-2">Finnish</th>
                  <th className="px-4 py-2">Pronunciation</th>
                  <th className="px-4 py-2">Listen</th>
                </tr>
              </thead>
              <tbody>
                {greetings.map((item, index) => (
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
        );
      }



    

   return (
   <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
         <Link to="/beginars" className="text-teal-700 hover:underline mb-6 inline-block">
           ← Back to Beginars Lesson
         </Link>
   
        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
        
                              <h2 className="text-2xl font-semibold text-teal-600 mb-3">🔢 List of Greetings in Finnish</h2>
                  
                              {/* <p className="text-gray-600 mb-4">
                      To say you speak a certain language, you use the verb puhua. This verb is a partitive verb. This means that you have to put the language in the partitive (the extra "a" below) behind the verb puhua.
                      </p> */}

                  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                      
                          <ConjugationTable greetings={greetingsData.basicGreetings} />
                                   
                  </section>
              
                      <Link to={`/beginars/greeting/how-are-you/basic-greeting-quiz`}>
                        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                          Basic Greeting Exercises
                        </button>
                      </Link>
              
        </div>

        
   


           </div>
       );
   
   
   }
    

    export default GreetingsPage;