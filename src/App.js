import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { landing } from './routes';
import { Footer, Navbar } from './components';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path={landing.pathname} element={<landing.component />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
