/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Logs from './components/Logs';
import Popup from './components/Popup';

function App() {
  const [message, setMessage] = useState('');
  const [displayPopupClass, setDisplayPopupClass] = useState('popup');
  const [log, setLog] = useState([]);

  const showPopup = (message) => {
    setMessage(message);
    setDisplayPopupClass('popup show-popup');
    setTimeout(() => {
      setDisplayPopupClass('popup');
    }, 1250);
  };

  const onLog = (calculateLog) => {
    setLog((prevLog) => [...prevLog, calculateLog]);
  };

  return (
    <>
      <Popup text={message} displayPopupClass={displayPopupClass}> </Popup>
      <Calculator handleNotification={showPopup} handleLog={onLog} />
      <Logs logList={log}> </Logs>
    </>
  );
}

export default App;
