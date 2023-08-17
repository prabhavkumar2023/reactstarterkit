
import Profile  from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Crud from './pages/Crud';

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
    },{
      path: 'CRUD',
      element:<Crud />

    }

  ]
export default ProtectedRoutes;  