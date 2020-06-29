import React, { Component } from 'react';
import fetch from './fetching'
import Chart from './Chart'
import Navigation from './Navigation' 

import Footer from './Footer'
import Contact from './Contact'
import Terms from './Terms'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


import Carddesign from './Carddesign'
export default class App extends Component {

  
   state={
      

  
  data:{confirmed:{value:0,detail:"okkkkk",lastUpdate:"2020-06-23T14:33:34.000Z"},
  recovered:{value:0,detail:"okkkkk",lastUpdate:"2020-06-23T14:33:34.000Z"},
  deaths:{value:0,detail:"okkkkk",lastUpdate:"2020-06-23T14:33:34.000Z"},
lastUpdate:"dvvdv",

// create this for classify single country and global data countries: "https://covid19.mathdro.id/api/countries"
countries: "https://covid19.mathdro.id/api/countries"
}

    
  }


async componentDidMount(){
  const data= await fetch()

// const {confirmed}=data
console.log(data,"appppp")
this.setState({data:data})
 }
 
  
 
render(){


var singlecountryname
 var getsinglecountrydata= async (countrydata)=> {
    console.log(countrydata)
    singlecountryname=countrydata
    const data= await fetch(singlecountryname)
    
  singlecountryname=countrydata
  // const {confirmed}=data
  console.log(data,"appppp")
  this.setState({data:data})
 
    }
   

  return(
    
     

// {
//   console.log('okkkk')
// }
    
<Router>
  <div>
<Switch>
<Route exact path="/">
<Navigation/>
      <img src={process.env.PUBLIC_URL + '/covid.jpg'} alt="covid-img" style={{width:"100%"}} /> 


      <Chart getsinglecountrydata={getsinglecountrydata}/>

    <Carddesign  fetchdata={this.state.data}/>
    <Footer/>

</Route>

<Route path="/contact">
<Navigation/>

<Contact/>

</Route>
<Route path="/terms">
<Navigation/>

<Terms/>
<Footer/>
</Route>
</Switch>
</div>
</Router>
  )
}

}





