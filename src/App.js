import React from "react";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar } from "./components";
import Home from "./pages/home/Home";
import SignUp from "./pages/signUp/SignUp";

const Item = styled.div`
  margin: 0px 2px;
  background-color: black;
  color: white;
  border-radius: 5px;
  padding: 3px 6px;

  cursor: pointer;

  :hover {
    background-color: blue;
  }
`;

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
