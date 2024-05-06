// Formats the given time duration in milliseconds into a readable string
export const formatTime = (time) => {
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  const days = Math.floor((time / (1000 * 60 * 60 * 24)) % 365);
  const years = Math.floor(time / (1000 * 60 * 60 * 24 * 365));

  const timeString = [];

  if (years > 0) {
    timeString.push(`${years}y`);
  }
  if (days > 0) {
    timeString.push(`${days}d`);
  }
  if (hours > 0) {
    timeString.push(`${hours}h`);
  }
  if (minutes > 0) {
    timeString.push(`${minutes}m`);
  }
  timeString.push(`${seconds}s`);

  return timeString.join(" ✹ ");
};

// Copy launch ID to clipboard
export const copyIDToClipboard = (event, setOverlayMessage, setShowOverlay) => {
  const parentDiv = event.target.closest('.latest-launch__list-item-id');
  const dataId = parentDiv.getAttribute('data-id');

  navigator.clipboard.writeText(dataId);
  setOverlayMessage('ID copied to clipboard!');
  setShowOverlay(true);
  setTimeout(() => {
    setShowOverlay(false);
  }, 800);
}

// Scroll to top of viewport
export const scrollToTop = () => {
  const isScrollToTopVisible = document.querySelector('.latest-launches__scroll-to-top');

  // Timeout for Chrome, since scrollTo() action fires before Chrome's default scroll to html anchor event
  setTimeout(() => {
    if (isScrollToTopVisible) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, 0);
};

// Scroll to #hash element
export const scrollToHash = (hash) => {
  const element = document.getElementById(hash);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
