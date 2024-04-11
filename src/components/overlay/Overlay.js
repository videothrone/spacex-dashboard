import './overlay.scss';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Overlay = ({ message, className }) => {
  return (
    <div className='overlay' role='alert'>
      <div className={`overlay-message ${className}`}>
        {message}
        <span className='overlay-icon' aria-hidden='true'>
          <FontAwesomeIcon icon={faCopy} />
        </span>
      </div>
    </div>
  );
};

export default Overlay;
