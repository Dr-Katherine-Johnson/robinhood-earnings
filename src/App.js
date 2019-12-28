import React, { Component} from "react";
// import "./App.css";
// import earningsChart.js
// import summary.js

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      ticker: 'HP',
      earnings: []
    };
  }

  componentDidMount() {
    //make route call to server
  }

  render(){
    return(
      <div className="App">
        <h1> {this.state.ticker} Earnings </h1>
      </div>
    );
  }
}

export default App;