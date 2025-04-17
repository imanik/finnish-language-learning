

export interface Topic {
  title: string;
  subtopics?: Subtopic[];
}

export interface Subtopic {
  title: string;
  childTopics?: string[];
}



export const verbTopics: Topic[] = [
    {
      title: "The Present Tense",
      subtopics: [{ title: "The Finnish Verbtypes" }],
    },
    {
      title: "The Past Tenses",
      subtopics: [
        { title: "The Imperfect Tense", childTopics: ["Lentää > Lensin", "Auttaa > Autoin"] },
        { title: "The Negative Imperfect" },
        { title: "The Perfect Tense" },
        { title: "The Plusquamperfect" },
        { title: "Overview of Past Tenses" },
      ],
    },
    {
      title: "The Future Tense",
      subtopics: [{ title: "Ways to Express Intent" }],
    },
    {
      title: "The Passive",
      subtopics: [
        { title: "The Present Passive" },
        { title: "Negative Present Passive" },
        { title: "The Passive Imperfect" },
        { title: "The Passive Perfect Tense" },
        { title: "The Passive Conditional" },
        { title: "Overview of the Passives" },
        { title: "Spoken Language Passive" },
      ],
    },
    {
      title: "The Conditional Mood",
      subtopics: [
        { title: "The Conditional" },
        { title: "The Perfect Conditional" },
        { title: "The Passive Conditional" },
      ],
    },
    {
      title: "The Imperative Mood",
      subtopics: [
        { title: "The Imperative" },
        { title: "Älä! Negative Imperative" },
        { title: "Kapteeni Käskee (Singular)" },
        { title: "Kapteeni Käskee (Plural)" },
        { title: "Other Imperative Uses" },
      ],
    },
    {
      title: "Consonant Gradation",
      subtopics: [
        { title: "Verbtype 1" },
        { title: "Verbtype 3" },
        { title: "Verbtype 4" },
        { title: "Verbtype 6" },
      ],
    },
    {
      title: "The Infinitives",
      subtopics: [
        { title: "The 5 Finnish Infinitives" },
        { title: "The First Infinitive" },
        { title: "The Second Infinitive" },
        { title: "The Third Infinitive" },
        { title: "The Fourth Infinitive" },
      ],
    },
    {
      title: "The Participles",
      subtopics: [
        { title: "Overview" },
        { title: "Active Present Participle (-VA)" },
        { title: "Passive Present Participle (-TAVA)" },
        { title: "Active Past Participle (-NUT)" },
        { title: "Passive Past Participle (-TU)" },
        { title: "Agent Participle (-mA)" },
      ],
    },
    { title: "Making Verbs Negative" },
    { title: "Compound Verbs" },
    { title: "The Potential Mood" },
    { title: "Verbtype 1" },
    { title: "Finnish Verb Stems" },
  ];

  export const nounTopics = [
    { title: "The partitive case" },
    { title: "The genitive case" },
    
    { 
        title: "The locative cases",
        subtopics: [
            { title: "Missä mistä mihin" },            
            { title: "The inessive case (-ssa)" },            
            { title: "The elative case (-sta)" },
            { title: "The illative case" },
            { title: "The adessive case (-lla)" },
            { title: "The ablative case (-lta)" },
            { title: "The allative case (-lle)" },
            { title: "Hyllyllä or hyllyssä?" },
        ], 
    },

    { 
        title: "Consonant Gradation",
        subtopics: [
            { title: "Wordtype A – KPT" },
            { title: "Wordtype B – KPT" },
        ],
    },

    { 
        title: "Degrees of comparison",
        subtopics: [
            { title: "Comparative of adjectives" },
            { title: "Partitive in comparatives" },
            { title: "Superlative of adjectives" },
            { title: "Inflecting comparisons" },
            { title: "Comparing adverbs" },
            { title: "Inflecting comparative adverbs" },
        ],
    },

    { title: "The T-plural" },

    { title: "The plural partitive",
        subtopics: [
            { title: "The plural partitive" },
            { title: "Plural of long words" },
            { title: "Plural partitive vs T-plural" },
            { title: "List: Kissa-words" },
            { title: "List: Koira-words" },
        ],
     },


    { title: "The plural genitive",
        subtopics: [
            { title: "The plural genitive" },
            { title: "Plural of long words" },
            { title: "Using the plural genitive" },
            { title: "Possessive suffixes" },
        ],
    },

    { title: "The plural location cases",
        subtopics: [
            { title: "The plural location cases" },
            { title: "The plural illative" },
            { title: "The plural translative" },
        ],
    },
    
    { title: "Examples of the plural cases" },

    { title: "Rarer cases",
        subtopics: [
            { title: "The accusative case" },
            { title: "Accusative total objects" },
            { title: "The translative (-ksi)" },
            { title: "The essive (-na)" },
            { title: "The abessive (-tta)" },
            { title: "The comitative (-ine)" },
            { title: "The instructive (-in)" },
        ],
    },

    { title: "“Here” and “there”",
        subtopics: [
            { title: "Overview" },
            { title: "Tässä tästä tähän" },
            { title: "Täällä täältä tänne" },
            { title: "Tuossa tuosta tuohon" },
            { title: "Tuolla tuolta tuonne" },
            { title: "Siinä siitä siihen" },
        ],
    },

    { title: "The inflection of…" ,
        subtopics: [
            { title: "Expressions of time" },
            { title: "Place names" },
            { title: "Words ending in a consonant" },
            { title: "Us-Ukse- vs Us-Ude- words" },
            { title: "Words ending in -is" },
            { title: "Old/New words ending in -i" },
            { title: "Inflection of words like UUSI" },
            { title: "Inflection of words like OVI" },
            { title: "Inflection of words like PIENI" },
            { title: "Inflection of words like TOIMI" },
        ],
    },

    { title: "Special inflection cases",
        subtopics: [
            { title: "Inflection of numbers" },
            { title: "Inflection of ordinal numbers" },
            { title: "Inflection of foreign names" },
            { title: "Inflection of French names" },
            { title: "Indeclinable words" },
            { title: "Incongruent phrases" },
        ],
    },

    { title: "Old cases",
        subtopics: [
            { title: "Prolative: puhelimitse vesitse" },
            { title: "Lative: alas ulos ylös" },
        ]
    },

];


    export const sentenceTopics = [

        {title: "Finnish Sentence Types",
            subtopics: [
                {title: "Overview of sentence types" },
                {title: "Possession (having something)" },
                {title: "Necessity sentences (täytyy)" },
                {title: "On mentävä -sentences" },
                {title: "Existential sentences" },
                {title: "Generic sentences" },
                {title: "Change and result sentences" },
                {title: "Tuloslause vs. muutoslause" },
                {title: "Subordinate clauses" },
                {title: "Relative pronoun joka" },
                {title: "Syntax of täytyy-sentences" },
                {title: "Conjugation of täytyy-sentences" },
                {title: "Sentence types with the verb in the third person singular" },

            ]
        },

        {title: "Construction",
            subtopics: [
                {title: "[olla + -lla] (olla kahvilla)" },
                {title: "[olla + -ssa] (olla piilossa)" },
                {title: "[olla + -uksissaan]" },
                {title: "[x:llani, x:llaan] (pahoillaan)" },
                {title: "[olla + -ltaan] (ammatiltaan)" },
                {title: "[olla + -ttavissa] (tavattavissa)" },

            ]
        },

        {title: "Clitics - Liitepartikkelit", 
            subtopics:[
                {title: "The order of Finnish suffixes" },
                {title: "-han/-hän" },
                {title: "-kin/-kaan/-kään" },
                {title: "-pa/-pä" },
            ]
        },

        {title: "Rections",
            subtopics: [
                {title: "What are rections" },
                { title: "Verb + noun rections", 
                  childTopics: [
                    "So-called partitive verbs",
                    "Partitive verbs",
                    "Käydä + missä",
                    "Location case verb rections",
                    "Translative verb rections",
                    "Perceptional verbs",
                    "Keneltä kenestä keneen",
                  ] 
                },
                { title: "Verb + verb rections", 
                  childTopics: [
                    "Infinitive verb rections",
                    "Third infinitive verb rections",
                    "Fourth infinitive verb rections",
                  ] 
                },
                { title: "Noun rections", 
                  childTopics: [
                    "Adjective rections",
                    "Noun + noun rections",
                    "Noun + verb rections",
                  ] 
                },
                { title: "Verb rections with että" },
                { title: "Timespans: mistä mihin" },
                { title: "Use of infinitives and participles" },
                
            ] 

        },

        {title: "Grammatical Functions",
            subtopics: [
                {title: "Object & Complement" ,
                  childTopics: [
                    "The object",
                    "Luen kirjaa/kirjan/kirjat",
                    "Syön leipää/pullan/nakkeja",
                    "Tarvitsen rakkautta",
                    "Advanced object: overview",
                    "Total object verbs",
                    "The complement",
                    "Mass nouns",
                    "Complications",
                    "Abstract nouns",
                  ]
                },
          
            ]
        },

        {title: "Advanced",
            subtopics: [
                {title: "Lauseenvastikkeet", 
                  childTopics: [
                    "Finaalirakenne",
                    "Modaalirakenne",
                    "Temporaalirakenne",
                    "Referatiivirakenne",
                  ] 
                },
                {title: "Colorative verb chains" },
                {title: "Reduplication phrases" },
                {title: "Reduplication words" },
                {title: "Täytyy-sentence types" },
                {title: "Word order in existential sentences" },
                {title: "Relative pronouns JOKA and MIKÄ" },
          
            ]
        },
    ]

    
    export const otherTopics = [

      { title: "Spoken Language",
        subtopics: [
          { title: "Mä mää mie – Pronouns" },
          { title: "Tää toi se – Taivutus" },
          { title: "Ne puhuu puhekieltä" },
          { title: "Menen nukkuun – Third infinitive" },
          { title: "Mun tarttee syödä" },
          { title: "Verbs in spoken language" },
          { title: "Spoken language passive" },
          { title: "Spoken language questions" },
          { title: "Spoken language numbers" },
          { title: "Spoken language pronunciation" },
          { title: "Syntax of spoken Finnish" },
          { title: "South Ostrobothnian dialect" },
        ],
      },

      { title: "Morphology",
        subtopics:[
            {title:"What is derivation?"},
            {title:"Finnish derivational elements"},
        ]
      },

      { title: "Phonology",
        subtopics:[
            {title:"Vowel harmony"},
            {title:"Vowel harmony exceptions"},
            {title:"Consonant gradation"},
            {title:"Tilli tili tiili tyyli tuuli"},
            {title:"Banaani vs panaani"},
            {title:"Vanha vs wanha"},
            {title:"Pöydällä vs pöyrällä"},
            {title:"Kolome kylymää kahavia"},
            {title:"Siivota → siipoan?"},
            {title:"Politiikka vs poliitikko"},
            {title:"Menep pois"},
        ]
      },

      { title: "Etymology",
        subtopics:[
            {title:"Swedish loanverbs -ATA"},
            {title:"English loanverbs -ATA"},
            {title:"Baltic and Germanic loanwords"},
        ]
      },

      { title: "Duolingo",
        subtopics:[
            {title:"Introduction to the partitive"},
            {title:"Tässä täällä tuossa tuolla"},
        ]
      },

      { title: "Specific consonant gradation",
        subtopics:[
            {title:"RK/LK – RJ/LJ"},
            {title:"K – disappears"},
        ]
      },

      { title: "Most recently published articles" },
      { title: "Visit a random article!" },
      { title: "Support me via Paypal!" },
      { title: "Make your payments with PayPal. It is free, secure, effective." },
      { title: "List of all articles" },

    ];





    export const a1Topics: Topic[] = [
      
      
      
      {
        title: "What Languages", // Changed from "What language do you speak?"
        subtopics: [
          {
            title: "Basic Language ",
            childTopics: ["Basic Language Quiz", "Sentence Language Quiz"],
          },
        ],
      },
      {
        title: "Family",
        subtopics: [
          {
            title: "Family Members",
            childTopics: ["Basic Family Quiz", "Extended Family Quiz", "Step Family Quiz", "Marital Status Quiz"],
          },
        ],
      },
      { 
        title: "Nationality",
        subtopics: [
          {title: "What nationality are you?",
            childTopics: ["Nationality Sentence Quiz"],
          }   
        ],
      },
      { 
        title: "Location",
        subtopics: [
          { title: "Where do you live?", }
        ],
      },

      { 
        title: "Greeting",
        subtopics: [
          { title: "How are you?",}
        ],
      },

      { 
        title: "Color",
        subtopics: [
          {title: "Rainbow!",}
        ],
      },

      { 
        title: "Number",
        subtopics: [
          {title: "Ready! One, Two, Three",}
        ],
      },

      
      { 
        title: "Day",
        subtopics: [
          {title: "Sunday! or Monday!",}
        ],
      },

      
      { 
        title: "Month",
        subtopics: [
          {title: "January to December",}
        ],
      },

      { 
        title: "Weather",
        subtopics: [
          {title: "Summer or Winter",}
        ],
      },

      { 
        title: "Adjective",
        subtopics: [
          {title: "Good, bad or ugly?",}
        ],
      },




      
      { title: "Basic phrases" },
      { title: "Basic rooms and furniture vocabulary" },
      { title: "Most common foods and drinks" },
      { title: "Most common clothing items" },
      { title: "Most common body parts" },
      { title: "Most common places in the city" },
      { title: "Most common animals" },
      { title: "Most common verbs" },
      { title: "Talking about simple illnesses" },
      { title: "Some survival Finnish phrases" },
      { title: "Basic knowledge about telling the time" },
    ];

