import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layouts/Layout";
import Home from "../Pages/Home/Home";
import Pending from "../Pages/Pending/Pending";
import Deleted from "../Pages/Deleted/Deleted";
import Complted from "../Pages/Completed/Complted";



// create router
const router = createBrowserRouter([
    
       {
        element : <Layout/>,
        children : [

            {
              path : "/",
              element : <Home/>

            },

            {
              path : "/completed",
              element : <Complted/>

            },


            {
                path : "/pending",
                element : <Pending/>
  
              },

              {
                path : "/deleted",
                element : <Deleted/>
  
              },
  
  

        ]

       }
    ]);


export default router