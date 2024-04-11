import { useState } from 'react';
import './pagination.scss';
import { faAnglesLeft, faAngleLeft, faAngleRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Pagination = ({ totalItems, itemsPerPage, onPageChange, className }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page, itemsPerPage);
  };

  const goToFirstPage = () => {
    handlePageChange(1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const goToLastPage = () => {
    handlePageChange(totalPages);
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    const maxButtons = 5;
    let startPage = Math.max(currentPage - Math.floor(maxButtons / 2), 1);
    let endPage = Math.min(startPage + maxButtons - 1, totalPages);

    if (endPage - startPage < maxButtons - 1) {
      startPage = Math.max(endPage - maxButtons + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      const isCurrentPage = currentPage === i;

      pageButtons.push(
        <li className='pagination__item' key={i}>
          <button
            className={`button pagination__button ${currentPage === i ? 'pagination__button--current' : ''}`}
            aria-label={`Go to page ${i}`}
            aria-current={isCurrentPage ? 'page' : null}
            onClick={() => handlePageChange(i)}
            disabled={isCurrentPage}
            aria-disabled={isCurrentPage}
          >
            <span className='visually-hidden'>Page {i}</span>
            {i}
          </button>
        </li>
      );
    }

    return pageButtons;
  };

  return (
    <nav className={`pagination ${className}`}>
      <ul className='pagination__list'>
        {currentPage > 1 &&
          <li className='pagination__item pagination__item--first'>
            <button className='button pagination__button' onClick={goToFirstPage}>
              <span className='visually-hidden'>To first page</span>
              <FontAwesomeIcon icon={faAnglesLeft} className='pagination__icon' />
            </button>
          </li>}
        {currentPage > 1 &&
          <li className='pagination__item pagination__item--prev'>
            <button className='pagination__button' onClick={goToPreviousPage}>
              <span className='visually-hidden'>To previous page</span>
              <FontAwesomeIcon icon={faAngleLeft} className='pagination__icon' />
            </button>
          </li>}
        {renderPageButtons()}
        {totalPages > 5 &&
          <li className='pagination__item pagination__item--ellipsis'>
            <button className='button pagination__button'>&hellip;</button>
          </li>}
        {currentPage < totalPages &&
          <li className='pagination__item pagination__item--next'>
            <button className='button pagination__button' onClick={goToNextPage}>
              <span className='visually-hidden'>To next page</span>
              <FontAwesomeIcon icon={faAngleRight} className='pagination__icon' />
            </button>
          </li>}
        {currentPage < totalPages &&
          <li className='pagination__item pagination__item--last'>
            <button className='button pagination__button' onClick={goToLastPage}>
              <span className='visually-hidden'>To last page</span>
              <FontAwesomeIcon icon={faAnglesRight} className='pagination__icon' />
            </button>
          </li>}
      </ul>
    </nav>
  );
};

export default Pagination;
