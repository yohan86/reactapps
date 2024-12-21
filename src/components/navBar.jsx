import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div class="Navigation-wrapper">
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li> <Link to="/accordian">Accordian</Link></li>
            <li> <Link to="/random-color">Random Color</Link></li>
            <li> <Link to="/star-rating">Star Rating</Link></li>
            <li> <Link to="/image-slider">image Slider</Link></li>
            <li> <Link to="/load-more">Product Load More</Link></li>
            <li><Link to="/tree-menu">Tree Menu</Link></li>
        </ul>
    </div>
  )
}
