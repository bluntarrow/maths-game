import { createContext, useState } from "react";

export const SettingsContext = createContext();

export const SettingsContextProvider = ({ children }) => {
  const [settings, setSettings] = useState([
    { name: "3s Countdown", value: false },
    { name: "Timer", value: { minutes: 1, seconds: 0 } },
    { name: "High scores", value: true },
  ]);

  return <SettingsContext.Provider value={[settings, setSettings]} children={children} />;
};
