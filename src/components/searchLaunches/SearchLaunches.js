import { useState, useRef } from 'react';
import Loader from '../loader/Loader.js';
import SearchBar from '../searchBar/SearchBar.js';
import Timer from '../timer/Timer.js';
import { makeApiCall } from '../helpers/makeApiCall.js';
import './searchLaunches.scss'

const SearchLaunches = () => {
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState(false);
  const [lastLaunchDate, setLastLaunchDate] = useState();
  const searchForm = useRef(null);

  // Get user ID from search field, call API and get data
  const searchItems = (event) => {
    event.preventDefault();
    setSearching(true);

    const form = searchForm.current;
    const searchedID =`${`${form['search'].value}`}`;

    if (searchedID.length === 0) {
      setSearching(false);
      setErrorMsg(true);
    } else {
      makeApiCall(searchedID)
        .then((response) => {
          const responseTime = response.date_unix*1000;

          setData(response);
          setLoading(false);
          setSearching(false);
          setLastLaunchDate(responseTime);
          setErrorMsg(false);
        })
        .catch((error) => {
          console.error(error);
          setSearching(false);
          setErrorMsg(true);
        });
    }
  }

  return (
    <>
      <SearchBar searchItems={searchItems} searchForm={searchForm} />
      {searching && <div className='error-msg'><Loader /></div>}
      {errorMsg && <div className='error-msg'>Search ID is not valid</div>}
      {!loading && !errorMsg && (
      <div className='search-result'>
        <h2 className="search-result__headline font-gradient">Search result</h2>
            <div className='search-result-container'>
              <div className='search-result__above'>
                <h2 className='search-result__above-name'>
                  {data.name}
                </h2>
                <div className='search-result__above-indicator'>
                  {data.success === true && <div className='search-result__above-indicator-success' alt='Launch successful'><span className='visually-hidden' >Launch successful</span></div>}
                  {data.success === false && <div className='search-result__above-indicator-failure'alt='Launch was a failure'><span className='visually-hidden' >Launch was a failure</span></div>}
                </div>
              </div>
              <div className='search-result__video'>
                <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + data.links.youtube_id + "?controls=0"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className='search-result__below'>
                <Timer lastLaunchDate={lastLaunchDate} />
                <div className='search-result__below-id'>
                    <span className='search-result__below-id-text'>ID:&nbsp;</span>{data.id}
                </div>
              </div>
            </div>
      </div>
      )}
    </>
  )
}

export default SearchLaunches;
