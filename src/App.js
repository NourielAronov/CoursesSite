import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./comp/router";
import Top from "./comp/Top";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="md" dir="rtl">
        <Top />
        <Router />
      </Container>
    </BrowserRouter>
  );
}

export default App;
