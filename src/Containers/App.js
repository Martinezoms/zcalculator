import DisplayScreen from '../Components/Display-screen/DisplayScreen';
import Buttons from '../Components/Buttons/Buttons';
import FloatButton from '../Components/FLoat-button/FloatButton';
import 'tachyons';
import './App.css';

function App() {
  return (
    <div className="w-100 center center  App h-100 ">
      <div className="center center frame w-70 w-50-m w-25-l ma5">
        <h3>Zcalculator</h3>
        <DisplayScreen />
        <Buttons />
      </div>
      <FloatButton className="right w-100 " />
    </div>
  );
}

export default App;
