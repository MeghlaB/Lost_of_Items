import {
    createBrowserRouter,
   
  } from "react-router-dom";
 

import Layout from "../MainLayout/Layout";
import Home from "../Pages/Home";
import LostofItems from "../Pages/LostofItems";
import Register from "../Pages/Register";
import LoginPage from "../Pages/LoginPage";
import AddLost_FoundITems from "../PrivetRoute/AddLost_FoundITems";
import DetailsPages from "../PrivetRoute/DetailsPages";
import PrivetRoute from "../PrivetRoute/Privet";


  
const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout></Layout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/allItems',
            element:<LostofItems></LostofItems>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element:<LoginPage></LoginPage>
        },
        {
          path:'/addItems',
          element:<AddLost_FoundITems></AddLost_FoundITems>
        },
        {
          path:'/details/:id',
          element:<PrivetRoute><DetailsPages></DetailsPages></PrivetRoute>
        }
      ]
    },
  ]);

  export default router