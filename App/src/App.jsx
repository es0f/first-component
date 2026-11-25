import {Route, BrowserRouter, Routes} from 'react-router';
import Layout from './components/Layout';
import Home from './views/Home';
import Login from './views/login';
import Logout from './views/logout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;