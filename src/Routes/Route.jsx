import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Errorpage from "../Pages/Error/Errorpage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import ServicesPage from "../Pages/Services/ServicesPage";
import BlogPage from "../Pages/Blog/BlogPage";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/LogAndReg/Login/Login";
import Register from "../Pages/LogAndReg/Register/Register";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <BlogPage></BlogPage>,
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/contact',
                element:<Contact></Contact>,
            },
            {
                path: '/services',
                element:<ServicesPage></ServicesPage>,
            },
            {
                path: '/bookings',
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>,
            },
            {
                path: '/checkout/:id',
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    },
]);

export default router;