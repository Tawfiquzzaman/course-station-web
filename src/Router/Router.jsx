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
    errorElement: <Error></Error>,
    
    children: [
        {
            index: true,
            Component: Home,
            errorElement: <Error></Error>
        },
        {
          path: '/register',
          Component: Register,
          errorElement: <Error></Error>

        },
        {
          path: '/login',
          Component: Login,
          errorElement: <Error></Error>
          
        },
        {
          path: '/addCourse',
          // Component: AddCourse,
          element: <PrivateRoute><AddCourse></AddCourse></PrivateRoute>,
          errorElement: <Error></Error>
          
        },
        {
          path: '/allCourses',
          loader: () => fetch('http://localhost:3000/courses'),
          Component: AllCourses,
          errorElement: <Error />,
        },
        {
          path: '/manageCourses',
          // Component: ManageMyCourse,
          element: <PrivateRoute><ManageMyCourse></ManageMyCourse></PrivateRoute>,
          errorElement: <Error></Error>
    

        },
        {
          path: '/updateCourse/:id',
          loader: ({params}) => fetch(`http://localhost:3000/courses/${params.id}`),
          // Component: UpdateCourse,
          element: <PrivateRoute><UpdateCourse></UpdateCourse></PrivateRoute>,
          errorElement: <Error></Error>
        },
        {
          path: '/courseDetails/:id',
          loader: ({params}) => fetch(`http://localhost:3000/courses/${params.id}`),
          element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
          errorElement: <Error></Error>
        },
        {
          path: '/myEnrolledCourses',
          // Component: EnrolledCourses,
          element: <PrivateRoute><EnrolledCourses></EnrolledCourses></PrivateRoute>,
          errorElement: <Error></Error>
        }
    ]
  },
]);

export default router;