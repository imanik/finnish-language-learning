import React from "react";
import { Link } from "react-router-dom";
import { locationData } from "../../../data/basicA1";

 interface Location {

  english: string,
  finnish: string,
}
  interface ConjugationTableProps {
    locations: Location[];
  }


function ConjugationTable({ locations } : ConjugationTableProps) {
  // console.log("ConjugationTable loaded", location);
  return (
    <div className="mb-6">
      <h4 className="text-lg font-semibold text-teal-600 mb-2"></h4>
      <table className="table-auto w-full text-gray-600">
        <thead>
          <tr className="bg-teal-100">
            <th className="px-4 py-2">English</th>
            <th className="px-4 py-2">Finnish</th>
            <th className="px-4 py-2">Pronunciation</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((item, index) => (
            <tr key={index}>
              <td>{item.english}</td>
              <td>{item.finnish}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function LocationPage(){

    
return (

<div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
      <Link to="/beginars" className="text-teal-700 hover:underline mb-6 inline-block">
        ← Back to Beginars Lesson
      </Link>

      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

{/* <!-- Header --> */}
        <h2 className="text-2xl font-semibold text-teal-800 mb-4">Locations in Finnish</h2>
        <h4 className="text-xl font-semibold text-teal-700 mb-6">Where Do You Live? – <span className="font-medium">Missä asut?</span></h4>

        <p className="text-gray-600 mb-6">Level: A1 (Beginner) | Goal: Learn to say where you live in Finnish using <span className="font-medium">-ssa</span> or <span className="font-medium">-lla</span>!</p>

        {/* <!-- Warm-Up Section --> */}
            <h2 className="text-2xl font-semibold text-teal-600 mb-3">1. Warm-Up: Guess the Place</h2>
       <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
            <p className="text-gray-700 mb-2">Someone asks <span className="font-medium">Missä asut?</span> (Where do you live?). Guess which ending fits these places!</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
                <li><span className="font-medium text-teal-800">Helsinki</span> (Helsinki) – Is it <span className="font-medium">Helsingissä</span> or <span className="font-medium">Helsingillä</span>? Hint: A big city!</li>
                <li><span className="font-medium text-teal-800">Tampere</span> (Tampere) – Is it <span className="font-medium">Tampereessa</span> or <span className="font-medium">Tampereella</span>? Hint: Near a lake!</li>
                <li><span className="font-medium text-teal-800">Venäjä</span> (Russia) – Is it <span className="font-medium">Venäjässä</span> or <span className="font-medium">Venäjällä</span>? Hint: A huge country!</li>
            </ul>
            <p className="text-teal-600 italic mt-2">Answers: <span className="font-medium">Helsingissä</span> (in Helsinki), <span className="font-medium">Tampereella</span> (in Tampere), <span className="font-medium">Venäjällä</span> (in Russia). Let’s find out why!</p>
        </section>

        </div>
        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">



        {/* <!-- Core Concepts Section --> */}
            <h2 className="text-2xl font-semibold text-teal-600 mb-3">2. Core Concepts: The Right Ending</h2>
       <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
            <p className="text-gray-700 mb-4">To answer <span className="font-medium">Missä asut?</span> (Where do you live?), add <span className="font-medium">-ssa/-ssä</span> or <span className="font-medium">-lla/-llä</span> to the place name. Here’s how to choose!</p>

            {/* <!-- Basic Rules --> */}
            <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
                <h3 className="text-xl font-medium text-teal-700 mb-2">a. Basic Rules</h3>
                <p className="text-gray-700">Two endings mean “in” or “at,” but places use one or the other.</p>
                 <ul className="list-disc list-inside text-gray-700 space-y-1 mt-4">
                    <li><span className="font-medium text-teal-800">-ssa/-ssä</span> (in) – Most cities and countries use this! Example: <span className="font-medium">Helsingissä</span> (in Helsinki).</li>
                    <li><span className="font-medium text-teal-800">-lla/-llä</span> (at/on) – Some places, often near water or nature, use this! Example: <span className="font-medium">Tampereella</span> (in Tampere).</li>
                </ul>
                <p className="text-teal-600 mt-2"><strong>Quick Rule:</strong> Guess <span className="font-medium">-ssa</span> if unsure—it’s more common!</p>
            </div>

            {/* <!-- Places with -ssa --> */}
            <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
                <h3 className="text-xl font-medium text-teal-700 mb-2">b. Places with <span className="font-medium">-ssa/-ssä</span> (in)</h3>
                <p className="text-gray-700">Most Finnish cities and international places take <span className="font-medium">-ssa/-ssä</span>.</p>
                 <ul className="list-disc list-inside text-gray-700 space-y-1 mt-4">
                    <li><span className="font-medium text-teal-800">Helsingissä</span> (in Helsinki)</li>
                    <li><span className="font-medium text-teal-800">Turussa</span> (in Turku)</li>
                    <li><span className="font-medium text-teal-800">Oulussa</span> (in Oulu)</li>
                    <li><span className="font-medium text-teal-800">Belgiassa</span> (in Belgium)</li>
                </ul>
                <p className="text-teal-600 mt-2"><strong>Quick Rule:</strong> Use <span className="font-medium">-ssä</span> for places with ä, ö, y (like <span className="font-medium">Helsinki</span>), <span className="font-medium">-ssa</span> for a, o, u (like <span className="font-medium">Turku</span>)!</p>
            </div>

            {/* <!-- Places with -lla --> */}
            <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
                <h3 className="text-xl font-medium text-teal-700 mb-2">c. Places with <span className="font-medium">-lla/-llä</span> (at/on)</h3>
                <p className="text-gray-700">Some places, especially near water or with nature names, take <span className="font-medium">-lla/-llä</span>.</p>
                 <ul className="list-disc list-inside text-gray-700 space-y-1 mt-4">
                    <li><span className="font-medium text-teal-800">Tampereella</span> (in Tampere) – Near lakes!</li>
                    <li><span className="font-medium text-teal-800">Raumalla</span> (in Rauma) – By the sea!</li>
                    <li><span className="font-medium text-teal-800">Riihimäellä</span> (in Riihimäki) – Has “mäki” (hill)!</li>
                    <li><span className="font-medium text-teal-800">Venäjällä</span> (in Russia) – Big land exception!</li>
                </ul>
                <p className="text-teal-600 mt-2"><strong>Quick Rule:</strong> Look for water or nature words like <span className="font-medium">järvi</span> (lake) or <span className="font-medium">mäki</span> (hill)!</p>
            </div>

            {/* <!-- Answering the Question --> */}
            <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
                <h3 className="text-xl font-medium text-teal-700 mb-2">d. Answering <span className="font-medium">Missä asut?</span> (Where do you live?)</h3>
                <p className="text-gray-700">Use <span className="font-medium">asun</span> (I live) with the right ending!</p>
                 <ul className="list-disc list-inside text-gray-700 space-y-1 mt-4">
                    <li><span className="font-medium text-teal-800">Missä asut?</span> (Where do you live?) → <span className="font-medium text-teal-800">Asun Helsingissä</span> (I live in Helsinki).</li>
                    <li><span className="font-medium text-teal-800">Missä asut?</span> (Where do you live?) → <span className="font-medium text-teal-800">Asun Tampereella</span> (I live in Tampere).</li>
                    <li><span className="font-medium text-teal-800">Missä hän asuu?</span> (Where does he/she live?) → <span className="font-medium text-teal-800">Hän asuu Porissa</span> (He/She lives in Pori).</li>
                </ul>
                <p className="text-teal-600 mt-2"><strong>Quick Rule:</strong> <span className="font-medium">Asun</span> (I live) + place name with <span className="font-medium">-ssa</span> or <span className="font-medium">-lla</span>!</p>
            </div>
        </section>

        </div>
        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">



        {/* <!-- Tips Section --> */}
            <h2 className="text-2xl font-semibold text-teal-600 mb-3">3. Tips for Learning Places</h2>
       <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
            <p className="text-gray-700 mb-2">Here’s how to get good at answering <span className="font-medium">Missä asut?</span> (Where do you live?)!</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Follow the Locals:</strong> Finns say <span className="font-medium">Tampereella</span> (in Tampere), so you should too! Listen to how people talk.</li>
                <li><strong>Guess <span className="font-medium">-ssa</span>:</strong> If you don’t know, use <span className="font-medium">-ssa/-ssä</span>—it’s right most of the time!</li>
                <li><strong>Water Clue:</strong> Places near lakes, rivers, or seas often use <span className="font-medium">-lla</span>, like <span className="font-medium">Raumalla</span> (in Rauma).</li>
                <li><strong>Nature Words:</strong> If the name has <span className="font-medium">mäki</span> (hill) or <span className="font-medium">järvi</span> (lake), try <span className="font-medium">-lla</span>, like <span className="font-medium">Riihimäellä</span> (in Riihimäki).</li>
                <li><strong>Practice 3 Places:</strong> Pick your city, a Finnish city, and a country. Try: <span className="font-medium">Asun Lontoossa</span> (I live in London), <span className="font-medium">Asun Turussa</span> (I live in Turku), <span className="font-medium">Asun Venäjällä</span> (I live in Russia).</li>
            </ul>
        </section>

        </div>

        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">


        {/* <!-- More Info Section --> */}
            <h2 className="text-2xl font-semibold text-teal-600 mb-3">4. More Info: Special Cases</h2>
       <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
            <p className="text-gray-700 mb-2">Some places have tricks to learn!</p>

            {/* <!-- Islands --> */}
            <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
                <h3 className="text-xl font-medium text-teal-700 mb-2">a. Islands</h3>
                <p className="text-gray-700">Finnish islands often use <span className="font-medium">-ssa</span>, but some international ones can use both!</p>
                 <ul className="list-disc list-inside text-gray-700 space-y-1 mt-4">
                    <li><span className="font-medium text-teal-800">Hailuodossa</span> (in Hailuoto) – Finnish island.</li>
                    <li><span className="font-medium text-teal-800">Maltassa</span> or <span className="font-medium">Maltalla</span> (in Malta) – Both okay!</li>
                    <li><span className="font-medium text-teal-800">Filippiineillä</span> (in the Philippines) – Plural islands use <span className="font-medium">-lla</span>!</li>
                </ul>
                <p className="text-teal-600 mt-2"><strong>Tip:</strong> Stick to <span className="font-medium">-ssa</span> for single islands unless you hear otherwise!</p>
            </div>

            {/* <!-- Adjective Names --> */}
            <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
                <h3 className="text-xl font-medium text-teal-700 mb-2">b. Names with Adjectives</h3>
                <p className="text-gray-700">Some names have two parts that both change!</p>
                 <ul className="list-disc list-inside text-gray-700 space-y-1 mt-4">
                    <li><span className="font-medium text-teal-800">Vanhakaupunki</span> (Old Town) → <span className="font-medium">Vanhassakaupungissa</span> (in Old Town).</li>
                    <li><span className="font-medium text-teal-800">Mustameri</span> (Black Sea) → <span className="font-medium">Mustallamerellä</span> (in the Black Sea).</li>
                </ul>
                <p className="text-teal-600 mt-2"><strong>Tip:</strong> For now, just learn these as whole words—don’t worry about the parts!</p>
            </div>
        </section>

        </div>
        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">


        {/* <!-- Wrap-Up Section --> */}
            <h2 className="text-2xl font-semibold text-teal-600 mb-3">5. Wrap-Up: Your Place Kit</h2>
        <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
            <p className="text-gray-700 mb-2">You’re ready to say where you live! Here’s your kit:</p>
             <ul className="list-disc list-inside text-gray-700 space-y-1 mt-4">
                <li><span className="font-medium text-teal-800">Asun Helsingissä</span> (I live in Helsinki).</li>
                <li><span className="font-medium text-teal-800">Asun Tampereella</span> (I live in Tampere).</li>
                <li><span className="font-medium text-teal-800">Asun Belgiassa</span> (I live in Belgium).</li>
            </ul>
            <p className="text-teal-600 font-bold mt-4"><span className="font-medium">Hyvä!</span> (Good!) – Practice these to sound like a Finn!</p>
        </section>

<Link to={`/beginars/location/what-location-are-you/location-quiz`}>
          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
             Location Exercises
          </button>
        </Link>

     

</div>  

      
    </div>

      );

}


export default LocationPage;

