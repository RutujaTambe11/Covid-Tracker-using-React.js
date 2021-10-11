import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { Chart} from "chart.js";
import './index.css'

const Graph=() => {
   
     const [chartData, setChartData] = useState({});
     const [Countries, setCountry] = useState([]);
   
    const compareReverse=(c1,c2)=>{
        if(c1.TotalConfirmed < c2.TotalConfirmed){
            return 1;
        }
        if(c1.TotalConfirmed > c2.TotalConfirmed){
            return -1;
        }
        return 0;
    }
    const chart = () => {
        let countryName = [];
        let activeCases = [];
        //let confirmed = [];
        
        axios.get('https://api.covid19api.com/summary')
        .then(res => {
            console.log(res);
            
            for(const dataObj of res.data.Countries.sort(compareReverse).slice(0,10)) {
                countryName.push(dataObj.Country);
                activeCases.push(parseInt(dataObj.TotalConfirmed));
                //confirmed.push(parseInt(dataObj.TotalDeaths));
            }

            setChartData({
                labels: countryName,
                datasets: [
                    {
                        label: "  Total Active ",
                        data: activeCases,
                        // color: '#1f77b4',
                        borderWidth: 22,
                        borderColor: '#f5576c',
                        fillColor: '#330867',


                    }
                ]
            });
        })
        .catch(err => {
            console.log(err);
        });
        console.log(countryName, activeCases);
    };
    
    useEffect(() => {
        chart();
    }, []);
    return (
        <div className="App">
        <h1>Bar Chart</h1>
        <div style={{width:700,margin:50}}>
        <Bar
        data={chartData}
        options={{
            responsive: true,
            title: { text: "THICKNESS SCALE", display: true },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            autoSkip: true,
                            maxTicksLimit: 10,
                            beginAtZero: true
                        },
                        gridLines: {
                            display: false,
                            

                        }
                    }
                ],
                xAxes: [
                    {
                        gridLines: {
                            display: false
                        }
                    }
                ]
            }
        }}
        />
        </div>
        </div>
        );
    };
    
    export default Graph














// /*
// import React, { Children } from"react";
// import Adapter  from '@wojtekmaj/enzyme-adapter-react-17';
// import Enzyme ,{EnzymeAdapter, shallow,mount} from"enzyme";
// import App from "./App";
// import {ValueInput} from "./ValueInput";
// import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

// Enzyme.configure({adapter:new Adapter()});

// it("Renders three Value Inputs",()=>{

//     const wrapper=shallow(<App/>);
//     const valCount=wrapper.find(ValueInput).length;
//     expect(valCount).toEqual(3);

// });
// it("Fully renders three inputs", () => {
//     const wrapper = mount(<App title="tester" />);
//     const count = wrapper.find("input.form-control").length
//     expect(count).toBe(3);
//    });
//    it("Shallow renders zero inputs", () => {
//     const wrapper = shallow(<App />);
//     const count = wrapper.find("input.form-control").length
//     expect(count).toBe(0);
//    })
// */