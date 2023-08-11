
import Profile  from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

const ProtectedRoutes = [
    {
      path: 'dashboard',
      element: <Dashboard />,
    },
    {
      path: 'profile',
      element: <Profile />,
    },
    {
      path: 'settings',
      element: <Settings />,
    }
  ]
export default ProtectedRoutes;  