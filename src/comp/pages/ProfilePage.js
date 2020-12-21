import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(() => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function ProfilePage() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <Container className={classes.center}>
          <Avatar alt="Profile Image" src={"#"} className={classes.avatar} />
        </Container>
      </Card>
    </div>
  );
}

export default ProfilePage;
