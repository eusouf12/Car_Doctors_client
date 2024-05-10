import { Link, NavLink } from "react-router-dom";
import img from "../../../../public/Group 1.svg"
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const Navbar = () => {
    const { user, logOutUser, userName, photoUrl } = useContext(AuthContext);

    const handleLogOut = () => {
        logOutUser();
    }


    const links = <>
        <NavLink to={"/"} className={({ isActive }) => isActive ? 'px-3 py-2 bg-[#FF3811] border-[1px] rounded-xl ' : 'text-black btn-ghost px-3 py-2 rounded-xl'}>Home</NavLink>


        <NavLink to={"/about"} className={({ isActive }) => isActive ? 'px-3 py-2 bg-[#FF3811] border-[1px]  rounded-xl' : 'text-black btn-ghost px-3 py-2 rounded-xl'}>About</NavLink>

        {
            // user &&
            <NavLink to={"/blog"} className={({ isActive }) => isActive ? 'px-3 py-2 bg-[#FF3811] border-[1px]  rounded-xl' : 'text-black btn-ghost px-3 py-2 rounded-xl'}>Blog</NavLink>
        }
        {
            user &&
            <NavLink to={"/bookings"} className={({ isActive }) => isActive ? 'px-3 py-2 bg-[#FF3811] border-[1px]  rounded-xl' : 'text-black btn-ghost px-3 py-2 rounded-xl'}>My Bookings</NavLink>
        }

        {
            user ?
                <NavLink to={"/login"} className={({ isActive }) => isActive ? 'px-3 py-2 bg-[#FF3811] border-[1px]  rounded-xl' : 'text-black btn-ghost  px-3 py-2 rounded-xl'}><button onClick={handleLogOut} >Log Out </button></NavLink>
                :
                <NavLink to={'/login'} className={({ isActive }) => isActive ? 'px-3 py-2 bg-[#FF3811] border-[1px]  rounded-xl' : 'text-black btn-ghost  px-3 py-2 rounded-xl'}> <button>Login</button></NavLink>
        }


    </>
    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto gap-3 py-8 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow bg-base-100 rounded-box w-52 text-lg text-white text-center">
                        {links}
                    </ul>
                </div>
                <div className="flex flex-col items-center">
                    <Link to={'/'}> <img className="hidden md:block lg:block btn btn-md btn-circle" src={img} alt="" /></Link>
                    <a className=" text-lg lg:font-bold"><span className="text-orange-600">Car  </span>Doctor </a>

                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-lg text-white px-1 gap-2">
                    {links}
                </ul>
            </div>

            <div className="navbar-end">

                {

                    <>

                        <div className="flex gap-1 pr-2 lg:text-3xl">
                            <MdOutlineShoppingBag></MdOutlineShoppingBag>
                            <CiSearch></CiSearch>
                        </div>
                        {
                            user &&
                            <div className="tooltip  tooltip-bottom" data-tip={userName}>
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm md:btn-md lg:btn-md avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src={photoUrl} />
                                    </div>
                                </div>
                            </div>
                        }

                        <button className="btn btn-sm md:md lg:btn-md text-white bg-[#FF3811] px-0 md:px-3 lg:px-5">Appointment </button>
                    </>

                }

            </div>

        </div >
    );
};

export default Navbar;