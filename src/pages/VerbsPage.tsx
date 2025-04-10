import React from 'react';

const VerbsPage: React.FC = () => {
  return <div>Numbers Quiz</div>;
};

export default VerbsPage;

// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import { verbTopics } from "../data";

// // Import verb topic components
// import TheFinnishVerbtypes from "./verbs/TheFinnishVerbtypes";
// // import TheImperfectTense from "./verbs/TheImperfectTense";

// // console.log("VerbsPage.js loaded");
// // console.log("verbTopics", verbTopics);

// // Map slugs to components
// const topicComponents = {
//   "the-finnish-verbtypes": TheFinnishVerbtypes,
// //   "the-imperfect-tense": TheImperfectTense,
//   // Add more mappings as you create components
//   // e.g., "the-perfect-tense": ThePerfectTense,
// };

// function VerbsPage() {
//   const { topic, subtopic, child } = useParams();
//   const toSlug = (text) => text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

//   const getDynamicContent = () => {
//     const matchedTopic = verbTopics.find(t => toSlug(t.title) === topic);
//     if (!matchedTopic && topic) {
//       return (
//         <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
//           <h2 className="text-2xl font-semibold text-teal-800 mb-4">Not Found</h2>
//           <p className="text-gray-600">Topic not found.</p>
//         </div>
//       );
//     }

//     const matchedSubtopic = matchedTopic?.subtopics?.find(s => toSlug(s.title) === subtopic);
//     if (topic && subtopic && !child) {
//       if (!matchedSubtopic) {
//         return (
//           <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
//             <h2 className="text-2xl font-semibold text-teal-800 mb-4">Not Found</h2>
//             <p className="text-gray-600">Subtopic not found.</p>
//           </div>
//         );
//       }
//       const SubtopicComponent = topicComponents[toSlug(matchedSubtopic.title)];
//       if (SubtopicComponent) {
//         return <SubtopicComponent />;
//       }
//       return (
//         <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
//           <h2 className="text-2xl font-semibold text-teal-800 mb-4">{matchedSubtopic.title}</h2>
//           <p className="text-gray-600">Content coming soon!</p>
//         </div>
//       );
//     }

//     const matchedChild = matchedSubtopic?.childTopics?.find(c => toSlug(c) === child);
//     if (topic && subtopic && child) {
//       if (!matchedChild) {
//         return (
//           <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
//             <h2 className="text-2xl font-semibold text-teal-800 mb-4">Not Found</h2>
//             <p className="text-gray-600">Child topic not found.</p>
//           </div>
//         );
//       }
//       const ChildComponent = topicComponents[toSlug(matchedChild)]; // If child topics get their own components
//       if (ChildComponent) {
//         return <ChildComponent />;
//       }
//       return (
//         <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
//           <h2 className="text-2xl font-semibold text-teal-800 mb-4">{matchedChild}</h2>
//           <p className="text-gray-600">Content coming soon!</p>
//         </div>
//       );
//     }

//     // Default: Show the Verbs Menu
//     return (
//       <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
//         <h2 className="text-2xl font-semibold text-teal-800 mb-4">Verbs Menu</h2>
//         <div className="max-h-[60vh] overflow-y-auto pr-2">
//           <ul className="space-y-3">
//             {verbTopics.map((topic, index) => (
//               <li key={index} className="text-gray-700">
//                 <Link
//                   to={`/verbs/${toSlug(topic.title)}`}
//                   className="font-medium text-teal-600 hover:text-teal-800 hover:underline transition-colors duration-200"
//                 >
//                   {topic.title}
//                 </Link>
//                 {topic.subtopics && (
//                   <ul className="ml-6 mt-2 space-y-2 list-disc">
//                     {topic.subtopics.map((subtopic, subIndex) => (
//                       <li key={subIndex}>
//                         <Link
//                           to={`/verbs/${toSlug(topic.title)}/${toSlug(subtopic.title)}`}
//                           className="text-gray-600 hover:text-teal-700 hover:underline transition-colors duration-200"
//                         >
//                           {subtopic.title}
//                         </Link>
//                         {subtopic.childTopics && (
//                           <ul className="ml-6 mt-1 space-y-1 list-circle">
//                             {subtopic.childTopics.map((child, childIndex) => (
//                               <li key={childIndex}>
//                                 <Link
//                                   to={`/verbs/${toSlug(topic.title)}/${toSlug(subtopic.title)}/${toSlug(child)}`}
//                                   className="text-gray-500 hover:text-teal-600 hover:underline transition-colors duration-200"
//                                 >
//                                   {child}
//                                 </Link>
//                               </li>
//                             ))}
//                           </ul>
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
//       <Link to="/grammars" className="text-teal-700 hover:underline mb-6 inline-block">← Back to Home</Link>
//       {/* <h1 className="text-3xl font-bold text-teal-700 mb-8 text-center">Finnish Verbs</h1> */}
//       {getDynamicContent()}
//     </div>
//   );
// }

// export default VerbsPage;
