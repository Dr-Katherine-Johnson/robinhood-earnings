import React, { Component} from "react";
import ReactDOM from 'react-dom';

//PICK UP: the positioning is wrong
const EarningsEst = (props) => {
  let move = `translate(${props.shiftX},${props.shiftY})`;
  return (
    <g transform={move}>
      <circle r="7" class="_2KAIsnqVjMazPa2Rj2blwe"></circle>
    </g>
  )
}

export default EarningsEst;

  // <g traansform="translate(0, 17.999999999999986)">
  //   <circle r="7" class="_2KAIsnqVjMazPa2Rj2blwe"></circle>
  // </g>
  // <g transform="translate(79, 11.999999999999986)">
  //   <circle r="7" class="_2KAIsnqVjMazPa2Rj2blwe"></circle>
  // </g>
  // <g transform="translate(158, 16)">
  //   <circle r="7" class="_2KAIsnqVjMazPa2Rj2blwe"></circle>
  // </g>
  // <g transform="translate(237, 17.999999999999986)">
  //   <circle r="7" class="_2KAIsnqVjMazPa2Rj2blwe"></circle>
  // </g>
  // <g transform="translate(316, 9.999999999999986)">
  //   <circle r="7" class="_2KAIsnqVjMazPa2Rj2blwe"></circle>
  // </g>
  // <g transform="translate(395, 4)">
  //   <circle r="7" class="_2KAIsnqVjMazPa2Rj2blwe"></circle>
  // </g>
  // <g transform="translate(474, 120)">
  //   <circle r="7" class="_2KAIsnqVjMazPa2Rj2blwe"></circle>
  // </g>