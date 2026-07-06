import React from 'react';
//components
import Navbar from '../Navbar';
import Footer from '../Footer';
//stylesheets
import './index.scss';


const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
