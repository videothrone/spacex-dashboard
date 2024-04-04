import { useEffect, useState} from 'react';
import Loader from '../loader/Loader.js';
import Overlay from '../overlay/Overlay.js';
import { copyIcon } from '../../assets/icons/icons.js';
import { copyIDToClipboard } from '../helpers/helperFunctions.js';
import { makeApiCall } from '../helpers/makeApiCall.js';
import './latestLaunches.scss'

const GetLaunches = () => {
    const [loading, setLoading] = useState(true);
    const [launches, setLaunches] = useState([]);
    const [showOverlay, setShowOverlay] = useState(false);
    const [overlayMessage, setOverlayMessage] = useState('');

    useEffect(() => {
      makeApiCall('past')
        .then((response) => {
          // Pull only the newest six launches from response
          const latestLaunches = response.reverse().slice(0, 6);

          console.log(latestLaunches);

          setLaunches(latestLaunches);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

    const handleCopyToClipboard = (event) => {
      copyIDToClipboard(event, setOverlayMessage, setShowOverlay);
    };

    return (
      <div className='past-launch'>
      {loading && <Loader />}
      {!loading && (
        <div>
          <h2 className='font-gradient'>Latest launches</h2>
          <div className='past-launch-elements'>
          {launches.map(({ name, id, links: { patch: { small: image } } }, index) => (
            <div className='past-launch-elements__elem' key={index}>
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
            ))}
          </div>
          {showOverlay && <Overlay message={overlayMessage} />}
        </div>
      )}
      </div>
    )
  }

  export default GetLaunches;
