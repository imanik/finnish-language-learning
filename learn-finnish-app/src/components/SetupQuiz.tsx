          import React, { useState, useEffect } from "react";
          import { useParams } from "react-router-dom";
          import UserStats from '../components/UserStats';
          import GenerateQuiz from './GenarateQuiz';
          import GenerateHardQuiz from './GenerateHardQuiz';
          import GenarateMatchQuiz from "./GenarateMatchQuiz";
          import GenerateListeningQuiz from "./GenarateListeningQuiz";
          import { useQuiz } from "../contexts/QuizContext";
          import PageWrapper from "./PageWrapper";
          import { BuildingOffice2Icon } from "@heroicons/react/24/solid";
          import GenarateDailyChallengeTwo from "./daily/GenarateDailyChallengeTwo";
          


          interface QuizScore {
            correct: number;
            total: number;
          }

          interface LeaderboardEntry {
            name: string;
            score: number;
            total: number;
          }


          // Define the structure of a quiz item (vocabulary term)
          interface QuizItem {
            english: string;
            finnish: string;
            pronunciation?: string; // optional
          }


          // Props for SetupQuizProps component — made generic using <T extends QuizItem>
          interface SetupQuizProps<T extends QuizItem> {
            items : T[]; // Current quiz question item
            quizType?: string; // Optional quiz type, not yet used
            title?: string; // Optional title for the quiz
          }

          // Main GenerateQuiz functional component with generic type <T>
          function SetupQuiz<T extends QuizItem>({items,quizType,title,}: SetupQuizProps<T>) {

            const {child} = useParams<{child?: string}>();
            
            // const keyType = child ?
              if (child && child.includes("intermediate")){
                  quizType = "intermediate"
                  title = (quizType === "intermediate" ? "Matching " : "Basic ");

              }
              else if(child && child.includes("listening")){
                  quizType = "listening"
                  title = (quizType === "listening" ? "Listening " : "Basic ")
              }
 
              const [quizItem, setQuizItem] = useState<QuizItem | null>(null); // Current quiz question item
              const [score, setScore] = useState<QuizScore>({correct:0, total:0});
              
              const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>(() => {
                const saved = localStorage.getItem("quizLeaderboard");
                const parsed: LeaderboardEntry[] = saved ? JSON.parse(saved) : [];
                // console.log("Loaded leaderboard from localStorage", parsed);
                return parsed;
              });


              const { quizScore, setQuizScore } = useQuiz();

              // Load session score and leaderboard on mount
                useEffect(() => {
                  const savedScore = JSON.parse(localStorage.getItem("overallQuizScore") || "null") || { correct: 0, total: 0 };
                  // const savedLeaderboard = JSON.parse(localStorage.getItem("quizLeaderboard") || "null") || [];
                  // console.log("Loaded leaderboard from localStorage", savedLeaderboard);
                  setScore(savedScore);
                  // setLeaderboard(savedLeaderboard);
                  // console.log("SetupQuiz UseEffect", score, leaderboard, quizScore);
                }, []);
              
                // Save session score when it changes (non-zero)
                useEffect(() => {
                  if (score.correct !== 0 || score.total !== 0) {
                    localStorage.setItem("sessionScore", JSON.stringify(score));
                  }
                }, [score]); // Added dependency array
              
              
                // Save overall quizScore when it changes
                useEffect(() => {
                  localStorage.setItem("overAllQuizScore", JSON.stringify(quizScore));
                }
              , [quizScore]); // Added dependency array
              
                // Save leaderboard when it changes
                useEffect(() => {
                  localStorage.setItem("quizLeaderboard", JSON.stringify(leaderboard));
                  
                }
              , [leaderboard]); // Added dependency array

              const startQuiz = () => {
                const randomIndex = Math.floor(Math.random() * items.length);
                setQuizItem(items[randomIndex]);
                setScore({ correct: 0, total: 0 }); // Reset score when starting a new quiz
              }

              const nextQuestion = () => {
                const randomIndex = Math.floor(Math.random() * items.length);
                setQuizItem(items[randomIndex]);
              }

              
              const handleQuizComplete = (wasCorrect: boolean) => {
                setQuizScore((prev) => ({
                  total: prev.total + 1,
                  correct: wasCorrect ? prev.correct + 1 : prev.correct,
                }));
              };

              const resetScore = () => {
                setScore({ correct: 0, total: 0 });
                // setLeaderboard([]); // Reset leaderboard if needed
                // setQuizScore({ correct: 0, total: 0 }); // Reset overall quiz score
              };
              const handleAnswer = (isCorrect: boolean) => {
                setScore((prev) => {
                  const newScore = {
                    correct: prev.correct + (isCorrect ? 1 : 0),
                    total: prev.total + 1,
              };
                
                    // Update leaderboard here in the same cycle
                    setLeaderboard((prevLeaderboard) => {
                      // console.log("Leaderboard before update", prevLeaderboard);
                      const userEntry: LeaderboardEntry = {
                        name: "User",
                        score: newScore.correct,
                        total: newScore.total,
                      };
                      const updated = prevLeaderboard
                        .filter((entry) => entry.name !== "User")
                        .concat(userEntry)
                        .sort((a, b) => b.score - a.score)
                        .slice(0, 5);
                
                      return updated;
                    });
                
                    return newScore;
                  });
                };
            

            return (
<div>
    
      <UserStats quizScore={quizScore} handleQuizComplete={handleQuizComplete} />
    

    <PageWrapper title="Quiz">
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg border border-teal-800 p-4 mb-6">
        <h3 className="text-xl font-semibold text-teal-200 mb-4">
          {quizType ? (title?.toUpperCase() || "QUIZ") : "BASIC"} QUIZ
        </h3>

        <p className="text-teal-300 mb-4">
          Score: {score.correct}/{score.total} (
          {((score.correct / score.total) * 100 || 0).toFixed(1)}%)
        </p>

        {!quizItem ? (
          <button
            onClick={startQuiz}
            className="bg-teal-300 text-teal-900 px-4 py-2 rounded hover:bg-teal-700 hover:text-white transform 
            hover:scale-110 transition duration-200"
          >
            Start Quiz
          </button>
        ) : (
          <>
            {quizType === "hard" ? (
              <GenerateHardQuiz
                item={quizItem}
                onNext={nextQuestion}
                onAnswer={handleAnswer}
                handleQuizComplete={handleQuizComplete}
              />
            ) : quizType === "basic" ? (
              <GenerateQuiz
                item={quizItem}
                optionsPool={items}
                onNext={nextQuestion}
                onAnswer={handleAnswer}
                onReset={resetScore}
                handleQuizComplete={handleQuizComplete}
              />
            ) : quizType === "intermediate" ? (
              <GenarateMatchQuiz 
                items={items}
                onMatch={handleAnswer}
                handleMatchingComplete={handleQuizComplete}
                />
            ) : (
              <GenerateListeningQuiz
                item={quizItem}
                optionsPool={items}
                onNext={nextQuestion}
                onAnswer={handleAnswer}
                onReset={resetScore}
                handleQuizComplete={handleQuizComplete}
              />
            )}
          </>
        )}

        <div className="mt-6">
          <h4 className="text-lg font-semibold text-cyan-300 mb-2">Leaderboard</h4>
          {leaderboard.length === 0 ? (
            <p className="text-cyan-400">No scores yet.</p>
          ) : (
            <ul className="text-gray-600">
              {leaderboard.map((entry, index) => (
                <li key={index}>
                  {entry.name}: {entry.score}/{entry.total} (
                  {((entry.score / entry.total) * 100).toFixed(1)}%)
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </PageWrapper>
    </div>
 
);
                    }
                    
                    
            export default SetupQuiz;
