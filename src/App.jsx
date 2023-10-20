import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { recipe } from "./data";
import "./App.css";

function App() {
  const [stepTracker, setStepTracker] = useState(0);
  const [subStepTracker, setSubStepTracker] = useState(0);

  const steps = recipe;
  console.log(steps);
  return (
    <>
      <h1>Step 1: Mushrooms</h1>
      <h3>{steps[1].direction[1].step}</h3>
      <text>Timer: {steps[0].direction[0].duration}</text>
    </>
  );
}

export default App;
