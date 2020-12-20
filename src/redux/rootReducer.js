import { combineReducers } from 'redux'
import courseReducer from './course/courseReducer'


const rootReducer = combineReducers({
  course: courseReducer,
})

export default rootReducer