import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li> <Link to="/accordian">Accordian</Link></li>
            <li> <Link to="/random-color">Random Color</Link></li>
            <li> <Link to="/star-rating">Star Rating</Link></li>
            <li> <Link to="/image-slider">image Slider</Link></li>
        </ul>
    </nav>
  )
}
