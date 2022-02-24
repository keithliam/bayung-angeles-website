import React, { Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from './routes';
import { Footer, Navbar, ErrorBoundary, LoadingScreen, ErrorScreen } from './components';

const App = () => (
  <ErrorBoundary errorComponent={ErrorScreen}>
    <LoadingScreen delay={1500}>
      {fallbackManager => (
        <Suspense fallback={fallbackManager}>
          <BrowserRouter>
            <Navbar />
            <Routes />
            <Footer />
          </BrowserRouter>
        </Suspense>
      )}
    </LoadingScreen>
  </ErrorBoundary>
);

const Routes = () => {
  const element = useRoutes(routes);
  return element;
};

export default App;
