import React, { Component } from "react";
import queryString from 'query-string';
import Header from "./Header.js"
import EarningsChart from "./EarningsChart.js"
import Legends from "./Legends.js"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticker: '',
      name: '',
      earnings: [],
      updated: false
    };
  }

  componentDidMount() {
    const value = queryString.parse(window.location.search)
    const ticker = value.ticker
    fetch(`/earnings/${ticker}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            ticker: result.ticker,
            name: result.name,
            earnings: result.earnings,
            updated: true
          });
        },
        (error) => {
          console.log(error)
        }
      )
  }

  render() {
    if (this.state.updated) {
      return (
        <div>
          <Header ticker={this.state.ticker} />
          <EarningsChart earnings={this.state.earnings} />
          <Legends />
        </div>
      );
    } else {
      return (
        <div>Loading...</div>
      )
    }

  }
}

export default App;