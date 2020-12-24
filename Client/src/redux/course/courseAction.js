import axios from "axios";
import {
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,
  ADD_COURSE,
  DELETE_COURSE,
  REGISTER_TO_COURSES,
} from "./courseTypes";

export const addCourse = (course) => {
  return {
    type: ADD_COURSE,
    payload: course,
  };
};

export const deleteCourse = (courseId) => {
  return {
    type: DELETE_COURSE,
    payload: courseId,
  };
};

export const registerToCourses = () => {
  return {
    type: REGISTER_TO_COURSES,
  };
};

export const fetchCourses = () => {
  return (dispatch) => {
    dispatch(fetchCoursesRequest());
    axios
      .get("http://localhost:5000/")
      .then((response) => {
        const courses = response.data;
        dispatch(fetchCoursesSuccess(courses));
      })
      .catch((error) => {
        dispatch(fetchCoursesFailure(error.message));
      });
  };
};

export const fetchCoursesRequest = () => {
  return {
    type: FETCH_COURSES_REQUEST,
  };
};

export const fetchCoursesSuccess = (courses) => {
  return {
    type: FETCH_COURSES_SUCCESS,
    payload: courses,
  };
};

export const fetchCoursesFailure = (error) => {
  return {
    type: FETCH_COURSES_FAILURE,
    payload: error,
  };
};
