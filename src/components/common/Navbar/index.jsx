import React from 'react';
import './index.scss'
const Navbar = () => {
    return <> 
        <nav className='navbar'>
            <div className='logo'>ACND Lifestlye</div>
            <div className='nav-links'>
                <ul> Products
                    <li>Men</li>
                    <li>Women</li>
                    <li>Accessories</li>
                </ul>
                <ul> Company
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Returns</li>
                </ul>
                <ul> User
                    <li>Account Information</li>
                    <li>Orders</li>
                    <li><button>Sign in</button>/ <button>Sign out</button></li>
                </ul>
                <button className='cart'>Cart</button>
                <button>Search</button>
            </div>
        </nav> 
    </>
}

export default Navbar;