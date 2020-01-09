import React, { Component} from "react";
import ReactDOM from 'react-dom';


const EarningsXLabel = (props) => {
  //style of each label
  var XLabelStyles = [{
    left: '-35px'
  }, {
    left: '44px'
  }, {
    left: '123px'
  }, {
    left: '202px'
  }, {
    left: '281px'
  }, {
    left: '360px'
  }, {
    left: '439px'
  }]

  //how long the axis will be
  var XLabel = {
    width: '100%'
  }

  return (
    <div class="SRm3-FWEO1Km4jECNNVir" style={XLabel}>
      <div class="_2EIh4yM4j6eOPT9WLntLAf">
      {       
        XLabelStyles.map((label, i) => {
          return (
            <span class="_1LKKsd09MPJ4Sc0h1B56Qw" style={label}>
              <div class="_2IE4gXBQfDHI-38LRSGHs3">{props.dates[i]}</div>
            </span>
          )
        })
      }
      </div>
    </div>
  )
}

export default EarningsXLabel;