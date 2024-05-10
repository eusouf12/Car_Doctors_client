import { Helmet } from "react-helmet";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const CheckOut = () => {
    const service = useLoaderData();

    const { user } = useContext(AuthContext);
    // console.log(user);


    const handleService = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const DueAmount = form.DueAmount.value;
        const order = {
            customerName: name,
            img: service.img,
            email,
            date,
            service: service.title,
            service_id: service._id,
            price: DueAmount
        };
        
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId)
                    {
                        e.target.reset();
                        toast("successfully Login");
                    }
            })

        
    }

    return (
        <div className=" bg-orange-100 py-10">
            <Helmet>
                <title>CheckOut </title>
            </Helmet>

            <div className="card shrink-0 w-full max-w-6xl mx-auto shadow-2xl">
                <form onSubmit={handleService}
                    className="card-body">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="number" name="DueAmount" defaultValue={service.price} className="input input-bordered" required />

                        </div>
                    </div>


                    <div className="form-control mt-6">
                        <button className="btn text-white bg-[#FF3811]">Order Confirm</button>
                    </div>




                </form>
                <ToastContainer />

            </div>


        </div>
    );
};

export default CheckOut;
