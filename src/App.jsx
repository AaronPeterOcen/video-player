import * as React from "react";
import "./App.css";
import ReactPlayer from "react-player";
import screenfull from "screenfull";
import { Container } from "@mui/material";
import ControlIcons from "./Components/ControlIcons";
import { useState, useRef } from "react";

function App() {
  // return <div className="App">

  //   {/* <Player /> */}</div>;
  const [playerstate, setPlayerState] = useState({
    playing: true,
    mute: true,
    volume: 0.5,
    playerbackRate: 1.0,
    played: 0,
    seeking: false,
  });

  const { playing, mute, volume, playerbackRate, played, seeking } =
    playerstate;

  const handlePlayAndPause = () => {
    setPlayerState({
      ...playerstate,
      playing: !playerstate.playing,
    });
  };

  const playerRef = useRef(null);

  return (
    <>
      <header className="header__section">
        <p className="header__text">Build a video Player Tut</p>
      </header>
      <Container maxWidth="md">
        <div className="playerDiv">
          <ReactPlayer
            width={"100%"}
            height="100%"
            url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
            ref={playerRef}
            playing={playing}
            muted={mute}
          />
          <ControlIcons playandpause={handlePlayAndPause} playing={playing} />
        </div>
      </Container>
    </>
  );
}

export default App;
