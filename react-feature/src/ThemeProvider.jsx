import { useState, createContext } from "react";
import App from "./App";

export const Theme = createContext();

export default function ThemeProvider(){
      const [mode, setMode] = useState("dark");

      return (
            <Theme.Provider value={{mode, setMode}} >
                  <App />
            </Theme.Provider>
      )
}
