import CalculatorV from '../Components/CalculatorV/CalculatorV';
import FloatButton from '../Components/FLoat-button/FloatButton';
import History from '../Components/History/History';
import '../Components/History/History.css';
import styled, { ThemeProvider } from 'styled-components';
import { lightMode, darkMode, GlobalStyle } from '../Themes/themes.js';
import { useState } from 'react';
import 'tachyons';
import './App.css';

const openHistory = styled.div`
  background-color: red;
  position: absolute;
  left: 84%;
  bottom: 40%;
  width: 20rem;
  overflow: visible;
`;
const closeHistory = styled.div`
  background-color: red;
  position: absolute;
  left: 100%;
  bottom: 40%;
  width: 20rem;
  overflow: visible;
`;
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
        <History className={history === true ? openHistory : closeHistory} />
        <FloatButton themeToggler={themeToggler} showHistory={showHistory} />
      </div>
    </ThemeProvider>
  );
}

export default App;
