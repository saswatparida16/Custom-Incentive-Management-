
import Holidayforms from '../../Components/HolidayPackageManagement/Holidayforms';
import Holidaylist from '../../Components/HolidayPackageManagement/Holidaylist';
import Navbar from "../../Components/Common/Navbar";
import Footer from "../../Components/Common/Footer";
// import axios from 'axios';
// import Holidaylist from "";


export default function HolidaypackageMange()  {
    // const [packages, setPackages] = useState([]);

    // useEffect(() => {
    //     fetchHolidayPackages();
    // }, []);

    // const fetchHolidayPackages = async () => {
    //     try {
    //         const response = await axios.get('/api/holiday-packages');
    //         setPackages(response.data);
    //     } catch (error) {
    //         console.error('Error fetching holiday packages:', error);
    //     }
    // };

    return (
        <div className="container">
            <Navbar></Navbar>
            <Holidaylist />
            <Holidayforms />
            <Footer></Footer>
        </div>
    );
};

