// import React from "react";
// import { Link } from "react-router-dom";
// // import { verbTopics } from "../data";

// // Reusable ConjugationTable component
// function ConjugationTable({ verbName, conjugations, highlightLastLetter = false }) {
//   return (
//     <div className="mb-6">
//       <h4 className="text-lg font-semibold text-teal-600 mb-2">{verbName}</h4>
//       <table className="table-auto w-full text-gray-600 text-center">
//         <thead>
//           <tr className="bg-teal-100">
//             <th className="px-4 py-2">Person</th>
//             <th className="px-4 py-2">Conjugation</th>
//             <th className="px-4 py-2">English</th>
//           </tr>
//         </thead>
//         <tbody>
//           {conjugations.map((verb, index) => (
//             <tr key={index}>
//               <td>{verb.person}</td>
//               <td>
//                 {highlightLastLetter ? (
//                   <>
//                     {verb.conjugation}
//                     <span className="text-red-600">{verb.infinitive}</span>
//                   </>
//                 ) : (
//                   verb.conjugation
//                 )}
//               </td>
//               <td>{verb.english}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }



// export const commonVerbs1 = [
//   ["ajaa (to drive)", "asua (to live in a place)"],
//   ["alkaa (to start, to begin*) KPT", "etsiä (to look for, to search)"],
//   ["antaa (to give) KPT", "auttaa (to help) KPT"],
//   ["herättää (to wake so. up) KPT", "hoitaa (to take care of) KPT"],
//   ["huutaa (to shout) KPT", "katsoa (to watch*)"],
//   ["kieltää (to deny) KPT", "kiertää (to go around) KPT"],
//   ["kirjoittaa (to write) KPT", "kysyä (to ask)"],
//   ["laajentaa (to expand) KPT", "laskea (to count)"],
//   ["lukea (to read) KPT", "lähteä (to leave) KPT"],
//   ["maksaa (to pay, to cost)", "muistaa (to remember)"],
//   ["neuvoa (to give advice)", "odottaa (to wait, to expect) KPT"],
//   ["ostaa (to buy)", "ottaa (to take) KPT"],
//   ["paistaa (to fry*, to shine*)", "puhua (to speak)"],
//   ["rakastaa (to love)", "rakastua (to fall in love)"],
//   ["sallia (to allow)", "sanoa (to say*)"],
//   ["soittaa (to call, to play an instrument*) KPT", "sortua (to collapse) KPT"],
//   ["tietää (to know) KPT", "tuntea (to feel) KPT"],
//   ["unohtaa (to forget) KPT", "unohtua (to be forgotten) KPT"],
//   ["vaatia (to demand) KPT", "ymmärtää (to understand) KPT"],
// ];



// function TheFinnishVerbtypes() {

//   // const toSlug = (text) => text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");


//   const puhua = [
//     { person: "minä", conjugation: "puhu", english: "I speak", infinitive: "n" },
//     { person: "sinä", conjugation: "puhu", english: "you speak", infinitive: "t" },
//     { person: "hän", conjugation: "puhu", english: "he/she speaks", infinitive: "u" },
//     { person: "me", conjugation: "puhu", english: "we speak", infinitive: "mme" },
//     { person: "te", conjugation: "puhu", english: "you speak", infinitive: "tte" },
//     { person: "he", conjugation: "puhu", english: "they speak", infinitive: "vat" },
//   ];

//   const sanoa = [
//     { person: "minä", conjugation: "sano", english: "I say", infinitive: "n" },
//     { person: "sinä", conjugation: "sano", english: "you say", infinitive: "t" },
//     { person: "hän", conjugation: "sano", english: "he/she says", infinitive: "o" },
//     { person: "me", conjugation: "sano", english: "we say", infinitive: "mme" },
//     { person: "te", conjugation: "sano", english: "you say", infinitive: "tte" },
//     { person: "he", conjugation: "sano", english: "they say",  infinitive: "vat" },
//   ];

//   const kysya = [
//     { person: "minä", conjugation: "kysy", english: "I ask", infinitive: "n" },
//     { person: "sinä", conjugation: "kysy", english: "you ask", infinitive: "t" },
//     { person: "hän", conjugation: "kysy", english: "he/she asks", infinitive: "y" },
//     { person: "me", conjugation: "kysy", english: "we ask", infinitive: "mme" },
//     { person: "te", conjugation: "kysy", english: "you ask", infinitive: "tte" },
//     { person: "he", conjugation: "kysy", english: "they ask", infinitive: "vat" },
//   ];

//   const odottaa = [
//     { person: "minä", conjugation: "odota", english: "I wait", infinitive: "n" },
//     { person: "sinä", conjugation: "odota", english: "you wait", infinitive: "t" },
//     { person: "hän", conjugation: "odotta", english: "he/she waits", infinitive: "a" },
//     { person: "me", conjugation: "odota", english: "we wait", infinitive: "mme" },
//     { person: "te", conjugation: "odota", english: "you wait", infinitive: "tte" },
//     { person: "he", conjugation: "odotta", english: "they wait", infinitive: "vat" },
//   ];

  

  
//   return (
//     <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
//       {/* <Link to="/verbs" className="text-teal-700 hover:underline mb-6 inline-block">
//         ← Back to Verbs Menu
//       </Link> */}

//       {/* Introduction Section */}
//       <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
//         <h2 className="text-2xl font-semibold text-teal-800 mb-4">The Finnish Verbtypes</h2>
//         <p className="text-gray-600 mb-4">
//         According to the way Finnish is currently taught to immigrants, there are six verbtypes in Finnish. Over time, there have been many different ways of dividing verbs into categories. The model with 6 verbtypes presented below is definitely not the only one. There have been attempts to limit the amount of Finnish verbtypes to 3, but there has also been a system with 45 verbtypes. If you’d like to hear more about those, Michael Hämäläinen has brought up some of these alternative ways in the comments.
//         </p>
//         <p className="text-gray-600 mb-4">
//         Verbs are divided into verbtypes based on what they look like in their basic (infinitive) form as well as how they change when being conjugated. If you know what verbtype verbs belong to, it will be easier for you to remember how it is conjugated.
//         </p>
//         <h3 className="text-xl font-semibold text-teal-700 mb-2">Table of Contents</h3>
//         <ul className="list-disc pl-5 text-gray-600 mb-4">
//           <li>Verbtype 1 – puhua, sanoa, kysyä</li>
//           <li>Verbtype 2 – syödä, juoda, imuroida</li>
//           <li>Verbtype 3 – opiskella, mennä, pestä</li>
//           <li>Verbtype 4 – haluta, tavata, siivota</li>
//           <li>Verbtype 5 – valita, tarvita, häiritä</li>
//           <li>Verbtype 6 – lämmetä, vanheta, paeta</li>
//           <li>Verbtype 4, 5 and 6 Crossovers</li>
//         </ul>
//       </div>

//       {/* Verbtype 1 Section */}
//       <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
//         <h3 className="text-xl font-semibold text-teal-700 mb-2">1. Verbtype 1</h3>
//         <p className="text-gray-600 mb-4">
//         Verbtype 1 is the most common of the 6 Finnish verbtypes. Verbs belonging to this verbtype have an infinitive that ends in 2 vowels <span className="text-red-600"> (-aa, -ea, -eä, -ia, -iä, -oa, -ua, -yä, -ää, -öä)</span>. To find this type of verb’s infinitive stem, you remove the final <span className="text-red-600">-a or -ä</span>  from the infinitive.
//         </p>


//         <ConjugationTable verbName="Puhua (to speak)" conjugations={puhua} highlightLastLetter={true} />
//         <ConjugationTable verbName="Sanoa (to say)" conjugations={sanoa} highlightLastLetter={true}/>
//         <ConjugationTable verbName="Kysyä (to ask)" conjugations={kysya} highlightLastLetter={true}/>
//         <ConjugationTable verbName="Odottaa (to wait)" conjugations={odottaa} highlightLastLetter={true}/>

//         <p className="text-gray-600 mb-4">
//         Please note with the verb odottaa above that verbtype 1 verbs can undergo consonant gradation! Verbs below that undergo consonant gradation are marked with KPT below.
//         </p>

//         <h3 className="text-xl font-semibold text-teal-700 mb-2">Some Other Common Type 1 Verbs</h3>
//         <table className="table-auto w-full text-gray-600">
//           <thead>
//             <tr className="bg-teal-100">
//               <th className="px-4 py-2">Column 1</th>
//               <th className="px-4 py-2">Column 2</th>
//             </tr>
//           </thead>
//           <tbody>
//             {commonVerbs1.map((pair, index) => (
//               <tr key={index}>
//                 <td className="px-4 py-2">{pair[0]}</td>
//                 <td className="px-4 py-2">{pair[1]}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <Link to={`/verbs/the-present-tense/the-finnish-verbtypes/quiz/verbtype1`}>
//           <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
//             Verbtype 1 Quiz
//           </button>
//         </Link>
//       </div>

//       {/* Quiz Section */}
//       {/* <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
//         <h3 className="text-xl font-semibold text-teal-700 mb-4">Verb Conjugation Quiz</h3>
//         {!quizVerb ? (
//           <button
//             onClick={startQuiz}
//             className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
//           >
//             Start Quiz
//           </button>
//         ) : (
//           <VerbQuiz verb={quizVerb} onNext={nextQuestion} />
//         )}
//       </div> */}
//     </div>
//   );
// }

// export default TheFinnishVerbtypes;

import React from 'react';

const NumbersQuizPage: React.FC = () => {
  return <div>Numbers Quiz</div>;
};

export default NumbersQuizPage;