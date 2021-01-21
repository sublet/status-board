import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Loadable from 'react-loadable'
import Loading from 'components/Loading'

const Home = Loadable({
  loader: () => import('layouts/Home'),
  loading: Loading
})

const Example = Loadable({
  loader: () => import('layouts/Example'),
  loading: Loading
})

const NotFound = Loadable({
  loader: () => import('layouts/NotFound'),
  loading: Loading
})

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    isPrivate: false
  },
  {
    path: '/example',
    exact: true,
    component: Example,
    isPrivate: false
  }
]

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    <route.component {...props} test={route} routes={route.routes} />
  )} />
)

const auth = {
  isAuthenticated () {
    const tokenInfo = window.localStorage.getItem('userInfo')
    if (!tokenInfo) {
      return false
    }
    return true
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: '/' }
          }}
        />
      )
    }
  />
)

const Routes = () => (
  <Switch>
    {routes.map((route, i) => (
      route.isPrivate ? <PrivateRoute key={i} {...route} /> : <RouteWithSubRoutes key={i} {...route} />
    ))}
    <Route component={NotFound} />
  </Switch>
)

export default Routes
