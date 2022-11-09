import React from 'react';
import Navbar from '../../Components/Navbar';
import AboutBanner from '../../Components/AboutBanner';
import Footer from '../../Components/Footer';
import AboutBody from '../../Components/AboutBody';
 
 

function About() {
    
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
    return<>
    <div>
        <div style={{height:"13vh"}}></div>
        <Navbar/>
        <AboutBanner/>
        <AboutBody/>
        <Footer/>    
     </div>
    
    </>
}

export default About;