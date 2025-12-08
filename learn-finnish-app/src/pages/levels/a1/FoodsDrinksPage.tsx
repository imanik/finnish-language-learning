  import React from "react";
  import { Link } from "react-router-dom";
  import { foodData } from "../../../data/basicA1";

  import ConjugationTable from "../../../components/ConjugationTable";
import BodyWrapper from "../../../components/BodyWrapper";
import NavWrapper from "../../../components/NavWrapper";
import PageWrapper from "../../../components/PageWrapper";

  

  function FoodsDrinksPage(){

      
  return (

<BodyWrapper>
                
            <NavWrapper link="/beginars" title="← Back to Beginars Lesson"> </NavWrapper>



      <PageWrapper title="🥗 A1 Finnish – Food & Drinks (Ruoka ja Juomat)">

    
                          <h2 className="text-2xl font-semibold text-teal-800 mb-4"></h2>
                      
                          
        
                            {/* <h2 className="text-2xl font-semibold text-teal-600 mb-3">🍽️ Yleisiä sanoja – General Words</h2> */}
                    <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                        
            
                        <ConjugationTable items={foodData.foodsDrinks} min={0} max={12} isVocab={true} />
                        
                        
                                    
                    </section>
                        
          </PageWrapper>

          <PageWrapper title='🍽️  Suomalaiset aterianimet - Finnish Meal Names'>

                       <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                            

                          <div className=" p-4 bg-black rounded-lg  mt-4 mb-4">

                                      <h2 className="text-2xl text-teal-400 font-bold"> <br /> <span className='text-teal-700 text-xl'></span> 
                                      </h2>
                                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                                    <div className="bg-black border border-gray-900 rounded-lg p-4">
                                          <h4 className="text-teal-400 font-semibold mb-2">🔸 Aamianinen</h4>
                                          <p className="text-teal-600 text-sm italic mb-2">Partitve: Aamiaista </p>
                                          <p className="text-teal-600 text-sm italic"> Breakfast</p>
                                    </div>
                                    <div className="bg-black border border-gray-900 rounded-lg p-4">
                                          <h4 className="text-teal-400 font-semibold mb-2">🔸 Lounas</h4>
                                          <p className="text-teal-600 text-sm italic mb-2">Partitve: Lounasta </p>
                                          <p className="text-teal-600 text-sm italic">Lunch </p>
                                    </div>
                                    <div className="bg-black border border-gray-900 rounded-lg p-4">
                                          <h4 className="text-teal-400 font-semibold mb-2">🔸 Päivällinen</h4>
                                          <p className="text-teal-600 text-sm italic mb-2">Partitve: Päivällistä </p>
                                          <p className="text-teal-600 text-sm italic">Evening meal / Early dinner </p>
                                    </div>
                                    <div className="bg-black border border-gray-900 rounded-lg p-4">
                                          <h4 className="text-teal-400 font-semibold mb-2">🔸 Illallinen</h4>
                                          <p className="text-teal-600 text-sm italic mb-2">Partitve: Illallista </p>
                                          <p className="text-teal-600 text-sm italic"> Dinner (formal / late)</p>
                                    </div>
                                    <div className="bg-black border border-gray-900 rounded-lg p-4">
                                          <h4 className="text-teal-400 font-semibold mb-2">🔸 Välipala</h4>
                                          <p className="text-teal-600 text-sm italic mb-2">Partitve: Välipalaa </p>
                                          <p className="text-teal-600 text-sm italic"> Snack</p>
                                    </div>
                                    <div className="bg-black border border-gray-900 rounded-lg p-4">
                                          <h4 className="text-teal-400 font-semibold mb-2">🔸 Jälkiruoka</h4>
                                          <p className="text-teal-600 text-sm italic mb-2">Partitve: Jälkiruokaa </p>
                                          <p className="text-teal-600 text-sm italic">Dessert </p>
                                    </div>
                                    <div className="bg-black border border-gray-900 rounded-lg p-4">
                                          <h4 className="text-teal-400 font-semibold mb-2"></h4>
                                          <p className="text-teal-600 text-sm italic mb-2"> </p>
                                          <p className="text-teal-600 text-sm italic"> </p>
                                    </div>
                                    <div className="bg-black border border-gray-900 rounded-lg p-4">
                                          <h4 className="text-teal-400 font-semibold mb-2">🔸 Juoma</h4>
                                          <p className="text-teal-600 text-sm italic mb-2">Partitve: Juomaa </p>
                                          <p className="text-teal-600 text-sm italic">Drink </p>
                                    </div>
                                    <div className="bg-black border border-gray-900 rounded-lg p-4">
                                          <h4 className="text-teal-400 font-semibold mb-2"></h4>
                                          <p className="text-teal-600 text-sm italic mb-2"> </p>
                                          <p className="text-teal-600 text-sm italic"> </p>
                                    </div>

                                       

                                        
                                      </div>
                                       <p className="text-teal-600 mt-4"><strong>📌 Notice:</strong>  When eating or drinking → use partitive:
                                        <br />Aamupalaa, lounasta, päivällistä, illallista
                                        </p>
                            </div>
                          </section>

                                
            </PageWrapper>

            <PageWrapper title='⏰ Ruoka-ajat Suomessa - Meal Times in Finland'>

                       <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                            

                          <div className=" p-4 bg-black rounded-lg  mt-4 mb-4">

                                      <h2 className="text-2xl text-teal-400 font-bold"> <br /> <span className='text-teal-700 text-xl'></span> 
                                      </h2>
                                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                                    <div className="bg-black border border-gray-900 rounded-lg p-4">
                                          <h4 className="text-teal-400 font-semibold mb-2">Aamulla</h4>
                                          <p className="text-teal-600 text-sm italic mb-2">Breakfast </p>
                                          <p className="text-teal-600 text-sm italic"> in the morning</p>
                                    </div>
                                    <div className="bg-black border border-gray-900 rounded-lg p-4">
                                          <h4 className="text-teal-400 font-semibold mb-2">Päivällä / Lounaalla</h4>
                                          <p className="text-teal-600 text-sm italic mb-2">Lunch </p>
                                          <p className="text-teal-600 text-sm italic">at noon / at lunch </p>
                                    </div>
                                    <div className="bg-black border border-gray-900 rounded-lg p-4">
                                          <h4 className="text-teal-400 font-semibold mb-2">Iltapäivällä</h4>
                                          <p className="text-teal-600 text-sm italic mb-2">Snack </p>
                                          <p className="text-teal-600 text-sm italic"> in the afternoon</p>
                                    </div>
                                    <div className="bg-black border border-gray-900 rounded-lg p-4">
                                          <h4 className="text-teal-400 font-semibold mb-2">Illalla / Illallisella</h4>
                                          <p className="text-teal-600 text-sm italic mb-2"> Dinner</p>
                                          <p className="text-teal-600 text-sm italic">in the evening </p>
                                    </div>
                                    <div className="bg-black border border-gray-900 rounded-lg p-4">
                                          <h4 className="text-teal-400 font-semibold mb-2"></h4>
                                          <p className="text-teal-600 text-sm italic mb-2"> </p>
                                          <p className="text-teal-600 text-sm italic"> </p>
                                    </div>
                                    <div className="bg-black border border-gray-900 rounded-lg p-4">
                                          <h4 className="text-teal-400 font-semibold mb-2">yöllä</h4>
                                          <p className="text-teal-600 text-sm italic mb-2">Late Dinner </p>
                                          <p className="text-teal-600 text-sm italic"> at night</p>
                                    </div>
                                    

                                       

                                        
                                      </div>
                                       <p className="text-teal-600 mt-4"><strong className="text-teal-300">📌 Notice:</strong>  “-lla / -llä” ending means at that meal/time.
                                        <br />Example: aamupala → aamupalalla = at breakfast
                                        </p>
                            </div>
                          </section>

                                
            </PageWrapper>

             <PageWrapper title='💬 Keskeiset kysymykset ja mallit - Key Questions & Models'>

         
                
                        <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">

                          <div className=" p-4 bg-black rounded-lg mb-4">
                                     
                                      <ul className=" list-disc text-teal-700 space-y-2 m-6">
                                        <li><span className="text-teal-400">Mitä sinä syöt aamupalaksi?</span> → What do you eat for breakfast?</li>
                                        <li><span className="text-teal-400">Mihin aikaan syöt lounasta? </span> → What time do you eat lunch?</li>
                                        <li><span className="text-teal-400">Mikä on tämän ruoan nimi?</span> → What is the name of this dish?</li>
                                        <li><span className="text-teal-400">Millainen maku tällä ruoalla on?</span> → What kind of taste does this food have?</li>
                                        <li><span className="text-teal-400">Minkämaalainen on tämä juoma?</span> → What country is this drink from?</li>
                                        <li><span className="text-teal-400">Kuinka monta kananmunaa syöt aamupalaksi? </span> → How many eggs do you eat for breakfast? </li>
                                        <li><span className="text-teal-400">Miten valmistat tämän ruoan?</span> → How do you prepare/make this dish?</li>
                                        <li><span className="text-teal-400">kumpi juot: teetä vai kahvia? </span> → Which do you drink: tea or coffee? </li>
                                        <li><span className="text-teal-400">Monesko ateria tämä on päivän aikana?</span> → Which meal of the day is this (ordinal)?</li>
                                        <li><span className="text-teal-400">Minkä ruoan valitset listalta?</span> → Which food do you choose from the menu?</li>
                                        <li><span className="text-teal-400">Syötkö sinä päivällistä kotona? </span> → Do you eat dinner at home?</li>
                                        <li><span className="text-teal-400">Missä sinä syöt illallista? </span> → Where do you eat dinner?</li>
                                        <li><span className="text-teal-400">Miksi et syö lihaa?</span> → Why don't you eat meat?</li>
                                        <li><span className="text-teal-400">Kuka valmisti tämän ruoan?</span> → Who prepared this meal?</li>
                                        <li><span className="text-teal-400">Milloin syöt yleensä lounasta?</span> → When do you usually eat lunch?</li>
                                        <li><span className="text-teal-400">Kenen kanssa syöt illallista?</span> → With whom do you eat dinner?</li>
                                    </ul>
                                      
                              </div>

                          </section> 
                       
                                  
            </PageWrapper>

             <PageWrapper title='📝 Lausemallit - Sentence Models'>

                       <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                            

                          <div className=" p-4 bg-black rounded-lg  mt-4 mb-4">

                                      <h2 className="text-2xl text-teal-400 font-bold"> <br /> <span className='text-teal-700 text-xl'></span> 
                                      </h2>
                                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                                    <div className="bg-black border border-gray-900 rounded-lg p-4">
                                          <h4 className="text-teal-400 font-semibold mb-2">💛 Breakfast – Aamiainen / Aamupala</h4>
                                          <p className="text-teal-500 text-sm italic mb-2">Minä syön aamulla puuroa ja juon kahvia. </p>
                                          <p className="text-teal-600 text-sm italic"> I eat porridge in the morning and drink coffee.</p>
                                    </div>
                                    
                                    <div className="bg-black border border-gray-900 rounded-lg p-4">
                                          <h4 className="text-teal-400 font-semibold mb-2">🧡 Lunch – Lounas</h4>
                                          <p className="text-teal-500 text-sm italic mb-2">Minä syön lounaalla kanaa ja salaattia. </p>
                                          <p className="text-teal-600 text-sm italic"> I eat chicken and salad at lunch.</p>
                                    </div>
                                    <div className="bg-black border border-gray-900 rounded-lg p-4">
                                          <h4 className="text-teal-400 font-semibold mb-2">💙 Dinner – Päivällinen / Illallinen</h4>
                                          <p className="text-teal-500 text-sm italic mb-2"> Minä syön päivällisellä lohta ja perunaa.</p>
                                          <p className="text-teal-600 text-sm italic"> I eat salmon and potatoes at dinner.</p>
                                    </div>
                                    
                                    

                                       

                                        
                                      </div>
                                       
                            </div>
                          </section>

                                
            </PageWrapper>



        <PageWrapper title="🥦 Vihannekset – Vegetables">
        
                          
                      
                          
        
                    <h2 className="text-2xl font-semibold text-teal-600 mb-3"></h2>
                    <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                        
            
                        <ConjugationTable items={foodData.foodsDrinks} min={13} max={37} isVocab={true} />
                        
                        
                                    
                    </section>
                        
        </PageWrapper>

         <PageWrapper title='👍 Suomalainen ruokakulttuuri (Faktoja) - Finnish Meal Culture (Facts)'>

         
                
                        <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">

                          <div className=" p-4 bg-black rounded-lg mb-4">
                                     
                                      <ul className=" list-disc text-teal-700 space-y-2 m-6">
                                        <li><span className="text-teal-400">Lounas on usein lämmin ateria, yleensä klo 11.00–13.00 välillä.</span> → Lunch is often hot meal, usually between 11:00–13:00</li>
                                        <li><span className="text-teal-400">Illallinen on yleensä yksinkertainen, perheen yhteinen ateria kotona</span> → Dinner is usually simple, family meal at home </li>
                                        <li><span className="text-teal-400">Suomalainen aamiainen: puuro (puuro), leipä (leipä), kahvi (kahvi)</span> → Finnish breakfast: puuro (porridge), leipä (bread), kahvi (coffee)</li>
                                        <li><span className="text-teal-400">Kouluissa lounas on aina kokonaisvaltainen ateria (pääruoka, salaatti, leipä, maito/vesi)</span> → In schools, lunch is always a complete meal (main dish, salad, bread, milk/water)</li>
                                    </ul>
                                      
                              </div>

                          </section> 
                       
                                  
            </PageWrapper>
        <PageWrapper title="🥫 Mauste & Muut elintarvikkeet – Spice & Other Food Items">
        
        
                        
        
                    <h2 className="text-2xl font-semibold text-teal-600 mb-3"> </h2>
                    <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                        
            
                        <ConjugationTable items={foodData.foodsDrinks} min={38} max={76} isVocab={true} />
                        
                        
                                    
                    </section>
                    {/* <h4 className="text-xl font-semibold text-teal-700 mb-6"><span className="font-medium">🔸 Adjectives in Nominative </span> (used with "päivä") </h4> */}    
        </PageWrapper>

        <PageWrapper title='🧠 Vinkkejä ulkoa opetteluun - Memorization Tips'>

         
                
                        <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">

                          <div className=" p-4 bg-black rounded-lg mb-4">
                                     
                                      <ul className=" list-disc text-teal-700 space-y-2 m-6">
                                        <li><span className="text-teal-500">Breakfast = A</span> → Aamupala (Morning starts with A)</li>
                                        <li><span className="text-teal-500">Lunch = L</span> → Lounas</li>
                                        <li><span className="text-teal-500">Dinner = D</span> → Päivällinen / Illallinen (Both have "lin/en" sound)</li>
                                        <li><span className="text-teal-500">Eating time</span> → Add -lla/-llä → lounaalla, illallisella</li>
                                        <li><span className="text-teal-500">Eating food</span> → Partitive → kanaa, leipää, puuroa</li>
                                        
                                     </ul>
                                      
                              </div>

                          </section> 
                       
                                  
            </PageWrapper>
        <PageWrapper title="🍎 Hedelmät ja marjat – Fruits & Berries">
        
            
        
                    <h2 className="text-2xl font-semibold text-teal-600 mb-3"></h2>
                    <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                                    
                        <ConjugationTable items={foodData.foodsDrinks} min={77} max={98} isVocab={true} />
                        
                        
                                    
                    </section>
                        
        </PageWrapper>
        <PageWrapper title="🍞 Leipä ja viljat – Bread & Grains">
        
                    <h2 className="text-2xl font-semibold text-teal-600 mb-3"></h2>
                    <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                        
            
                        <ConjugationTable items={foodData.foodsDrinks} min={99} max={122} isVocab={true} />
                        
                        
                                    
                    </section>
                        
        </PageWrapper>
        <PageWrapper title="🧀 Maito ja maitotuotteet – Milk & Dairy Products">
        
        
                    <h2 className="text-2xl font-semibold text-teal-600 mb-3"></h2>
                    <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                    
                        <ConjugationTable items={foodData.foodsDrinks} min={123} max={141} isVocab={true} />
                        
                        
                    </section>
        </PageWrapper>
        <PageWrapper title="🍗 Liha ja kala – Meat & Fish">
        

                    <h2 className="text-2xl font-semibold text-teal-600 mb-3"></h2>
                    <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">

                        <ConjugationTable items={foodData.foodsDrinks} min={142} max={171} isVocab={true} />
                        
                        
                    </section>
        </PageWrapper>
        <PageWrapper title="☕ Juomat – Drinks">
        
                          {/* <h2 className="text-2xl font-semibold text-teal-800 mb-4">🏠 A1 Finnish – Rooms and Furniture (Huoneet ja Huonekalut)</h2> */}

        
                    <h2 className="text-2xl font-semibold text-teal-600 mb-3"></h2>
                    <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                        
            
                        <ConjugationTable items={foodData.foodsDrinks} min={172} max={foodData.foodsDrinks.length-1} isVocab={true} />
                        
                        
                                    
                    </section>
                    <Link to={`/beginars/most-common-foods-and-drinks/foods-drinks/foods-drinks-quiz`}>
                        <div className="flex justify-center"></div>
                        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transform hover:scale-110 transition duration-200 m-2">
                        Basic Food & Drinks Vocabulary Exercises
                        </button>
                    </Link>
      
                        
        </PageWrapper>

            
      
      </BodyWrapper>

        );

  }


  export default FoodsDrinksPage;