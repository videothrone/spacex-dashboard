import { useState, useEffect } from 'react';
import './error.scss';

const Error = ({ message, searching }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Trigger animation whenever user searches again
  useEffect(() => {
    setShouldAnimate(true);
    const animationTimeout = setTimeout(() => {
      setShouldAnimate(false);
    }, 500);

    return () => clearTimeout(animationTimeout);
  }, [searching]);

  return (
    <div className={`error ${shouldAnimate ? 'animate' : ''}`}>
      <p className="error__message box-shadow">{message}</p>
    </div>
  );
};

export default Error;
