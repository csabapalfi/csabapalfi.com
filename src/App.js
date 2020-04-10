import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { Grommet } from 'grommet';

import theme from './theme';
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App = () => (
  <Grommet theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404.html" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Grommet>
);

export default App;