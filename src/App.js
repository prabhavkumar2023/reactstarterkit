import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import SignIn from './pages/Authentication/SignIn';
import Loader from './common/Loader';
import DefaultLayout from './layout/DefaultLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  // const isAuthenticated = localStorage.getItem('isAuthenticated');
  const isAuthenticated = true;
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster position='top-right' reverseOrder={false} containerClassName='overflow-auto' />
      <Router>
        <Routes>
          <Route path="/auth/*" element={<SignIn />} />
          {isAuthenticated ?
          (<Route path="/" element={<DefaultLayout />}>
            <Route index element={<SignIn />} />
          </Route>) : (<Route path="/" element={<SignIn />} />)}
        </Routes>
      </Router>
    </>
  );
}

export default App;
