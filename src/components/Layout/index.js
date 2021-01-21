import React from 'react';
import BodyClassName from 'react-body-classname'

import Header from 'components/Header'

const Layout = props => {
  return (
    <BodyClassName className={`${props.bodyClassName} ${process.env.REACT_APP_BUILD !== 'production' ? 'is-development' : ''}`}>
      <div id="root" role="main" className={`main ${props.className} ${props.error ? 'main--error' : ''}`}>
        <Header history={props.history} accountInfo={props.accountInfo} isHomePage={props.isHomePage || false} subscription={false} isSupport={false} pageName={`Dashboard`} />
        {props.error && (
          <div className="error__message">
            <p>{props.error}</p>
          </div>
        )}
        <div className="main__main">
          {props.children}
        </div>
      </div>
    </BodyClassName>
  )
  
};

export default Layout;