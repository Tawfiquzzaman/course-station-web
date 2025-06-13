import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/LoginPage/Login";
import AddCourse from "../Pages/AddCourse/AddCourse";

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
          
        }
    ]
  },
]);

export default router;