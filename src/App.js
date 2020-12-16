import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Container from "@material-ui/core/Container";
import RouterPage from "./comp/router";
import Top from "./comp/Top";

import { connect } from "react-redux";

function App(props) {
  return (
    <Router>
      <Container maxWidth="md" dir="rtl">
        <Top />
        <RouterPage />
        {console.log("siteName: " + props.siteName)}
      </Container>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    siteName: state.siteName
  }
}

const mapDispachToProps = dispach => {
  return {
    changeSiteName(newSiteName) {
      dispach({
        type: "CHANGE_SITE_NAME",
        payload: newSiteName
      })
    }
  }
}

export default connect(mapStateToProps, mapDispachToProps)(App)
// export default App;
