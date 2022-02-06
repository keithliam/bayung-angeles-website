import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { landing, getInvolved } from './routes';
import { Footer, Navbar } from './components';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path={landing.pathname} element={<landing.component />} />
      <Route path={getInvolved.pathname} element={<getInvolved.component />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
