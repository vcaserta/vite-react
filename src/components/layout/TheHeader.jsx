import React from 'react'
import { NavLink } from 'react-router-dom'

export default function TheHeader() {
  return (
    <header>
      <nav>
        <ul className='flex justify-around'>
          <li>
            <NavLink to="/" end>Logo</NavLink>
          </li>
          <li>
            <NavLink to="/listing" end>Listing Page</NavLink>
          </li>
          <li>
            <NavLink to="/cart" end>Cart Page</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
