import React, { useState } from 'react';
import Calculator from '../components/Calculator';
import Logs from '../components/Logs';
import Popup from '../components/Popup';

export default function Home() {
  const [message, setMessage] = useState('');
  const [displayPopupClass, setDisplayPopupClass] = useState('popup');
  const [log, setLog] = useState([]);

  const showPopup = (message) => {
    setMessage(message);
    setDisplayPopupClass('popup show-popup');
    setTimeout(() => {
      setDisplayPopupClass('popup');
    }, 2500);
  };

  const onLog = (calculateLog) => {
    if (Object.keys(calculateLog).length === 3) setLog((prevLog) => [...prevLog, calculateLog]);
  };

  return (
    <div className="calc-page">
      <div>
        <h1>Lets do some math!</h1>
        <Logs logList={log}> </Logs>
      </div>

      <div className="calc-container">
        <Popup text={message} displayPopupClass={displayPopupClass}> </Popup>
        <Calculator handleNotification={showPopup} handleLog={onLog} />
      </div>
    </div>
  );
}
