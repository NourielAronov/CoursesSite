import HomePage from "./pages/HomePage";
import MadeCoursesPage from "./pages/MadeCoursesPage";
import CompletedCoursesPage from "./pages/CompletedCoursesPage";
import ProfilePage from "./pages/ProfilePage";

const routes = [
  {
    path: "/",
    name: "Home",
    label: "Home",
    component: HomePage,
  },
  {
    path: "/made-courses",
    name: "MadeCourses",
    label: "Made Courses",
    component: MadeCoursesPage,
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