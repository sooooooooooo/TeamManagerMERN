import React from 'react';
import './App.css';
import {Router, Redirect} from "@reach/router";
import Main from "./views/Main";
import PlayerList from "./components/PlayerList";
import PlayerForm from "./components/PlayerForm";

import Status from "./views/Status";
import Game from "./components/Game";

function App() {
  return (
    <>
      <Router>
        <Redirect from="/" to="players" noThrow />
        <Main path="players">
          <PlayerList path="list" />
          <PlayerForm path="addplayer" />
          <Redirect from="/" to="list" noThrow />
        </Main>
        <Status path="status">
          <Game path="game/:num" />
          <Redirect from="/" to="game/1" noThrow />
        </Status>
      </Router>
    </>
  );
}

export default App;
