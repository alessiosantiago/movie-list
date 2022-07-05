import './App.css';
import List from './components/List';
import Recs from './components/Recs';

function App() {
  return (
  <div className='app'>
       <h1>My List</h1>
      <div className='row'>
          <List />
    </div>
    <h1>Recommendations</h1>
    <div className='row'>
      <Recs />
    </div>

    </div>
  );
}

export default App;
