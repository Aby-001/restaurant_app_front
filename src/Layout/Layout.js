import React from 'react'
import MainNavigation from './MainNavigation'

const Layout = (props) => {
  console.log('page is render')
  return (
    <React.Fragment>
      <MainNavigation />
      {props.children}
    </React.Fragment>
  )
}

export default Layout