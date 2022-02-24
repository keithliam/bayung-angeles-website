import React, { Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from './routes';
import { Footer, Navbar, ErrorBoundary } from './components';
import { Loading as LoadingPage, Error as ErrorPage } from './pages';

const App = () => (
  <ErrorBoundary errorComponent={ErrorPage}>
    <Suspense fallback={<LoadingPage />}>
      <BrowserRouter>
        <Navbar />
        <Routes />
        <Footer />
      </BrowserRouter>
    </Suspense>
  </ErrorBoundary>
);

const Routes = () => {
  const element = useRoutes(routes);
  return element;
};

export default App;
