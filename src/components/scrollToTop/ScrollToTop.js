import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './scrollToTop.scss';

const ScrollToTop = ({ scrollToTop, className }) => {
  return (
    <>
      <button className={`button box-shadow ${className}`} onClick={scrollToTop}>
        <span className='visually-hidden'>Scroll to Top</span>
        <FontAwesomeIcon icon={faArrowUp} className='latest-launches__scroll-to-top-icon'/>
      </button>
    </>
  )
}

export default ScrollToTop;
