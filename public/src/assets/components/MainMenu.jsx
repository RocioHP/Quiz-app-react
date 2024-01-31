import { useContext } from 'react';
import { QuizContext } from '../helpers/Contexts.jsx';


const MainMenu = () => {
    const {gameState, setGameState} = useContext(QuizContext);
 

  return (
        <div className='container'>
        <button className='border-2 border-indigo-500 p-2 text-center rounded-full bg-indigo-100 m-10' onClick={() => {setGameState("quiz")}} >Start Quiz</button>
      
    </div>
  )
}

export default MainMenu
