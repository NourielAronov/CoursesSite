import React from "react";
import { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import ErrorIcon from "@material-ui/icons/Error";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  select: {
    width: 107,
  },
}));

function CourseRow(props) {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [course, setCourse] = useState({
    name: props.course.name,
    date: "",
  });
  const allowAddingCourse = (event) => {
    setCourse({
      ...course,
      date: event.target.value,
    });
  };

  const handleChange = (event) => {
    props.addCourseToCart(event, course)
    setChecked(true);
  };

  return (
    <Grid container alignItems="center">
      <Grid item xs={6}>
        <FormControl name="checkbox">
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  aria-label="add to cart"
                  disabled={course.date === "" || checked}
                  checked={checked}
                  onChange={handleChange}
                />
              }
              label={
                <Typography color={checked ? "primary" : "initial"}>
                  {props.course.name}
                </Typography>
              }
            />
          </FormGroup>
        </FormControl>
      </Grid>

      <Grid item xs={5}>
        <FormControl name="select">
          <InputLabel id="date">מתי?</InputLabel>
          <Select
            id="date"
            value={course.date}
            className={classes.select}
            onChange={allowAddingCourse}
          >
            {props.course.dates.map((date, dateId) => (
              <MenuItem key={dateId} value={date}>
                {date}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={1}>
        <Tooltip title={props.course.description} placement="right" arrow>
          <IconButton aria-label="error">
            <ErrorIcon />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
}

export default CourseRow;
