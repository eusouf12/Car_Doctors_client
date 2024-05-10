import { Helmet } from 'react-helmet';
import About from '../About/About';
import Hbanner from './Hbanner/Hbanner';
import Hservices from './Hservices/Hservices';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className='mx-auto max-w-7xl rounded-xl'>
            <Hbanner></Hbanner>
            </div>
            <About></About>
           <Hservices></Hservices>
        </div>
    );
};

export default Home;