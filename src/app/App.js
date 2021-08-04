import React from 'react';

import createRoutes from './routes';
import './App.css';
import Footer from '../components/footer';
import Navigatior from '../components/navigatior';
import ErrorBoundary from '../utils/ErrorBoundary';

function App() {
  const routers = createRoutes();
  return (
    <>
      <div class="bg"></div>
      <Navigatior></Navigatior>
      <ErrorBoundary>
        {routers}
      </ErrorBoundary>
      <Footer></Footer>
    </>
  );
}

export default App;
