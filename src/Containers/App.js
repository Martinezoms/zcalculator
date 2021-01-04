import CalculatorV from '../Components/CalculatorV/CalculatorV';
import FloatButton from '../Components/FLoat-button/FloatButton';
import 'tachyons';
import './App.css';

function App() {
  return (
    <div className="w-100 center center  App h-100 ">
      <CalculatorV />
      <FloatButton />
    </div>
  );
}

export default App;
