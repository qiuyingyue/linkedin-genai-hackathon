import logo from './logo.svg';
import './App.css';
import UpsellMarkup from './UpsellMarkup.js';
import UpsellStyles from './UpsellStyles';

function App() {
  return (
    <div className="App">
      <h1>Hi there!</h1>
      <h2>Welcome to our AI-generated component editor.</h2>
      
      <UpsellStyles/>
      <UpsellMarkup/>
    </div>
  );
}

export default App;
