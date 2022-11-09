import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import ShopBody from '../../Components/ShopBody';
 
 

function Shop() {

    
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
    return<>
    <div>
        <div style={{height:"13vh"}}></div>
        <Navbar/>
        <ShopBody  />
        <Footer/>    
     </div>
    
    </>
}

export default Shop;