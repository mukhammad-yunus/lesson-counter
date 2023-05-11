import { useState } from "react";
import GetNumber from "./GetNumber";
import InfoDisplay from "./InfoDisplay";
import Congrats from "./Congrats";

function App() {
  const [count, setCount] = useState();
  const [lesson, setLesson] = useState(0);
  const [isNumber, setIsNumber] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  function handleSubmit() {
    if (count) {
      setIsNumber(true);
      setIsDisabled(true);
      setIsFinished(false);
      setLesson(0);
    }
  }
  function changeNumber() {
    setIsNumber(false);
    setIsDisabled(false);
    setIsFinished(false);
    setCount("");
    setLesson(0);
  }

  function add() {
    if (lesson < count) {
      setLesson((prev) => prev + 1);
    }
    if (lesson == count - 1) {
      setTimeout(() => {
        setIsDisabled(false);
        setIsNumber(false);
        setIsFinished(true);
        setCount("");
      }, 2000);
    }
  }
  return (
    <>
      <GetNumber
        count={count}
        setCount={setCount}
        handleSubmit={handleSubmit}
        isNumber={isNumber}
        changeNumber={changeNumber}
        isDisabled={isDisabled}
      />
      {isNumber && <InfoDisplay lesson={lesson} count={count} add={add} />}
      {isFinished && <Congrats lesson={lesson} />}
    </>
  );
}

export default App;
