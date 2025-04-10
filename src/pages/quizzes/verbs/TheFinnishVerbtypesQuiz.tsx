// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import { verbTypes, generateConjugations } from "../../../data/verbTypes";

// // Quiz component
// function VerbQuiz({ verb, onNext, verbType }) {
//    const verbEnglish = verb;
//     // console.log("English "+verbEnglish);
//   // const verbName = verb.split(" ")[0];
//   const conjugations = generateConjugations(verb, verbType);

//   const [quizState, setQuizState] = useState(() => {
  
//     const randomPersonIndex = Math.floor(Math.random() * conjugations.length);
//     const selectedPerson = conjugations[randomPersonIndex].person;
//     const correctAnswer = conjugations[randomPersonIndex].conjugation;

//     const options = conjugations.map(c => c.conjugation);
//     const shuffledOptions = options
//       .filter((option, index) => index !== randomPersonIndex)
//       .sort(() => Math.random() - 0.5)
//       .slice(0, 3)
//       .concat(correctAnswer)
//       .sort(() => Math.random() - 0.5);

//     return { selectedPerson, correctAnswer, shuffledOptions };
//   });

//   const [selected, setSelected] = useState(null);
//   const [isCorrect, setIsCorrect] = useState(null);

//   useEffect(() => {
//     const randomPersonIndex = Math.floor(Math.random() * conjugations.length);
//     const selectedPerson = conjugations[randomPersonIndex].person;
//     const correctAnswer = conjugations[randomPersonIndex].conjugation;

//     const options = conjugations.map(c => c.conjugation);
//     const shuffledOptions = options
//       .filter((option, index) => index !== randomPersonIndex)
//       .sort(() => Math.random() - 0.5)
//       .slice(0, 3)
//       .concat(correctAnswer)
//       .sort(() => Math.random() - 0.5);

//     setQuizState({ selectedPerson, correctAnswer, shuffledOptions });
//     setSelected(null);
//     setIsCorrect(null);
//   }, [verb, verbType]);

//   const handleSubmit = () => {
//     setIsCorrect(selected === quizState.correctAnswer);
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
//       <h3 className="text-xl font-semibold text-teal-700 mb-4">
//         What is the correct conjugation for "{quizState.selectedPerson} {verbEnglish}____ "?
//       </h3>
//       <div className="space-y-2">
//         {quizState.shuffledOptions.map((option, index) => (
//           <label key={index} className="block">
//             <input
//               type="radio"
//               name="quiz"
//               value={option}
//               checked={selected === option}
//               onChange={() => setSelected(option)}
//               disabled={isCorrect !== null}
//               className="mr-2"
//             />
//             {option}
//           </label>
//         ))}
//       </div>
//       {isCorrect === null ? (
//         <button
//           onClick={handleSubmit}
//           className="mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
//         >
//           Submit
//         </button>
//       ) : (
//         <div className="mt-4">
//           <p className={isCorrect ? "text-green-600" : "text-red-600"}>
//             {isCorrect ? `Correct!  "${quizState.selectedPerson} ${verbEnglish}  ".` : `Wrong! The correct answer is "${quizState.correctAnswer}".`}
//           </p>
//           <button
//             onClick={onNext}
//             className="mt-2 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
//           >
//             Next Question
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// function TheFinnishVerbtypesQuiz() {
//   const { verbtype } = useParams(); // Get verbtype from URL (e.g., "verbtype1")
//   console.log("Verbtype " + verbtype);
//   const [quizVerb, setQuizVerb] = useState(null);

//   const verbTypeKey = verbtype?.toLowerCase() || "verbType1"; // Default to verbType1 if not specified
//   const verbs = verbTypes[verbTypeKey] || verbTypes.verbType1; // Fallback to Type 1 if invalid

//   const startQuiz = () => {
//     const flatVerbs = verbs.flat();
//     const randomVerb = flatVerbs[Math.floor(Math.random() * flatVerbs.length)];
//     setQuizVerb(randomVerb);
//   };

//   const nextQuestion = () => {
//     const flatVerbs = verbs.flat();
//     const randomVerb = flatVerbs[Math.floor(Math.random() * flatVerbs.length)];
//     setQuizVerb(randomVerb);
//   };

//   return (
//     <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
//       <Link to="/verbs/the-present-tense/the-finnish-verbtypes" className="text-teal-700 hover:underline mb-6 inline-block">
//         ← Back to The Finnish Verbtypes
//       </Link>
//       <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
//         <h3 className="text-xl font-semibold text-teal-700 mb-4">
//           {verbTypeKey.replace("verbType", "Verbtype ")} Conjugation Quiz
//         </h3>
//         {!quizVerb ? (
//           <button
//             onClick={startQuiz}
//             className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
//           >
//             Start Quiz
//           </button>
//         ) : (
//           <VerbQuiz verb={quizVerb} onNext={nextQuestion} verbType={verbTypeKey} />
//         )}
//       </div>
//     </div>
//   );
// }

// export default TheFinnishVerbtypesQuiz;
import React from 'react';

const NumbersQuizPage: React.FC = () => {
  return <div>Numbers Quiz</div>;
};

export default NumbersQuizPage;

