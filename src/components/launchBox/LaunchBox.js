import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './launchBox.scss';

export default function LaunchBox({name, id, image, index, handleCopyToClipboard, className}) {
  return (
    <div className={`latest-launch__list-item ${className}`} key={index}>
      <h3 className='latest-launch__list-item-name'>{name}</h3>
      <img className='latest-launch__list-item-image' src={image} alt={`The patch of the crew ${name}`} />
      <div className='latest-launch__list-item-id' data-id={id}>
        <div className='latest-launch-elements__id-text'>
          <span className='latest-launch__list-item-text-id'>ID: </span>{id}
        </div>
        <button className='latest-launch__list-item-copy' onClick={handleCopyToClipboard}>
          <span className='visually-hidden'>Copy launch ID to clipboard</span>
          <FontAwesomeIcon icon={faCopy} className='latest-launch__list-item-copy-icon'/>
        </button>
      </div>
   </div>
  )
}
