import React from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

import CoursesTable from "../CoursesTable"
import Cart from "../Cart"

const useStyles = makeStyles(() => ({
  cartContent: {
    height: 300,
  },
}))

function HomePage() {
  const classes = useStyles()

  return (
    <div>
      <h1 align="center">רישום לקורסים</h1>
      <Grid container spacing={6}>
        <Grid item xs={8}>
          <CoursesTable />
        </Grid>
        <Grid item xs={4} className={classes.cartContent}>
          <Cart />
        </Grid>
      </Grid>
    </div>
  )
}

export default HomePage
