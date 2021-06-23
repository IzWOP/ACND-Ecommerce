import React, {useState, useEffect,useRef} from 'react';
import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart, faSearch} from '@fortawesome/free-solid-svg-icons';
import {faUserCircle} from '@fortawesome/free-regular-svg-icons';
//stylesheets
import './index.scss'

const NavDesk = () => {
    //set menu state
    const[activeMenu, setActive] = useState(null);
    //set scroll state to change background color
    const [scrollState, setScrollState] = useState("top");
    //checks anything clicked to match set navbar classes
     const handleClick=(e)=> {
        setActive(e.target.classList[0])
      }
      //variable to update later
      
      //click outsite of nav reference
      const ref = useRef(null);
        useEffect(() => {
            //checks state to make sure it matches
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
            let listener = null
            //listening to set state to update navbar background
            listener = document.addEventListener("scroll", e => {
                var scrolled = document.scrollingElement.scrollTop
                if (scrolled >= 120) {
                  if (scrollState !== "amir") {
                    setScrollState("amir")
                    document.querySelector('nav').classList.add('scrolled')
                  }
                } else {
                  if (scrollState !== "top") {
                    setScrollState("top")
                    document.querySelector('nav').classList.remove('scrolled')
                  }
                }
              })
              //event handler for not clicking within reference div(navbar)
            function handleClickOutside(e){
                if(ref.current && !ref.current.contains(e.target)){
                    setActive(null)
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return ()=>{
                //stops infinite loops
                document.removeEventListener("scroll", listener)
                document.removeEventListener('mousedown', handleClickOutside)
            };
           
        }, [activeMenu,ref,scrollState])
        //to add mouse over functionality later. basic functionality is priority and deadline
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
            <div className="div">
                <button className='cart'><FontAwesomeIcon icon={faShoppingCart}/></button>
            </div>
            <div>
                <button className=''><FontAwesomeIcon icon={faSearch}/></button>
            </div>
        </div>
    </nav> 
    </>
}

export default NavDesk;