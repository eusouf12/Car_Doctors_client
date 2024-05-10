import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Errorpage = () => {
    return (
        <div className="text-center text-5xl space-y-12">
        <Helmet>
          <title>Error Page</title>
        </Helmet>
        <div className="w-[50%] mx-auto">
          <img className="flex justify-center items-center" src={'https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712534400&semt=ais'} alt="" />
        </div>
  
        <Link to={'/'}><button className="btn btn-md bg-blue-900 px-20 text-xl text-white font-bold">Go home</button></Link>
      </div>
        );
      };

export default Errorpage;