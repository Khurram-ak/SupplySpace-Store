import React from 'react';
import Navbar from '../../Components/Navbar';
import HomeBanner from '../../Components/HomeBanner';
import Categories from '../../Components/Categories';
import Footer from '../../Components/Footer';
import Vogue from '../../Components/Vogue';
import Feature from '../../Components/Feature';
import Reviews from '../../Components/Reviews';
 

function Home() {
    
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
    return<>
    <div>
        <div style={{height:"13vh"}}></div>
        <Navbar/>
        <HomeBanner/>
        <br></br>
        <Categories /> 
        <br></br>
        <div style={{height:'50px'}}>

        </div>
        <Vogue /> 
        <div style={{height:'50px'}}>
        </div>
         <Feature/>

        <div style={{height:'50px'}}>
        </div>
         <Reviews/>
        <div style={{height:'50px'}}>
        </div>

        <Footer/>    
     </div>
    
    </>
}

export default Home;