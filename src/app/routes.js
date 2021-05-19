import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function createRoutes() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={['/', '/home']} component={lazy(() => import('../containers/home'))} />
          <Route path="/about" component={lazy(() => import('../containers/about'))} />
        </Switch>
      </Suspense>
    </Router>
  )
}
