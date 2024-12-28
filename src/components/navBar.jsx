import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div class="Navigation-wrapper">
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li> <NavLink to="/accordian">Accordian</NavLink></li>
            <li> <NavLink to="/random-color">Random Color</NavLink></li>
            <li> <NavLink to="/star-rating">Star Rating</NavLink></li>
            <li> <NavLink to="/image-slider">image Slider</NavLink></li>
            <li> <NavLink to="/load-more">Product Load More</NavLink></li>
            <li><NavLink to="/tree-menu">Tree Menu</NavLink></li>
            <li><NavLink to="/qr-code-generator">QR Code Generator</NavLink></li>
        </ul>
    </div>
  )
}
