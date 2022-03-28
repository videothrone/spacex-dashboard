import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const SearchLaunches = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState(false);
  const [counterStart, setCounterStart] = useState();
  const [time, setTime] = useState();
  const searchForm = useRef(null);
  let searchedID = '';
  
  const fetchData = async () => {
    setLoading(true);
    try {
      const {data: response} = await axios.get('https://api.spacexdata.com/v4/launches/' + searchedID);
      setData(response);
      console.log("searchData: ", response.links.webcast);
      const responseTime = response.date_unix;
      setTime(responseTime*1000);
      // console.log("responseTime: ", responseTime);
      setErrorMsg(false);
      initCounter();
    } catch (error) {
      console.error(error.message);
      setErrorMsg(true);
    }
    setLoading(false);
  }

  // Get user input from search field
  const searchItems = () => {
    const form = searchForm.current;
    searchedID = `${form['search'].value}`;
    // console.log("Submit clicked with ID: ", searchedID);
    if (searchedID.length === 0) {
      setErrorMsg(true);
    } else {
      setErrorMsg(false);
      fetchData(searchedID);
    }
  }
  // Transfrom from Milliseconds to readable format
  const msToCounterStart = (ms) => {
    const years = Math.floor(ms / (356*24*60*60*1000));
    const yearsMs = ms % (356*24*60*60*1000);
    const days = Math.floor(yearsMs / (24*60*60*1000));
    const daysMs = ms % (24*60*60*1000);
    const hours = Math.floor(daysMs / (60*60*1000));
    const hoursMs = ms % (60*60*1000);
    const minutes = Math.floor(hoursMs / (60*1000));
    const minutesMs = ms % (60*1000);
    const sec = Math.floor(minutesMs / 1000);
    return years + ":" + days + ":" + hours + ":" + minutes + ":" + sec;
  }

  // Set initial counter numbers based on differenc of current / launch date
  const initCounter = () => {
    // console.log("time: ", time);
    const convertedUnix = new Date(time);
    // console.log("convertedUnix:", convertedUnix)
    const launchDate = new Date(convertedUnix.toUTCString());
    const currentDate = new Date();
    // console.log('launchDate:', launchDate, '\n','currentDate:', currentDate);
    const datesDifferenceMs = Math.abs(currentDate - launchDate);
    // console.log('datesDifference:', datesDifferenceMs);
    const counterStartNum = msToCounterStart(datesDifferenceMs);
    setCounterStart(counterStartNum);
    // console.log("counterStart: ", counterStartNum);
  }

  
  useEffect(initCounter, [time]);

  // Create count up effect by updating state of time every second
  useEffect(() => {
    setInterval(() => setTime(previousTime => previousTime + 1), 1000);
  }, []);
  
  
  return (
    <div>
      <div className='searchbar-container'>
        <form ref={searchForm}>
          <input
              type="search"
              id="search"
              name="search"
              placeholder="Search launch by Id..."
              autoComplete="off"
            />
        </form>
        <button className="submit-button" onClick={searchItems}>Submit</button>
      </div>
      {loading}
      {errorMsg && <div className='error-msg'>Search result is not valid</div>}
      {!loading && !errorMsg && (
      <div className='search-result'>
        <h2 className="font-gradient">Search result</h2>
            <div className='search-result-container'>
              <div className='search-result_above'>
                <div className='search-result_above_name'>
                {data.name}
                </div>
                <div className='search-result_above_indicator'>
                {data.success === true && <div className='search-result_above_indicator_success'></div>}
                {data.success === false && <div className='search-result_above_indicator_failure'></div>}
                </div>
              </div>
              <div className="search-result_video">
                <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + data.links.youtube_id + "?controls=0"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className='search-result_below'>
                {counterStart !== 'NaN:NaN:NaN:NaN:NaN' && <div className='search-result_below_elapsed-time'>
                  <div className='search-result_below_elapsed-time_headline'>Elipsed time since launch</div>
                  <div className='search-result_below_elapsed-time_counter'>{counterStart}</div>
                </div>}
                <div className='search-result_below_id'>
                  <div>
                    <b>ID:&nbsp;</b>{data.id}
                  </div>
                </div>
              </div>
            </div>
      </div>
      )}
    </div>
  )
}
  
export default SearchLaunches;