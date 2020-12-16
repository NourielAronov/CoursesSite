import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MadeCoursesPage from "./pages/MadeCoursesPage";

export const routes = [
  {
    path: "/",
    name: "Home",
    label: "Home",
    component: HomePage,
  },
  {
    path: "/made-courses",
    name: "MadeCourses",
    label: "Made Courses",
    component: MadeCoursesPage,
  },
];

function router() {
  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.name} exact path={route.path} component={route.component} />
      ))}
    </Switch>
  );
}

export default router;
