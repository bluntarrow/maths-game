import { createContext, useContext, useState } from "react";
import { SettingsContext } from "./settings";

export const TimeContext = createContext();

export const TimeContextProvider = ({ children }) => {
  const [settings] = useContext(SettingsContext);
  const settingsTime = settings[1].value;
  const [time, setTime] = useState(settingsTime);

  const reduceTime = () => {
    if (time.seconds > 0) {
      setTime({
        minutes: time.minutes,
        seconds: time.seconds--,
      });
    } else {
      setTime({
        minutes: time.minutes--,
        seconds: time.seconds,
      });
      setTime({
        minutes: time.minutes,
        seconds: (time.seconds += 59),
      });
    }
  };

  const Timer = (end) => {
    setTimeout(() => {
      const timer = setInterval(() => {
        if (time.minutes == 0 && time.seconds == 0) {
          clearInterval(timer);
        } else {
          reduceTime();
        }
      }, 1000);
      if (end) {
        clearInterval(timer);
      }
    }, 1);
  };

  return (
    <TimeContext.Provider
      value={[time, Timer]}
      children={children}
    />
  );
};
