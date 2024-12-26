import "./App.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify/unstyled";
import "react-toastify/dist/ReactToastify.css";
import { LC, NC, SC, UP } from "./data/Passwords";

function App() {
  let [uppercase, setUppercase] = useState(false);
  let [lowrcase, setlowrcase] = useState(false);
  let [Number, setNumber] = useState(false);
  let [symbol, setsymbol] = useState(false);
  let [password, setPassword] = useState(10);
  let [fpass, setfpass] = useState("");

  let createPassword = () => {
    let finalpassword = ""; // this will store the final password
    let charSet = "";

    if (uppercase || lowrcase || Number || symbol) {
      if (uppercase) charSet += UP;
      if (lowrcase) charSet += LC;
      if (Number) charSet += NC;
      if (symbol) charSet += SC;

      for (let i = 0; i < password; i++) {
        finalpassword += charSet.charAt(
          Math.floor(Math.random() * charSet.length)
        );
      }
      setfpass(finalpassword);
      toast.success("Password Generated");
    } else {
      toast.error("Please select at least one checkbox!");
    }
  };
  let copypass = () => {
    navigator.clipboard.writeText(fpass); // copy password to clipboard
    toast.success(" copy password...");
  };
  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="passwordBox">
          <h2>Password Generator</h2>

          <div className="passwordBoxin">
            <input type="text" value={fpass} readOnly />
            <button onClick={copypass}>Copy</button>
          </div>

          <div className="passLength">
            <label>Password length</label>
            <input
              type="number"
              max={20}
              min={10}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="passLength">
            <label>Include uppercase Letters</label>
            <input
              type="checkbox"
              checked={uppercase}
              onChange={() => setUppercase(!uppercase)}
            />
          </div>

          <div className="passLength">
            <label>Include lowercase letters</label>
            <input
              type="checkbox"
              checked={lowrcase}
              onChange={() => setlowrcase(!lowrcase)}
            />
          </div>

          <div className="passLength">
            <label>Include Numbers</label>
            <input
              type="checkbox"
              checked={Number}
              onChange={() => setNumber(!Number)}
            />
          </div>

          <div className="passLength">
            <label>Include Symbols</label>
            <input
              type="checkbox"
              checked={symbol}
              onChange={() => setsymbol(!symbol)}
            />
          </div>

          <button className="btn" onClick={createPassword}>
            Generate Password
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
