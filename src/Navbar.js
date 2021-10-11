import { Component } from "react";
import { Link } from "react-router-dom";
import './index.css'

class Navbar extends Component{
    render(){
        return(
            <div title="navigation" className="navigation">
                <nav className="navbar">
                    <a className="navbar-brand" href="#">
                        <Link className="navi" to="/form">Home</Link> 
                        <Link className="navi" to="/CovidTracker">Dashboard</Link>
                        <Link className="navi" to="/storage">Add Data</Link>
                        <Link className="navi" to="/chart">View Graph</Link>
                        <Link className="navi" to="/search">Search</Link>
                    </a>
                </nav>
            </div>
        )
    }
}

export default Navbar