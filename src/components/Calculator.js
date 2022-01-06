/* eslint-disable linebreak-style */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */

import React from 'react';

export default class Calculator extends React.Component {
  render() {
    const { number } = this.props;
    return (
      <div className="calculator">
        <input value={number} id="input" />
        <button type="button" id="firstBtn">AC</button>
        <button type="button" id="secondBtn">+//</button>
        <button type="button" id="thirdBtn">%</button>
        <button type="button" id="divide">/</button>
        <button type="button" id="multiply">*</button>
        <button type="button" id="subtraction">-</button>
        <button type="button" id="summation">+</button>
        <button type="button" id="equal">=</button>
        <button type="button" id="dot">.</button>
        <button type="button" id="zero">0</button>
        <button type="button" id="one">1</button>
        <button type="button" id="two">2</button>
        <button type="button" id="three">3</button>
        <button type="button" id="four">4</button>
        <button type="button" id="five">5</button>
        <button type="button" id="six">6</button>
        <button type="button" id="seven">7</button>
        <button type="button" id="eight">8</button>
        <button type="button" id="nine">9</button>
      </div>
    );
  }
}

Calculator.defaultProps = {
  number: 0,
};
