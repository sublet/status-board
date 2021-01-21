import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie11'

import React from 'react'
import ReactDOM from 'react-dom'
import App from 'layouts/App'
import * as serviceWorker from 'serviceWorker'

// toggle logging
if (process.env.NODE_ENV !== 'production') {
  localStorage.setItem('debug', `${process.env.REACT_APP_LOGGER_NAME}:*`)
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()