import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Container from "@material-ui/core/Container"
import RouterView from "./comp/Router"
import Top from "./comp/Top"
import store from "./redux/store"
import { Provider } from "react-redux"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Container maxWidth="md" dir="rtl">
          <Top />
          <RouterView />
        </Container>
      </Router>
    </Provider>
  )
}

export default App
