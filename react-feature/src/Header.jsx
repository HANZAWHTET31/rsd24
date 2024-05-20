import { useContext } from "react";
import { Theme } from "./ThemeProvider";

export default function Header(){
      const {mode, setMode} = useContext(Theme);

      return (
            <nav style={{ display: "flex", justifyContent: "space-between"}}>
                  <b>useContext & createContext</b>
                  {mode === "light" ? (
                        <button onClick={() => {setMode("dark")}}>Dark</button>
                  ) : (
                        <button onClick={() => {setMode("light")}}>Light</button>
                  )}
            </nav>
      )
}