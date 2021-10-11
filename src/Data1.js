import React, { Component } from "react";
// import "./style.css";

export default class Data extends Component {
  state = {
    cart: [
        {Country:"India",
        NewConfirmed:234,
        NewDeaths : 123,
        TotalConfirmed : 756,
        TotalDeaths : 845,
    },
    {Country:"Albania",
    NewConfirmed:2234,
    NewDeaths : 1234,
    TotalConfirmed : 7556,
    TotalDeaths : 8435,
}
    ],
  };

  saveInput = (e) => {
    this.setState({ input: e.target.value });
  };

  addNewItem = () => {
    let { cart, input } = this.state;
    cart.push(input);
    // this.state.cart.push(this.state.input); // same as above, though bad practice 
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.saveInput}
        />
        <button onClick={this.addNewItem}> Add Item </button>
        <ol>
          {this.state.cart.map((subItems, sIndex) => {
            return <li key={sIndex}> {subItems}</li>
          })}
        </ol>
      </div>
    );
  }
}