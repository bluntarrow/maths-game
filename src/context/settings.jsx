import { createContext, useState } from "react";

export const SettingsContext = createContext();

export const SettingsContextProvider = ({ children }) => {
  const [settings, setSettings] = useState([
    { name: "3s Countdown", value: false },
    { name: "Timer", value: { minutes: 1, seconds: 30 } },
    // { name: "Number Range", value: { min: 1, max: 100 } },
    // { name: "High scores", value: true },
  ]);

  return <SettingsContext.Provider value={[settings, setSettings]} children={children} />;
};
