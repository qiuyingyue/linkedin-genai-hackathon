import logo from './logo.svg';
import './App.css';
import UpsellMarkup from './UpsellMarkup';
import UpsellStyles from './UpsellStyles';
import Options from './Options';

function App() {
  return (
    <div className="App">
      <h1>Hi there!</h1>
      <h2>Welcome to our AI-generated component editor.</h2>
      
      <div class="App-container">
        <UpsellStyles/>
        <UpsellMarkup/>
        <Options/>
      </div>
    </div>
  );
}

export default App;
