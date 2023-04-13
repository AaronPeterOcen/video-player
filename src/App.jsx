import * as React from "react";
import "./App.css";
import ReactPlayer from "react-player";
import screenfull from "screenfull";
import { Container } from "@mui/material";
import ControlIcons from "./Components/ControlIcons";

function App() {
  // return <div className="App">

  //   {/* <Player /> */}</div>;
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
            playing={false}
            muted={true}
          />
          <ControlIcons />
        </div>
      </Container>
    </>
  );
}

export default App;
