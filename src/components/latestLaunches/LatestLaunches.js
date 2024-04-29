import { useEffect, useState } from 'react';
import Loader from '../loader/Loader.js';
import Overlay from '../overlay/Overlay.js';
import LaunchBox from '../launchBox/LaunchBox.js';
import Pagination from '../pagination/Pagination.js';
import ScrollToTop from '../scrollToTop/ScrollToTop.js';
import Filter from '../filter/Filter.js';
import { copyIDToClipboard, scrollToTop, scrollToHash } from '../helpers/helperFunctions.js';
import { makeApiCall } from '../helpers/makeApiCall.js';
import './latestLaunches.scss'

const LatestLaunches = () => {
    const [loading, setLoading] = useState(true);
    const [launches, setLaunches] = useState([]);
    const [showOverlay, setShowOverlay] = useState(false);
    const [overlayMessage, setOverlayMessage] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const [filterValue, setFilterValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
      makeApiCall('past')
        .then((response) => {
          const latestLaunches = response.reverse();

          setLaunches(latestLaunches);
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

    const handlePageChange = (page) => {
      setCurrentPage(page);
      scrollToHash('latest-launches');
    };

    const handleFilterChange = (value) => {
      setFilterValue(value);
      setCurrentPage(1); // Reset to first page when applying filter
    };

    const filteredLaunches = filterValue
      ? launches.filter((launch) => launch.success === (filterValue === 'success'))
      : launches;

    // Pagination setup and logic
    const startIndex = (currentPage - 1) * 6;
    const endIndex = startIndex + 6;
    const visibleLaunches = filteredLaunches.slice(startIndex, endIndex);

    return (
      <div className='latest-launches' id='latest-launches'>
      {loading && <Loader />}
      {!loading && (
        <>
          <div className='latest-launches__header'>
            <div className='latest-launches__header-headline-filter'>
              <h2 className='latest-launches__header-headline font-gradient'>Latest launches</h2>
              <Filter className={'latest-launches__header-filter'} handleFilterChange={handleFilterChange} />
            </div>
            <hr className='latest-launches__header-divider font-gradient'/>
            <div className='latest-launches__header-total-launches font-gradient'>{filteredLaunches.length} total launches</div>
          </div>
          <div className='latest-launches__list'>
            {visibleLaunches.map(({ name, id, success, links: { patch: { small: image } } }, index) => (
                <LaunchBox
                  key={index}
                  name={name}
                  id={id}
                  success={success}
                  image={image}
                  index={index}
                  handleCopyToClipboard={handleCopyToClipboard}
                  className='box-shadow'
                />
              ))}
            </div>
            {filteredLaunches.length > 6 && (
              <Pagination
                totalItems={filteredLaunches.length}
                itemsPerPage={6}
                onPageChange={handlePageChange}
                currentPageProp={currentPage}
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

  export default LatestLaunches;
