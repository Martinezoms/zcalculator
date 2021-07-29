import CalculatorV from '../Components/CalculatorV/CalculatorV';
import FloatButton from '../Components/FLoat-button/FloatButton';
import History from '../Components/History/History';
import '../Components/History/History.css';
import { ThemeProvider } from 'styled-components';
import { lightMode, darkMode, GlobalStyle } from '../Themes/themes.js';
import { useState } from 'react';
import 'tachyons';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  const [history, setHistory] = useState(false);
  const showHistory = () => {
    history === false ? setHistory(true) : setHistory(false);
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
      <GlobalStyle />
      <div className="w-100 center center  App h-100 ">
        <CalculatorV />
        <History history={history} />
        <FloatButton themeToggler={themeToggler} showHistory={showHistory} />
      </div>
    </ThemeProvider>
  );
}

export default App;
