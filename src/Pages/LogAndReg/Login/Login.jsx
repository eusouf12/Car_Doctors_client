import { Helmet } from "react-helmet";
import img from '../../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


const Login = () => {
    const {logInUser,  signInWithGoogle, signInWithGithub} =useContext(AuthContext);
    const navigate = useNavigate();
    const location =useLocation();
   
    const handleLogin = e => {
        e.preventDefault();
        const form =e.target;
        const email =form.email.value;
        const password = form.password.value;

        logInUser(email, password)
        .then(result => {
            console.log(result.user);
            const user ={email};
            e.target.reset();
            toast("successfully Login");
            // setTimeout(() => {
            //      navigate(location?.state ? location?.state:'/');
            // }, 1000);
            axios.post('http://localhost:5000/jwt',user)
            .then(res=>{
                console.log(res.data);
            })



        })
        .catch(error => {
            console.log(error);
            toast.warn("Plese Give Valid Email And Password");
        })
    }

    const handleGoogleLogin = e => {
        e.preventDefault();
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                toast("successfully Login");
                // setTimeout(() => {
                //     navigate(location?.state ? location?.state:'/');
                // }, 1000);
            })
            .catch(() => {
                toast.warn("Plese Give Valid Email And Password");
            })
    }

    const handleGithubLogin = e => {
        e.preventDefault();

        signInWithGithub()
            .then(result => {
                toast("successfully Login");
                console.log(result.user);
                setTimeout(() => {
                    navigate('/'); navigate(location?.state ? location?.state:'/');
                }, 1000);
            })
            .catch(() => {
                toast.warn("Plese Give Valid Email And Password");
            })
    }

    return (
        <div className="">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 py-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="lg:mr-16 w-1/2">
                        <img src={img} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-orange-100">
                        <form onSubmit={handleLogin}
                            className="card-body">
                            <h1 className="text-3xl text-[#FF3811] text-center font-bold">Login now</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white bg-[#FF3811]">Login</button>
                            </div>

                            <div className="divider">OR</div>

                        <div className='flex justify-center gap-10'>
                            <button onClick={handleGoogleLogin}
                                className='text-3xl text-blue-700'>
                                <FaGoogle></FaGoogle>
                            </button >
                            <button onClick={handleGithubLogin}
                                className='text-3xl'><FaGithub></FaGithub></button>

                        </div>
                        </form>
                        <ToastContainer />
                        <h2 className="text-start ml-9">New On The Side ? Please<Link to={"/register"}><button className='btn btn-link'>Register</button></Link></h2>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;