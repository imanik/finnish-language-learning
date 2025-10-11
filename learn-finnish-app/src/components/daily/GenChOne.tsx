



              import React, { useEffect, useState } from "react";

              import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
              
                      

                      interface ChallengeItem {
                          english: string,
                          finnish: string,
                          pronunciation?: string
                      }

                      interface ChallengeState<T extends ChallengeItem>{
                          question: string,
                          correctAnswer: string,
                          shuffledOptions: T[]

                      }

                      interface GenarateDailyChallengeOneProps<T extends ChallengeItem> {
                          item: T,
                          optionsPool: T[],
                          onNext: () => void ,
                          onAnswer: (isCorrect:boolean)=>void,
                          onReset: ()=>void,
                          handleQuizComplete: (wasCorrect:boolean) => void


                      }



                      function GenarateDailyChallengeOne<T extends ChallengeItem>({item, optionsPool, onNext, onAnswer, onReset, handleQuizComplete} : GenarateDailyChallengeOneProps<T>){

                          const [selected, setSelected] = useState<string | null>(null)
                          const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
                          const [challengeState, setChallengeState] = useState<ChallengeState<T> | null>(null)
                          const [activeQuestion, setActiveQuestion] = useState<number>(0);
                          const [animate, setAnimate] = useState<string>("enter");
                          const [currentQuestion, setCurrentQuestion] = useState<number>(1)


                          useEffect (() => {
                              const correctAnswer = item
                              const incorrectOptions: T[] = []
                              const used  = new Set([correctAnswer.finnish])
                              
                              while(incorrectOptions.length < 3){

                                  const rand = Math.floor(Math.random() * optionsPool.length)
                                  const opt = optionsPool[rand]
                                  if(!used.has(opt.finnish)){
                                      incorrectOptions.push(opt)
                                      used.add(opt.finnish)
                                  }

                              }

                              const shuffledOptions = [...incorrectOptions, correctAnswer].sort(() => Math.random() - 0.5)

                              setChallengeState({
                                  question: correctAnswer.english,
                                  correctAnswer: correctAnswer.finnish,
                                  shuffledOptions
                              })

                              // Reset selection and answer correctness when question changes
                                  setSelected(null);
                                  setIsCorrect(null);

                          },[item, optionsPool])
                          
                          const handleSubmit = () => {
                              setActiveQuestion(1)

                              if(!challengeState || selected === null) return

                              const isAnswerCorrect = selected === challengeState.correctAnswer

                              setIsCorrect(isAnswerCorrect)
                              onAnswer(isAnswerCorrect)
                              handleQuizComplete(isAnswerCorrect)

                          }

                          const handleNextQuestion = () => {
                          setAnimate("exit");
                          
                          setTimeout(() => {
                              onNext(); // trigger your parent next question logic
                              setAnimate("enter");
                              setActiveQuestion(0) 
                              setCurrentQuestion((prev)=> prev + 1)                
                          }, 600); // match duration below
                          };

                          if (!challengeState) return null;


                  return (
              <div>

              <div
    className={`transition-all duration-300 ease-in-out 
      ${animate === "enter" ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
    `}
  >
    <h3 className="text-xl font-semibold text-teal-200 mb-4">
      What is the meaning of "<span className="text-xl text-red-500">{challengeState.question}</span>"?
    </h3>

    {challengeState.shuffledOptions.map((option, index) => (
      <div
        key={index}
        className={`bg-gray-900 rounded-xl shadow-xl p-6 max-w-xl mx-auto mb-6 
                  ${activeQuestion && option.finnish === challengeState.correctAnswer ? 'border border-teal-900' : ''}
                  transition transform duration-300 ease-out
                  hover:-translate-y-1 hover:scale-105`}
      >
        <label className="block">
          <input
            type="radio"
            name="languageQuiz"
            value={option.finnish}
            checked={selected === option.finnish}
            onChange={() => setSelected(option.finnish)}
            disabled={isCorrect !== null}
            className="mr-2"
          />
          <span className="text-teal-200">{option.finnish}</span>
          <span className="text-gray-400 ml-2">
            ({option.pronunciation ?? ""})
          </span>
        </label>
      </div>
    ))}




              {/* Submit / Feedback / Next Buttons */}
              {isCorrect === null ? (
                  // Show Submit only if question hasn't been answered
                  <button
                  onClick={handleSubmit}
                  className="mt-4 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700 transform hover:scale-110 transition duration-200"
                  >
                  Submit
                  </button>
              ) : (
                  // If question is answered, show feedback and navigation buttons
                  <div className="mt-4">
                  <p className={isCorrect ? "text-green-600" : "text-red-600"}>
                      {isCorrect
                      ? "Correct!"
                      : `Wrong! The correct answer is "${challengeState.correctAnswer}".`}
                  </p>
                  <button
                      onClick={handleNextQuestion}
                      className="mt-2 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700 m-4 transition transform hover:scale-110"
                      >
                      Next Question
                      </button>

                  <button
                      onClick={onReset}
                      className="m-4 bg-red-500 text-white px-4 py-2 rounded"
                  >
                      Reset Score
                  </button>

                  </div>

                  
                
              )}

              
              </div>
                <p className="mt-8 text-lg">
                <span className="text-teal-300 ml-2">{10-currentQuestion}</span>
                <ArrowDownCircleIcon className="h-5 w-5 animate-pulse text-cyan-400" />{" "}
                  </p>
              </div>
          );
          }

                      export default GenarateDailyChallengeOne