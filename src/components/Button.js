import PropTypes from 'prop-types';

export default function Button({ id, value, handlerCalculate }) {
  const onCalculate = () => {
    handlerCalculate(value);
  };

  return <button type="button" id={id} onClick={onCalculate}>{value}</button>;
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handlerCalculate: PropTypes.func.isRequired,
};
