/* eslint-disable consistent-return */
import PropTypes from 'prop-types';
import React from 'react';

export default function Logs({ logList }) {
  return (
    <details>
      <summary>
        Logs
      </summary>
      <ul>
        {logList.map((log) => {
          const result = `
          ${log.total ? log.total : ''}
          ${log.operation ? log.operation : ''}
          ${log.next ? log.next : ''}
          `;
          if (result.trim().length === 0) return;
          return <li key={log.next}>{result}</li>;
        })}
      </ul>
    </details>
  );
}

Logs.propTypes = {
  logList: PropTypes.instanceOf(Array).isRequired,
};
