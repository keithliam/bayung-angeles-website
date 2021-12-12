import React from 'react';
import { ViewportProvider } from 'react-viewport-utils';
import { Landing } from './pages';

const App = () => (
  <ViewportProvider>
    <Landing />
  </ViewportProvider>
);

export default App;
