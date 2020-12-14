import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

function CourseFilter() {
  return (
    <Grid container spacing={2} align="center">
      <Grid item xs={6}>
        <TextField id="course-input" label="תאריך..." />
      </Grid>

      <Grid item xs={6}>
        <TextField id="date-input" label="קורס..." />
      </Grid>
    </Grid>
  );
}
export default CourseFilter;
