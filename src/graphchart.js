import React from 'react';
import {countries} from './fetching'
import { NativeSelect } from '@material-ui/core';

export default class Linechart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {getcountryarr:[]    };
  }
 
 

 componentDidMount(){
  
const getcountries=async ()=>{
  const fetchcountry= await countries()
  const {data}=fetchcountry
  const getcountryarr=data
  console.log(getcountryarr.countries,"arrray")

  this.setState({getcountryarr:getcountryarr.countries})
  }
getcountries() 

}


  render() {

         
    return (
      <div>
        
       
        <div className="container">
          <div  className="row"  >
            
          <NativeSelect  style={{marginLeft:"18%",marginBottom:"0%",marginTop:"2%"}} onChange={(e)=>{this.props.getsinglecountrydata(e.target.value)
        
        }}
        className="col-8">
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
        
      </div>
    );
        }
        
  }
