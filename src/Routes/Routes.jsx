import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import Sports from "../Pages/Sports/Sports";
import Instractur from "../Pages/Instractur/Instractur";
import Dashboard from "../LayOut/Dashboard";
import MySelectedClass from "../Pages/DashBoard/MYclass/MySelectedClass";
import AllUser from "../Pages/DashBoard/ALLUser/AllUser";
import PrivateRoute from "./PrivateRoute";
import ManageItem from "../Pages/DashBoard/ManageItem/ManageItem";
import AdminRoute from "./AdminRoute";
import AdminHome from "../Pages/DashBoard/Home/AdminHome";
import Payment from "../Pages/DashBoard/Payment/Payment";
import PaymentHistory from "../Pages/DashBoard/PaymentPage/PaymentHistory";
import EnrollClass from "../Pages/DashBoard/EnrollClass/EnrollClass";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: "sports",
        element: <Sports></Sports>
      },
      {
        path: 'instructor',
        element: <Instractur></Instractur>
      },
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "myClass",
        element: <MySelectedClass></MySelectedClass>
      },
      {
        path:'payment',
        element:<Payment></Payment>
      },
      {
        path:'paymentPage',
        element:<PaymentHistory></PaymentHistory>
      },
      {
        path:"enrollClass",
        element:<EnrollClass></EnrollClass>
      },
      // admin route
      {
        path: 'users',
        element: <AdminRoute><AllUser></AllUser></AdminRoute>
      },
    
      {
        path:'manageItems',
        element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
      },
      {
        path:'home',
        element:<AdminHome></AdminHome>
      }
     
    ]
  }
]);
export default router;