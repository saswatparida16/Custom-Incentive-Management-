import './App.css';
import HolidaypackageMange from './Pages/Home/HolidaypackageMange';
import HomePage from './Pages/Home/HomePage';
import IncentiveManage from './Pages/Home/IncentiveManage';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'; 
import ManageEmployee from './Pages/Login/ManageEmployee';
import AdminLogin from './Pages/Login/AdminLogin';
import AdminForm from './Pages/Login/AdminForm';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/holidaypackage" element={<HolidaypackageMange />} />
        <Route path="/manageemp" element={<ManageEmployee />} />
        <Route path="/incentive-calculation" element={<IncentiveManage />} />
        <Route path="/admin-login" element={<AdminLogin/>} />
        <Route path="/admin-form" element={<AdminForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
