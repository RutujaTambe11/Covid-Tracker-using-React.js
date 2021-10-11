
import { useState, useEffect } from "react";
import axios from "axios";
import './index.css'

function Search() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const [Countries, setCountry] = useState([]);

    
    const [q, setQ] = useState("");
   
    const [searchParam] = useState(["Country"]);


    useEffect(() => {
        axios.get('https://api.covid19api.com/summary')
        .then(res => {
            setCountry(res.data.Countries);
            console.log(res.data)
           }).catch(error => console.log(error));
    }, []);

    function search(Countries) {
        return Countries.filter((item) => {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                );
            });
        });
    }

    if (error) {
        return <>{error.message}</>;
    } else if (!isLoaded) {
        return <>loading...</>;
    } else {
        return (
<div className="col-10">
                
                <div className="search-wrapper" style={{textAlign:"center"}}>
                    <label htmlFor="search-form" >
                        <input
                            type="search"
                            name="search-form"
                            id="search-form"
                            className="search-input"
                            placeholder="Search for..."
                            value={q}
                           onChange={(e) => setQ(e.target.value)}
                           style={{margin:10}}
                        />
                        <span className="sr-only">Search countries here</span>
                    </label>
                </div>
               
                    
                <div>
                <table title="search-table" className="table table-dark table-striped">
                        <thead>
                          <tr>
                            
                            <th>Country</th>
                            <th>Total Confirmed</th>
                            <th>Total Recovered</th>
                            <th>Total Deaths</th>
                            <th>Total Active Cases</th>
                          </tr>
                        </thead>
                    {search(Countries).map((item) => (
                        
                        <tbody>
                            <tr>
                            <td>{item.Country}</td>
                              <td>{item.TotalConfirmed}</td>
                              <td>{item.TotalRecovered}</td>
                              <td>{item.TotalDeaths}</td>
                              <td>
                                {item.TotalConfirmed -
                                  (item.TotalRecovered + item.TotalDeaths)}
                              </td>
                            </tr>
                        </tbody>
                         ))}
            </table>
                   
            </div>
            </div>
        )
}}
export default Search

            
 
