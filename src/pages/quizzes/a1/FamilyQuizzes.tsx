import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { familyData } from "../../../data/basicA1";
import UserStats from "../../../components/UserStats";
import  GenerateQuiz  from "../../../components/GenarateQuiz";

interface Family {
  english: string;
  finnish: string;
  pronunciation: string;
}


interface QuizScore {
  correct: number;
  total: number;
}

interface LeaderboardEntry {
  name: string;
  score: number;
  total: number;
}

// FamilyQuizzes Component
function FamilyQuizzes() {

  console.log(localStorage);
  // Extract the 'child' parameter from the URL using react-router-dom's useParams hook.
  // TypeScript typing ensures 'child' is either a string or undefined.
  const { child } = useParams<{ child?: string }>();

  // State to hold the current family member being quizzed, initially null.
  // Typed as Family | null to allow either a Family object or null.
  const [quizFamily, setQuizFamily] = useState<Family | null>(null);

  // State for tracking the user's quiz score (correct answers and total attempts).
  // Initialized with an object { correct: 0, total: 0 } of type QuizScore.
  const [score, setScore] = useState<QuizScore>({ correct: 0, total: 0 });

  // State for storing the leaderboard, an array of top scores.
  // Typed as LeaderboardEntry[] and initialized as an empty array.
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  // State for tracking an overall quiz score, persisted in localStorage.
  // Initialized with stored data from localStorage if available, otherwise { correct: 0, total: 0 }.
  const [quizScore, setQuizScore] = useState<QuizScore>(() => {
    // Retrieve the stored quiz score from localStorage (returns string | null).
    const storedQuizScore = localStorage.getItem("overAllQuizScore");
    // Parse the stored string to an object if it exists, otherwise return default { correct: 0, total: 0 }.
    return storedQuizScore ? JSON.parse(storedQuizScore) : { correct: 0, total: 0 };
  });

    // useEffect to load saved score and leaderboard from localStorage on component mount.
    useEffect(() => {
      // Load saved quiz score, default to { correct: 0, total: 0 } if null or invalid.
      const savedScore = JSON.parse(localStorage.getItem("sessionScore") || "null") || { correct: 0, total: 0 };
      // Load saved leaderboard, default to empty array if null or invalid.
      const savedLeaderboard = JSON.parse(localStorage.getItem("quizLeaderboard") || "null") || [];
      // Set the score state with the loaded value.
      setScore(savedScore);
      // Set the leaderboard state with the loaded value.
      setLeaderboard(savedLeaderboard);
    }, []); // Empty dependency array: runs only once on mount.

        // useEffect to save score to localStorage whenever it changes, but only if it’s non-zero.
        useEffect(() => {
          // Check if score has been updated (not just initialized at 0/0).
          if (score.correct !== 0 || score.total !== 0) {
            // Save the score as a JSON string in localStorage under "quizScore".
            localStorage.setItem("sessionScore", JSON.stringify(score));
          }
        }, [score]); // Dependency array: runs when score changes.
      

  // useEffect to save quizScore to localStorage whenever it changes.
  useEffect(() => {
    // Convert quizScore object to a JSON string and store it in localStorage under "quizscore".
    localStorage.setItem("overAllQuizScore", JSON.stringify(quizScore));
  }, [quizScore]); // Dependency array: runs when quizScore changes.



    // useEffect to save leaderboard to localStorage whenever it changes.
    useEffect(() => {
      // Save the leaderboard as a JSON string in localStorage under "quizLeaderboard".
      localStorage.setItem("quizLeaderboard", JSON.stringify(leaderboard));
    }, [leaderboard]); // Dependency array: runs when leaderboard changes.



  // Determine the key to access family data based on the URL parameter 'child'.
  // If child exists, transform it (e.g., "basic-family-quiz" -> "basicFamily"), otherwise default to "basicFamily".
  const familyTypeKey = child
    ? child
        .toLowerCase() // Convert to lowercase for consistency (e.g., "Basic-Family-Quiz" -> "basic-family-quiz").
        .replace("-quiz", "") // Remove "-quiz" suffix (e.g., "basic-family-quiz" -> "basic-family").
        .replace("basic-family", "basicFamily") // Replace "basic-family" with "basicFamily".
        .replace("extended-family", "extendedFamily") // Replace "extended-family" with "extendedFamily".
        .replace("step-family", "stepFamily") // Replace "step-family" with "stepFamily".
        .replace("marital-status", "maritalStatus") // Replace "marital-status" with "maritalStatus".
    : "basicFamily"; // Default to "basicFamily" if child is undefined.
    // console.log("familyTypeKey", familyTypeKey); // Log the determined familyTypeKey for debugging.
  // Access the family members array from familyData using familyTypeKey.
  // Cast as keyof typeof familyData to tell TypeScript the key is valid, fallback to basicFamily if not found.
  const familyMembers = (familyData[familyTypeKey as keyof typeof familyData] ||
    familyData.basicFamily) as Family[];

  // Map familyTypeKey to a quiz type string for the GenerateQuiz component.
  // Use a Record to define the mapping explicitly.
  const quizTypeMap: Record<string, string> = {
    basicFamily: "basic", // Maps "basicFamily" to "basic".
    extendedFamily: "extended", // Maps "extendedFamily" to "extended".
    stepFamily: "step", // Maps "stepFamily" to "step".
    maritalStatus: "marital", // Maps "maritalStatus" to "marital".
  };

  // Determine the quiz type based on familyTypeKey, default to "basic" if not found.
  // Cast to a union type to restrict possible values.
  const quizType = (quizTypeMap[familyTypeKey] || "basic") as "basic" | "extended" | "step" | "marital";

  // Function to start the quiz by selecting a random family member.
  const startQuiz = () => {
    // Pick a random index from the familyMembers array.
    const randomFamilyMember = familyMembers[Math.floor(Math.random() * familyMembers.length)];
    // Set quizFamily state to start the quiz with this family member.
    setQuizFamily(randomFamilyMember);
  };

  // Function to move to the next question by selecting a new random family member.
  const nextQuestion = () => {
    // Pick a random index from the familyMembers array.
    const randomFamilyMember = familyMembers[Math.floor(Math.random() * familyMembers.length)];
    // Update quizFamily state to show the next question.
    setQuizFamily(randomFamilyMember);
  };

  // Function to reset the score and leaderboard to their initial states.
  const resetScore = () => {
    // Reset score to { correct: 0, total: 0 }.
    setScore({ correct: 0, total: 0 });
    // Reset leaderboard to an empty array.
    setLeaderboard([]);
    // Reset quizScore to { correct: 0, total: 0 }.
//    setQuizScore({ correct: 0, total: 0 });
  };

    // Function to update quizScore when a quiz is completed.
  // Takes a boolean indicating if the answer was correct.
  const handleQuizComplete = (wasCorrect: boolean) => {
    // Update quizScore using the previous state.
    setQuizScore((prev) => ({
      // Increment total attempts by 1.
      total: prev.total + 1,
      // Increment correct count by 1 if wasCorrect is true, otherwise keep it the same.
      correct: wasCorrect ? prev.correct + 1 : prev.correct,
    }));
  };

  // Function to handle the user’s answer and update score/leaderboard.
  // Takes a boolean indicating if the answer was correct.
  const handleAnswer = (isCorrect: boolean) => {
    // Update score based on the previous state.
    setScore((prev) => {
      // Calculate new score: increment total, increment correct if isCorrect is true.
      const newScore = {
        correct: prev.correct + (isCorrect ? 1 : 0),
        total: prev.total + 1,
      };
      // Update leaderboard based on the previous state.
      setLeaderboard((prev) => {
        // Create a new leaderboard entry for the user with the updated score.
        const userEntry: LeaderboardEntry = {
          name: "User", // Hardcoded user name (could be dynamic in a real app).
          score: newScore.correct, // User’s correct answers.
          total: newScore.total, // User’s total attempts.
        };
        // Filter out any existing "User" entry, add the new one, sort by score, and take top 5.
        const updated = prev.filter((entry) => entry.name !== "User").concat(userEntry);
        return updated.sort((a, b) => b.score - a.score).slice(0, 5);
      });
      // Return the new score to update the state.
      return newScore;
    });

      // Update overall quiz score here:
       handleQuizComplete(isCorrect); // <-- This is where it belongs
  };

  // Render the component UI.
  return (
    <div className="min-h-screen bg-teal-50 p-6 font-['Roboto']">
      {/* Link to navigate back to the family lessons page */}
      <Link to="/beginars/family/family-members" className="text-teal-700 hover:underline mb-6 inline-block">
        ← Back to Family Lessons
      </Link>

      {/* Container for UserStats component */}
      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
        {/* Pass quizScore and handleQuizComplete to UserStats (assumed to display overall stats) */}
        <UserStats quizScore={quizScore} handleQuizComplete={handleQuizComplete} />
      </div>

      {/* Main quiz container */}
      <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        {/* Display the quiz type in the header (e.g., "BASIC FAMILY QUIZ" or "MARITAL STATUS QUIZ") */}
        <h3 className="text-xl font-semibold text-teal-700 mb-4">
          {quizTypeMap[familyTypeKey] === "marital"
            ? "MARITAL STATUS"
            : `${quizTypeMap[familyTypeKey].toUpperCase()} FAMILY`}{" "}
          QUIZ
        </h3>

        {/* Show the current score and percentage */}
        <p className="text-gray-600 mb-4">
          Score: {score.correct}/{score.total} (
          {/* Calculate percentage, default to 0 if total is 0 to avoid NaN */}
          {((score.correct / score.total) * 100 || 0).toFixed(1)}%)
        </p>

        {/* Conditional rendering: show Start Quiz button or the quiz itself */}
        {!quizFamily ? (
          <button
            onClick={startQuiz} // Trigger startQuiz when clicked
            className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
          >
            Start Quiz
          </button>
        ) : (
          <GenerateQuiz
            item={quizFamily}
            optionsPool={familyMembers} // <- This changes based on quiz type now!
            onNext={nextQuestion}
            onAnswer={handleAnswer}
            onReset={resetScore}
            type={quizType}
            // quizScore = {quizScore}
            //handleQuizComplete={handleQuizComplete}
          />

        )}

        {/* Leaderboard section */}
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-teal-700 mb-2">Leaderboard</h4>
          {/* Show message if leaderboard is empty, otherwise list entries */}
          {leaderboard.length === 0 ? (
            <p className="text-gray-600">No scores yet.</p>
          ) : (
            <ul className="text-gray-600">
              {/* Map through leaderboard entries and display them */}
              {leaderboard.map((entry, index) => (
                <li key={index}>
                  {entry.name}: {entry.score}/{entry.total} (
                  {/* Calculate and display percentage for each entry */}
                  {((entry.score / entry.total) * 100).toFixed(1)}%)
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default FamilyQuizzes;

