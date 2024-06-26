import './launchStatus.scss';

export default function LaunchStatus({ className, launchStatus}) {
  return (
    <div
      className={`launch-status ${launchStatus ? 'launch-status--success' : 'launch-status--failure'} ${className}`}
      alt={`Launch ${launchStatus ? 'success' : 'failure'}`}
    >
      <span className='visually-hidden'>Status: Launch ${launchStatus}</span>
    </div>
  );
}
