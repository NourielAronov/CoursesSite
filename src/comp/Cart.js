import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PaymentTwoToneIcon from "@material-ui/icons/PaymentTwoTone";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import CartCourse from "./CartCourse";

const useStyles = makeStyles({
  card: {
    height: 350,
  },
  selectedCoursesList: {
    overflow: "auto",
    height: 180,
  },
  shoppingCart: {
    marginRight: 20,
  },
  buyButton: {
    justifyContent: "center",
  },
});

function Cart(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card} align="center">
      <CardContent>
        <Typography variant="h4">
          סלסלה
          <ShoppingCartIcon
            className={classes.shoppingCart}
            color="primary"
            fontSize="large"
          />
        </Typography>
        <List
          dense
          aria-label="selected courses"
          className={classes.selectedCoursesList}
        >
          {Array.from(props.selectedCoursesList).map((selectedCourse) => (
            <CartCourse key={selectedCourse.id} selectedCourse={selectedCourse} deleteCourse={props.deleteCourse}/>
          ))}
        </List>
      </CardContent>
      <Divider />
      <CardActions className={classes.buyButton}>
        <IconButton color="primary" aria-label="buy and clear cart">
          <PaymentTwoToneIcon fontSize="large" />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Cart;
