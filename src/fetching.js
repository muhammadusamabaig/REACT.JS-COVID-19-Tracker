import axios from 'axios'

export default async function fetch(countrydata){
    let changebaleurl='https://covid19.mathdro.id/api'
    if(countrydata){
       changebaleurl=`https://covid19.mathdro.id/api/countries/${countrydata}`
       
    const {data}= await axios.get(changebaleurl)
console.log(data,"all data")
    return data
     }else{
        changebaleurl=`https://covid19.mathdro.id/api`
        console.log(countrydata)
     const {data}= await axios.get(changebaleurl)
 console.log(data,"all data")
     return data
     }

}

export const fetchdailydata=async()=>{
    try{
        // const data=[{name:"usama",fname:"irfan"},{name:"affan",fname:"irfan"}]
        const {data}= await axios.get('https://covid19.mathdro.id/api/daily')
       const fetchdaily= data.map((dailydata)=>{
        //    const {date}=dailydata
        const {confirmed,deaths,reportDate}=dailydata
const tempdata={
    confirmed:confirmed.total,
    deaths:deaths.total,
    date:reportDate



}

return(tempdata)
        }

        )
// console.log(fetchdaily)
        return (fetchdaily)
    }catch(error){
    
    }
    }




    export const countries= async function fetchcountries(){
        try{
            const countries= await axios.get('https://covid19.mathdro.id/api/countries')
        console.log(countries)
            return countries
        }catch(error){
        
        }
        }