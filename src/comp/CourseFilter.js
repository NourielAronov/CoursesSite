import React from "react"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"

function CourseFilter({
  searchName,
  changeSearchName,
  searchDate,
  changeSearchDate,
}) {
  return (
    <Grid container spacing={2} align="center">
      <Grid item xs={6}>
        <TextField
          id="course-input"
          placeholder="קורס..."
          value={searchName}
          onChange={changeSearchName}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          id="date-input"
          placeholder="תאריך..."
          value={searchDate}
          onChange={changeSearchDate}
        />
      </Grid>
    </Grid>
  )
}
export default CourseFilter
