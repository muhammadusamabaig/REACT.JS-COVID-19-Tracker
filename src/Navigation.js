import React, { Component } from 'react';

import './contactphone.css';
 
// import { Navbar ,Nav,Form,Button, FormControl} from 'react-bootstrap';

//navigation hy ya

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
           <div class="topnav" id="myTopnav">
          
           <a href="#home" class="active"><img alt="home" style={{height
           :"32px",width:"32px"}} src="covidicon.jpg"/></a>
           <a href="/">Home</a>
           <a href="/terms">Term & Conditions</a>
           <a href="/contact">Contact</a>
           

           <a href="#////" class="icon" onClick={this.myFunction}>
             <i className="fa fa-bars"></i>
           </a>
           
         </div>

   )
 }
}
                                                                                                                                                                                                                                                                                                                                    



                                                                                                                                                                                                                                                                                                                                    



export default Navigation