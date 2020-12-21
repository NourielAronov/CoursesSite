import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import PaymentTwoToneIcon from "@material-ui/icons/PaymentTwoTone"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import CartCourse from "./CartCourse"

import { useSelector, useDispatch } from "react-redux"
import { deleteCourse, registerToCourses } from "../redux/course/courseAction"

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
})

function Cart() {
  const classes = useStyles()

  const coursesData = useSelector((state) => state.course)
  const dispatch = useDispatch()

  function deleteCourseFromCart(id) {
    dispatch(deleteCourse(id))
  }

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
          {Array.from(coursesData.selectedCourses).map((selectedCourse) => (
            <CartCourse
              key={selectedCourse.name}
              selectedCourse={selectedCourse}
              deleteCourse={deleteCourseFromCart}
            />
          ))}
        </List>
      </CardContent>
      <Divider />
      <CardActions
        onClick={() => dispatch(registerToCourses())}
        className={classes.buyButton}
      >
        <IconButton color="primary" aria-label="buy and clear cart">
          <PaymentTwoToneIcon fontSize="large" />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Cart
