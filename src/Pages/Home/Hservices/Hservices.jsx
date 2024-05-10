import img1 from "../../../assets/images/services/1.jpg"
import img2 from "../../../assets/images/services/2.jpg"
import img3 from "../../../assets/images/services/3.jpg"
import img4 from "../../../assets/images/services/4.jpg"
import img5 from "../../../assets/images/services/5.jpg"
import img6 from "../../../assets/images/services/6.jpg"
import pimg1 from "../../../assets/images/products/1.png"
import pimg2 from "../../../assets/images/products/2.png"
import pimg3 from "../../../assets/images/products/3.png"
import pimg4 from "../../../assets/images/products/4.png"
import pimg5 from "../../../assets/images/products/5.png"
import pimg6 from "../../../assets/images/products/6.png"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
// import pimg2 from "../../../assets/images/products/2.jpg"
// import pimg3 from "../../../assets/images/products/3.jpg"
// import pimg4 from "../../../assets/images/products/4.jpg"
// import pimg5 from "../../../assets/images/products/5.jpg"
// import pimg6 from "../../../assets/images/products/6.jpg"
const Hservices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="max-w-7xl mx-auto py-10">
            {/*  Our Service Area start */}
            <div className="space-y-8 ">
                <div className='text-center space-y-5'>
                    <h3 className="text-3xl font-bold text-[#FF3811]">Services</h3>
                    <h2 className='text-5xl font-bold'>
                        Our Service Area
                    </h2>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>

                <div className='grid grid-col-span-1 lg:grid-cols-3 gap-5'>
                    {
                        services.map(service => <div key={service._id} className="card card-compact p-4 bg-base-100 border  container h-full w-[90%] lg:w-full mx-auto space-y-5 ">

                            <figure className=" h-auto md:h-72 lg:h-72"><img className='w-[100%] md:h-[100%] lg:h-[100%] rounded-3xl' src={service.img} alt="image" /></figure>
                            <h2 className=" card-title text-2xl font-bold playFair ">{service.title}</h2>
                            <h2 className='text-[#FF3811] font-bold'>Price : {service.price}</h2>
                            <Link to={`/checkout/${service._id}`}>
                              <button className="btn bg-[#FF3811] text-white">Book Now</button>
                            </Link>
                        </div>)
                    }
                </div>


                <div className="text-center">
                    <button className="btn btn-outline text-[#FF3811]">More Services</button>
                </div>


            </div>

            {/* Popular Products start */}

            <div className="space-y-8 ">
                <div className='text-center space-y-5'>
                    <h3 className="text-3xl text-[#FF3811]">Popular Products</h3>
                    <h2 className='text-5xl font-bold'>
                        Browse Our Products
                    </h2>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>

                <div className='grid grid-col-span-1 lg:grid-cols-3 gap-5'>
                    {/* 1st row  */}
                    <div className="card card-compact p-4 bg-base-100 border  container h-full w-[90%] lg:w-full mx-auto space-y-5 ">

                        <figure className=" h-auto md:h-72 lg:h-72"><img className='w-[100%] md:h-[100%] lg:h-[100%] rounded-3xl' src={pimg1} alt="image" /></figure>
                        <div className="text-center">
                            <h2 className="  text-2xl font-bold playFair ">Car Engine Plug</h2>
                            <h2 className='text-[#FF3811]'>Price : $20.00</h2>
                        </div>

                    </div>

                    <div className="card card-compact p-4 bg-base-100 border  container h-full w-[90%] lg:w-full mx-auto space-y-5 ">

                        <figure className=" h-auto md:h-72 lg:h-72"><img className='w-[100%] md:h-[100%] lg:h-[100%] rounded-3xl' src={pimg2} alt="image" /></figure>
                        <div className="text-center">
                            <h2 className="  text-2xl font-bold playFair ">Car Engine Plug</h2>
                            <h2 className='text-[#FF3811]'>Price : $20.00</h2>
                        </div>

                    </div>

                    <div className="card card-compact p-4 bg-base-100 border  container h-full w-[90%] lg:w-full mx-auto space-y-5 ">

                        <figure className=" h-auto md:h-72 lg:h-72"><img className='w-[100%] md:h-[100%] lg:h-[100%] rounded-3xl' src={pimg3} alt="image" /></figure>
                        <div className="text-center">
                            <h2 className="  text-2xl font-bold playFair ">Car Engine Plug</h2>
                            <h2 className='text-[#FF3811]'>Price : $20.00</h2>
                        </div>

                    </div>
                    {/* 2st row  */}
                    <div className="card card-compact p-4 bg-base-100 border  container h-full w-[90%] lg:w-full mx-auto space-y-5 ">

                        <figure className=" h-auto md:h-72 lg:h-72"><img className='w-[100%] md:h-[100%] lg:h-[100%] rounded-3xl' src={pimg4} alt="image" /></figure>
                        <div className="text-center">
                            <h2 className="  text-2xl font-bold playFair ">Car Engine Plug</h2>
                            <h2 className='text-[#FF3811]'>Price : $20.00</h2>
                        </div>

                    </div>


                    <div className="card card-compact p-4 bg-base-100 border  container h-full w-[90%] lg:w-full mx-auto space-y-5 ">

                        <figure className=" h-auto md:h-72 lg:h-72"><img className='w-[100%] md:h-[100%] lg:h-[100%] rounded-3xl' src={pimg5} alt="image" /></figure>
                        <div className="text-center">
                            <h2 className="  text-2xl font-bold playFair ">Car Engine Plug</h2>
                            <h2 className='text-[#FF3811]'>Price : $20.00</h2>
                        </div>

                    </div>


                    <div className="card card-compact p-4 bg-base-100 border  container h-full w-[90%] lg:w-full mx-auto space-y-5 ">

                        <figure className=" h-auto md:h-72 lg:h-72"><img className='w-[100%] md:h-[100%] lg:h-[100%] rounded-3xl' src={pimg6} alt="image" /></figure>
                        <div className="text-center">
                            <h2 className="  text-2xl font-bold playFair ">Car Engine Plug</h2>
                            <h2 className='text-[#FF3811]'>Price : $20.00</h2>
                        </div>

                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-outline text-[#FF3811]">More Services</button>
                </div>


            </div>
        </div>
    );
};

export default Hservices;