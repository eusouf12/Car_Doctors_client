import { Outlet } from "react-router-dom";
import Footer from "../Pages/SharePage/Footer/Footer";
import Navbar from "../Pages/SharePage/Navbar/Navbar";


const Root = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;