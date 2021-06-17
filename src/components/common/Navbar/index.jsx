import React, {useState} from 'react';
import {Link} from 'react-router-dom';

//components import Dropdown from ' ./Dropdown'; font awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart, faSearch} from '@fortawesome/free-solid-svg-icons';
import {faUserCircle} from '@fortawesome/free-regular-svg-icons';
//stylesheets
import './index.scss'

const Navbar = () => {

    const [click,
        setClick] = useState(false);
    // const [dropdown,
    //     setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // const onMouseEnter = () => {
    //     if (window.innerWidth < 960) {
    //         setDropdown(false);
    //     } else {
    //         setDropdown(true);
    //     }
    // };

    // const onMouseLeave = () => {
    //     if (window.innerWidth < 960) {
    //         setDropdown(false);
    //     } else {
    //         setDropdown(false);
    //     }
    // };

    return <> 
    <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            ACND Lifestyle
        </Link>
        <div className='menu-icon' onClick={handleClick}>
            <i
                className={click
                ? 'fas fa-times'
                : 'fas fa-bars'}/>
        </div>

        <div className='nav-links'>
            <div className='products'>
                <h4>Products</h4>
                {/* <ul className='active'>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Accessories</li>
                </ul> */}
            </div>
            <div className="company">
                <h4>Company</h4>
                {/* <ul >
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Returns</li>
                </ul> */}
            </div>
            <div className="user">
                <h4><FontAwesomeIcon icon={faUserCircle}/></h4>
                {/* <ul className='active'>
                    <li>Account Information</li>
                    <li>Orders</li>
                    <li>Sign in</li>
                    <li>Sign out</li>
                </ul> */}
            </div>
            <button className='cart nav-icons'><FontAwesomeIcon icon={faShoppingCart}/></button>
            <button className='nav-icons'><FontAwesomeIcon icon={faSearch}/></button>
        </div>
    </nav> 
    </>
}

export default Navbar;