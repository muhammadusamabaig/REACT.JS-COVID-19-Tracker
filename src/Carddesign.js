import React from 'react';
import CountUp from 'react-countup';
import './shadow.css'
import {Pie} from 'react-chartjs-2';

 function Carddesign (props){
console.log(props)
const d=new Date(props.fetchdata.lastUpdate)
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];const week=['sunday','monday','tuesday','wednesday','thursday','friday']
const {confirmed,recovered,deaths}=props.fetchdata
   
    



console.log(d.getDay(0).toString())

if(confirmed.value!==0){


  return (
    
    <div>
     
      
    <div className="container" >
      <div className="row" style={{alignItems:"center"}}>



      



      <div className="col-3 d-none d-lg-block" >
     

      </div>

      <div className="col-11 col-lg-2 col-sm-10 col-xs-10  " style={{marginTop:"3%",marginLeft:"3%",borderBottom:"4px solid #2b70f0",backgroundColor:"white",boxShadow: "5px 6px 4px lightgray",borderRadius:"6%",paddingLeft:"2%"}}>
      <h6 style={{color:"darkgray"}}>Infected</h6>
      <span style={{marginTop:"1%"}}>
      <CountUp end={confirmed.value} duration={2} />
      </span>
      <br/>
  <em style={{color:"darkgray"}}>{week[d.getDay()]}</em>  <em style={{color:"darkgray"}}>{month[d.getMonth()]}</em> <em style={{color:"darkgray"}}>{d.getFullYear()}</em>
<h6>No of active cases of COVID-19</h6>

      </div>







      <div className="col-11 col-lg-2 col-sm-10 col-xs-10"  style={{marginTop:"3%",borderBottom:"4px solid red",backgroundColor:"white",marginLeft:"2%",boxShadow: "5px 6px 4px lightgray",borderRadius:"6%",paddingLeft:"2%"}}>
      
       <h6 style={{color:"darkgray"}}>Deaths</h6>
      <span style={{marginTop:"1%"}}>
      <CountUp end={deaths.value} duration={2} />
      </span>
      <br/>
  <em style={{color:"darkgray"}}>{week[d.getDay()]}</em>  <em style={{color:"darkgray"}}>{month[d.getMonth()]}</em> <em style={{color:"darkgray"}}>{d.getFullYear()}</em>
<h6>No of deaths cases of COVID-19</h6>
      </div>
      





      
      <div className="col-11 col-lg-2 col-sm-10 col-xs-10" style={{marginTop:"3%",borderBottom:"4px solid #f0ab2b",backgroundColor:"white",marginLeft:"2%",boxShadow: "5px 6px 4px lightgray",borderRadius:"6%",paddingLeft:"2%"}}>
     
      <h6 style={{color:"darkgray"}}>Recovered</h6>
      <span style={{marginTop:"1%"}}>
      <CountUp end={recovered.value} duration={2} />
      </span>
      <br/>
  <em style={{color:"darkgray"}}>{week[d.getDay()]}</em>  <em style={{color:"darkgray"}}>{month[d.getMonth()]}</em> <em style={{color:"darkgray"}}>{d.getFullYear()}</em>
<h6>No of recovered cases of COVID-19</h6>
      </div>
      
      </div>
      <div   className="row">
        <div style={{width:"70%",marginLeft:"18%"}}>
        <Pie 
          data={{
            labels: ['Infected', 'Deaths', 'Recovered'],
            datasets: [
              {
                label: 'confirmed',
                backgroundColor: [
                  '#2b70f0',
                  'red',
                  '#f0ab2b',
                 
                ],
                hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
                
                ],
                data: [confirmed.value, deaths.value, recovered.value]
              }
            ]     
          }}
          options={{
            title:{
              display:true,
              text:'Live Tracker Of COVID-19 Statistics',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

        </div>
        </div>
    </div>
    
    </div>
    
  );
    }
    else{
      return(
      <h1>loading</h1>
      )
    }
}

export default Carddesign;
