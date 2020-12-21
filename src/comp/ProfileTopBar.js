import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function ProfileTopBar() {
  const [path, setPath] = useState("/");

  const history = useHistory();

  const moveToPage = (event, pagePath) => {
    setPath(pagePath);
    history.push(pagePath);
  };

  return (
    <Paper square>
      <Tabs
        value={path}
        indicatorColor="primary"
        textColor="primary"
        onChange={moveToPage}
        aria-label="menu"
        centered
      >
        <Tab
          key={"CompletedCourses"}
          value={"/completed-courses"}
          label={"קורסים שעשיתי"}
        />
        <Tab key={"Home"} value={"/"} label={"אני"} />
        <Tab
          key={"MadeCourses"}
          value={"/made-courses"}
          label={"קורסים שאעשה"}
        />
      </Tabs>
    </Paper>
  );
}

export default ProfileTopBar;
