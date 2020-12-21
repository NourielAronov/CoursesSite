import React, { useState } from "react"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Loader from "react-loader-spinner"

import CourseRow from "./CourseRow"
import CourseFilter from "./CourseFilter"
import Divider from "@material-ui/core/Divider"
import { fetchCourses, addCourse } from "../redux/course/courseAction"

const useStyles = makeStyles(() => ({
  tableContent: {
    height: 300,
    overflow: "auto",
  },
}))

function CoursesTable() {
  const classes = useStyles()
  const [searchName, setSearchName] = useState("")
  const [searchDate, setSearchDate] = useState("")

  const coursesData = useSelector((state) => state.course)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCourses())
  }, [dispatch])

  function addCourseToCart(event, course) {
    if (event.target.checked) {
      dispatch(addCourse(course))
    }
  }

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
    return courseDate.some((date) => date.indexOf(searchDate) !== -1)
  }

  const filteredCourses = coursesData.courses.filter((course) => {
    return filterCourseByName(course.name) && filterCoursesByDate(course.dates)
  })

  if (coursesData.loading) {
    return (
      <div align="center">
        <Loader type="ThreeDots" color="#00BFFF" timeout={3000} />
      </div>
    )
  }

  return (
    <form>
      <CourseFilter
        searchName={searchName}
        changeSearchName={changeSearchName}
        searchDate={searchDate}
        changeSearchDate={changeSearchDate}
      />

      <Grid
        container
        component={Paper}
        spacing={2}
        className={classes.tableContent}
      >
        {filteredCourses.map((course) => (
          <Grid item xs={12} key={course.name}>
            <CourseRow
              courseInfo={course}
              addCourseToCart={addCourseToCart}
              selectedCourses={coursesData.selectedCourses}
            />
            <Divider />
          </Grid>
        ))}
      </Grid>
    </form>
  )
}

export default CoursesTable
