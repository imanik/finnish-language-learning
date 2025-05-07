  import React from "react";
  import { Link } from "react-router-dom";
  import { nationalityData } from "../../../data/basicA1";


  function NationalityPage(){

      
  return (

  <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
        <Link to="/beginars" className="text-teal-700 hover:underline bg-teal-100 mb-6 inline-block fixed top-0 left-0 w-full  px-4 py-2 shadow-md">
          ← Back to Beginars Lesson
        </Link>

        <div className="mt-16">
        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

  {/* <!-- Header --> */}
  <h2 className="text-2xl font-semibold text-teal-800 mb-4">Nationalities in Finnish</h2>
    <h4 className="text-xl font-semibold text-teal-700 mb-6">Minkämaalainen sinä olet? (What nationality are you?)</h4>

  <p className="text-gray-600 mb-6">Level: A1 (Beginner) | Goal: Learn to say your nationality and talk about others in Finnish!</p>

  {/* <!-- Warm-Up Section --> */}
      <h2 className="text-2xl font-semibold text-teal-600 mb-3">1. Warm-Up: Guess the Nationality</h2>
  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
      <p className="text-gray-700 mb-2">Let’s start by guessing where these people are from! Read the sentence and think of the country.</p>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
          <li><span className="font-medium text-teal-800">Olen suomalainen</span> (I’m Finnish) </li>
          <li><span className="font-medium text-teal-800">Hän on ranskalainen</span> (He/She is French) </li>
          <li><span className="font-medium text-teal-800">Minä olen italialainen</span> (I’m Italian) </li>
      </ul>
      <p className="text-teal-600 italic mt-2">Try saying these out loud to get comfortable with the words!</p>
  </section>

  </div>

  <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
      

  {/* <!-- Core Concepts Section --> */}
      <h2 className="text-2xl font-semibold text-teal-600 mb-3">2. Core Concepts: Becoming a Citizen</h2>
  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
      <p className="text-gray-700 mb-4">In Finnish, you add <span className="font-medium">-lainen</span> or <span className="font-medium">-läinen</span> to a country’s name to say your nationality. Let’s see how it works!</p>

      {/* <!-- Citizens of a Country --> */}
      <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
          <h3 className="text-xl font-medium text-teal-700 mb-2">a. Citizens of a Country</h3>
          <p className="text-gray-700">Take a country’s name (always with a big letter!) and add <span className="font-medium">-lainen</span> or <span className="font-medium">-läinen</span> to make the nationality.</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mt-4">
              <li><span className="font-medium text-teal-800">Suomi</span> (Finland) → <span className="font-medium text-teal-800">suomalainen</span> (Finnish)</li>
              <li><span className="font-medium text-teal-800">Ranska</span> (France) → <span className="font-medium text-teal-800">ranskalainen</span> (French)</li>
              <li><span className="font-medium text-teal-800">Japani</span> (Japan) → <span className="font-medium text-teal-800">japanilainen</span> (Japanese)</li>
              <li><span className="font-medium text-teal-800">Sveitsi</span> (Switzerland) → <span className="font-medium text-teal-800">sveitsiläinen</span> (Swiss)</li>
          </ul>
          <p className="text-teal-600 mt-2"><strong>Quick Rule:</strong> Use <span className="font-medium">-lainen</span> for countries with a, o, u (like <span className="font-medium">Suomi</span>), and <span className="font-medium">-läinen</span> for ä, ö, y (like <span className="font-medium">Sveitsi</span>)!</p>
      </div>

      {/* <!-- Asking and Answering --> */}
      <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
          <h3 className="text-xl font-medium text-teal-700 mb-2">b. Asking and Answering</h3>
          <p className="text-gray-700">Ask <span className="font-medium">Minkämaalainen sinä olet?</span> (What nationality are you?) and answer with <span className="font-medium">olen</span> (I am) or <span className="font-medium">hän on</span> (he/she is)!</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mt-4">
              <li><span className="font-medium text-teal-800">Minkämaalainen sinä olet?</span> (What nationality are you?) → 
              </li>
              <li><span className="font-medium text-teal-800">Olen suomalainen</span> (I’m Finnish).</li>
              <li><span className="font-medium text-teal-800">Minkämaalainen hän on?</span> (What nationality is he/she?) → 
              </li>
              <li><span className="font-medium text-teal-800">Hän on kiinalainen</span> (He/She is Chinese).</li>
              <li><span className="font-medium text-teal-800">Mistä sinä olet kotoisin?</span> (Where are you from?) → 
              </li>
              <li><span className="font-medium text-teal-800">Olen kotoisin Suomesta</span> (I’m from Finland).</li>
          </ul>
          <p className="text-teal-600 mt-2"><strong>Quick Rule:</strong> <span className="font-medium">Minkämaalainen</span> asks about nationality, <span className="font-medium">kotoisin</span> asks about origin with <span className="font-medium">-sta/-stä</span>!</p>
      </div>

      {/* <!-- Using as Adjectives --> */}
      <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
          <h3 className="text-xl font-medium text-teal-700 mb-2">c. Describing Things</h3>
          <p className="text-gray-700">Nationality words can also describe things like food, cars, or friends!</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mt-4">
              <li><span className="font-medium text-teal-800">Syön italialaista ruokaa</span> (I eat Italian food).</li>
              <li><span className="font-medium text-teal-800">Minulla on saksalainen auto</span> (I have a German car).</li>
              <li><span className="font-medium text-teal-800">Minulla on ranskalainen ystävä</span> (I have a French friend).</li>
          </ul>
          <p className="text-teal-600 mt-2"><strong>Quick Rule:</strong> Add <span className="font-medium">-a</span> or <span className="font-medium">-ä</span> to the end when talking about “some” things (like food)!</p>
      </div>

      {/* <!-- More Examples --> */}
      <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
          <h3 className="text-xl font-medium text-teal-700 mb-2">d. More Examples</h3>
          <p className="text-gray-700">Here are extra examples to see nationalities in action!</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mt-4">
              <li><span className="font-medium text-teal-800">Suomalaiset ovat hiljaisia</span> (Finns are quiet).</li>
              <li><span className="font-medium text-teal-800">Tanskalaiset voittivat</span> (The Danes won).</li>
              <li><span className="font-medium text-teal-800">Juon ranskalaista viiniä</span> (I drink French wine).</li>
              <li><span className="font-medium text-teal-800">Tykkään thaimaalaisesta ruoasta</span> (I like Thai food).</li>
          </ul>
          <p className="text-teal-600 mt-2"><strong>Quick Rule:</strong> Add <span className="font-medium">-t</span> for plural (like <span className="font-medium">suomalaiset</span>) when talking about groups!</p>
      </div>
  </section>

  </div>
  <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
      

  {/* <!-- Tips Section --> */}
      <h2 className="text-2xl font-semibold text-teal-600 mb-3">3. Tips for Learning Nationalities</h2>
  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
      <p className="text-gray-700 mb-2">Here are some helpful tips to make nationalities easy!</p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Start with Your Country:</strong> Learn your own nationality first! If you’re from <span className="font-medium text-teal-800">Intia</span> (India), say <span className="font-medium text-teal-800">Olen intialainen</span> (I’m Indian).</li>
          <li><strong>Vowel Harmony:</strong> Listen to the country’s vowels: <span className="font-medium">Suomi</span> (Finland) has u and o, so it’s <span className="font-medium">suomalainen</span>. <span className="font-medium">Sveitsi</span> (Switzerland) has e and i, so it’s <span className="font-medium">sveitsiläinen</span>.</li>
          <li><strong>Small Changes:</strong> Some countries tweak a bit: <span className="font-medium">Suomi</span> (Finland) → <span className="font-medium">suomalainen</span> (Finnish), not *suomilainen*. Watch for these!</li>
          <li><strong>Practice with Food:</strong> Pair nationalities with food you like: <span className="font-medium">Syön kiinalaista ruokaa</span> (I eat Chinese food) or <span className="font-medium">Juon espanjalaista viiniä</span> (I drink Spanish wine).</li>
          <li><strong>Ask Friends:</strong> Try <span className="font-medium">Minkämaalainen sinä olet?</span> (What nationality are you?) with people you know—it’s a great conversation starter!</li>
      </ul>
  </section>

  </div>
  <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
      

  {/* <!-- More Info Section --> */}
      <h2 className="text-2xl font-semibold text-teal-600 mb-3">4. More Info: Special Cases</h2>
  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
      <p className="text-gray-700 mb-2">Some nationalities have tricks to know!</p>

      {/* <!-- Exceptional Cases --> */}
      <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
          <h3 className="text-xl font-medium text-teal-700 mb-2">a. Exceptional Cases</h3>
          <p className="text-gray-700">A few countries change slightly before adding <span className="font-medium">-lainen</span>:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mt-4">
              <li><span className="font-medium text-teal-800">Suomi</span> (Finland) → <span className="font-medium text-teal-800">suomalainen</span> (Finnish) – The i becomes u!</li>
              <li><span className="font-medium text-teal-800">Ruotsi</span> (Sweden) → <span className="font-medium text-teal-800">ruotsalainen</span> (Swedish) – Drops the i!</li>
              <li><span className="font-medium text-teal-800">Venäjä</span> (Russia) → <span className="font-medium text-teal-800">venäläinen</span> (Russian) – Ä stays, but j goes!</li>
          </ul>
          <p className="text-teal-600 mt-2"><strong>Tip:</strong> Don’t worry too much—just memorize these common ones!</p>
      </div>

      {/* <!-- United States --> */}
      <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
          <h3 className="text-xl font-medium text-teal-700 mb-2">b. Special Case: The United States</h3>
          <p className="text-gray-700">The U.S. has two main names in Finnish:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mt-4">
              <li><span className="font-medium text-teal-800">Yhdysvallat</span> (United States) → <span className="font-medium text-teal-800">yhdysvaltalainen</span> (American) – The proper way!</li>
              <li><span className="font-medium text-teal-800">Amerikka</span> (America) → <span className="font-medium text-teal-800">amerikkalainen</span> (American) – More casual and common!</li>
          </ul>
          <p className="text-teal-600 mt-2"><strong>Tip:</strong> Use <span className="font-medium">amerikkalainen</span> in everyday talk—it’s easier!</p>
      </div>
  </section>


  </div>
  <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
      


  {/* <!-- Wrap-Up Section --> */}
      <h2 className="text-2xl font-semibold text-teal-600 mb-3">5. Wrap-Up: Your Nationality Kit</h2>
  <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
      <p className="text-gray-700 mb-2">You’re ready to talk about nationalities! Here’s your starter kit:</p>
      <ul className="list-disc list-inside text-gray-700 space-y-1 mt-4">
          <li><span className="font-medium text-teal-800">Minkämaalainen sinä olet?</span> (What nationality are you?) → <span className="font-medium text-teal-800">Olen suomalainen</span> (I’m Finnish).</li>
          <li><span className="font-medium text-teal-800">Minulla on ranskalainen ystävä</span> (I have a French friend).</li>
          <li><span className="font-medium text-teal-800">Syön espanjalaista ruokaa</span> (I eat Spanish food).</li>
      </ul>
      <p className="text-teal-600 font-bold mt-4"><span className="font-medium">Hyvä!</span> (Good!) – Practice these every day to get confident!</p>
  

  </section>

  <Link to={`/beginars/nationality/what-nationality-are-you/nationality-sentence-quiz`}>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
               Nationality Exercises
            </button>
          </Link>

       

  </div>  

        
      </div>
      </div>

        );

  }


  export default NationalityPage;