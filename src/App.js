import React from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar } from "./components";
import Home from "./pages/home/Home";
import SignUp from "./pages/signUp/SignUp";

const theme = {
  primaryColor: "#1da1f2",
  secondaryColor: "#24292e",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
