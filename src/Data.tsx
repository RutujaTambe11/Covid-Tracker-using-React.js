import { useState } from 'react';
import { FC } from 'react';

type Data={
    Country: string,
    NewConfirmed: number,
    NewDeaths : number,
    TotalConfirmed : number,
    TotalDeaths : number,
}

const covidData: Data[] = [{
    Country: "Afghanistan",
    NewConfirmed: 0,
    NewDeaths: 0,
    TotalConfirmed: 150778,
    TotalDeaths: 6936,
},
{
    Country: "Argentina",
    NewConfirmed: 0,
    NewDeaths: 0,
    TotalConfirmed: 5029075,
    TotalDeaths: 107961,
}
]

type Props={
    match:any
}
  const Contacts:FC<Props>=(props)=>{
      const[contacts, setContacts]=useState<Data[]> (covidData)
      const renderContacts=()=>(
       <div className="col-8">
       <table className="table table-bordered table-dark table-striped ">
        <thead>
                     <tr>
                        <th>Country</th>
                        <th>New Confirmed</th>
                        <th>New Deaths</th>
                        <th>Total Confirmed</th>
                        <th>Total Deaths</th>
                    </tr>
                </thead>
        <tbody>
        {contacts.map((contact:Data,key)=>(
            <tr key={contact.Country}>
                <td>{ contact.Country}</td>
                <td>{contact.NewConfirmed}</td> 
                <td>{contact.NewDeaths}</td>  
                <td>{contact.TotalConfirmed}</td>
                <td>{contact.TotalDeaths} </td>                  
               
            </tr>         
            
        ))}
    </tbody>
    </table>
    </div>
)

let selectedContact:any=false

// const renderSingleContact=({Country,NewConfirmed,NewDeaths,TotalConfirmed,TotalDeaths}:Data)=>(
//     <>
//     <h2>
//         {Country}
//     </h2>
//     <h2>
//         {NewConfirmed}
//     </h2>
//     <h2>
//         {NewDeaths}
//     </h2>
//     </>
// )

return (
    <div className="Contacts">
        <h1>Covid Statistics</h1>
            {renderContacts()}               
    </div>
)
}

export default Contacts