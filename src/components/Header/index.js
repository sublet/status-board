import React, { Fragment, useEffect, useState } from 'react';

import { isLoggedIn, logout } from 'lib/utils'

import { ChevronDownLight } from 'components/Icons'

const Header = props => {
  const [showDropdown, setShowDropdown] = useState(false)

  const _goto = path => {
    props.history.push(path)
  }
  
  const _onLogout = () => {
    window.localStorage.removeItem('userInfo')
    window.location = '/'
  }

  // const _isLoggedIn = () => {
  //   const token = window.localStorage.getItem('userInfo')
  //   if (token && token !== '') {
  //     return true
  //   }
  //   return false
  // }

  const _toggleMenu = () => {
    const result = showDropdown ? false : true
    setShowDropdown(result)
  }

  // const _getButton = (name, slug, url) => {
  //   let classes = `butt butt--clear butt--${slug}`
  //   if (window.location.pathname === url) {
  //     classes = `${classes} active`
  //   }
  //   return <button className={classes} onClick={() => _goto(url)}>{name}</button>
  // }

  // const _getNavLeft = () => {
  //   const token = window.localStorage.getItem('userInfo')
  //   if (token) {
  //     if (props.subscription && props.subscription.hearken.rightsGranted) {
  //       return (
  //         <Fragment>
  //           <nav>
  //             {_getButton('Account', 'account', '/account')}
  //             {_getButton('Billing', 'billing', '/billing')}
  //             {_getButton('Support', 'support', '/support')}
  //             {_getButton('Downloads', 'downloads', '/downloads')}
  //           </nav>
  //         </Fragment>
  //       )
  //     }
  //   }
  // }

  const _getNavRight = () => {
    const token = window.localStorage.getItem('userInfo')
    if (token && props.accountInfo) {
      if (props.subscription && props.subscription.hearken.rightsGranted) {
        const tokenJson = JSON.parse(token)
        return (
          <Fragment>
            <div className="header__right--desktop">
              <div className="dropdown" onClick={() => _toggleMenu()}>
                <p><span>{props.accountInfo.email}</span><ChevronDownLight /></p>
                {showDropdown && (
                  <div className="dropdown__menu">
                    <a href={`boseaudiodriver://?token=${tokenJson.token}`} id="launchPinpoint" className="butt butt--clear button--launch">Launch PinPoint</a>
                    <button className="butt butt--clear" onClick={() => logout()}>Logout</button>
                  </div>
                )}
              </div>
            </div>
            <div className="header__right--mobile">
              <button className="butt butt--clear" onClick={() => logout()}>Logout</button>
            </div>
          </Fragment>
        )
      }
    }

    return (
      <nav>
        {!isLoggedIn() && <button className="button button--clear" onClick={() => _goto('/login')}>Login</button>}
        {isLoggedIn() && <button className="button button--clear" onClick={() => _goto('/account')}>Go to Account</button>}
        {isLoggedIn() && <button className="button button--clear" onClick={() => _goto('/logout')}>Logout</button>}
      </nav>
    )
  }

  // const _getMainDropdownMobile = () => {
  //   let name = 'Account'
  //   if (window.location.pathname === '/billing') {
  //     name = 'Billing'
  //   } else if (window.location.pathname === '/support') {
  //     name = 'Support'
  //   }
  //   return (
  //     <div className="dropdown" onClick={() => _toggleMenu()}>
  //       <p><span>{name}</span><ChevronDownLight /></p>
  //       {showDropdown && (
  //         <div className="dropdown__menu">
  //           {_getButton('Account', 'account', '/account')}
  //           {_getButton('Billing', 'billing', '/billing')}
  //           {_getButton('Support', 'support', '/support')}
  //           <button className="butt butt--clear" onClick={() => window.gigya.accounts.logout({callback:_onLogout})}>Logout</button>
  //         </div>
  //       )}
  //     </div>
  //   )
  // }

  let classes = 'header__wrapper'
  // if (_isLoggedIn()) {
  //   classes = `${classes} header__wrapper--loggedIn`
  // }

  return (
    <div className={classes}>
      <div className="header__container">
        <header className="header header--desktop">
          <div className="header__left">
            <h1><a href="/" className="logo" onClick={e => {
              e.preventDefault()
              window.location= '/'
            }}>Hearken App</a></h1>
            {/* {_getNavLeft()} */}
          </div>
          <div className="header__right">
            {_getNavRight()}
          </div>
        </header>
        <header className="header header--mobile">
          <div className="header__left">
            {/* {_isLoggedIn() && _getMainDropdownMobile()}
            {!_isLoggedIn() && (
              <h1><a href="/" className="logo" onClick={e => {
                e.preventDefault()
                window.location= '/'
              }}>Hearken App</a></h1>
            )} */}
          </div>
          <div className="header__right">
            {/* {_getNavRight()} */}
          </div>
        </header>
      </div>
    </div>
  )
  
};

export default Header;