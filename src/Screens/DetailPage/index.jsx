import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import DetailPageBody from '../../Components/DetailPageBody';
 
 

function DetailPage() {
    
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    return<>
    <div>
        <div style={{height:"13vh"}}></div>
        <Navbar/>
        <DetailPageBody/>
        <Footer/>    
     </div>
    
    </>
}

export default DetailPage;