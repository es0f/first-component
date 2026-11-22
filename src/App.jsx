import {Route, BrowserRouter, Routes} from 'react-router';
import Layout from './views/Layout';
import Home from './views/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* TODO: add missing routes */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};