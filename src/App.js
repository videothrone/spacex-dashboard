import SearchLaunches from './searchLaunches';
import GetLaunches from './getLaunches';

function App() {
  return (
    <div>
    <header>
      <div className="header-headline">
        <h1 className="font-gradient">SPACEX DASHBOARD</h1>
      </div>
    </header>
    <SearchLaunches />
    <GetLaunches />
    </div>
  );
}

export default App;
