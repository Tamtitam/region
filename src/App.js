import logo from './logo.svg';
import './App.css';
import Mockups from './Components/Mockups';
import Bundles from './Components/Bundles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/images/logoRmS.png" alt="Render me Softly" />
      </header>
      <Mockups />
      <Bundles />
    </div>
  );
}

export default App;
