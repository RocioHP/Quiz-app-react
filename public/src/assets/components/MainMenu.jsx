import { useContext } from 'react';
import { QuizContext } from '../helpers/Contexts.jsx';


const MainMenu = () => {
    const {gameState, setGameState} = useContext(QuizContext);
 

  return (
        <div className='container'>
        <button className='border-2 border-blue-700 p-2 text-center rounded-full bg-blue-200 m-10 hover:bg-blue-500' onClick={() => {setGameState("quiz")}} >Start Quiz</button>
      
    </div>
  )
}

export default MainMenu
