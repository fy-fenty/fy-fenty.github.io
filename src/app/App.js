import React from 'react';
import createRoutes from './routes';
import './App.css';
import Footer from '../components/footer';
import Navigatior from '../components/navigatior';
import ErrorBoundary from '../utils/ErrorBoundary';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const routers = createRoutes();
  return (
    <Router>
      <div className="bg"></div>
      <Navigatior></Navigatior>
      <ErrorBoundary>
        {routers}
      </ErrorBoundary>
      <Footer></Footer>
    </Router>
  );
}

export default App;
