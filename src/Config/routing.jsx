import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";
  
  import React, { Suspense, lazy } from "react";
  
  
  import Splash from "../Screens/Splash"
  const Contact = lazy(() => import("../Screens/Contact"));
  const Home = lazy(() => import("../Screens/Home"));
  const Shop = lazy(() => import("../Screens/Shop"));
  const DetailPage = lazy(() => import("../Screens/DetailPage"));
  const About = lazy(() => import("../Screens/About"));
   
  export default function Routing() {
    return (
      <Suspense fallback={<Splash />}>
      <Router>
         
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/detailPage/:id/:title/:price" element={<DetailPage/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
           
          </Routes>
         
        
      </Router>
  
     </Suspense>
    );
  }