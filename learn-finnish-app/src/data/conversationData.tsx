// src/conversationData.ts
export interface Question {
  id: number;
  questionEn: string;
  questionFi: string;
}

export const introductionQuestions: Question[] = [
  { id: 1, questionEn: "What is your name?", questionFi: "Mikä on nimesi?" },
  { id: 2, questionEn: "Where are you from?", questionFi: "Mistä olet kotoisin?" },
  { id: 3, questionEn: "How old are you?", questionFi: "Kuinka vanha olet?" },
    { id: 4, questionEn: "What do you do?", questionFi: "Mitä teet?" },
    { id: 5, questionEn: "Do you speak Finnish?", questionFi: "Puhutko suomea?" },
    { id: 6, questionEn: "Where do you live?", questionFi: "Missä asut?" },
    { id: 7, questionEn: "What are your hobbies?", questionFi: "Mitkä ovat harrastuksesi?" },

    { id: 8, questionEn: "Do you have any siblings?", questionFi: "Onko sinulla sisaruksia?" },
    { id: 9, questionEn: "What is your favorite food?", questionFi: "Mikä on lempiruokasi?" },
    { id: 10, questionEn: "What do you like to do in your free time?", questionFi: "Mitä tykkäät tehdä vapaa-ajallasi?" },
    { id: 11, questionEn: "What is the weather like today?", questionFi: "Millainen sää on tänään?" },
    { id: 12, questionEn: "What is your favorite color?", questionFi: "Mikä on lempivärisi?" },
    { id: 13, questionEn: "Do you have any pets?", questionFi: "Onko sinulla lemmikkejä?" },
    { id: 14, questionEn: "What is your favorite movie?", questionFi: "Mikä on lempielokuvasi?" },
    { id: 15, questionEn: "What is your dream job?", questionFi: "Mikä on unelmatyösi?" },
  // … add until 15
];
