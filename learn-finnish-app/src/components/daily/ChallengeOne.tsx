import React, { useState} from "react";
import GenerateDailyChallengeOne from "./GenarateDailyChallengeOne";
import PageWrapper from "../PageWrapper";
import GenarateDailyChallengeTwo from "./GenarateDailyChallengeTwo";
import GenarateDailyChallengeThree from "./GenarateDailyChallengeThree";



        interface ChallengeScore {
            correct: number;
            total: number;
        }

        interface ChallengeItem {
            english: string;
            finnish: string;
            pronunciation?: string; // optional
        }

        interface ChallengeProps<T extends ChallengeItem> {
            items : T[]; // Current quiz question item
            quizType?: string; // Optional quiz type, not yet used
            title?: string; // Optional title for the quiz
            onComplete?: (success: boolean)=> void
        }

function ChallengeOne<T extends ChallengeItem>({items,quizType,title,onComplete}: ChallengeProps<T>){

    const [quizItem, setQuizItem] = useState<ChallengeItem | null>(null); // Current quiz question item
    const [score, setScore] = useState<ChallengeScore>({correct:0, total:0});
    const [activeChallenge, setActiveChallenge] = useState<number>(1)

   // console.log(items)

    const startQuiz = () => {
        const randomIndex = Math.floor(Math.random() * items.length)
        setQuizItem(items[randomIndex])
        setScore({correct:0, total:0})
    }

    const nextQuestion = () => {
        const randomIndex = Math.floor(Math.random()* items.length)
        setQuizItem(items[randomIndex])
    }

    const handleAnswer = (isCorrect:boolean) => {
        setScore((prev)=>{
            const newScore = {
                correct: prev.correct + (isCorrect ? 1 : 0),
                total: prev.total + 1
            }

            return newScore; // ✅ need to return this
        })
    }

    const resetScore = () => {
                setScore({ correct: 0, total: 0 });
        };

    
        const handleQuizComplete = (wasCorrect:boolean) => {  
       // unlock next challenge if score 7/10

       console.log('score',score)

       if(score.total < 9) return

      const passed = score.correct >= 7;
    if (passed) {
      console.log("✅ Unlock next challenge!");
      setActiveChallenge((prev)=> prev + 1)
    } else {
      console.log("❌ Failed, restarting challenge...");
      resetScore();
      setActiveChallenge(1)
    }

    }


        return (

            <PageWrapper title="Quiz">

                <div className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
                            <h3 className="text-xl font-semibold text-teal-200 mb-4">
                                {quizType ? (title?.toUpperCase() || "QUIZ") : "BASIC"} QUIZ
                            </h3>
                    
                        <p className="text-teal-300 mb-4">
                        Score: {score.correct}/{score.total} ({((score.correct / score.total) * 100 || 0).toFixed(1)}%)
                        </p>

                        {!quizItem ? (
                            <button
                                onClick={startQuiz}
                                className="bg-teal-300 text-teal-900 px-4 py-2 rounded hover:bg-teal-700 hover:text-white transform hover:scale-110 transition duration-200"
                                    >
                                        Start Quiz
                            </button>
                        ) : (
                            <>

                            {activeChallenge === 1 && (
                                 
                                 <GenarateDailyChallengeThree />
                                 
                            )}

                            {activeChallenge === 2 && (
                                 
                                 <GenarateDailyChallengeTwo />
                                 
                            )}

                            
                            {activeChallenge === 3 && (
                                // <p className="text-white">YOU COMPLETE CHALLENGE 1</p>  
                                <GenerateDailyChallengeOne
                                item={quizItem}
                                optionsPool={items}
                                onNext={nextQuestion}
                                onAnswer={handleAnswer}
                                onReset={resetScore}
                                handleQuizComplete={handleQuizComplete}
                                />                         
                            )}
                            </>

                        )

                    
                        }
                </div>

            </PageWrapper>
        )


}

export default ChallengeOne