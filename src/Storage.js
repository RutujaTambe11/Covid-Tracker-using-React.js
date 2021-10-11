import React, { Component } from 'react';
import './index.css'

export default class Storage extends Component {
    userData;

    constructor(props) {
        super(props);

        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangeConfirmed = this.onChangeConfirmed.bind(this);
        this.onChangeRecovered = this.onChangeRecovered.bind(this);
        this.onChangeDeaths = this.onChangeDeaths.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            
            country: '',
            confirmed: '',
            recovered: '',
            deaths : ''
        }
    }

    // Form Values
    onChangeCountry(e) {
        this.setState({ country: e.target.value })
    }
    onChangeConfirmed(e) {
        this.setState({ confirmed: e.target.value })
    }
    onChangeRecovered(e) {
        this.setState({ recovered: e.target.value })
    }
    onChangeDeaths(e) {
        this.setState({ deaths: e.target.value })
    }


    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('country'));

        if (localStorage.getItem('country')) {
            this.setState({
                country: this.userData.country,
                confirmed: this.userData.confirmed,
                recovered: this.userData.recovered,
                deaths: this.userData.deaths
                
            })
        } else {
            this.setState({
                country: '',
                confirmed: '',
                recovered: '',
                deaths : ''

                
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('country', JSON.stringify(nextState));
    }

    onSubmit(e) {
        e.preventDefault()
        console.log(this.state.props)
    }
   


    render() {
        return (
            <div title="local-storage" className="container">
                <form onSubmit={this.onSubmit}>
                    <h1>Covid data</h1>
                    <div className="form-group">
                        <label>Country</label>
                        <input type="text"  className="form-control" value={this.state.country} onChange={this.onChangeCountry} required/>
                         
                
                    </div>
                    
                    <div className="form-group">
                        <label>Confirmed</label>
                        <input type="number"  className="form-control" value={this.state.confirmed} onChange={this.onChangeConfirmed} required/>
                    </div>

                    <div className="form-group">
                        <label>Recovered</label>
                        <input type="number"  className="form-control" value={this.state.recovered} onChange={this.onChangeRecovered} required/>
                    </div>

                    <div className="form-group">
                        <label>Deaths</label>
                        <input type="number"  className="form-control" value={this.state.deaths} onChange={this.onChangeDeaths} required/>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        )
    }
}