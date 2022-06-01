import React from 'react';
import Header from './Header.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Boxes from "./news/Boxes";

function MyNews() {
    return (
        <React.Fragment>
            <Header />
            <Navbar />
            <Boxes />
            <Footer />
        </React.Fragment>
    );
}

export default MyNews;