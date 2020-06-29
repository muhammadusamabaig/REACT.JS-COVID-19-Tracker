





// class CountrybarChart extends Component{

//     render(){

//      return(
//           <div>
// <h1>huuhuh</h1>

// </div>
//      )
// }
// }
// export default CountrybarChart


import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';
import {countries} from './fetching'

import { NativeSelect,FormControl } from '@material-ui/core';


export default class CountrybarChart extends React.Component {



     


    state={
     getcountryarr:[],
     labels: ['', '', ''],
     datasets: [
       {
         label: 'confirmed',
         backgroundColor: [
           '#B21F00',
           '#C9DE00',
           '#2FDE00',
          
         ],
         hoverBackgroundColor: [
         '#501800',
         '#4B5000',
         '#175000',
          
         ],
         data: [20, 0, 0]
       }
     ]     
   };

          
        componentDidMount(){
          // const {confirmed,deaths,recovered}=this.props.data
// console.log(confirmed,"chal rhahy kiya")


          const getcountries=async ()=>{
               const fetchcountry= await countries()
               const {data}=fetchcountry
               const getcountryarr=data
               console.log(getcountryarr.countries,"arrray")
             
               this.setState({getcountryarr:getcountryarr.countries})
               }

               getcountries() 


        this.setState({
          
          labels: ['infected','deaths','recovered'],
          datasets: [
            {
              label: ['infected','deaths','recovered'],
              backgroundColor: [
                'green',
                'red',
                'blue',
               
              ],
              hoverBackgroundColor: [
              '#501800',
              '#4B5000',
              '#175000',
              
              ],
              data: [this.props.data.confirmed.value, this.props.data.deaths.value, this.props.data.recovered.value]
            }
          ]
            }
        )
          
        console.log("diid",this.state)

                  }
         
     render() {
          

          return (
               <div>
                     
        <div className="container">
          <div  className="row  " style={{marginLeft:"40%",marginBottom:"3%",marginTop:"2%"}}>
          <NativeSelect onChange={(e)=>{this.props.getsinglecountrydata(e.target.value)
        
        }}
        className="col-4">
            <option  value="Choose Country">Choose Country</option>{
              this.state.getcountryarr.map((item)=>{
                return(
                <option key={item.name} value={item.name}>{item.name}</option>
                )

              })
            }

          </NativeSelect>
        </div>
        </div>
      <div style={{width:"70%"}} className="container">
           <div style={{align:"center"}} className="row">
        <Pie 
          data={this.state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

        <Doughnut
          data={this.state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
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
    );
  }
}