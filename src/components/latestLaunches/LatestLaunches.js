import { useEffect, useState } from 'react';
import Loader from '../loader/Loader.js';
import Overlay from '../overlay/Overlay.js';
import LaunchBox from '../launchBox/LaunchBox.js';
import Pagination from '../pagination/Pagination.js';
import ScrollToTop from '../scrollToTop/ScrollToTop.js';
import { copyIDToClipboard, scrollToTop, scrollToHash } from '../helpers/helperFunctions.js';
import { makeApiCall } from '../helpers/makeApiCall.js';
import './latestLaunches.scss'

const GetLaunches = () => {
    const [loading, setLoading] = useState(true);
    const [launches, setLaunches] = useState([]);
    const [showOverlay, setShowOverlay] = useState(false);
    const [overlayMessage, setOverlayMessage] = useState('');
    const [visibleLaunches, setVisibleLaunches] = useState([]);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      makeApiCall('past')
        .then((response) => {
          const latestLaunches = response.reverse();
          setLaunches(latestLaunches);
          // Show the first 6 elements on page load
          setVisibleLaunches(latestLaunches.slice(0, 6));
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });

      const handleScroll = () => {
        if (window.scrollY > 100) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const handleCopyToClipboard = (event) => {
      copyIDToClipboard(event, setOverlayMessage, setShowOverlay);
    };

    const handlePageChange = (page, itemsPerPage) => {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setVisibleLaunches(launches.slice(startIndex, endIndex));
      scrollToHash('latest-launches');
    };

    return (
      <div className='latest-launches' id='latest-launches'>
      {loading && <Loader />}
      {!loading && (
        <>
          <div className='latest-launches__header'>
            <h2 className='latest-launches__header-headline font-gradient'>Latest launches</h2>
            <hr className='latest-launches__header-divider font-gradient'/>
            <div className='latest-launches__header-total-launches font-gradient'>{launches.length} total launches</div>
          </div>
          <div className='latest-launches__list'>
            {visibleLaunches.map(({ name, id, links: { patch: { small: image } } }, index) => (
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
            {launches.length > 6 && (
              <Pagination
                totalItems={launches.length}
                itemsPerPage={6}
                onPageChange={handlePageChange}
                className={'latest-launches__pagination'}
              />
            )}
            {scrolled && (
              <ScrollToTop
                scrollToTop={scrollToTop}
                className={'latest-launches__scroll-to-top'}
              />
            )}
            {showOverlay && <Overlay message={overlayMessage} className='box-shadow'/>}
        </>
      )}
      </div>
    )
  }

  export default GetLaunches;
