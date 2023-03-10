import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './Admin/Authentication/Login/Login';
import CategoryManagement from './Admin/CategoryManagement/CategoryManagement';
import AdminDashboard from './Admin/Dashboard/AdminDashboard';
import PageNotFound from './Admin/PageNotFound/PageNotFound';
import UserManagement from './Admin/UserManagement/UserManagement';
import VendorManagement from './Admin/VendorManagement/VendorManagement';
import ProtectedRoutes from './protectedRoutes';
import ReRoute from './reRoute';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<ReRoute><AdminLogin /></ReRoute>} />
            <Route path='/admin/dashboard' element={<ProtectedRoutes><AdminDashboard /></ProtectedRoutes>} />
            <Route path='/admin/manageUser' element={<ProtectedRoutes><UserManagement /></ProtectedRoutes>} />
            <Route path='/admin/manageVendor' element={<ProtectedRoutes><VendorManagement /></ProtectedRoutes>} />
            <Route path='/admin/manageCategory' element={<ProtectedRoutes><CategoryManagement /></ProtectedRoutes>} />
            <Route path='*' element={<PageNotFound/>}/> 
        </Routes>
      </Router>
    </div>
  )
}

export default App
