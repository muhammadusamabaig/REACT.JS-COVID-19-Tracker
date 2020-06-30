import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
Link
} from "react-router-dom";
import './contactphone.css';
 


class Navigation extends Component{

 myFunction() {


  
  var x = document.getElementById("myTopnav")
       if (x.className === "topnav") {
         x.className += " responsive"
       } else {
         x.className = "topnav"
       }
     console.log("usmaa")
     }

   
 render(){  
       return(
           <div className="topnav" id="myTopnav">
          
           <a href="" className="active"><img alt="home" style={{height
           :"32px",width:"32px"}} src="covidicon.jpg"/></a> */}
            <Link href="/">Home</Link>
           <a href="#footer" className="d-none d-md-block">Term & Conditions</a>
           <a href="#chart" >statlllkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</a>


           <a href="#////" className="icon" onClick={this.myFunction}>
             <i className="fa fa-bars"></i>
           </a>
           
         </div>

   )
 }
}
                                                                                                                                                                                                                                                                                                                                    



                                                                                                                                                                                                                                                                                                                                    



export default Navigation