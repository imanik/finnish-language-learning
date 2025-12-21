  import React from 'react';
  import { Link } from 'react-router-dom';
  import { verbData } from '../../../data/basicA1';

  import ConjugationTable from '../../../components/ConjugationTable';
  import BodyWrapper from '../../../components/BodyWrapper';
  import NavWrapper from '../../../components/NavWrapper';
  import PageWrapper from '../../../components/PageWrapper';
  import ListSection from '../../../components/sections/ListSection';
  import Boxsection from '../../../components/sections/BoxSection';

  const vtData = [
    {
      title: "🔸 VT-1",
      rule: "Ends in two vowels (aa, ää, oa, öä, ua, yö, ea, eä)",
      example: "Example: minä puhun (puhua → to speak)",
    },
    {
      title: "🔸 VT-2",
      rule: "Ends in -da/-dä",
      example: "Example: minä syön (syödä → to eat)",
    },
    {
      title: "🔸 VT-3",
      rule: "Ends in -la/-lä, -na/-nä, -ra/-rä, -sta/-stä",
      example: "Example: minä tulen (tulla → to come)",
    },
    {
      title: "🔸 VT-4",
      rule: "Ends in -ata/-ätä",
      example: "Example: minä pelaan (pelata → to play)",
    },
    {
      title: "🔸 VT-5",
      rule: "Ends in -ita/-itä",
      example: "Example: minä tarvitsen (tarvita → to need)",
    },
    {
      title: "🔸 VT-6",
      rule: "Ends in -eta/-etä",
      example: "Not in top 100, rare",
    },
  ];

  const ptData = [
    {
      title: "🔹 Uncountable / indefinite amount",
      rule: "Some, not all",
      example: "Example: Minä juon kahvia. → I drink (some) coffee.",
    },
    {
      title: "🔹 After numbers 2 or more",
      rule: "Multi-item → not whole",
      example: "Example: Ostin kolme omenaa. → I bought 3 apples.",
    },
    {
      title: "🔹 Ongoing action / incomplete",
      rule: "Not finished",
      example: "Example: Luin kirjaa. → I was reading (not finished).",
    },
    {
      title: "🔹 Negative sentence",
      rule: "Always in negative",
      example: "Example: En syö lihaa. → I don't eat meat.",
    },
    {
      title: "🔹 Some verbs require partitive",
      rule: "Love, like, wait, want, play, search",
      example: "Example: Rakastan sinua. → I love you.",
    },
    {
      title: "🔹 Asking what something is",
      rule: "Describing some type",
      example: "Se on hyvää ruokaa. → It is good food",
    },
  ];
  const nptData = [
    {
      title: "🔸 Whole object",
      example: "Example: Luin kirjan. → I read the whole book (complete).",
    },
    {
      title: "🔸 Exact amount (1)",
      example: "Example: Minulla on yksi kissa. → One cat  (nominative).",
    },
    {
      title: "🔸 Finished action",
      example: "Example: Join kahvin. → I drank the whole coffee (finished).",
    },
    
  ];

  const rptData = [
    
      {
      title: "🔸 Ending → -a / -ä ",
      rule: "jos sanan lopussa on 1 vokaali → If there is 1 vowel at the end of the word",
      example: "kurukku → kurukkua",
      exampleTwo: "viini → viinia, kissa → kissaa",
    },
    {
      title: "🔸 Ending → -ta / -tä",
      rule: "jos sanan lopussa on 2 vokaali tai konsonantti →  If there are 2 vowels or consonants at the end of a word",
      example: "voi → voita",
      exampleTwo: "ananas → ananasta",
    },
    {
      title: "🔸 Ending → -tta / -ttä",
      rule: "Jos sanan lopussa on -e vokaali tai -si partitiivi on → If the word ends with an -e vowel or -si partitive",
      example: "tuore → tuoretta, ",
      exampleTwo: "file → filettä",
    },
    {
      title: "🔸 Ending → -sta / -stä ",
      rule: "jos sanan lopussa on -nen partitiivi  → If the word ends with -nen partitive",
      example: "punainen → punaista",
      exampleTwo: "tyypillinen → tyypillistä.",
    },
    
  ]

  const tenseData = [
    
      {
      title: "1️⃣ Present (preesens):",
      rule: "👉 Action happening now → incomplete → partitive.",
      example: "Minä juon kahvia. → I drink coffee.",
      exampleTwo: "Hän odottaa bussia. → He is waiting for the bus.",
    },
    {
      title: "2️⃣ Past (imperfekti):",
      rule: "👉 Action was happening, but not completed → partitive.",
      example: "Minä join kahvia. → I drank coffee (not finished).",
      exampleTwo: "Hän odotti bussia. → He waited for the bus.",
    },
    {
      title: "3️⃣ Future (Finnish uses present + context):",
      rule: "👉 Finnish has no separate future tense, so we use present form + time word. → Partitive stays same.",
      example: "Minä juon kahvia huomenna. → I will drink coffee tomorrow.",
      exampleTwo: "Hän odottaa bussia kohta. → He will soon wait for the bus.",
    },
    
  ]



  function VerbsPage()  {
    return (
    
  <BodyWrapper>
                  
              <NavWrapper link="/beginars" title="← Back to Beginars Lesson" > </NavWrapper>
    
    
    
          
    
          <PageWrapper title='✅ A1 Lesson - First 100 Basic Finnish Verbs'>
    
                  <h2 className="text-xl font-semibold text-teal-700 mb-2">📌 1 → 100:</h2>      
                        <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                                  
                      
                              <ConjugationTable items={verbData.basicVerbs} min={0} max={100} isVocab={true}/>
          
                                
                        </section>
                      


                  <Link to={`/beginars/most-common-verbs/basic-verbs/basic-verbs-quiz`}>
                            <button className="mt-4 bg-teal-900 text-white px-4 py-2 rounded hover:bg-teal-600 transform hover:scale-110 transition duration-200 m-2">
                              Basic Verbs Vocabulary Exercises
                            </button>
                          </Link>

                                  
            </PageWrapper>
    
            
    
    
    
          <PageWrapper title='🔤 Verb Structure in Finnish'>
                      
                    
                        <ListSection
                            title= ""
                            text="In Finnish, every verb has a basic form called the infinitive, usually ending in -a or -ä (e.g. syödä to eat). From that base, we form different versions to express who is doing the action and if it’s affirmative or negative."
                            textTwo='Finnish verbs are divided into six types, based on how they behave when conjugated. Knowing the verb type helps you guess how to use new verbs, especially their present tense forms.'
                            listCounts={1}
                            lists={[
                              "For now, we’ll focus on the first person singular form (minä → I).",
                            
                            ]}
  />

        </PageWrapper>


        <PageWrapper title='🔢 Finnish Verb Types (VT1–VT6)'>
                      
        <Boxsection
        
        boxTypes={vtData}
        column={2}
        notice={`📌 Notice: Use this sentence to remember VT3 endings 👉 “LeNaRyS” L = -la → N = -na → R = -ra → S = -sta  💡 Any verb that ends with these + a/ä → Verb Type 3`}
          />

          <Link to={`/beginars/most-common-verbs/basic-verbs/hard-verbs-quiz`}>
                            <button className="mt-4 bg-gray-900 text-teal-400 px-4 py-2 rounded hover:bg-teal-500 transform hover:scale-110 transition duration-200 m-2">
                              Hard Verbs Vocabulary Exercises
                            </button>
                          </Link> 
    
          </PageWrapper>
                      
    
          <PageWrapper title='✅ Positive vs ❌ Negative Forms'>

          
                  


            <ListSection
            text="In Finnish, negative sentences use a special negative verb (en, et, ei, emme, ette, eivät) plus the main verb stem."
            example="Examples:"
            listCounts={4}
            lists={[
              "minä syön → I eat",
              "minä en syö → I don’t eat",
              "minä rakastan → I love",
              "minä en rakasta → I don’t love",
              "sinä juot → you drink", // extra, won't show if listCounts=4
            ]}
          />

                        
                                    
              </PageWrapper>
    
              

                <PageWrapper title='📘 What is the Partitive Case?'>

                  <ListSection
            text="Partitive is one of the Finnish grammatical cases."
            example=""
            listCounts={4}
            lists={[
              "It tells that →  something is incomplete, unlimited, not finished, or not whole.",
              "It often shows → “some of something”, uncounted, unfinished, or not exact amount.",
            ]}
          />

                      <Boxsection
        
        boxTypes={ptData}
        notice={``}
        column={2}
          />       
                        
                        

                            </PageWrapper>
                            <PageWrapper title='📊 Milloin partitiivia EI pidä käyttää? → When NOT to use the Partitive? '>

                              <Boxsection
        
        boxTypes={nptData}
        notice={``}
        column={3}
          />  

                            </PageWrapper>
                           
                           
                            <PageWrapper title='🔄 Kuinka monta partitiivimuotoa on olemassa? → How Many Partitive Forms Are There? '>
                         <Boxsection
        
        boxTypes={rptData}
        notice={`🧠 HUOM!/Note: Retiisi, lasi ja oranssi eivät ole si-sanoja. Ne kuuluvat ryhmään 1 (lopussa yksi vokaali) . → Radish, glass and orange are not si-words. They belong to group 1 (one vowel at the end)`}
        column={1}
          />  

                            </PageWrapper>
                           
                           
                            <PageWrapper title='❤️ Verbit, jotka aina käyttävät partitiivia  →  Verbs that Always Use Partitive  '>

                            
                            <ListSection
            text="Partitive is one of the Finnish grammatical cases."
            example="Examples:"
            listCounts={8}
            lists={[
              " rakastaa	→ to love ",
              " odottaa	→ to wait ",
              " auttaa	→ to help ",
              " etsiä	→ to search ",
              " ymmärtää	→ to understand ",
              " harrastaa	→ to practice (hobby) ",
              " soittaa	→ to play (instrument) ",
              " pelata	→ to play (game) "
            ]}
          />

                     <ListSection
            text="Partitive is one of the Finnish grammatical cases."
            textTwo='📌 Notice: In Finnish, negative sentences use a special negative verb (en, et, ei, emme, ette, eivät) plus the main verb stem. '
            example="Examples:"
            listCounts={3}
            lists={[
             "Hän rakastaa sinua. →   He loves you.",
            "Me odotamme bussia.  → We are waiting for the bus.",
            "Hän etsii puhelinta. → He is looking for the phone."
            ]}
          />
                          
                                    
              </PageWrapper>

                <PageWrapper title='🕒 Tenses with Partitive'>

                   <Boxsection
        
        boxTypes={tenseData}
        notice=""
        column={1}
          />  
                
               
                
                </PageWrapper>

                <PageWrapper title='🧠 Easy Memory Trick'>

                   <ListSection
            text="Partitive is one of the Finnish grammatical cases."
            example="Examples:"
            listCounts={4}
            lists={[
              " Partitive = Some	→ 🍰 Slice of cake, not whole ",
              " Negative sentence → 🚫 Always partitive ",
              " Unfinished action → ⏳ Hourglass – action ongoing ",
              " After numbers (2+) → 👥 More than one → partitive ",
            ]}
          />

                 

                            </PageWrapper>
                            <PageWrapper title='🔎 Compare'>
                              
                  <ListSection
            text=""
            example="Examples:"
            listCounts={4}
            lists={[
             "Minä luen kirjan.	 → I read the whole book. = Accusative",
            "Minä luen kirjaa.	 → I am reading (incomplete). = Partitive",
            "Minulla on kirja.	 →I have one book. = Nominative",
            "Minä luen kirjoja.	 → I have some books. = Partitive",
            ]}
          />
                            

                  </PageWrapper>
                  <PageWrapper title='📝 Summary'>

                    <ListSection
            text=""
            example=" Use Partitive When:"
            listCounts={5}
            lists={[
             "Quantity (2+)	 → Minulla on 3 koiraa.  ",
            "Not complete / ongoing	 → Luen kirjaa.  ",
            "Negative	 → En juo maitoa.  ",
            "Uncountable	 → Syön riisiä.  ",
            "Some specific verbs	 → Rakastan sinua.  ",
            ]}
          />
                              

                           

                  </PageWrapper>
                <PageWrapper title='💡 Special Notes'>

                  <ListSection
            text= "Some verbs change their stem	(like tehdä → minä teen, nähdä → minä näen). These are irregular and must be memorized."
            example=" Some verbs have contextual uses. For example::"
            listCounts={2}
            lists={[
              "  soittaa → can mean to play an instrument or to call someone.",
              "  pelata  → is used for playing structured games (sports, video games).",
            ]}
          />

                          
                            
                        
                        
                                    
              </PageWrapper>
              
        </BodyWrapper>
    );
  }

  export default VerbsPage;


