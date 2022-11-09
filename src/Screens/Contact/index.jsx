import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import ContactBody from '../../Components/ContactBody';
 
 

function Contact() {
    
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
    return<>
    <div>
        <div style={{height:"13vh"}}></div>
        <Navbar/>
        <ContactBody  />
        <Footer/>    
     </div>
    
    </>
}

export default Contact;