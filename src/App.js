import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './common/Loader';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './pages/Dashboard';
import PageNote from './pages/PageNote';
import ProtectedRoutes from './ProtectedRoutes';
import SignIn from './pages/Authentication/SignIn';
import { loadJWT } from './utils/localstore';
import { setJWT, setLoding } from './redux/reducer/Login/LoginSlice';

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, pageReload } = useSelector(state => state.login);

  useEffect(() => {
    const jwt = loadJWT();
    if (jwt) {
      dispatch(setJWT(jwt));
    } else {
      dispatch(setLoding(false));
    }
  }, [dispatch]);

  if (pageReload) {
    return <Loader />;
  }

  return (
    <>
      <Toaster position='top-right' reverseOrder={false} containerClassName='overflow-auto' />
      <Router>
        <Routes>
          {isAuthenticated ? (
            <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Dashboard />} />
            {ProtectedRoutes?.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
            </Route>
          ) : (
            <Route path="/" element={<SignIn />} />
          )}
          <Route path="*" element={<PageNote />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;