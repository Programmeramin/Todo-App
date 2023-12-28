import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from 'react-router-dom'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import router from './Router/Routes'

function App() {
 
  return (
    <>
     
<RouterProvider router={router}/>
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
    </>
  )
}

export default App
