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
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import EnrolledCourses from "../Pages/EnrolledCourses/EnrolledCourses";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home,
            errorElement: <Error></Error>
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
          // Component: AddCourse,
          element: <PrivateRoute><AddCourse></AddCourse></PrivateRoute>
          
        },
        {
          path: '/allCourses',
          loader: () => fetch('https://course-station-server.vercel.app/courses'),
          Component: AllCourses,
          errorElement: <Error />,
        },
        {
          path: '/manageCourses',
          // Component: ManageMyCourse,
          element: <PrivateRoute><ManageMyCourse></ManageMyCourse></PrivateRoute>
    

        },
        {
          path: '/updateCourse/:id',
          loader: ({params}) => fetch(`https://course-station-server.vercel.app/courses/${params.id}`),
          // Component: UpdateCourse,
          element: <PrivateRoute><UpdateCourse></UpdateCourse></PrivateRoute>
        },
        {
          path: '/courseDetails/:id',
          loader: ({params}) => fetch(`https://course-station-server.vercel.app/courses/${params.id}`),
          Component: CourseDetails,
        },
        {
          path: '/myEnrolledCourses',
          // Component: EnrolledCourses,
          element: <PrivateRoute><EnrolledCourses></EnrolledCourses></PrivateRoute>
        }
    ]
  },
]);

export default router;