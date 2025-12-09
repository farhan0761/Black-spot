
import './App.css';
import Filtersec from './Components/Filtersec';
import Footer from './Components/Footer';
import KeyPeople from './Components/KeyPeople';
import LocationSec from './Components/LocationSec';
import MainMidsec from './Components/MainMidsec';
import MainPagelogo from './Components/MainPagelogo';
import Mparivahan from './Components/Mparivahan';

function App() {
  return (
    <div className="App">
       <MainPagelogo/>
       <MainMidsec/>
       <Filtersec/>
       <LocationSec/>
       <KeyPeople/>
       <Mparivahan/>
       <Footer/>
    </div>
  );
}

export default App;
