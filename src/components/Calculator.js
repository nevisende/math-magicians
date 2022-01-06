/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Buttons } from '../assets/button-list';
import Button from './Button';
import calculate from '../logic/calculate';

export default function Calculator({ handleNotification, handleLog }) {
  const [number, setNumber] = useState(0);
  const [calculateLoop, setCalculateLoop] = useState(0);

  const pushNotification = (message) => {
    handleNotification(message);
  };

  useEffect(() => {
    const result = `
                    ${calculateLoop.total ? calculateLoop.total : ''}
                    ${calculateLoop.operation ? calculateLoop.operation : ''}
                    ${calculateLoop.next ? calculateLoop.next : ''}
                    `;
    /* an assignment with the template literal, it counts even spaces so that i need to trim and you know
         useEffect works when component mounted.And If you dont want to see empty input you need to check it and assign zero. */
    setNumber(result.trim().length === 0 ? 0 : result.trim());
  }, [calculateLoop]);

  const handlerCalculate = (value) => {
    // If a user firstly type the symbols that are below we need to check and push notification to aware.
    if (/^[x|+|-|÷|AC|%|+/-]/.test(value) && !(calculateLoop.next || calculateLoop.total)) {
      pushNotification('You need a number to calculate, man :-)');
      return;
    }

    // if the calculation is started directly by pressing the point button
    const input = (number === 0 && value === '.') ? '0.' : value;
    setCalculateLoop((prev) => calculate(prev, input));

    // to save into log when  '=' button is clicked
    if (/=/.test(value)) handleLog(calculateLoop);
  };

  return (
    <div className="calculator">
      <input value={number} id="input" onKeyDown={() => pushNotification('Please use just calculator buttons!')} />
      {
        Buttons.map((button) => <Button id={button.id} value={button.value} handlerCalculate={handlerCalculate} key={button.id} />)
      }
    </div>
  );
}

Calculator.defaultProps = {
};

Calculator.propTypes = {
  handleNotification: PropTypes.func.isRequired,
  handleLog: PropTypes.func.isRequired,
};
