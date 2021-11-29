import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to="/about">About<br/></Link>
        <Link to="/posts">Posts<br/></Link>
        {/* <Link to="/error">Error</Link> */}
      </div>
    </div>
  )
}

export default Navbar;