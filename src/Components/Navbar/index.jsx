import { Button } from "@material-ui/core";
import React from "react";
import Drawer from "./drawer";
import "./index.css";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { TbMapPin } from "react-icons/tb";
import logo from "../../assets/images/nodesLogo.png"
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"


function Navbar() {

  var navigate=useNavigate();


  return (
    <div className="navbar2">
      <div className="links">
        <span style={{display:"flex",justifyContent:"space-between" }}>
          <img  onClick={()=>{navigate("/")}}  src={logo} width={150}/>
          <div >
          <a onClick={()=>{navigate("/")}}   className="link">
            Home
          </a>
          <a onClick={()=>{navigate("/shop")}}   className="link">
            Shop
          </a>
          <a onClick={()=>{navigate("/about")}}   className="link">
            About
          </a>
          <a onClick={()=>{navigate("/contact")}}   className="link">
            Contact
          </a> 
          </div>
        </span>
       
      </div>
     
  
      <Drawer className="drawer" />
    </div>
  );
}

export default Navbar;
