import React, { useEffect } from "react";
import "./App.css";
import phaserGame from "./PhaserGame";
import CloudsScene from "./scenes/CloudsScene";

const App = () => {
  useEffect(() => {
    phaserGame.scene.add("clouds", CloudsScene);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Just a vanilla create-react-app overlaying a Phaser canvas :)</p>
        <a
          className="App-link"
          href="https://github.com/kevinshen56714/create-react-phaser3-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source
        </a>
      </header>
    </div>
  );
};

export default App;
