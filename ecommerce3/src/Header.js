import React from 'react'
import Search from '@mui/icons-material/Search'
import './Header.css';
import { Link } from '@mui/material';
// import logo from './images/logo.jpg'
import { ShoppingCartRounded } from '@mui/icons-material';

export default function Header() {
  return (
    <div>
      <nav className='header'>
        <img className='header_logo' src='./images/logo6.png' alt='Logo'></img>
        <div className='header_search'>
            <input type='text' className='header_searchInput'/>
            <Search className='header_searchIcon' />
        </div>
        <div className='header_nav'>
            <Link to="/" className='header_link'>
                <div className='header_option'>
                    <span className='header_optionLine1'>Hello, User</span>
                    <span className='header_optionLine2'> Sign In/Out</span>
                </div>
            </Link>
            <Link to="/" className='header_link'>
                <div className='header_option'>
                    <span className='header_optionLine1'>Returns</span>
                    <span className='header_optionLine2'>Orders</span>
                </div>
            </Link>
            <Link to="/" className='header_link'>
                <div className='header_option'>
                    <span className='header_optionLine1'>Congo</span>
                    <span className='header_optionLine2'>Prime</span>
                </div>
            </Link>
        </div>
        <Link to="/checkout" className='header_link'>
        <div className='header_optionBasket'>
            <ShoppingCartRounded/>
            <span className='header_optionLine2 header_basketCount'>2</span>
        </div>
      </Link>

      </nav>
     
    </div>
  )
}
