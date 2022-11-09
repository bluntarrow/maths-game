import { createContext, useContext, useState } from "react";
import { SettingsContext } from "./settings";

export const TimeContext = createContext();

export const TimeContextProvider = ({ children }) => {
  const [settings] = useContext(SettingsContext);
  const settingsTime = {
    minutes: settings[1].value.minutes,
    seconds: settings[1].value.seconds,
  };
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

  const resetTime = () => {
    setTime({
      minutes: settings[1].value.minutes,
      seconds: settings[1].value.seconds,
    });
  };

  return (
    <TimeContext.Provider value={[time, reduceTime, resetTime]} children={children} />
  );
};
