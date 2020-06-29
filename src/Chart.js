import React from 'react';
// import {Line,Bar} from 'react-chartjs-2'
import Linechart from './graphchart'

const  Chart=(props)=> {


    

 
  return (
    <div >
      {/* <line/> */}
      <Linechart  getsinglecountrydata={props.getsinglecountrydata}/>
      
    </div>
  );
  }
export default Chart;
