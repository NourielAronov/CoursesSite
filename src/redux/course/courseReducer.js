import {
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,
  ADD_COURSE,
  DELETE_COURSE,
  REGISTER_TO_COURSES,
} from "./courseTypes";

const initialState = {
  loading: false,
  courses: [],
  error: "",
  selectedCourses: [],
  registeredCourses: [],
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COURSES_SUCCESS:
      return {
        ...state,
        loading: false,
        courses: action.payload,
      };
    case FETCH_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_COURSE:
      return {
        ...state,
        selectedCourses: [
          ...state.selectedCourses,
          {
            id: state.selectedCourses.length,
            name: action.payload.name,
            date: action.payload.date,
          },
        ],
      };
    case DELETE_COURSE:
      return {
        ...state,
        selectedCourses: state.selectedCourses.filter(
          (selectedCourse) => selectedCourse.id !== action.payload
        ),
      };
    case REGISTER_TO_COURSES:
      return {
        ...state,
        registeredCourses: [...state.registeredCourses, ...state.selectedCourses],
        selectedCourses: [],
      };

    default:
      return state;
  }
};

export default courseReducer;
