import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [eur, setEur]=useState(0)
  const [gbp, setGbp]=useState(0)

  function calculate(){
    setGbp(eur*0.87)
  }
  
  return (
    <div>
      <h3>Currency converter</h3>
      <form>
        <div>
          <label>EUR</label>
          <input data-testid="eur" value={eur} onChange={e=>setEur(e.target.value)} />
        </div>
        <div>
          <label>GBP</label>
          <output data-testid="gbp">{gbp.toFixed(2)}</output>
        </div>
        <button data-testid="calculate" type="button" onClick={calculate}>Calculate</button> 
      </form>
    </div>
  )
}

export default App;
