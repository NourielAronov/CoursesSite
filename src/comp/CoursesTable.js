import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Loader from "react-loader-spinner";
import Cart from "./Cart";
import CourseRow from "./CourseRow";
import CourseFilter from "./CourseFilter";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(() => ({
  tableContent: {
    height: 300,
    overflow: "auto",
  },
  cartContent: {
    height: 300,
  },
}));

function CoursesTable(props) {
  const classes = useStyles();

  const [selectedCourses, setSelectedCourses] = useState([]);

  const addCourseToCart = (event, course) => {
    if (event.target.checked) {
      setSelectedCourses([
        ...selectedCourses,
        {
          id: selectedCourses.length,
          name: course.name,
          date: course.date,
        },
      ]);
    }
  };

  const deleteCourseFromCart = (id) => {
    const newCourses = selectedCourses.filter((selectedCourse) => {
      return selectedCourse.id !== id;
    });

    setSelectedCourses(newCourses);
  };

  if (props.isLoading) {
    return (
      <div align="center">
        <Loader type="ThreeDots" color="#00BFFF" timeout={3000} />
      </div>
    );
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={8}>
        <form>
          <CourseFilter />

          <Grid
            container
            component={Paper}
            spacing={2}
            className={classes.tableContent}
          >
            {props.courses.map((course) => (
              <Grid item xs={12} key={course.name}>
                <CourseRow course={course} addCourseToCart={addCourseToCart} />
                <Divider />
              </Grid>
            ))}
          </Grid>
        </form>
      </Grid>
      <Grid item xs={4} className={classes.cartContent}>
        <Cart
          selectedCoursesList={selectedCourses}
          deleteCourse={deleteCourseFromCart}
        />
      </Grid>
    </Grid>
  );
}

export default CoursesTable;
