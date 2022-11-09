import { createContext, useState, useEffect } from "react";

export const ScoresContext = createContext();

export const ScoresContextProvider = ({ children }) => {
  const [scores, setScores] = useState([
    { name: "Addition", value: [] },
    { name: "Subtraction", value: [] },
    { name: "Multiplication", value: [] },
    { name: "Division", value: [] },
  ]);

  const updateScore = (score, location) => {
    let sc = scores;
    switch (location) {
      case "/games/addition":
        sc[0].value.push(score);
        break;
      case "/games/subtraction":
        sc[1].value.push(score);
        break;
      case "/games/multiplication":
        sc[2].value.push(score);
        break;
      case "/games/division":
        sc[3].value.push(score);
        break;

      default:
        break;
    }
    setScores([...sc]);
  };

  useEffect(() => {
    const Scores = JSON.parse(localStorage.getItem("Scores"));
    if (Scores) {
      setScores(Scores);
    } else {
      localStorage.setItem("Scores", JSON.stringify(scores));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Scores", JSON.stringify(scores));
  }, [scores]);

  return (
    <ScoresContext.Provider value={[scores, updateScore]} children={children} />
  );
};
