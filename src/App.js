
import './App.css';
import Filtersec from './Components/Filtersec';
import LocationSec from './Components/LocationSec';
import MainMidsec from './Components/MainMidsec';
import MainPagelogo from './Components/MainPagelogo';

function App() {
  return (
    <div className="App">
       <MainPagelogo/>
       <MainMidsec/>
       <Filtersec/>
       <LocationSec/>
    </div>
  );
}

export default App;
