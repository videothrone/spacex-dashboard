import { copyIcon } from '../../assets/icons/icons.js';
import './launchBox.scss';

export default function LaunchBox({name, id, image, index, handleCopyToClipboard, className}) {
  return (
    <div className={`past-launch-elements__elem ${className}`} key={index}>
      <h3 className='past-launch-elements__name'>{name}</h3>
      <img className='past-launch-elements__image' src={image} alt={`The patch of the crew ${name}`} />
      <div className='past-launch-elements__id' data-id={id}>
        <div className='past-launch-elements__id-text'>
          <span className='past-launch-elements__id-text-id'>ID: </span>{id}
        </div>
        <button className='past-launch-elements__copy-button' onClick={handleCopyToClipboard}>
          <span className='visually-hidden'>Copy launch ID to clipboard</span>
          <span className='past-launch-elements__copy-icon'>{copyIcon}</span>
        </button>
      </div>
   </div>
  )
}
