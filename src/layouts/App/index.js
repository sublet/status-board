import React, { Fragment } from 'react'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import Routes from 'routes'
import { CookiesProvider } from 'react-cookie'
import { ProjectProvider } from 'context'

import '../../styles/App.scss'

class Core extends React.Component {
  constructor (props) {
    super(props)

    this._history = createBrowserHistory()
  }

  render () {
    return (
      <ProjectProvider>
        <CookiesProvider>
          <Router history={this._history}>
            <Fragment>
              {this.props.children}
              <Routes />
            </Fragment>
          </Router>
        </CookiesProvider>
      </ProjectProvider>
    )
  }
}

export default Core
