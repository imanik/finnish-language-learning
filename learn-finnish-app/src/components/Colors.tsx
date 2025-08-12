    // src/components/Colors.js
    import React, { useState, useEffect } from 'react';
    import { Link } from "react-router-dom";

    function Colors() {
    const [showAnswer, setShowAnswer] = useState(false);
    const [userGuess, setUserGuess] = useState('');
    const [feedback, setFeedback] = useState('');
    const [currentColor, setCurrentColor] = useState(0);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(10);
 
    // const [userName, setUserName] = useState('');

    const colors = [
        { english: 'Red', finnish: 'Punainen', color: 'bg-red-500' },
        { english: 'Blue', finnish: 'Sininen', color: 'bg-blue-500' },
        { english: 'Yellow', finnish: 'Keltainen', color: 'bg-yellow-500' },
        { english: 'Green', finnish: 'Vihreä', color: 'bg-green-500' },
        { english: 'Black', finnish: 'Musta', color: 'bg-black' },
    ];

    const correctAnswer = colors[currentColor].finnish.toLowerCase();

    useEffect(() => {
        if (timeLeft > 0) {
        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timer);
        } else {
        setFeedback('Time’s up!');
        // if (score > 0) promptForNameAndUpdateLeaderboard(score);
        setTimeout(() => {
            setCurrentColor(Math.floor(Math.random() * colors.length));
            setUserGuess('');
            setFeedback('');
            setTimeLeft(10);
        }, 1500);
        }
    }, [timeLeft, score]);

    // useEffect(() => {
    //     localStorage.setItem('finnishQuizLeaderboard', JSON.stringify(leaderboard));
    // }, [leaderboard]);

    const checkAnswer = () => {
        if (userGuess.toLowerCase() === correctAnswer) {
        setScore(score + 1);
        setFeedback(`Correct! "${colors[currentColor].english}" in Finnish is "${colors[currentColor].finnish}".`);
        setTimeout(() => {
            setCurrentColor(Math.floor(Math.random() * colors.length));
            setUserGuess('');
            setFeedback('');
            setTimeLeft(10);
        }, 1500);
        } else {
        setFeedback('Try again!');
        }
    };



    // const promptForNameAndUpdateLeaderboard = (newScore: number) => {
    //     const name = prompt('Enter your name for the leaderboard:', userName || 'Player');
    //     if (name && newScore > 0) {
    //     const updatedLeaderboard = [...leaderboard, { name, score: newScore }]
    //         .sort((a, b) => b.score - a.score)
    //         .slice(0, 5);
    //     setLeaderboard(updatedLeaderboard);
    //     setUserName(name); // Save name for next entry
    //     }
    // };

    return (
         <div className="bg-gradient-to-br from-teal-50 to-teal-200 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">Finnish Colors</h2>
        

      
      <section className="bg-white rounded-lg border border-gray-300 p-4 mb-6">
     

        
        
        <ul className="list-none mb-4">
            {colors.map((color, index) => (
            <li key={index} className="flex items-center mb-2">
                <span className={`w-6 h-6 mr-2 ${color.color} rounded`}></span>
                <span>{color.english} - {showAnswer || index !== 0 ? color.finnish : '???'}</span>
            </li>
            ))}
        </ul>
        </section>
      

        <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-900 transform hover:scale-110 transition duration-200 mb-4"
        >
            {showAnswer ? 'Hide Answers' : 'Show Answers'}
        </button>

        <h3 className="text-xl font-medium text-gray-800 mb-2">
            Quiz: What’s "{colors[currentColor].english}" in Finnish?
        </h3>
        <p className="text-gray-700 mb-2">Time left: {timeLeft}s</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div
            className="bg-teal-500 h-2.5 rounded-full transition-all duration-1000"
            style={{ width: `${(timeLeft / 10) * 100}%` }}
            ></div>
        </div>
        <div className="flex space-x-2 mb-4">
            <input
            type="text"
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            placeholder="Type your guess"
            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
            onClick={checkAnswer}
            className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-900 transform hover:scale-110 transition duration-200"
            >
            Check Answer
            </button>
        </div>
        <p className={`mb-2 ${feedback.includes('Correct') ? 'text-green-600' : 'text-red-600'}`}>
            {feedback}
        </p>
        
        <Link to="/beginars/color/rainbow">
            <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-900 transform hover:scale-110 transition duration-200">
                Learn More
            </button>
        </Link>



        </div>
    );
    }

    export default Colors;