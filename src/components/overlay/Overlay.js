import './overlay.scss';
import { copyIcon } from '../../assets/icons/icons.js';

const Overlay = ({ message }) => {
  return (
    <div className="overlay">
      <div className="overlay-message">{message} <span className="overlay-icon">{copyIcon}</span></div>
    </div>
  );
};

export default Overlay;
