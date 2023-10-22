import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { recipe } from "./data";
import { pinkSauce } from "./recipes/spaghettiPinkSauce";
import "./App.css";
import { Timer } from "./components/Timer";

function App() {
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
  const [currentDirectionIndex, setCurrentDirectionIndex] = useState(0);
  const [timer, setTimer] = useState(0);

  const recipeProcess = pinkSauce;

  const handleTracker = () => {
    const currentDirection =
      recipeProcess[currentRecipeIndex].direction[currentDirectionIndex];
    const goToNextStep = () => {
      if (
        currentDirectionIndex <
        recipeProcess[currentRecipeIndex].direction.length - 1
      ) {
        setCurrentDirectionIndex((prev) => prev + 1);
      } else if (currentRecipeIndex < recipeProcess.length - 1) {
        setCurrentRecipeIndex((prev) => prev + 1);
        setCurrentDirectionIndex(0);
      }
    };

    // Check if duration exists and set a timeout
    if (
      currentDirection &&
      typeof currentDirection.durationTimer === "number"
    ) {
      setTimeout(goToNextStep, currentDirection.durationTimer * 1000); // assuming duration is in seconds
    } else {
      goToNextStep();
    }
  };
  console.log(recipeProcess);

  return (
    <>
      <img
        src={
          recipeProcess[currentRecipeIndex].direction[currentDirectionIndex].src
        }
      />

      <div>
        <h1>{recipeProcess[currentRecipeIndex].recipeIngredient}</h1>
      </div>
      <div>
        <h3>Qty: {recipeProcess[currentRecipeIndex].quantity}</h3>
      </div>
      <div>
        {
          recipeProcess[currentRecipeIndex].direction[currentDirectionIndex]
            .step
        }
      </div>
      <button onClick={handleTracker}>Next</button>
    </>
  );
}

export default App;
