import { useState } from "react";
import { useContext } from 'react';
import { QuizContext } from '../helpers/Contexts.jsx';
import { Questions } from "../helpers/QuestionBank.js";

const Quiz = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);
 

  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore( score + 1 )
    };
    
    setCurrQuestion(currQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore( score + 1 ) 
    }
    setGameState("endScreen")
  };


  return (
    <div className='container'>
      <h1 className="text-xl m-4">{Questions[currQuestion].promt}</h1>
      <div className="flex flex-col">
        <button onCLick={() => setOptionChosen("A")} className='button-start hover:bg-blue-600'>{Questions[currQuestion].optionA}</button>
        <button onCLick={() => setOptionChosen("B")} className='button-start hover:bg-blue-600'>{Questions[currQuestion].optionB}</button>
        <button onCLick={() => setOptionChosen("C")} className='button-start hover:bg-blue-600'>{Questions[currQuestion].optionC}</button>
        <button onCLick={() => setOptionChosen("D")} className='button-start hover:bg-blue-600'>{Questions[currQuestion].optionD}</button>
      </div>
      
      {currQuestion == Questions.length -1 ? (
        <button  onClick={ finishQuiz } className="button2">Finish Quiz</button>
      ) : (<button onClick={nextQuestion} className="button2">Next Question</button>)
      }
      
    </div>
  )
}

export default Quiz
