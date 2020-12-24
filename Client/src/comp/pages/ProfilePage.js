import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import Container from "@material-ui/core/Container"
import Avatar from "@material-ui/core/Avatar"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(() => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 50,
  },
  media: {
    height: 140,
  },
}))

const ProfilePage = () => {
  const classes = useStyles()
  return (
    <div className={classes.card}>
      <Card>
        <Container>
          <Avatar
            alt="Profile Image"
            src={
              "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            }
          />
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://i.pinimg.com/originals/55/67/e2/5567e28bf42141aee065650f28b8815b.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                שם: נוריאל ארונוב
              </Typography>
              <Typography gutterBottom variant="h6">
                יחידה: שחר
              </Typography>
              <Typography gutterBottom variant="h6">
                תחביבים: ספרים, ספורט, לאכול ...
              </Typography>
              <Typography variant="body2" color="textSecondary">
                מתכנת בצוות נפגעים
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button color="primary">עדכן</Button>
          </CardActions>
        </Container>
      </Card>
    </div>
  )
}

export default ProfilePage
