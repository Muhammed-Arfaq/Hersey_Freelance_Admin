import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './Admin/Authentication/Login/Login';
// import BannerManagement from './Admin/BannerManagement/BannerManagement';
import CategoryManagement from './Admin/CategoryManagement/CategoryManagement';
import AdminDashboard from './Admin/Dashboard/AdminDashboard';
import UserManagement from './Admin/UserManagement/UserManagement';
import VendorManagement from './Admin/VendorManagement/VendorManagement';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/admin/login' element={<AdminLogin />}/>
          <Route path='/admin/dashboard' element={<AdminDashboard />}/>
          <Route path='/admin/manageUser' element={<UserManagement />}/>
          <Route path='/admin/manageVendor' element={<VendorManagement />}/>
          {/* <Route path='/admin/manageBanner' element={<BannerManagement />}/> */}
          <Route path='/admin/manageCategory' element={<CategoryManagement />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
