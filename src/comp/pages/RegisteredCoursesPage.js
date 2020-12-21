import React from "react"
import { useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Divider from "@material-ui/core/Divider"

import ErrorIcon from "@material-ui/icons/Error"
import Tooltip from "@material-ui/core/Tooltip"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(() => ({
  tableContent: {
    height: 400,
    width: "60%",
    margin: "auto",
    marginTop: 50,
    overflow: "auto",
    alignItems: "center",
  },
}))

function RegisteredCoursesPage() {
  const classes = useStyles()
  const coursesData = useSelector((state) => state.course)

  const isEmptyList = !coursesData.registeredCourses.length
  return (
    <Grid
      container
      component={Paper}
      spacing={2}
      className={classes.tableContent}
    >
      {isEmptyList ? (
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            Empty list of courses
          </Typography>
        </Grid>
      ) : (
        coursesData.registeredCourses.map((course) => (
          <Grid item xs={12} key={course.name}>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <Typography>{course.name}</Typography>
              </Grid>

              <Grid item xs={5}>
                <Typography>{course.date}</Typography>
              </Grid>
              <Grid item xs={1}>
                <Tooltip title={course.description} placement="right" arrow>
                  <IconButton aria-label="error">
                    <ErrorIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>

            <Divider />
          </Grid>
        ))
      )}
    </Grid>
  )
}

export default RegisteredCoursesPage
