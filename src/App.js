import SearchLaunches from './components/searchLaunches/SearchLaunches';
import LatestLaunches from './components/latestLaunches/LatestLaunches';

function App() {
  return (
    <>
      <header>
        <div className='header__headline-wrapper'>
          <h1 className='header__headline font-gradient'>SPACEX <span aria-hidden='true'>✹</span> DASHBOARD</h1>
        </div>
      </header>
      <main>
        <SearchLaunches />
        <LatestLaunches />
      </main>
    </>
  );
}

export default App;
