
import React from 'react';

const NumbersQuizPage: React.FC = () => {
  return <div>Numbers Quiz</div>;
};

export default NumbersQuizPage;
// import React, { useState, useEffect } from 'react';
//     import { Link } from 'react-router-dom';

//     function GreetingsPage() {

//     const [score, setScore] = useState(0);
//     const [timeLeft, setTimeLeft] = useState(10);
//     const [leaderboard, setLeaderboard] = useState(() => {
//         const saved = localStorage.getItem('finnishQuizLeaderboard');
//         return saved ? JSON.parse(saved) : [];
//     });

//     const [userName, setUserName] = useState('');
//     const [userGuess, setUserGuess] = useState('');
//     const [feedback, setFeedback] = useState('');
//     const [results, setResults] = useState([]);
//     const [quizFinished, setQuizFinished] = useState(false);


//     const playPronunciation = (text) => {
//         const utterance = new SpeechSynthesisUtterance(text);
//         utterance.lang = 'fi-FI'; // Finnish language
//         window.speechSynthesis.speak(utterance);
//       };


//     const [currentIndex, setCurrentIndex] = useState(0);

//     // Define the missing function
//     const resetScore = () => {
//         if (score > 0) promptForNameAndUpdateLeaderboard(score);
//         setScore(0);
//         setCurrentIndex(0);
//         setUserGuess('');
//         setFeedback('');
//         setTimeLeft(10);
//     };

//     // Function to clear leaderboard
//   const clearLeaderboard = () => {
//     localStorage.removeItem('finnishQuizLeaderboard'); // Remove only this key
//     setLeaderboard([]); // Reset state to empty array
//   };

//     const promptForNameAndUpdateLeaderboard = (finalScore) => {
//         const name = prompt('Great job! Enter your name for the leaderboard:');
//         if (name) {
//           const newEntry = { name, score: finalScore };
//           setLeaderboard((prev) => {
//             const updated = [...prev, newEntry].sort((a, b) => b.score - a.score).slice(0, 10);
//             return updated;
//           });
//           setUserName(name);
//         }
//       };

//       useEffect(() => {
//         if (timeLeft > 0) {
//           const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//           return () => clearTimeout(timer);
//         } else {
//           setFeedback('Time’s up!');
//           // Add result when time runs out
//           setTimeout(() => {
//             if (currentIndex + 1 < greetings.length) {
//               // Move to next question if not finished
//               setCurrentIndex((prev) => prev + 1);
//               setUserGuess('');
//               setFeedback('');
//               setTimeLeft(10);
//             } else {
//               // Quiz is finished
//               setQuizFinished(true);
//               if (score > 0) promptForNameAndUpdateLeaderboard(score);
//             }
//           }, 1500);

//           setResults((prev) => [
//             ...prev,
//             {
//               english: greetings[currentIndex].english,
//               finnish: greetings[currentIndex].finnish,
//               pronunciation: greetings[currentIndex].pronunciation,
//               isCorrect: false,
//             },
//           ]);

//         }
//       }, [timeLeft, score, currentIndex, quizFinished]);

//     useEffect(() => {
//         localStorage.setItem('finnishQuizLeaderboard', JSON.stringify(leaderboard));
//     }, [leaderboard]);
    

//     const checkAnswer = () => {
//         const isCorrect = userGuess.toLowerCase() === greetings[currentIndex].answer.toLowerCase();
//         if (isCorrect) {
//           setScore((prev) => prev + 1);
//           setFeedback(
//             `Correct! "${greetings[currentIndex].english}" in Finnish is "${greetings[currentIndex].finnish}", pronunciation is "${greetings[currentIndex].pronunciation}".`
//           );
//         } else {
//           setFeedback('Try again!');
//         }
//         // Add result with correctness status
//         setResults((prev) => [
//           ...prev,
//           {
//             english: greetings[currentIndex].english,
//             finnish: greetings[currentIndex].finnish,
//             pronunciation: greetings[currentIndex].pronunciation,
//             isCorrect,
//           },
//         ]);
        
//         // if (isCorrect) {
//             setTimeout(() => {
//               if (currentIndex + 1 < greetings.length) {
//                 // Move to next question if not finished
//                 setCurrentIndex((prev) => prev + 1);
//                 setUserGuess('');
//                 setFeedback('');
//                 setTimeLeft(10);
//             //   } 
                
//               }else {
//             // Quiz is finished
//                 setQuizFinished(true);
//                 if (score > 0) promptForNameAndUpdateLeaderboard(score);  
//             }
//             }, 2500);
//         // }
//       };

//     return (
//         <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
//         <Link to="/" className="text-teal-700 hover:underline mb-4 inline-block">← Back to Home</Link>
//         <h1 className="text-3xl font-bold text-teal-700 mb-6">Greetings in Finnish</h1>
//         <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quiz</h2>
//             <p className="text-gray-700 mb-4">Test your knowledge of Finnish greetings!</p>
//             <p className="text-gray-700 mb-2">Time left: {timeLeft}s</p>
//         <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
//             <div
//             className="bg-teal-500 h-2.5 rounded-full transition-all duration-1000"
//             style={{ width: `${(timeLeft / 10) * 100}%` }}
//             ></div>
//         </div>
//             <h3 className="text-xl font-medium text-gray-800 mb-2">{currentIndex}: What’s "{greetings[currentIndex].english}" in Finnish?</h3>
//             <div className="flex space-x-2 mb-4">
//             <input
//                 type="text"
//                 value={userGuess}
//                 onChange={(e) => setUserGuess(e.target.value)}
//                 placeholder="Type your guess"
//                 className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//                 onClick={checkAnswer}
//                 className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200"
//             >
//                 Check Answer
//             </button>
//             </div>
//             <p className={`mb-4 ${feedback.includes('Correct') ? 'text-green-600' : 'text-red-600'}`}>{feedback}</p>
            
//             <div className="flex justify-between items-center mb-4">
//             <p className="text-lg font-medium text-gray-700">Score: {score}</p>
//             <button
//             onClick={resetScore}
//             className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transform hover:scale-110 transition duration-200"
//             >
//             Reset Quiz
//             </button>
//         </div>          
//       {/* Results Section */}
//       <div className="mb-4">
//         <h4 className="text-lg font-medium text-gray-800 mb-2">Results:</h4>
//         {results.length > 0 ? (
//           <ul className="list-decimal pl-5">
//             {results.map((result, index) => (
//               <li
//                 key={index}
//                 className={`mb-1 ${result.isCorrect ? 'text-green-600' : 'text-red-600'}`}
//               >
//                 ({result.isCorrect ? 'Correct' : 'Incorrect'}) Finnish "{result.english}" means "{result.finnish}" in English, pronunciation is "{result.pronunciation}"{' '}
//                 <button onClick={() => playPronunciation(result.pronunciation)} className="text-blue-500 hover:underline">Listen</button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-600">No results yet. Answer a question or let the timer run out!</p>
//         )}
//       </div>
//         {/* Leaderboard */}
//         {leaderboard.length > 0 && (
//           <div className="mt-4">
//             <h3 className="text-lg font-semibold text-gray-800">Leaderboard</h3>
//             <ul className="list-disc pl-5 text-gray-700">
//               {leaderboard.map((entry, index) => (
//                 <li key={index}>
//                   {entry.name}: {entry.score}
//                 </li>
//               ))}
//             </ul>
//             <button
//               onClick={clearLeaderboard}
//               className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
//             >
//               Clear Leaderboard
//             </button>
//           </div>
//         )}


//         </div>
//         </div>
//     );
//     }

//     export default GreetingsPage;

//     Yes, absolutely! Your approach is spot-on and a great way to organize your quiz scores in localStorage. Using distinct keys like "familyQuizScore", "greetingQuizScore", and "adjectiveQuizScore" for each quiz type is a perfect strategy. It keeps the results separate, avoids conflicts, and makes your code more maintainable. Let’s confirm this is OK and show how it would work in practice.

//     Why This is OK
//     Separation of Data:
//     Each quiz type (family, greetings, adjectives) gets its own unique key in localStorage.
//     This ensures that scores for one quiz type don’t overwrite or mix with scores from another.
//     Clarity:
//     Descriptive keys like "familyQuizScore", "greetingQuizScore", and "adjectiveQuizScore" make it obvious what data each key holds, improving readability and debugging.
//     Scalability:
//     If you add more quiz types later (e.g., verbs, numbers), you can easily add new keys (e.g., "verbQuizScore") without changing existing logic.
//     No Conflicts:
//     localStorage is a global key-value store shared across your app (and even tabs). Unique keys prevent accidental overwrites.
//     How It Works in Code
// Here’s how you could implement this for each quiz type, assuming they’re in separate components (e.g., FamilyQuizzes, GreetingsQuizzes, AdjectiveQuizzes). I’ll use the same QuizScore interface and pattern from your previous code.

// Interface (Shared Across All Quizzes):
// tsx

// Collapse

// Wrap

// Copy
// interface QuizScore {
//   correct: number;
//   total: number;
// }
// 1. Family Quiz (FamilyQuizzes.tsx):
// tsx

// Collapse

// Wrap

// Copy
// const [familyQuizScore, setFamilyQuizScore] = useState<QuizScore>(() => {
//   const storedScore = localStorage.getItem("familyQuizScore");
//   return storedScore ? JSON.parse(storedScore) : { correct: 0, total: 0 };
// });

// useEffect(() => {
//   localStorage.setItem("familyQuizScore", JSON.stringify(familyQuizScore));
// }, [familyQuizScore]);

// const handleQuizComplete = (wasCorrect: boolean) => {
//   setFamilyQuizScore((prev) => ({
//     total: prev.total + 1,
//     correct: wasCorrect ? prev.correct + 1 : prev.correct,
//   }));
// };
// Key: "familyQuizScore"
// Purpose: Tracks the total score for all family-related quizzes (e.g., { correct: 15, total: 20 }).
// 2. Greetings Quiz (GreetingsQuizzes.tsx):
// tsx

// Collapse

// Wrap

// Copy
// const [greetingQuizScore, setGreetingQuizScore] = useState<QuizScore>(() => {
//   const storedScore = localStorage.getItem("greetingQuizScore");
//   return storedScore ? JSON.parse(storedScore) : { correct: 0, total: 0 };
// });

// useEffect(() => {
//   localStorage.setItem("greetingQuizScore", JSON.stringify(greetingQuizScore));
// }, [greetingQuizScore]);

// const handleQuizComplete = (wasCorrect: boolean) => {
//   setGreetingQuizScore((prev) => ({
//     total: prev.total + 1,
//     correct: wasCorrect ? prev.correct + 1 : prev.correct,
//   }));
// };
// Key: "greetingQuizScore"
// Purpose: Tracks the total score for all greeting-related quizzes (e.g., { correct: 8, total: 10 }).
// 3. Adjective Quiz (AdjectiveQuizzes.tsx):
// tsx

// Collapse

// Wrap

// Copy
// const [adjectiveQuizScore, setAdjectiveQuizScore] = useState<QuizScore>(() => {
//   const storedScore = localStorage.getItem("adjectiveQuizScore");
//   return storedScore ? JSON.parse(storedScore) : { correct: 0, total: 0 };
// });

// useEffect(() => {
//   localStorage.setItem("adjectiveQuizScore", JSON.stringify(adjectiveQuizScore));
// }, [adjectiveQuizScore]);

// const handleQuizComplete = (wasCorrect: boolean) => {
//   setAdjectiveQuizScore((prev) => ({
//     total: prev.total + 1,
//     correct: wasCorrect ? prev.correct + 1 : prev.correct,
//   }));
// };
// Key: "adjectiveQuizScore"
// Purpose: Tracks the total score for all adjective-related quizzes (e.g., { correct: 12, total: 15 }).
// What Happens in localStorage?
// After running these quizzes, localStorage might look like this (viewable in your browser’s DevTools under Application > Local Storage):

// "familyQuizScore": '{"correct": 15, "total": 20}'
// "greetingQuizScore": '{"correct": 8, "total": 10}'
// "adjectiveQuizScore": '{"correct": 12, "total": 15}'
// Each key stores its own independent score, and they don’t interfere with each other.

// Is It OK?
// Yes, it’s perfect! Your naming convention (familyQuizScore, greetingQuizScore, adjectiveQuizScore) is:
// Consistent: Follows a clear pattern ([quizType]QuizScore).
// Descriptive: Tells you exactly what each key represents.
// Unique: Prevents overlap between quiz types.
// Functionality: Each quiz type maintains its own progress, which is exactly what you want.
// Additional Tips
// Resetting Scores:
// If you want to reset a specific quiz’s score, you can clear its key:
// tsx

// Collapse

// Wrap

// Copy
// localStorage.removeItem("familyQuizScore"); // Resets family quiz score
// setFamilyQuizScore({ correct: 0, total: 0 });
// Combining Scores:
// If you later want a total score across all quizzes, you could calculate it by reading all keys:
// tsx

// Collapse

// Wrap

// Copy
// const totalScore = {
//   correct: (
//     JSON.parse(localStorage.getItem("familyQuizScore") || '{"correct": 0}')?.correct +
//     JSON.parse(localStorage.getItem("greetingQuizScore") || '{"correct": 0}')?.correct +
//     JSON.parse(localStorage.getItem("adjectiveQuizScore") || '{"correct": 0}')?.correct
//   ),
//   total: (
//     JSON.parse(localStorage.getItem("familyQuizScore") || '{"total": 0}')?.total +
//     JSON.parse(localStorage.getItem("greetingQuizScore") || '{"total": 0}')?.total +
//     JSON.parse(localStorage.getItem("adjectiveQuizScore") || '{"total": 0}')?.total
//   ),
// };
// Namespace for Larger Apps:
// If your app grows, consider a prefix to avoid conflicts with other features:
// "quiz_familyQuizScore"
// "quiz_greetingQuizScore"
// "quiz_adjectiveQuizScore"
// Testing It
// You can test this in your browser’s console:


// // Set scores
// localStorage.setItem("familyQuizScore", JSON.stringify({ correct: 15, total: 20 }));
// localStorage.setItem("greetingQuizScore", JSON.stringify({ correct: 8, total: 10 }));
// localStorage.setItem("adjectiveQuizScore", JSON.stringify({ correct: 12, total: 15 }));

// // Retrieve scores
// console.log(JSON.parse(localStorage.getItem("familyQuizScore"))); // { correct: 15, total: 20 }
// console.log(JSON.parse(localStorage.getItem("greetingQuizScore"))); // { correct: 8, total: 10 }
// console.log(JSON.parse(localStorage.getItem("adjectiveQuizScore"))); // { correct: 12, total: 15 }