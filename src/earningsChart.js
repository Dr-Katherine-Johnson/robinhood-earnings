import React, { Component} from "react";
import ReactDOM from 'react-dom';

import EarningsYLabel from './EarningsYLabel.js';
import EarningsXLabel from './EarningsXLabel.js';
import EarningsActual from './EarningsActual.js';
// import EarningsEst from './EarningsEst.js';

class EarningsChart extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dates: ['Q2 2018', 'Q3 2018', 'Q4 2018', 'Q1 2019', 'Q2 2019', 'Q3 2019', 'Q4 2019'], // need to update to be dynamic later on
      estRevenue: [],
      revenue: [],
      max: null,
      styleChart: {},
      styleDimensions: {}
    };
    this.findX = this.findX.bind(this);
    this.findY = this.findY.bind(this);
  }

  componentDidMount() {
    //Initializing revenue numbers and dimensions
    var estR = [];
    var actR = [];
    this.props.earnings.forEach((curr) => {
      estR.push(curr.estRevenue);
      actR.push(curr.revenue);
    })

    this.setState({
      estRevenue: estR,
      revenue: actR,
      styleChart: {width: '560px', height: '120px'},
      styleDimensions: {maxX: 553, maxY: 120}
    }, () => {
      var allR = this.state.estRevenue.concat(this.state.revenue);
      var p = Promise.resolve(Math.max(...allR));
      p.then((result) => {
        var max = Math.ceil(result / 30000) * 30000
        this.setState({
          max: max
        })
      })
    });
  }

  findX(i) {
    return this.state.styleDimensions.maxX / 7 * i
  }

  findY(rev) {
      // console.log('this.state.max', this.state.max);
    return (rev / this.state.max * this.state.styleDimensions.maxY);
  }

  render() {
    if (this.state.max) {      
      return (
        <div class="_11PU527UMZu8EwMzuZ9Kw6">
          <div class="_1VlpOyU7eFrHaqBGCEYhGx" style={this.state.styleChart}>
            <div class="_17yYVtqolFPBnoaIZOPe1A">
              <EarningsYLabel max={this.state.max}/>
              <svg width="553" height="120">
                <g>
                  { 
                    this.state.revenue.map((curr, i) => (
                      <EarningsActual shiftX={this.findX(i)} shiftY={this.findY(curr)}/>                
                    ))
                  }
                </g>
              </svg>
              <EarningsXLabel dates={this.state.dates}/>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div> Loading... </div>
      )
    } 
  }
}


export default EarningsChart;