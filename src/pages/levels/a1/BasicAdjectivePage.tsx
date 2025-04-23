        import React from "react";
        import { Link } from "react-router-dom";
        import { adjectivesData } from "../../../data/basicA1";
        
    // Define the shape of an adjective item
    interface Adjective {
        english: string;
        finnish: string;
        pronunciation: string;
    }
    
    // Define props for ConjugationTable
    interface ConjugationTableProps {
        adjectives: Adjective[];
    }



        function ConjugationTable({ adjectives } : ConjugationTableProps) {
            // console.log("ConjugationTable loaded", nationality);
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
                    </tr>
                </thead>
                <tbody>
                    {adjectives.map((item, index) => (
                    <tr key={index}>
                        <td>{item.english}</td>
                        <td>{item.finnish}</td>
                        <td>{item.pronunciation}</td> {/* Fixed typo: "pronounciation" -> "pronunciation" */}
                        <td></td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
            );
        }

        function BasicAdjectivePage(){

    // console.log("Here me");
            
        return (

        <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
                <Link to="/beginars" className="text-teal-700 hover:underline bg-teal-100 mb-6 inline-block fixed top-0 left-0 w-full  px-4 py-2 shadow-md">
                ← Back to Beginars Lesson
                </Link>
                
        <div className="mt-16">
                
        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">

        {/* <!-- Header --> */}
        <h2 className="text-2xl font-semibold text-teal-800 mb-4">Basic Adjectives and Opposites</h2>
            <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">Millainen?</span> (What kind?)</h4>

        <p className="text-gray-600 mb-6">Level: A1 (Beginner) | Goal: Learn basic Finnish adjectives and their opposites to describe things!</p>

                {/* <!-- Warm-Up Section --> */}
                <h2 className="text-2xl font-semibold text-teal-600 mb-3">1. Warm-Up: Match the Opposites</h2>
                <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                    <p className="text-gray-700 mb-2">Let’s start by pairing these adjectives! Think of what’s the opposite.</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li><span className="font-medium text-teal-800">Uusi</span> (new) – Is it <span className="font-medium">vanha</span> (old) or <span className="font-medium">iloinen</span> (happy)?</li>
                        <li><span className="font-medium text-teal-800">Kaunis</span> (beautiful) – Is it <span className="font-medium">ruma</span> (ugly) or <span className="font-medium">pitkä</span> (long)?</li>
                        <li><span className="font-medium text-teal-800">Iloinen</span> (happy) – Is it <span className="font-medium">lyhyt</span> (short) or <span className="font-medium">surullinen</span> (sad)?</li>
                    </ul>
                    <p className="text-teal-600 italic mt-2">Answers: <span className="font-medium">uusi/vanha</span> (new/old), <span className="font-medium">kaunis/ruma</span> (beautiful/ugly), <span className="font-medium">iloinen/surullinen</span> (happy/sad). Let’s learn them!</p>
                </section>

        </div>

        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
            

        {/* <!-- Core Concepts Section --> */}
        <h2 className="text-2xl font-semibold text-teal-600 mb-3">2. Core Concepts: Describing with Adjectives</h2>
                <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                    <p className="text-gray-700 mb-4">Adjectives answer <span className="font-medium">Millainen?</span> (What kind?). Learn these pairs to describe people and things!</p>

                    {/* <!-- Basic Adjective Pairs --> */}
                <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
                        <h3 className="text-xl font-medium text-teal-700 mb-2">a. Basic Adjective Pairs</h3>
                        <p className="text-gray-700">Here are four easy pairs—learn them together!</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
                            <li><span className="font-medium text-teal-800">Uusi</span> (new) – <span className="font-medium text-teal-800">Vanha</span> (old)</li>
                            <li><span className="font-medium text-teal-800">Iloinen</span> (happy) – <span className="font-medium text-teal-800">Surullinen</span> (sad)</li>
                            <li><span className="font-medium text-teal-800">Kaunis</span> (beautiful) – <span className="font-medium text-teal-800">Ruma</span> (ugly)</li>
                            <li><span className="font-medium text-teal-800">Pitkä</span> (long/tall) – <span className="font-medium text-teal-800">Lyhyt</span> (short)</li>
                        </ul>
                        <p className="text-teal-600 mt-2"><strong>Quick Rule:</strong> Opposites help you remember—know one, know both!</p>
                    </div>

                    {/* <!-- Using with Nouns --> */}
                <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
                        <h3 className="text-xl font-medium text-teal-700 mb-2">b. Using with Nouns</h3>
                        <p className="text-gray-700">Put the adjective before the noun to describe it!</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
                            <li><span className="font-medium text-teal-800">Uusi talo</span> (new house) – <span className="font-medium text-teal-800">Vanha talo</span> (old house)</li>
                            <li><span className="font-medium text-teal-800">Iloinen lapsi</span> (happy child) – <span className="font-medium text-teal-800">Surullinen lapsi</span> (sad child)</li>
                            <li><span className="font-medium text-teal-800">Kaunis koira</span> (beautiful dog) – <span className="font-medium text-teal-800">Ruma koira</span> (ugly dog)</li>
                            <li><span className="font-medium text-teal-800">Pitkä mies</span> (tall man) – <span className="font-medium text-teal-800">Lyhyt mies</span> (short man)</li>
                        </ul>
                        <p className="text-teal-600 mt-2"><strong>Quick Rule:</strong> Adjective + noun = simple description!</p>
                    </div>

                    {/* <!-- Asking with Millainen --> */}
                <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
                        <h3 className="text-xl font-medium text-teal-700 mb-2">c. Asking <span className="font-medium">Millainen?</span> (What kind?)</h3>
                        <p className="text-gray-700">Ask about things with <span className="font-medium">Millainen?</span> and answer with adjectives!</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
                            <li><span className="font-medium text-teal-800">Millainen talo on?</span> (What kind of house is it?) → <span className="font-medium text-teal-800">Talo on uusi</span> (The house is new).</li>
                            <li><span className="font-medium text-teal-800">Millainen koira on?</span> (What kind of dog is it?) → <span className="font-medium text-teal-800">Koira on kaunis</span> (The dog is beautiful).</li>
                            <li><span className="font-medium text-teal-800">Millainen lapsi hän on?</span> (What kind of child is he/she?) → <span className="font-medium text-teal-800">Hän on iloinen</span> (He/She is happy).</li>
                        </ul>
                        <p className="text-teal-600 mt-2"><strong>Quick Rule:</strong> Use <span className="font-medium">on</span> (is) to answer with an adjective!</p>
                    </div>

                    {/* <!-- Matching Cases --> */}
                    <div className=" p-4 rbg-white rounded-lg border border-gray-300 mb-4">
                        <h3 className="text-xl font-medium text-teal-700 mb-2">d. Matching Cases</h3>
                        <p className="text-gray-700">When nouns change (like <span className="font-medium">-ssa</span> or <span className="font-medium">-lla</span>), adjectives match!</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
                            <li><span className="font-medium text-teal-800">Pitkä sohva</span> (long couch) → <span className="font-medium text-teal-800">Pitkällä sohvalla</span> (on the long couch).</li>
                            <li><span className="font-medium text-teal-800">Kaunis talo</span> (beautiful house) → <span className="font-medium text-teal-800">Kauniissa talossa</span> (in the beautiful house).</li>
                            <li><span className="font-medium text-teal-800">Uusi auto</span> (new car) → <span className="font-medium text-teal-800">Uudessa autossa</span> (in the new car).</li>
                        </ul>
                        <p className="text-teal-600 mt-2"><strong>Quick Rule:</strong> Adjective ending = noun ending!</p>
                    </div>
                </section>

        </div>
        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
            

        {/* <!-- Tips Section --> */}
                <h2 className="text-2xl font-semibold text-teal-600 mb-3">3. Tips for Learning Adjectives</h2>
                <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                    <p className="text-gray-700 mb-2">Here’s how to master these adjectives fast!</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li><strong>Learn Pairs:</strong> Think <span className="font-medium">uusi</span> (new) and <span className="font-medium">vanha</span> (old) together—one reminds you of the other!</li>
                        <li><strong>Use Things Around You:</strong> Look at a <span className="font-medium">pitkä pöytä</span> (long table) or a <span className="font-medium">kaunis lamppu</span> (beautiful lamp) in your room.</li>
                        <li><strong>Ask Yourself:</strong> Try <span className="font-medium">Millainen olen?</span> (What kind am I?) – Answer <span className="font-medium">Olen iloinen!</span> (I’m happy!).</li>
                        <li><strong>Match Places:</strong> Combine with places: <span className="font-medium">Uusi talo Helsingissä</span> (new house in Helsinki).</li>
                        <li><strong>Practice Opposites:</strong> Say <span className="font-medium">Koira on kaunis</span> (The dog is beautiful), then <span className="font-medium">Koira on ruma</span> (The dog is ugly).</li>
                    </ul>
                </section>

        </div>
        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
            

        {/* <!-- More Info Section --> */}
                <h2 className="text-2xl font-semibold text-teal-600 mb-3">4. More Info: Extra Examples</h2>
                <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                    <p className="text-gray-700 mb-2">See these adjectives in action with more sentences!</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
                        <li><span className="font-medium text-teal-800">Vanha mies asuu Tampereella</span> (The old man lives in Tampere).</li>
                        <li><span className="font-medium text-teal-800">Surullinen lapsi on talossa</span> (The sad child is in the house).</li>
                        <li><span className="font-medium text-teal-800">Ruma auto on uudella tiellä</span> (The ugly car is on the new road).</li>
                        <li><span className="font-medium text-teal-800">Lyhyt nainen kävelee</span> (The short woman walks).</li>
                    </ul>
                    <p className="text-teal-600 mt-2"><strong>Tip:</strong> Mix adjectives with places you know from Lesson 3!</p>
                </section>


        </div>
        <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
            


        {/* <!-- Wrap-Up Section --> */}
        <h2 className="text-2xl font-semibold text-teal-600 mb-3">5. Wrap-Up: Your Adjective Kit</h2>
                <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                    <p className="text-gray-700 mb-2">You’re ready to describe things! Here’s your kit:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
                        <li><span className="font-medium text-teal-800">Millainen talo on?</span> (What kind of house is it?) → <span className="font-medium text-teal-800">Talo on uusi</span> (The house is new).</li>
                        <li><span className="font-medium text-teal-800">Kaunis koira on pihalla</span> (The beautiful dog is in the yard).</li>
                        <li><span className="font-medium text-teal-800">Olen iloinen</span> (I’m happy).</li>
                    </ul>
                    <p className="text-teal-600 font-bold mt-4"><span className="font-medium">Hyvä!</span> (Good!) – Use these every day to get better!</p>
                </section>
                
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
            


            {/* <!-- Wrap-Up Section --> */}
            <h2 className="text-2xl font-semibold text-teal-600 mb-3">6. Some Basic Adjectives:</h2>
                    <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
                <ConjugationTable adjectives={adjectivesData.basicAdjectives}/>
                </section>
        <Link to={`/beginars/adjective/good-bad-or-ugly/basic-adjectives-quiz`}>
                    <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                    Basic Adjectives Exercises
                    </button>
                </Link>

            

        </div>  

                
            </div>
            </div>

                );

        }


        export default BasicAdjectivePage;

