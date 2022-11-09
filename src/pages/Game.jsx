import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SettingsContext } from "../context/settings";

import { mdiMinus, mdiPlus, mdiDivision, mdiClose, mdiClock } from "@mdi/js";
import Score from "../components/game/Score";
import PlayArea from "../components/game/PlayArea";
import Splash from "../components/game/Splash";
import { TimeContext } from "../context/timer";
import { ScoresContext } from "../context/score";

const Game = () => {
  const { game } = useParams();
  const navigate = useNavigate();
  const [settings] = useContext(SettingsContext);
  const [time] = useContext(TimeContext);
  const [sc, updateScore] = useContext(ScoresContext);

  const [ans, setAns] = useState("");
  const [inp, setInp] = useState("");
  const [score, setScore] = useState(0);
  const [started, setStarted] = useState(!settings[0].value);

  const [num1, setNum1] = useState("-");
  const [num2, setNum2] = useState("-");
  const [symbol, setSymbol] = useState(mdiClock);

  const gameFunc = () => {
    let num1 = Math.round(Math.random() * 97) + 3;
    let num2 = Math.round(Math.random() * 97) + 3;

    const setNums = () => {
      setNum1(num1);
      setNum2(num2);
    };
    switch (game) {
      case "addition":
        setNums();
        setSymbol(mdiPlus);
        setAns(eval(`${num1}+${num2}`));
        break;
      case "subtraction":
        if (num1 > num2) {
          setNums();
          setSymbol(mdiMinus);
          setAns(eval(`${num1}-${num2}`));
        } else {
          gameFunc();
        }
        break;
      case "multiplication":
        setNums();
        setSymbol(mdiClose);
        setAns(eval(`${num1}*${num2}`));
        break;
      case "division":
        if (
          num1 % num2 == 0 &&
          num1 > 1 &&
          num2 > 1 &&
          num1 != num2 &&
          num1 / num2 > 2
        ) {
          setNums();
          setSymbol(mdiDivision);
          setAns(eval(`${num1}/${num2}`));
        } else {
          gameFunc();
        }
        break;

      default:
        break;
    }
  };

  const [ansState, setAnsState] = useState(null);

  const evaluate = (e) => {
    e.preventDefault();
    if (inp == ans) {
      gameFunc();
      setInp("");
      setScore(score + 1);
      setAnsState("correct");
      setTimeout(() => {
        setAnsState(null);
      }, 500);
    } else {
      setAnsState("wrong");
      setTimeout(() => {
        setAnsState(null);
      }, 500);
    }
  };

  useEffect(() => {
    setTimeout(
      () => {
        gameFunc();
        setStarted(true);
      },
      !settings[0].value ? 0 : 3000
    );
  }, []);

  useEffect(() => {
    if (time.minutes == 0 && time.seconds == 1) {
      setTimeout(() => {
        updateScore(score, location.pathname);
        navigate("/games");
      }, 1000);
    }
  }, [time]);

  return (
    <div className="h-screen w-screen">
      <div className="py-20 md:py-40 max-w-5xl mx-auto w-full h-full grid grid-cols-5 gap-10 px-4 lg:px-0">
        <Score score={score} className={"md:hidden"} />
        <PlayArea
          num1={num1}
          num2={num2}
          symbol={symbol}
          evaluate={evaluate}
          inp={inp}
          setInp={setInp}
          ansState={ansState}
        />
        <Score score={score} className={"hidden md:flex"} />
        <Splash started={started} />
      </div>

      <footer className="capitalize text-gray-50 w-full fixed bottom-0 left-0 bg-gray-800 py-2 text-center">
        {game}
      </footer>
    </div>
  );
};

export default Game;
