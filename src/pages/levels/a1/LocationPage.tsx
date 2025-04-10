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

{/* 

  In Finnish grammar, "Missä," "Mistä," and "Mihin" are key words related to location cases (or local cases), which are a set of grammatical cases used to express location, movement, or direction. These cases are a distinctive feature of Finnish, a Uralic language, and they play a crucial role in indicating spatial relationships without relying heavily on prepositions like English does (e.g., "in," "from," "to"). Instead, Finnish uses suffixes attached to nouns to convey these meanings.

The terms "Missä" (where), "Mistä" (from where), and "Mihin" (to where) are interrogative pronouns that correspond to three groups of local cases: static location, movement away, and movement toward. Each group contains two cases—one for internal location (inside something) and one for external location (on or near something). Let’s break this down step-by-step.

Overview of Location Cases
Finnish has six local cases, divided into three pairs based on the type of spatial relationship:

Static Location (where something is):
Inessive: Inside something ("in").
Adessive: On or near something ("on," "at").
Movement Away (from where something is leaving):
Elative: Out of something ("from inside").
Ablative: Away from something ("from on/near").
Movement Toward (to where something is going):
Illative: Into something ("to inside").
Allative: Onto or toward something ("to on/near").
These cases correspond directly to the questions Missä, Mistä, and Mihin.

The Three Questions and Their Cases

1. Missä – "Where (at)?" (Static Location)
Meaning: Indicates a stationary position, asking "where something is."
Cases:
Inessive (-ssa/-ssä): For internal location, meaning "in" or "inside."
Suffix: -ssa or -ssä (vowel harmony applies: -ssä after front vowels like ä, ö, y; -ssa after back vowels like a, o, u).
Example: Kaupungissa – "In the city" (kaupunki = city).
Question: Missä olet? – "Where are you?" Answer: Olen kaupungissa – "I am in the city."
Adessive (-lla/-llä): For external location, meaning "on," "at," or "near."
Suffix: -lla or -llä.
Example: Pöydällä – "On the table" (pöytä = table).
Question: Missä kirja on? – "Where is the book?" Answer: Kirja on pöydällä – "The book is on the table."
2. Mistä – "From where?" (Movement Away)
Meaning: Indicates the origin or source, asking "from where something comes or moves."
Cases:
Elative (-sta/-stä): For movement out of an internal location, meaning "out of" or "from inside."
Suffix: -sta or -stä.
Example: Kaupungista – "From the city."
Question: Mistä tulet? – "Where are you coming from?" Answer: Tulen kaupungista – "I’m coming from the city."
Ablative (-lta/-ltä): For movement away from an external location, meaning "from on" or "from near."
Suffix: -lta or -ltä.
Example: Pöydältä – "From the table."
Question: Mistä otit kirjan? – "Where did you take the book from?" Answer: Otin kirjan pöydältä – "I took the book from the table."
3. Mihin – "To where?" (Movement Toward)
Meaning: Indicates the destination, asking "to where something is going."
Cases:
Illative (-an/-än, -in, -on, etc.): For movement into an internal location, meaning "into" or "to inside."
Suffix: Varies based on the word’s stem (often -Vn, where V is a vowel matching the stem, or -hVn for short words).
Examples:
Kaupunkiin – "To the city" (-in added to kaupunki).
Kouluun – "To school" (koulu → -un).
Question: Mihin menet? – "Where are you going?" Answer: Menen kaupunkiin – "I’m going to the city."
Allative (-lle): For movement onto or toward an external location, meaning "onto" or "to near."
Suffix: -lle (same for all words, no vowel harmony variation).
Example: Pöydälle – "Onto the table."
Question: Mihin laitoit kirjan? – "Where did you put the book?" Answer: Laitoin kirjan pöydälle – "I put the book on the table."
Table Summary
Question	Meaning	Internal Case (Inside)	External Case (On/Near)
Missä	"Where (at)?"	Inessive (-ssa/-ssä)	Adessive (-lla/-llä)
Mistä	"From where?"	Elative (-sta/-stä)	Ablative (-lta/-ltä)
Mihin	"To where?"	Illative (-an/-än, -in, etc.)	Allative (-lle)
Key Concepts
1. Internal vs. External Location
Internal (Inessive, Elative, Illative): Used for enclosed spaces or things you can be "inside" of (e.g., a house, a city, a box).
External (Adessive, Ablative, Allative): Used for surfaces or proximity (e.g., a table, a street, a person).
2. Vowel Harmony
Finnish uses vowel harmony, meaning suffixes adjust based on the word’s vowels:
Back vowels (a, o, u) → -ssa, -sta, -lla, -lta.
Front vowels (ä, ö, y) → -ssä, -stä, -llä, -ltä.
Illative is more complex, adapting to the word’s stem (e.g., talo → taloon, koulu → kouluun).
Allative (-lle) is an exception—it’s always -lle.
3. Illative’s Variable Form
The Illative case has multiple forms depending on the word:
Long form: -V + n (e.g., kaupunki → kaupunkiin, talo → taloon).
Short form: -h + V + n for short words (e.g., kylä → kylään).
This makes it trickier than the other cases, which have consistent suffixes.
Examples in Context
Let’s use talo ("house") and pöytä ("table"):

Missä (Where):
Talossa – "In the house" (Inessive).
Pöydällä – "On the table" (Adessive).
Mistä (From where):
Talosta – "From the house" (Elative).
Pöydältä – "From the table" (Ablative).
Mihin (To where):
Taloon – "To the house" (Illative).
Pöydälle – "Onto the table" (Allative).
Full Sentence Examples:
Missä asut? – "Where do you live?"
Asun talossa. – "I live in the house."
Mistä tulit? – "Where did you come from?"
Tulin talosta. – "I came from the house."
Mihin menit? – "Where did you go?"
Menin taloon. – "I went to the house."
Practical Usage
Everyday Speech: These cases are used constantly in Finnish to describe location and movement:
Olen kaupassa – "I’m at the store" (Inessive).
Tulen koulusta – "I’m coming from school" (Elative).
Menen kirjastoon – "I’m going to the library" (Illative).
No Prepositions: Unlike English, Finnish rarely uses prepositions for location; the case endings do all the work.
Tips for Learning
Memorize the Trios:
Static: -ssa/-ssä (in), -lla/-llä (on).
Away: -sta/-stä (from in), -lta/-ltä (from on).
Toward: -an/-in/etc. (into), -lle (onto).
Practice with Questions:
Ask Missä? Mistä? Mihin? with different nouns and answer using the appropriate case.
Watch Vowel Harmony: Pay attention to the word’s vowels to choose the right suffix.
Illative Practice: Since Illative varies, practice with common words (e.g., koti → kotiin, maa → maahan).

        */}