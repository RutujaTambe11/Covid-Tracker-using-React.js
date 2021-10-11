import React, { useState, useEffect } from "react";
import axios from "axios";
import './index.css'

export default function CovidTracker() {
    const [Countries, setCountry] = useState([]);
    const [TenCountries, setTenCountries] = useState([]);

    useEffect(() => {
        axios.get('https://api.covid19api.com/summary')
        .then(res => {
            setCountry(res.data.Countries);
            setTenCountries(res.data.Countries);
        }).catch(error => console.log(error));
    }, []);

    const getActiveCases = (country) => {
        return (
            country.TotalConfirmed -(country.TotalRecovered + country. TotalDeaths)
        );
    }

    const HighestCountry = (country) => {
        let max = Countries.reduce(
            (m, country) =>
            getActiveCases(m) > getActiveCases(country) ? m : country,
            Countries[0]
        );
    
    console.log("Max: ", max.Country);
    document.getElementById('text1').innerHTML = "Country Name: "+ max.Country + "<br/> Total Confirmed: "+ max.TotalConfirmed+ "<br/>  Total Deaths:" + max.TotalDeaths;
}

const LowestCountry = () => {
    let min = Countries.reduce(
        (m, country) => getActiveCases(m) < getActiveCases(country) ? m : country,
        Countries[0]
    );
    console.log("Min: ", min.Country);
    document.getElementById("text1").innerHTML =
    "Country Name: "+ min.Country + "<br/>  Total Confirmed: "+ min.TotalConfirmed + "<br/>  Total Deaths: "+ min.TotalDeaths;
}

const compare=(c1,c2)=>{
    if(c1.TotalConfirmed < c2.TotalConfirmed){
        return -1;
    }
    if(c1.TotalConfirmed > c2.TotalConfirmed){
        return 1;
    }
    return 0;
}

const compareReverse=(c1,c2)=>{
    if(c1.TotalConfirmed < c2.TotalConfirmed){
        return 1;
    }
    if(c1.TotalConfirmed > c2.TotalConfirmed){
        return -1;
    }
    return 0;
}

const getLowestTenCountries=()=>{
    var c = Countries.sort(compare).slice(0,10)
    setTenCountries(c);
}

const getHighestTenCountries=()=>{
    var c = Countries.sort(compareReverse).slice(0,10)
    setTenCountries(c);
}

const AllData=()=>{
    setTenCountries(Countries);
}

return(
    <div title="covid" className="col-10">

      <button className="btn btn-primary" style={{margin:10}} onClick={AllData}>All Statistics</button>
     

      <button className="btn btn-danger" style={{margin:10}} onClick={getHighestTenCountries}>Highest Ten Countries</button>
     
      <button className="btn btn-success" style={{margin:10}} onClick={getLowestTenCountries}>Lowest Ten Countries</button>

      <button className="btn btn-info" style={{margin:10}} onClick={LowestCountry}>Lowest Country</button>
      <button className="btn btn-warning" style={{margin:10}} onClick={HighestCountry}>Highest Country</button>


      <div id="text1" className=" text-white" style={{margin:20,background:"purple",padding:10,textAlign:"center"}}></div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Country</th>
            <th>Total Confirmed</th>
            <th>Total Recovered</th>
            <th>Total Deaths</th>
            <th>Total Active Cases</th>
          </tr>
        </thead>
        <tbody>
          {
            TenCountries.map((c, index) => (
            <tr key={index + 1}>
              <td>{index + 1}</td>

              
                  <td>{c.Country}</td>
                  <td>{c.TotalConfirmed}</td>
                  <td>{c.TotalRecovered}</td>
                  <td>{c.TotalDeaths}</td>
                  <td>
                    {c.TotalConfirmed -
                      (c.TotalRecovered + c.TotalDeaths)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    )
        

}




// return(
//     <div className="col-md-10">
//          <p id="text1">{AllData}</p>
//          <p id="text2"></p>
//         <table className="table justify-content-center table-bordered table-dark table-striped ">
//             <thead>
//                 {/* <tr>
//                     <td> {maximum}</td>
//                 <td>{minimum}</td>
//                 <td>{task[0]} </td>
//                 </tr> */}
//                 <tr>
//                     <th>Country</th>
//                     <th>New Confirmed</th>
//                     <th>New Deaths</th>
//                     <th>Total Confirmed</th>
//                     <th>Total Deaths</th>
//                 </tr>
//             </thead>
//             <tbody>
//             <tr></tr>
//             {/* {coviddata.map(data => (
//                 <tr>
//                     <td>{data.Country} </td>
//                     <td>{data.NewConfirmed} </td>
//                     <td>{data.NewDeaths} </td>
//                     <td>{data.TotalConfirmed} </td>
//                     <td>{data.TotalDeaths} </td>
//                 </tr>
//             ))} */}
                
//                 </tbody>      
//         </table>          
//     </div>
// )
            














// // import React, {useState,useEffect} from "react";
// // import axios from 'axios'
// // //import $ from 'jquery'
// // //import 'datatables.net-dt/js/dataTables.dataTables'
// // //import 'datatables.net-dt/css/jquery.dataTables.min.css'

// // export default function CovidTracker(){

// //     const[coviddata,setcoviddata]=useState([])

// //     useEffect(
// //         () =>{

// // axios.get('https://api.covid19api.com/summary').then(res => {
// //     console.log(res.data) 
// //     setcoviddata(res.data.Countries)
// // })
// // .catch(err =>{console.log(err)}) 


// //     },[] )
// //     const covidetails =coviddata.sort((function(index){
// //         return function(a, b){
// //             return (a[index] === b[index] ? 0 : (a[index] < b[index] ? -1 : 1));
// //         };
// //     })(0));
// //     const maximum = covidetails.reduce((c, cases) => c = c > cases.TotalConfirmed ? c : cases.TotalConfirmed, 0);
// //     const minimum = coviddata.reduce((c, cases) => c = c < cases.TotalConfirmed ? c : cases.TotalConfirmed, 0);
// //    //const maxi = coviddata.filter(data => data.TotalConfirmed === maximum);

// //    const task = coviddata.map(data => data.TotalConfirmed).sort((function(index){
// //     return function(a, b){
// //         return (a[index] === b[index] ? 0 : (a[index] < b[index] ? -1 : 1));
// //     };
// // })(3));


// import React, { useState, useEffect } from "react";
// import axis from 'axios';
// import axios from "axios";

// export default function Information() {
//     const [Countries, setCountry] = useState([]);
//     const [TenCountries, setTenCountries] = useState([]);

//     useEffect(() => {
//         axios.get('https://api.covid19api.com/summary')
//         .then(res => {
//             setCountry(res.data.Countries);
//             setTenCountries(res.data.Countries);
//         }).catch(error => console.log(error));
//     }, []);

//     const getActiveCases = (country) => {
//         return (
//             country.TotalConfirmed -(country.TotalRecovered + country. TotalDeaths)
//         );
//     }

//     const HighestCases = (country) => {
//         let max = Countries.reduce(
//             (m, country) =>
//             getActiveCases(m) > getActiveCases(country) ? m : country,
//             Countries[0]
//         );
//     }
// console.log("Max: ", max.Country);
//     document.getElementById('text1').innerHTML = "Country Name: "+ max.Country + ", Total Confirmed: "+ max.TotalConfirmed+ ", Total Deaths:" + max.TotalDeaths;


// const LowestCountry = () => {
//     let min = Countries.reduce(
//         (m, country) => getActiveCases(m) < getActiveCases(country) ? m : country,
//         Countries[0]
//     );
    
//  console.log("Min: ", min.Country);
//     document.getElementById("text2").innerHTML =
//     "Country Name: "+ max.Country + ", Total Confirmed: "+ max.TotalConfirmed + ", Total Deaths: "+ max.TotalDeaths;
// }

// const compareReverse=(c1,c2)=>{
//     if(c1.TotalConfirmed < c2.TotalConfirmed){
//         return 1;
//     }
//     if(c1.TotalConfirmed > c2.TotalConfirmed){
//         return -1;
//     }
//     return 0;
// }

// const getLowestTenCountries=()=>{
//     var c = Countries.sort(compare).slice(0,10)
//     setTenCountries(c);
// }

// const getHighestTenCountries=()=>{
//     var c = Countries.sort(compareReverse).slice(0,10)
//     setTenCountries(c);
// }

// const AllData=()=>{
//     setTenCountries(Countries);
// }
    
   




