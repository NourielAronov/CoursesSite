import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

import CourseFilter from "../CourseFilter"
import CoursesTable from "../CoursesTable"
import Cart from "../Cart"

const useStyles = makeStyles(() => ({
  cartContent: {
    height: 300,
  },
}))

function HomePage() {
  const classes = useStyles()
  const [searchName, setSearchName] = useState("")
  const [searchDate, setSearchDate] = useState("")

  const changeSearchName = (event) => {
    setSearchName(event.target.value)
  }
  const changeSearchDate = (event) => {
    setSearchDate(event.target.value)
  }

  const filterCourseByName = (courseName) => {
    return (
      courseName.toLowerCase().indexOf(searchName.toLocaleLowerCase()) !== -1
    )
  }

  const filterCoursesByDate = (courseDate) => {
    return Array.isArray(courseDate)
      ? courseDate.some((date) => date.indexOf(searchDate) !== -1)
      : courseDate
  }

  return (
    <div>
      <h1 align="center">רישום לקורסים</h1>
      <Grid container spacing={6}>
        <Grid item xs={8}>
          <CourseFilter
            searchName={searchName}
            changeSearchName={changeSearchName}
            searchDate={searchDate}
            changeSearchDate={changeSearchDate}
          />

          <CoursesTable
            filterCourseByName={filterCourseByName}
            filterCoursesByDate={filterCoursesByDate}
          />
        </Grid>
        <Grid item xs={4} className={classes.cartContent}>
          <Cart
            filterCourseByName={filterCourseByName}
            filterCoursesByDate={filterCoursesByDate}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default HomePage
