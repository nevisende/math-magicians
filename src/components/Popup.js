import PropTypes from 'prop-types';

export default function Popup({ text, displayPopupClass }) {
  return (
    <div className={displayPopupClass} id="popup">{text}</div>
  );
}

Popup.propTypes = {
  text: PropTypes.string.isRequired,
  displayPopupClass: PropTypes.string.isRequired,
};
