        import React from "react";
        import { Link } from "react-router-dom";
        import { adjectivesData } from "../../../data/basicA1";
        import ConjugationTable from "../../../components/ConjugationTable";
        import BodyWrapper from "../../../components/wrapper/BodyWrapper";
import NavWrapper from "../../../components/wrapper/NavWrapper";
import PageWrapper from "../../../components/wrapper/PageWrapper";

        function BasicAdjectivePage(){

    // console.log("Here me");
            
        return (

        <BodyWrapper>
                
            <NavWrapper link="/beginars" title="← Back to Beginars Lesson"> </NavWrapper>
                
        <div className="mt-16">
                
        <PageWrapper title="">

        {/* <!-- Header --> */}
        <h2 className="text-2xl font-semibold text-teal-600 mb-4"></h2>
            <h4 className="text-xl font-semibold text-teal-400 mb-6"><span className="font-3xl">Millainen?</span> (What kind?)</h4>

        <p className="text-teal-500 mb-6">Level: A1 (Beginner) | Goal: Learn basic Finnish adjectives and their opposites to describe things!</p>

                {/* <!-- Warm-Up Section --> */}
                <h2 className="text-2xl font-semibold text-teal-600 mb-3">1. Warm-Up: Match the Opposites</h2>
                <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                    <p className="text-teal-400 mb-2">Let’s start by pairing these adjectives! Think of what’s the opposite.</p>
                    <ul className="list-disc list-inside text-teal-400 space-y-2">
                        <li><span className="font-medium text-teal-600">Uusi</span> (new) – Is it <span className="font-medium">vanha</span> (old) or <span className="font-medium">iloinen</span> (happy)?</li>
                        <li><span className="font-medium text-teal-600">Kaunis</span> (beautiful) – Is it <span className="font-medium">ruma</span> (ugly) or <span className="font-medium">pitkä</span> (long)?</li>
                        <li><span className="font-medium text-teal-600">Iloinen</span> (happy) – Is it <span className="font-medium">lyhyt</span> (short) or <span className="font-medium">surullinen</span> (sad)?</li>
                    </ul>
                    <p className="text-teal-600 italic mt-2">Answers: <span className="font-medium">uusi/vanha</span> (new/old), <span className="font-medium">kaunis/ruma</span> (beautiful/ugly), <span className="font-medium">iloinen/surullinen</span> (happy/sad). Let’s learn them!</p>
                </section>
            </PageWrapper>
        </div>

        <PageWrapper title="2. Core Concepts: Describing with Adjectives">
            

        {/* <!-- Core Concepts Section --> */}
        
                <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                    <p className="text-teal-400 mb-4">Adjectives answer <span className="font-medium">Millainen?</span> (What kind?). Learn these pairs to describe people and things!</p>

                    {/* <!-- Basic Adjective Pairs --> */}
                <div className=" p-4 rbg-gray-900 rounded-lg border border-teal-800 mb-4">
                        <h3 className="text-xl font-medium text-teal-700 mb-2">a. Basic Adjective Pairs</h3>
                        <p className="text-teal-400">Here are four easy pairs—learn them together!</p>
                        <ul className="list-disc list-inside text-teal-400 space-y-2 mt-4">
                            <li><span className="font-medium text-teal-600">Uusi</span> (new) – <span className="font-medium text-teal-600">Vanha</span> (old)</li>
                            <li><span className="font-medium text-teal-600">Iloinen</span> (happy) – <span className="font-medium text-teal-600">Surullinen</span> (sad)</li>
                            <li><span className="font-medium text-teal-600">Kaunis</span> (beautiful) – <span className="font-medium text-teal-600">Ruma</span> (ugly)</li>
                            <li><span className="font-medium text-teal-600">Pitkä</span> (long/tall) – <span className="font-medium text-teal-600">Lyhyt</span> (short)</li>
                        </ul>
                        <p className="text-teal-600 mt-2"><strong>Quick Rule:</strong> Opposites help you remember—know one, know both!</p>
                    </div>

                    {/* <!-- Using with Nouns --> */}
                <div className=" p-4 rbg-gray-900 rounded-lg border border-teal-800 mb-4">
                        <h3 className="text-xl font-medium text-teal-700 mb-2">b. Using with Nouns</h3>
                        <p className="text-teal-400">Put the adjective before the noun to describe it!</p>
                        <ul className="list-disc list-inside text-teal-400 space-y-2 mt-4">
                            <li><span className="font-medium text-teal-600">Uusi talo</span> (new house) – <span className="font-medium text-teal-600">Vanha talo</span> (old house)</li>
                            <li><span className="font-medium text-teal-600">Iloinen lapsi</span> (happy child) – <span className="font-medium text-teal-600">Surullinen lapsi</span> (sad child)</li>
                            <li><span className="font-medium text-teal-600">Kaunis koira</span> (beautiful dog) – <span className="font-medium text-teal-600">Ruma koira</span> (ugly dog)</li>
                            <li><span className="font-medium text-teal-600">Pitkä mies</span> (tall man) – <span className="font-medium text-teal-600">Lyhyt mies</span> (short man)</li>
                        </ul>
                        <p className="text-teal-600 mt-2"><strong>Quick Rule:</strong> Adjective + noun = simple description!</p>
                    </div>

                    {/* <!-- Asking with Millainen --> */}
                <div className=" p-4 rbg-gray-900 rounded-lg border border-teal-800 mb-4">
                        <h3 className="text-xl font-medium text-teal-700 mb-2">c. Asking <span className="font-medium">Millainen?</span> (What kind?)</h3>
                        <p className="text-teal-400">Ask about things with <span className="font-medium">Millainen?</span> and answer with adjectives!</p>
                        <ul className="list-disc list-inside text-teal-400 space-y-2 mt-4">
                            <li><span className="font-medium text-teal-600">Millainen talo on?</span> (What kind of house is it?) → <span className="font-medium text-teal-600">Talo on uusi</span> (The house is new).</li>
                            <li><span className="font-medium text-teal-600">Millainen koira on?</span> (What kind of dog is it?) → <span className="font-medium text-teal-600">Koira on kaunis</span> (The dog is beautiful).</li>
                            <li><span className="font-medium text-teal-600">Millainen lapsi hän on?</span> (What kind of child is he/she?) → <span className="font-medium text-teal-600">Hän on iloinen</span> (He/She is happy).</li>
                        </ul>
                        <p className="text-teal-600 mt-2"><strong>Quick Rule:</strong> Use <span className="font-medium">on</span> (is) to answer with an adjective!</p>
                    </div>

                    {/* <!-- Matching Cases --> */}
                    <div className=" p-4 rbg-gray-900 rounded-lg border border-teal-800 mb-4">
                        <h3 className="text-xl font-medium text-teal-700 mb-2">d. Matching Cases</h3>
                        <p className="text-teal-400">When nouns change (like <span className="font-medium">-ssa</span> or <span className="font-medium">-lla</span>), adjectives match!</p>
                        <ul className="list-disc list-inside text-teal-400 space-y-2 mt-4">
                            <li><span className="font-medium text-teal-600">Pitkä sohva</span> (long couch) → <span className="font-medium text-teal-600">Pitkällä sohvalla</span> (on the long couch).</li>
                            <li><span className="font-medium text-teal-600">Kaunis talo</span> (beautiful house) → <span className="font-medium text-teal-600">Kauniissa talossa</span> (in the beautiful house).</li>
                            <li><span className="font-medium text-teal-600">Uusi auto</span> (new car) → <span className="font-medium text-teal-600">Uudessa autossa</span> (in the new car).</li>
                        </ul>
                        <p className="text-teal-600 mt-2"><strong>Quick Rule:</strong> Adjective ending = noun ending!</p>
                    </div>
                </section>

        </PageWrapper>
        <PageWrapper title="">
            

        {/* <!-- Tips Section --> */}
                <h2 className="text-2xl font-semibold text-teal-600 mb-3">3. Tips for Learning Adjectives</h2>
                <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                    <p className="text-teal-400 mb-2">Here’s how to master these adjectives fast!</p>
                    <ul className="list-disc list-inside text-teal-400 space-y-2">
                        <li><strong>Learn Pairs:</strong> Think <span className="font-medium text-teal-600">uusi</span> (new) and <span className="font-medium text-teal-600">vanha</span> (old) together—one reminds you of the other!</li>
                        <li><strong>Use Things Around You:</strong> Look at a <span className="font-medium text-teal-600">pitkä pöytä</span> (long table) or a <span className="font-medium text-teal-600">kaunis lamppu</span> (beautiful lamp) in your room.</li>
                        <li><strong>Ask Yourself:</strong> Try <span className="font-medium text-teal-600">Millainen olen?</span> (What kind am I?) – Answer <span className="font-medium text-teal-600">Olen iloinen!</span> (I’m happy!).</li>
                        <li><strong>Match Places:</strong> Combine with places: <span className="font-medium text-teal-600">Uusi talo Helsingissä</span> (new house in Helsinki).</li>
                        <li><strong>Practice Opposites:</strong> Say <span className="font-medium text-teal-600">Koira on kaunis</span> (The dog is beautiful), then <span className="font-medium text-teal-600">Koira on ruma</span> (The dog is ugly).</li>
                    </ul>
                </section>

        </PageWrapper>
        <PageWrapper title="">
            

        {/* <!-- More Info Section --> */}
                <h2 className="text-2xl font-semibold text-teal-600 mb-3">4. More Info: Extra Examples</h2>
                <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                    <p className="text-teal-400 mb-2">See these adjectives in action with more sentences!</p>
                    <ul className="list-disc list-inside text-teal-400 space-y-2 mt-4">
                        <li><span className="font-medium text-teal-600">Vanha mies asuu Tampereella</span> (The old man lives in Tampere).</li>
                        <li><span className="font-medium text-teal-600">Surullinen lapsi on talossa</span> (The sad child is in the house).</li>
                        <li><span className="font-medium text-teal-600">Ruma auto on uudella tiellä</span> (The ugly car is on the new road).</li>
                        <li><span className="font-medium text-teal-600">Lyhyt nainen kävelee</span> (The short woman walks).</li>
                    </ul>
                    <p className="text-teal-600 mt-2"><strong>Tip:</strong> Mix adjectives with places you know from Lesson 3!</p>
                </section>


        </PageWrapper>
        <PageWrapper title="">
            


        {/* <!-- Wrap-Up Section --> */}
        <h2 className="text-2xl font-semibold text-teal-600 mb-3">5. Wrap-Up: Your Adjective Kit</h2>
                <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                    <p className="text-teal-400 mb-2">You’re ready to describe things! Here’s your kit:</p>
                    <ul className="list-disc list-inside text-teal-400 space-y-2 mt-4">
                        <li><span className="font-medium text-teal-600">Millainen talo on?</span> (What kind of house is it?) → <span className="font-medium text-teal-600">Talo on uusi</span> (The house is new).</li>
                        <li><span className="font-medium text-teal-600">Kaunis koira on pihalla</span> (The beautiful dog is in the yard).</li>
                        <li><span className="font-medium text-teal-600">Olen iloinen</span> (I’m happy).</li>
                    </ul>
                    <p className="text-teal-600 font-bold mt-4"><span className="font-medium">Hyvä!</span> (Good!) – Use these every day to get better!</p>
                </section>
                
                </PageWrapper>
        <PageWrapper title="">
            


            {/* <!-- Wrap-Up Section --> */}
            <h2 className="text-2xl font-semibold text-teal-600 mb-3">6. Some Basic Adjectives:</h2>
                    <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                
                <ConjugationTable items={adjectivesData.basicAdjectives} min={0} max={adjectivesData.basicAdjectives.length-1} isVocab={true} />
                
                </section>
        <Link to={`/beginars/adjective/good-bad-or-ugly/basic-adjectives-quiz`}>
                    <button className="mt-4 bg-teal-900 text-white px-4 py-2 rounded hover:bg-teal-600 transform hover:scale-110 transition duration-200 m-2">
                    Basic Adjectives Exercises
                    </button>
                </Link>

            

        </PageWrapper>  

                
          
            </BodyWrapper>

                );

        }


        export default BasicAdjectivePage;

