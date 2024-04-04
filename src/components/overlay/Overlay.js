import './overlay.scss';
import { copyIcon } from '../../assets/icons/icons.js';

const Overlay = ({ message }) => {
  return (
    <div className='overlay' role='alert'>
      <div className='overlay-message'>{message} <span className='overlay-icon' aria-hidden='true'>{copyIcon}</span></div>
    </div>
  );
};

export default Overlay;
