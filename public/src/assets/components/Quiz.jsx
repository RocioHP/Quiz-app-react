import { useState } from "react";
import { Questions } from "../helpers/QuestionBank.js";

const Quiz = () => {
  const [currQuestion, setCurrQuestion] = useState(0);

  return (
    <div className='container'>
      <h1 className="text-xl m-4">{Questions[currQuestion].promt}</h1>
      <div className="flex flex-col">
        <button className='button-start hover:bg-blue-600'>{Questions[currQuestion].optionA}</button>
        <button className='button-start hover:bg-blue-600'>{Questions[currQuestion].optionB}</button>
        <button className='button-start hover:bg-blue-600'>{Questions[currQuestion].optionC}</button>
        <button className='button-start hover:bg-blue-600'>{Questions[currQuestion].optionD}</button>
      </div>

      <button className="button2">Next Question</button>
    </div>
  )
}

export default Quiz
