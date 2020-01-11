import React, { Component} from "react";
import ReactDOM from 'react-dom';

//PICK UP: the positioning is wrong
const EarningsActual = (props) => {
  let move = `translate(${props.shiftX},${props.shiftY})`;
  return (
    <g transform={move}>
      <circle r="7"></circle>
    </g>
  )
}

export default EarningsActual;

// <g>
//   <g transform="translate(0, 16)">
//     <circle r="7"></circle>
//   </g>
//   <g transform="translate(79, 11.999999999999986)">
//     <circle r="7"></circle>
//   </g>
//   <g transform="translate(158, 16)">
//     <circle r="7"></circle>
//   </g>
//   <g transform="translate(237, 13.999999999999986)">
//     <circle r="7"></circle>
//   </g>
//   <g transform="translate(316, 4)">
//     <circle r="7"></circle>
//   </g>
//   <g transform="translate(395, 0)">
//     <circle r="7"></circle>
//   </g>
//   <g transform="translate(474, 120)">
//     <circle r="7"></circle>
//   </g>
// </g>

