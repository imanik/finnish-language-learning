        import React from "react";
        import { Link } from "react-router-dom";
        import { animalData } from "../../../data/basicA1";
        import ConjugationTable from "../../../components/ConjugationTable";
        import BodyWrapper from "../../../components/wrapper/BodyWrapper";
        import NavWrapper from "../../../components/wrapper/NavWrapper";
        import PageWrapper from "../../../components/wrapper/PageWrapper";
        import { LightBulbIcon, BookOpenIcon } from "@heroicons/react/24/solid";

        

        function AnimalsPage(){


            
        return (

        <BodyWrapper>
                
            <NavWrapper link="/beginars" title="← Back to Beginars Lesson"> </NavWrapper>


                
        <div className="mt-16">
                
                <PageWrapper title="🐾 Finnish Lesson: Animals → Eläimet"> 

                                <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                                <h2 className="text-2xl font-semibold text-teal-400 mb-3">🐶 1. Pets → Lemmikkieläimet</h2>
                                    
                                <ConjugationTable items={animalData.animals} min={0} max={7} isVocab={true} />
                                    
                                    
                                </section>
                                <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                                            <h3 className="text-xl font-medium text-teal-300 mb-2 flex items-center gap-2">
                                            <BookOpenIcon className="h-5 w-5 text-teal-500 animate-pulse inline-block" />
                                            Examples:
                                            </h3>
                                            <p className="text-teal-400"></p>
                                            <ul className="list-disc text-teal-400 space-y-2 m-6">
                                                <li>Minulla on koira. → I have a dog.</li>
                                                <li>Kissani on söpö. → My cat is cute.</li>
                                                </ul>
                                </section>
                                <Link to={`/beginars/most-common-animals/animals/basic-animals-quiz`}>
                                    <button className="mt-4 bg-teal-900 text-white px-4 py-2 rounded hover:bg-teal-600 transform hover:scale-110 transition duration-200 m-2">
                                    Basic Animals Vocabulary Exercises
                                    </button>
                                </Link>
                    </PageWrapper>
                    </div>
                
                    <PageWrapper title="🐄 2. Farm Animals → Maatilan eläimet">
                                <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                                    {/* <p className="text-teal-400 mb-2">These are regular counting numbers: one, two, three...</p> */}
                        
                                    <ConjugationTable items={animalData.animals} min={8} max={16} isVocab={true} />
                                    
                                </section>    
                                                
                                <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                                            <h3 className="text-xl font-medium text-teal-300 mb-2 flex items-center gap-2">
                                            <BookOpenIcon className="h-5 w-5 text-teal-500 animate-pulse inline-block" />
                                            Examples:
                                            </h3>
                                            <p className="text-teal-400"></p>
                                            <ul className="list-disc text-teal-400 space-y-2 m-6">
                                                <li>Lehmä on pellolla. → The cow is in the field.</li>
                                                <li>Hevonen juoksee nopeasti. → The horse runs fast.</li>
                                                </ul>
                                </section>
                                <Link to={`/beginars/most-common-animals/animals/animals-sentence-quiz`}>
                                    <button className="mt-4 bg-teal-900 text-white px-4 py-2 rounded hover:bg-teal-600 transform hover:scale-110 transition duration-200 m-2">
                                    Basic Animals In Sentence Exercises
                                    </button>
                                </Link>
                                    
                    </PageWrapper>
                    <PageWrapper title="🐻 3. Wild Animals → Villieläimet">
                                <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                                    
                        
                                    <ConjugationTable items={animalData.animals} min={17} max={32} isVocab={true} />
                                    
                                    
                                               
                                </section>
                                <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                                            <h3 className="text-xl font-medium text-teal-300 mb-2 flex items-center gap-2">
                                            <BookOpenIcon className="h-5 w-5 text-teal-500 animate-pulse inline-block" />
                                            Examples:
                                            </h3>
                                            <p className="text-teal-400"></p>
                                            <ul className="list-disc text-teal-400 space-y-2 m-6">
                                                <li>Karhu asuu metsässä. → The bear lives in the forest.</li>
                                                <li>Orava syö pähkinöitä. → The squirrel eats nuts.</li>
                                                </ul>
                                </section>
                                {/* <h4 className="text-xl font-semibold text-teal-300 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
                    </PageWrapper>
                    
                    <PageWrapper title="🐦 4. Birds → Linnut">
                                <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                                    {/* <p className="text-teal-400 mb-2">These are regular counting numbers: one, two, three...</p> */}
                        
                                    <ConjugationTable items={animalData.animals} min={33} max={39} isVocab={true} />
                                    
                                    
                                                {/* <p className="text-teal-600 mt-2"><strong>🧠 Tip:</strong> In Finnish, the months are not capitalized. Each ends in -kuu, meaning "moon/month".</p> */}
                                </section>
                                <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                                            <h3 className="text-xl font-medium text-teal-300 mb-2 flex items-center gap-2">
                                            <BookOpenIcon className="h-5 w-5 text-teal-500 animate-pulse inline-block" />
                                            Examples:
                                            </h3>
                                            <p className="text-teal-400"></p>
                                            <ul className="list-disc text-teal-400 space-y-2 m-6">
                                                <li>Lintu laulaa puussa. → The bird is singing in the tree.</li>
                                                <li>Joutsen ui järvessä. → The swan swims in the lake.</li>
                                                </ul>
                                </section>
                                {/* <h4 className="text-xl font-semibold text-teal-300 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
                    </PageWrapper>
                    <PageWrapper title="🐟 5. Sea Animals → Merieläimet">
                                <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                                    {/* <p className="text-teal-400 mb-2">These are regular counting numbers: one, two, three...</p> */}
                        
                                    <ConjugationTable items={animalData.animals} min={40} max={45} isVocab={true} />
                                    
                                    
                                               
                                </section>
                                <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                                            <h3 className="text-xl font-medium text-teal-300 mb-2 flex items-center gap-2">
                                            <BookOpenIcon className="h-5 w-5 text-teal-500 animate-pulse inline-block" />
                                            Examples:
                                            </h3>
                                            <p className="text-teal-400"></p>
                                            <ul className="list-disc text-teal-400 space-y-2 m-6">
                                                <li>Delfiini on älykäs eläin. → The dolphin is an intelligent animal.</li>
                                                <li>Valas on maailman suurin eläin. → The whale is the world’s largest animal.</li>
                                                </ul>
                                </section>
                
                    
                    </PageWrapper>
                    <PageWrapper title="🐜 6. Insects → Hyönteiset">
                                <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                                   
                                    <ConjugationTable items={animalData.animals} min={46} max={animalData.animals.length-1} isVocab={true} />
                                    
                                    
                                </section>
                                <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                                            <h3 className="text-xl font-medium text-teal-300 mb-2 flex items-center gap-2">
                                            <BookOpenIcon className="h-5 w-5 text-teal-500 animate-pulse inline-block" />
                                            Examples:
                                            </h3>
                                            <p className="text-teal-400"></p>
                                            <ul className="list-disc text-teal-400 space-y-2 m-6">
                                                <li>Mehiläinen tekee hunajaa. → The bee makes honey.</li>
                                                <li>Pidän kauniista perhosista. → I like beautiful butterflies.</li>
                                                </ul>
                                </section>
                    
                    </PageWrapper>
            </BodyWrapper>

                );

        }


        export default AnimalsPage;