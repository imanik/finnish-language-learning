import React, {useState} from 'react';
import UserStats from './UserStats';
import Beginars from './Beginars';
import Greetings from './Greetings';
import Numbers from './Numbers';
import Colors from './Colors';
import Days from './Days';
import Months from './Months';
import Grammars from './Grammars';
import Profile from './backend/profile';
import Login from './backend/Login';
import SignupUser from './backend/Signup';
import { useQuiz } from './../contexts/QuizContext'; // Make sure to import useQuiz
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import DailyLeaderboard from './daily/DailyLeaderboard';
import LearningClock from './LearningClock';
import ColorBounceVocabulary from './ColorBounceVocabulary';

function MainContent() {

  // Get quizScore and handleQuizComplete directly from the context
  const { quizScore, handleQuizComplete } = useQuiz();


  const [showSignup, setShowSignup] = useState<boolean>(false)
  const {user} = useAuth()

  const {theme} = useTheme();
  
    let containerClass = "min-h-screen p-6 grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center font-['Roboto']"
  
    if(theme === 'light'){
        containerClass += " bg-teal-50";
    }else{
     containerClass += ' bg-gray-900'
      
    }


  return (
    <div className={containerClass}>
      <h1 className="text-4xl font-bold text-teal-500 mb-8 col-span-full text-center">
        Welcome {user ? user.name : 'Guest'} to Finnish Learning
      </h1>
     {/* <div className={containerClass}> */}
        {/* Directly using the context's quizScore and handleQuizComplete */}
        <UserStats quizScore={quizScore} handleQuizComplete={handleQuizComplete} />
      {/* </div> */}
      <Beginars />
      <Profile />
      { showSignup ? (
        <SignupUser onSwitch={() => setShowSignup(false)} />
      ) : (
        
        user ? (
            // <DailyLeaderboard />
            <Login onSwitch={() => setShowSignup(true)} />
          ) : (
            <Login onSwitch={() => setShowSignup(true)} />
          )
      )}
      <Numbers />
      <Greetings />
      <LearningClock />
      <ColorBounceVocabulary />
      {/* <Colors /> */}
      <Days />
      <Months />
      <Grammars />
    </div>
  );
}

export default MainContent;
