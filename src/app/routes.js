import React, { Suspense, lazy } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

export default function createRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path={['/', '/home']} component={lazy(() => import('../containers/home'))} />
        <Route path="/about" component={lazy(() => import('../containers/about'))} />
        <Route path="/article" component={lazy(() => import('../containers/article'))} />
      </Switch>
    </Suspense>
  )
}
