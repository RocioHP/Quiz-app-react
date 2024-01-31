import { useState } from "react";
import { Questions } from "../helpers/QuestionBank.js";

const Quiz = () => {
  const [currQuestion, setCurrQuestion] = useState(0);

  return (
    <div className='container'>
      <h1 className="text-xl m-4">{Questions[currQuestion].promt}</h1>
      <div className="flex flex-col">
        <button className='border-2 w-10 border-blue-700 m-1 p-1 text-center rounded-full bg-blue-200'>{Questions[currQuestion].optionA}</button>
        <button className='border-2 w-10 border-blue-700 m-1 p-1 text-center rounded-full bg-blue-200'>{Questions[currQuestion].optionB}</button>
        <button className='border-2 w-10 border-blue-700 m-1 p-1 text-center rounded-full bg-blue-200'>{Questions[currQuestion].optionC}</button>
        <button className='border-2 w-10 border-blue-700 m-1 p-1 text-center rounded-full bg-blue-200'>{Questions[currQuestion].optionD}</button>
      </div>
    </div>
  )
}

export default Quiz
