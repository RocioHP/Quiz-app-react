import { useState } from "react";
import { useContext } from "react";
import MainMenu from "./assets/components/MainMenu";
import Quiz from "./assets/components/Quiz";
import EndScreen from "./assets/components/EndScreen";
import { QuizContext } from "./assets/helpers/Contexts";

function App() {
  const [gameState, setGameState] = useState("menu");
  
  return (
    <div className="text-center">
      <h1>Quiz App</h1>

      <QuizContext.Provider value={{ gameState, setGameState }}>
      {gameState === "menu" && <MainMenu />}
      {gameState === "quiz" && <Quiz />}
      {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>

    </div>
    

    
  );
}

export default App;