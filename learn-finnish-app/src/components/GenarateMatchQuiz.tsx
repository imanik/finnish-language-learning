import React, {useState, useEffect} from "react";


interface QuizItem {
    english: string,
    finnish: string,
    pronunciation?: string
}

interface GenarateQuizProps{
    items: QuizItem[],
    onMatch:(isCorrect:boolean) => void,
    handleMatchingComplete: (wasCorrect: boolean) => void;
    


}

function shuffled<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

function GenarateMatchQuiz({items, onMatch, handleMatchingComplete}: GenarateQuizProps){



    const [quizItems, setQuizItems] = useState<QuizItem[] | null> (null)
    const [shuffledEnglish, setShuffledEnglish] = useState<QuizItem[] | null>(null)
    const [selectedFinnish, setSelectedFinnish] = useState<QuizItem | null>(null)
    const [selectedEnglish, setSelectedEnglish] = useState<QuizItem | null>(null)
    const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set())
    
    useEffect(()=>{
        startChallenge()
    },[])
    
    
    const startChallenge = () => {
        
        const selectedQuizItems = shuffled(items).slice(0,10)
        setQuizItems(selectedQuizItems)
        setShuffledEnglish(shuffled(selectedQuizItems))
        setMatchedPairs(new Set())
        setSelectedEnglish(null)
        setSelectedFinnish(null)   
    
    }


  useEffect(() => {
    if (selectedFinnish && selectedEnglish) {
      

      if (selectedFinnish.english === selectedEnglish.english) {
        onMatch(true)
        handleMatchingComplete(true)
        setMatchedPairs((prev) => new Set(prev).add(selectedFinnish.english));
        // console.log("matchedPairs",matchedPairs.size)
        //  if(matchedPairs.size >= 10){
             
        //  }
      }

      setTimeout(() => {
        setSelectedFinnish(null);
        setSelectedEnglish(null);
      }, 800);
    }
  }, [selectedFinnish, selectedEnglish]);

    return (
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg relative">


      <div className="grid grid-cols-2 gap-8">
        {/* Finnish side */}
        <div>
          <h2 className="text-teal-300 font-bold mb-2">Finnish</h2>
          {quizItems && quizItems.map((item, index) => {
            const isMatched = matchedPairs.has(item.english);
            return (
              <button
                key={index}
                className={`block w-full p-2 mb-2 rounded transition duration-200 text-teal-400
                  ${
                    isMatched
                      ? "bg-teal-900 cursor-not-allowed"
                      : selectedFinnish?.finnish === item.finnish
                      ? "bg-yellow-600"
                      : "bg-gray-800 hover:bg-teal-600"
                  }`}
                onClick={() => !isMatched && setSelectedFinnish(item)}
                disabled={isMatched}
              >
                {item.finnish}
              </button>
            );
          })}
        </div>

        {/* English side */}
        <div>
          <h2 className="text-teal-300 font-bold mb-2">English</h2>
          {shuffledEnglish && shuffledEnglish.map((item, index) => {
            const isMatched = matchedPairs.has(item.english);
            return (
              <button
                key={index}
                className={`block w-full p-2 mb-2 rounded transition duration-200 text-teal-400
                  ${
                    isMatched
                      ? "bg-teal-900 cursor-not-allowed"
                      : selectedEnglish?.english === item.english
                      ? "bg-yellow-600"
                      : "bg-gray-800 hover:bg-teal-600"
                  }`}
                onClick={() => !isMatched && setSelectedEnglish(item)}
                disabled={isMatched}
              >
                {item.english}
              </button>

              
            );
          })}
        </div>
           <button
            onClick={startChallenge}
            className="m-4 bg-teal-800 text-white px-4 py-2 rounded"
          >
            Reset
          </button>
      </div>
      </div>
    )

    

}

export default GenarateMatchQuiz
