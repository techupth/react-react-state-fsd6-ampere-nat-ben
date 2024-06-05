import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Greeting Message");

  const handleClick = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div className="App">
      <div className="greeting-container">{message}</div>
      <div className="buttons">
        <button value="สวัสดี" onClick={handleClick}>
          สวัสดี!
        </button>
        <button value="Hi!" onClick={handleClick}>
          Hi!
        </button>
        <button value="你好!" onClick={handleClick}>
          你好!
        </button>
      </div>
    </div>
  );
}

export default App;
