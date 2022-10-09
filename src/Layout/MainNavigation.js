import React from 'react'
import { Link } from 'react-router-dom'
import classes from "./MainNavigation.module.css"


const MainNavigation = () => {
  return (
    <div className={classes.nav}>
              <ul className={classes.navItem}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/list">List</Link></li>
                            <li><Link to="/create">Create</Link></li>
                            <li><Link to="/search">Search</Link></li>
                            <li><Link to="/details">Details</Link></li>
                            <li><Link to="/update">Update</Link></li>
                            <li><Link to="/login">Login</Link></li>
              </ul>
    </div>
  )
}

export default MainNavigation