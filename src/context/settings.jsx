import { createContext, useState } from "react";

export const SettingsContext = createContext();

export const SettingsContextProvider = ({ children }) => {
  const [settings, setSettings] = useState([
    { name: "Start countdown", value: true },
    { name: "Timer", value: { seconds: 0, minutes: 1 } },
    { name: "High scores", value: true },
  ]);

  return <SettingsContext.Provider value={[settings, setSettings]} children={children} />;
};
