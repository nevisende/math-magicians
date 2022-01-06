import PropTypes from 'prop-types';
import React from 'react';

export default class Logs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      available: '',
    };
  }

  componentDidMount() {
    this.setState({ available: 'You can check' });
  }

  componentDidUpdate() {
    const { logList } = this.props;
    document.getElementById('length-span').innerText = logList.length;
  }

  render() {
    const { logList } = this.props;
    const { available } = this.state;
    return (
      <details>
        <summary>
          {
          available
          }
          {' '}
          Logs (
          <span id="length-span"> </span>
          )

        </summary>
        <ul>
          {logList.map((log) => {
            const result = `
          ${log.total ? log.total : ''}
          ${log.operation ? log.operation : ''}
          ${log.next ? log.next : ''}
          `;
            if (result.trim().length === 0) return null;
            return <li key={`${log.next}-log`}>{result}</li>;
          })}
        </ul>
      </details>
    );
  }
}

Logs.propTypes = {
  logList: PropTypes.instanceOf(Array).isRequired,
};
