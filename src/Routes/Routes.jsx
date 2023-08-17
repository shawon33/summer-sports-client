import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import Class from "../Pages/Home/Class/Class";
import Sports from "../Pages/Sports/Sports";

  
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:"sports",
          element:<Sports></Sports>
        }
      ]
    },
  ]);
  export default router;