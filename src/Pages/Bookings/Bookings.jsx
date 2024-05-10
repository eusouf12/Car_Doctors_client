import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useContext(AuthContext);

    // console.log(user);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
                console.log(data);
            })
    }, [])

    const handleConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success',
                        text: 'confirm Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    const remaining = bookings.filter(cof => cof._id !== id);
                    const updated = bookings.find(cof => cof._id === id);
                    updated.status = 'confirm';
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);

                    console.log(bookings);

                }
            })
    }




    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })

            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/bookings/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your data has been deleted.",
                                    icon: "success"
                                });
                                const remaining = bookings.filter(cof => cof._id !== id);
                                
                                setBookings(remaining);
                               
                            }
                        })
                }
            });
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map(booking => <tr key={booking._id}>
                                <th>
                                    <button onClick={() => handleDelete(booking._id)}
                                        className="btn bg-[#FF3811] text-white btn-xs">Delete</button>
                                </th>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={booking.img} />
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td>{booking.service}</td>
                                <td>{booking.date}</td>

                                <td>

                                    <span className="badge badge-ghost badge-sm">{booking.price}</span>
                                </td>

                                <th>
                                    {
                                        booking.status==='confirm'?<span className="font-bold text-primary">Confirmed</span>
                                        :<button onClick={() => handleConfirm(booking._id)}
                                        className="btn btn-ghost btn-xs">Please Confirm
                                    </button>
                                    }
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;