import { useContext } from 'react';
import { QuizContext } from '../helpers/Contexts.jsx';
import { Questions } from "../helpers/QuestionBank.js";

const EndScreen = () => {
  const { score, setScore, setGameState, gameState } = useContext(QuizContext);

  const restartQuiz = () => {
    setGameState("menu");
    score(0);
    
    
  }


  return (
    <div className='container' >
      <h1>Quiz finished</h1>
      <h3> { score } / { Questions.length } </h3>
      <button className='button-start' onClick={restartQuiz}> Restart Quiz</button>
    </div>
  )
}

export default EndScreen
