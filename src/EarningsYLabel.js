import React, { Component} from "react";
import ReactDOM from 'react-dom';


const EarningsYLabel = (props) => {
    //style of each label
  var YLabelStyles = [{
    top: '110.5px',
    right: '-100%'
  }, {
    top: '70.5px',
    right: '-100%'
  }, {
    top: '30.5px',
    right: '-100%'
  }, {
    top: '-9.5px',
    right: '-100%'
  }]

  //how long the axis will be
  var YLabel = {
    height: '100%'
  }

  //the largest label, divisible by 3
  var increment = Math.ceil(props.max / 30000)

  return (
    <div class="SRm3-FWEO1Km4jECNNVir" style={YLabel}>
      <div class="_2EIh4yM4j6eOPT9WLntLAf">    
      {       
        YLabelStyles.map((label, i) => {
          return (
            <span class="_1LKKsd09MPJ4Sc0h1B56Qw" style={label}>
              <div class="_11WifE5m_tQDfuVBDE42S_">${increment * i}k</div>
            </span>
          )
        })
      }
      </div>
    </div>
  )
}

export default EarningsYLabel;