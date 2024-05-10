import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const [showpassword, setShowpassword] = useState(false);
    const navigate = useNavigate();
    const { createUser,setUserName,setPhotoUrl } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confoirmpassword = form.confirmPassword.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const terms = form.terms.checked;
        const newArr = { email, password, confoirmpassword, name, photo, terms };
        console.log(newArr);

        if (password.length < 6) {
            toast.warn("Password should be at least 6 characters or longer");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.warn("Your password should have at least one upper case letter");
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.warn("Your password should have at least one lower case letter");
            return;
        }
        else if (password != confoirmpassword) {
            toast.warn("Password not match", {
            });
            return;
        }
        else if (!terms) {
            toast.warn("Please accept our terns and condition");
            return;
        }
        else {
            toast("successfully register");
        }

        createUser(email, password)
            .then(result => {
                e.target.reset();
                setUserName(name);
                setPhotoUrl(photo);
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo,
                })
                navigate('/');

            })
            .catch(error => {
                toast.warn(error);
            })

    }

    return (
        <div className={`hero  bg-base-200 flex flex-col space-y-10 py-16`}>
            <Helmet>
                <title>Register page</title>
            </Helmet>

            <div className={`card shrink-0 w-full max-w-sm shadow-2xl bg-orange-100 pb-5`}>
                <form onSubmit={handleRegister}
                    className="card-body ">

                    <div className="form-control">
                        <h2 className=" text-3xl font-bold text-center pb-5 text-[#FF3811]">Sign Up</h2>
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="url" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Password</span>
                        </label>
                        <div className='flex items-center relative'>

                            <input
                                type={showpassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full" required />
                            <span onClick={() => { setShowpassword(!showpassword) }}
                                className="absolute right-3 ">
                                {
                                    showpassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                }
                            </span>
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold"> Confirm Password</span>
                        </label>
                        <div className='flex items-center relative'>

                            <input
                                type={showpassword ? "text" : "password"} name="confirmPassword" placeholder="confirmPassword" className="input input-bordered w-full" required />
                            <span onClick={() => { setShowpassword(!showpassword) }}
                                className="absolute right-3 ">
                                {
                                    showpassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                }
                            </span>
                        </div>

                    </div>

                    <div className="flex justify-start gap-2  items-center">
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms">Please accept our terms and condition</label>
                    </div>

                    <div className="form-control mt-6 font-extrabold">
                        <button className="btn text-white bg-[#FF3811]">Register</button>
                    </div>
                </form>
                <ToastContainer />
                <h2 className="text-start ml-9">Already Have An Account? Please<Link to={"/login"}><button className='btn btn-link'>Login</button></Link></h2>

            </div>
        </div>
    );
};

export default Register;