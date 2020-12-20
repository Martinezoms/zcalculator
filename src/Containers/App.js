import DisplayScreen from '../Components/Display-screen/DisplayScreen';
import Buttons from '../Components/Buttons/Buttons';
import FloatButton from '../Components/FLoat-button/FloatButton';
import 'tachyons';
import './App.css';

function App() {
  return (
    <div className="pa5">
      <div className="center w-25 h-100">
        <DisplayScreen />
        <Buttons />
      </div>
      <FloatButton className="right w-100 h-100" />
    </div>
  );
}

export default App;
