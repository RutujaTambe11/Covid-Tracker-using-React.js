import React,{Component, useState} from 'react'
import { Link } from 'react-router-dom'
import Data from './Data'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CovidTracker from './CovidTracker';
import './index.css'

export default function Form()
{
    const[username,setusername]=useState('')
    const[password,setpasssword]=useState('')
    const[ucolor,setucolor]=useState('')
    const[ecolor,setecolor]=useState('')
    const[pcolor,setpcolor]=useState('')
    const[cpcolor,setcpcolor]=useState('')
    let correctUser = false;
    let correctPass = false;


     const validate=()=>
    {
        if(username === 'admin')
        {
            setusername('admin')
            setucolor('green')
            correctUser=true;
        }
        else
        {
            alert("Incorrect Username")
            setucolor('red')
            return false;
        }

        if(password === 'admin')
        {
            setpasssword('admin')
            setpcolor('green')
            correctPass = true;
            
        }

        else{
            alert('Incorrect password')
            setpcolor('red')
            return false;
        }

               
        if(correctUser && correctPass){
            // <Link to="/Data"><Data/></Link>
            alert("Login Successful");
            //return <CovidTracker/>;
            
            <Link to="/CovidTracker" className="btn btn-primary" >Sign up
                  
            </Link>
            // <Route path="/data" component={Data}> LOGIN </Route>
        }else{
            return <Form/>
        }

    }


    return(
        
        <div className ='row justify-content-center'>


          <div className="col-md-5">

              <h1 title="login"> Login Page</h1>

              <input type="text" placeholder='username' className='form-control' style={{borderColor:ucolor}}
              value={username} onChange={(e) => {setusername(e.target.value)}}
            />

              <input title="test1" type="password" placeholder='password' className='form-control'  style={{borderColor:pcolor}}
              
              value ={password} onChange ={(e) => setpasssword(e.target.value)}/>
             
                    {/* <button className='btn btn-primary' onClick={validate} > login
                    
                   </button> */}
                   <Route>
                   <Link to="/CovidTracker" className="btn btn-primary"  onClick={validate}>Sign up
                  
                   </Link>
                   </Route>

                </div>

              </div>
  

    )
}

