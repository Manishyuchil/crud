import React from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='menu-block'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Add Employee</Link></li>
        <li><Link to="/edit">Edit Employee</Link></li>
        <li><Link to="/del">Remove Employee</Link></li>
      </ul>
    </div>
  )
}

export default Menu
