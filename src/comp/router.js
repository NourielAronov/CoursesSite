import React from "react"
import routes from "./routes"
import { Route, Switch } from "react-router-dom"

const Router = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.name}
          exact
          path={route.path}
          component={route.component}
        />
      ))}
    </Switch>
  )
}

export default Router
