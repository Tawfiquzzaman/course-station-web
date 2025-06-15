import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/LoginPage/Login";
import AddCourse from "../Pages/AddCourse/AddCourse";
import AllCourses from "../Pages/AllCourses/AllCourses";
import ManageMyCourse from "../Pages/ManageMyCourse/ManageMyCourse";
import UpdateCourse from "../Pages/UpdateCourse/UpdateCourse";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
          path: '/register',
          Component: Register,

        },
        {
          path: '/login',
          Component: Login,
          
        },
        {
          path: '/addCourse',
          Component: AddCourse,
          
        },
        {
          path: '/allCourses',
          loader: () => fetch('http://localhost:3000/courses'),
          Component: AllCourses,
        },
        {
          path: '/manageCourses',
          Component: ManageMyCourse,

        },
        {
          path: '/updateCourse/:id',
          loader: ({params}) => fetch(`http://localhost:3000/courses/${params.id}`),
          Component: UpdateCourse,
        }
    ]
  },
]);

export default router;