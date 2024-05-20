import { useContext } from "react";
import { Theme } from "./ThemeProvider";
import Home from "./Home";
import "./App.css";

export default function App() {
      const {mode} = useContext(Theme);
	return (
            <div style={{background: mode === "light" ? "white" : "black", color: mode === "light" ? "black" : "white", minHeight: 250, padding: 10, borderRadius: 25}}>
                  <Home />
            </div>
      )
}
