import React, {useState, useEffect,useRef} from 'react';
import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart, faSearch} from '@fortawesome/free-solid-svg-icons';
import {faUserCircle} from '@fortawesome/free-regular-svg-icons';
//stylesheets
import './index.scss'

const NavDesk = () => {
    // const [click, setClick] = useState(false);
    const[activeMenu, setActive] = useState(null);

    // const closeMobileMenu = () => setClick(false);

     const handleClick=(e)=> {
        // console.log(e.target.classList.contains('navbar-burger'));
        // if(e.target.classList.contains('navbar-burger')){
        //     // setClick(click);
        //     console.log('navbarburger came out true');
        // }else{
        //     setActive(e.target.classList[0]) 
        // }
        setActive(e.target.classList[0])
      }

      const ref = useRef(null);
        useEffect(() => {
            switch (activeMenu) {
                case 'products':
                    document.querySelector('.products').parentElement.classList.add('active')
                    document.querySelector('.company').parentElement.classList.remove('active')
                    document.querySelector('.user').parentElement.classList.remove('active')
                    break;
                case 'company':
                    document.querySelector('.products').parentElement.classList.remove('active')
                    document.querySelector('.company').parentElement.classList.add('active')
                    document.querySelector('.user').parentElement.classList.remove('active')
                    break;
                case 'user':
                    document.querySelector('.products').parentElement.classList.remove('active')
                    document.querySelector('.company').parentElement.classList.remove('active')
                    document.querySelector('.user').parentElement.classList.add('active')
                    break;
                case null:
                    document.querySelector('.products').parentElement.classList.remove('active')
                    document.querySelector('.company').parentElement.classList.remove('active')
                    document.querySelector('.user').parentElement.classList.remove('active')
                    break;
                default:
                    setActive(null)
                    break;
            }

            function handleClickOutside(e){
                if(ref.current && !ref.current.contains(e.target)){
                    setActive(null)
                }
            }
            // if(click){
            //     document.querySelector('.nav-links').classList.add('mobile-active')
            // } else{
            //     document.querySelector('.nav-links').classList.remove('mobile-active')
            // }
    
            document.addEventListener('mousedown', handleClickOutside);
            return ()=>{
                document.removeEventListener('mousedown', handleClickOutside)
            };
           
        }, [activeMenu,ref])

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
        <Link to='/' className='navbar-logo'>
            ACND <span>Lifestyle</span>
        </Link>

        {/* <FontAwesomeIcon onClick={handleClick} className='navbar-burger' icon={faBars}/> */}
        
        <div className='nav-links' ref={ref}>
            <div>
                <button className='products' onClick={handleClick}>Products</button>
                <ul>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Accessories</li>
                </ul>
            </div>
            <div>
                <button className='company' onClick={handleClick}>Company</button>
                <ul >
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Returns</li>
                </ul>
            </div>
            <div>
                <button className='user' onClick={handleClick}><FontAwesomeIcon icon={faUserCircle}/></button>
                <ul>
                    <li>Account Information</li>
                    <li>Orders</li>
                    <li>Sign in</li>
                    <li>Sign out</li>
                </ul>
            </div>
            <button className='cart nav-icons'><FontAwesomeIcon icon={faShoppingCart}/></button>
            <button className='nav-icons'><FontAwesomeIcon icon={faSearch}/></button>
        </div>
    </nav> 
    </>
}

export default NavDesk;