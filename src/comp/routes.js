import HomePage from "./pages/HomePage"
import RegisteredCoursesPage from "./pages/RegisteredCoursesPage"
import CompletedCoursesPage from "./pages/CompletedCoursesPage"
import ProfilePage from "./pages/ProfilePage"

const routes = [
  {
    path: "/",
    name: "Home",
    label: "Home",
    component: HomePage,
  },
  {
    path: "/registered-courses",
    name: "RegisteredCourses",
    label: "Registered Courses",
    component: RegisteredCoursesPage,
  },
  {
    path: "/completed-courses",
    name: "CompletedCourses",
    label: "Completed Courses",
    component: CompletedCoursesPage,
  },
  {
    path: "/profile",
    name: "Profile",
    label: "Profile",
    component: ProfilePage,
  },
]

export default routes
