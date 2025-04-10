export const verbTypes = {
    verbType1: [
      ["ajaa (to drive)", "asua (to live in a place)"],
      ["alkaa (to start, to begin*) KPT", "etsiä (to look for, to search)"],
      ["antaa (to give) KPT", "auttaa (to help) KPT"],
      ["herättää (to wake so. up) KPT", "hoitaa (to take care of) KPT"],
      ["huutaa (to shout) KPT", "katsoa (to watch*)"],
      ["kieltää (to deny) KPT", "kiertää (to go around) KPT"],
      ["kirjoittaa (to write) KPT", "kysyä (to ask)"],
      ["laajentaa (to expand) KPT", "laskea (to count)"],
      ["lukea (to read) KPT", "lähteä (to leave) KPT"],
      ["maksaa (to pay, to cost)", "muistaa (to remember)"],
      ["neuvoa (to give advice)", "odottaa (to wait, to expect) KPT"],
      ["ostaa (to buy)", "ottaa (to take) KPT"],
      ["paistaa (to fry*, to shine*)", "puhua (to speak)"],
      ["rakastaa (to love)", "rakastua (to fall in love)"],
      ["sallia (to allow)", "sanoa (to say*)"],
      ["soittaa (to call, to play an instrument*) KPT", "sortua (to collapse) KPT"],
      ["tietää (to know) KPT", "tuntea (to feel) KPT"],
      ["unohtaa (to forget) KPT", "unohtua (to be forgotten) KPT"],
      ["vaatia (to demand) KPT", "ymmärtää (to understand) KPT"],
    ],
    verbType2: [
      ["syödä (to eat)", "juoda (to drink)"],
      ["imuroida (to vacuum)", "voida (to be able)"],
      // Add more Type 2 verbs
    ],
    verbType3: [
      ["opiskella (to study)", "mennä (to go)"],
      ["pestä (to wash)", "käydä (to visit)"],
      // Add more Type 3 verbs
    ],
    verbType4: [
      ["haluta (to want)", "tavata (to meet)"],
      ["siivota (to clean)", "juosta (to run)"],
      // Add more Type 4 verbs
    ],
    verbType5: [
      ["valita (to choose)", "tarvita (to need)"],
      ["häiritä (to disturb)", "pelätä (to fear)"],
      // Add more Type 5 verbs
    ],
    verbType6: [
      ["lämmetä (to warm up)", "vanheta (to age)"],
      ["paeta (to escape)", "rohjeta (to dare)"],
      // Add more Type 6 verbs
    ],
  };
  
  export const generateConjugations = (infinitive:string, verbType: string) => {
    const verbOnly = infinitive.split(" ")[0];
    let stem = verbOnly;
  
    // Adjust stem based on verb type (simplified for now)
    switch (verbType) {
      case "verbType1":
        stem = verbOnly.replace(/[aä]$/, "");
        break;
      case "verbType2":
        stem = verbOnly.replace(/[da]$/, "");
        break;
      case "verbType3":
        stem = verbOnly.replace(/la|lä|na|nä|ra|rä$/, "");
        break;
      case "verbType4":
        stem = verbOnly.replace(/ta|tä$/, "");
        break;
      case "verbType5":
        stem = verbOnly.replace(/ta|tä$/, "");
        break;
      case "verbType6":
        stem = verbOnly.replace(/ta|tä$/, "");
        break;
      default:
        stem = verbOnly.replace(/[aä]$/, ""); // Default to Type 1
    }
  
    const englishMeaning = infinitive.match(/\((.*)\)/)?.[1]?.replace("*", "") || "do";
    const lastChar = verbOnly.slice(-2, -1);
    let hanEnding;
  
    switch (lastChar) {
      case "o":
        hanEnding = "o";
        break;
      case "a":
        hanEnding = "a";
        break;
      case "y":
        hanEnding = "y";
        break;
      case "u":
        hanEnding = "u";
        break;
      case "e":
      case "i":
        hanEnding = verbOnly.endsWith("ä") ? "y" : "u";
        break;
      default:
        hanEnding = verbOnly.endsWith("ä") ? "y" : "u";
    }
  
    return [
      { person: "minä", conjugation: `${stem}n`, english: `I ${englishMeaning}` },
      { person: "sinä", conjugation: `${stem}t`, english: `you ${englishMeaning}` },
      { person: "hän", conjugation: `${stem}${hanEnding}`, english: `he/she ${englishMeaning}` },
      { person: "me", conjugation: `${stem}mme`, english: `we ${englishMeaning}` },
      { person: "te", conjugation: `${stem}tte`, english: `you ${englishMeaning}` },
      { person: "he", conjugation: `${stem}vat`, english: `they ${englishMeaning}` },
    ];
  };