import React,{useLayoutEffect,useState} from 'react';

import NavMobile from './NavMobile';
import NavDesk from './NavDesk';


//stylesheets
import './index.scss'

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

const Navbar = () => {

    const [width] = useWindowSize();
    console.log(width);
        if(width <= 960 ){

            return <NavMobile />;
        } else {
            return <NavDesk />;
         }
      
}

export default Navbar;