import { useState, useEffect } from 'react';
import { formatTime } from '../helpers/helperFunctions.js';
import './timer.scss';

const Timer = ({ lastLaunchDate }) => {
  const [elapsedTime, setElapsedTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const difference = currentTime - lastLaunchDate;

      setElapsedTime(difference);
    }, 1000);

    return () => clearInterval(interval);
  }, [lastLaunchDate]);

  return (
    <div className='search-result__below-elapsed-time'>
      <h4 className='search-result__below-elapsed-time-headline'>Elapsed time since launch:</h4>
      {!elapsedTime && <div className='search-result__below-elapsed-time-counter'>Loading...</div>}
      {elapsedTime && <div className='search-result__below-elapsed-time-counter'>{formatTime(elapsedTime)}</div>}
    </div>
  );
};

export default Timer;
