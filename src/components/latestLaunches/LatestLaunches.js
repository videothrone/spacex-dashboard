import { useEffect, useState} from 'react';
import Loader from '../loader/Loader.js';
import Overlay from '../overlay/Overlay.js';
import LaunchBox from '../launchBox/LaunchBox.js';
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
      <div className='latest-launches'>
      {loading && <Loader />}
      {!loading && (
        <>
          <h2 className='latest-launches__headline font-gradient'>Latest launches</h2>
          <div className='latest-launches-elements'>
          {launches.map(({ name, id, links: { patch: { small: image } } }, index) => (
              <LaunchBox
                key={index}
                name={name}
                id={id}
                image={image}
                index={index}
                handleCopyToClipboard={handleCopyToClipboard}
                className='box-shadow'
              />
            ))}
          </div>
          {showOverlay && <Overlay message={overlayMessage} className='box-shadow'/>}
        </>
      )}
      </div>
    )
  }

  export default GetLaunches;
