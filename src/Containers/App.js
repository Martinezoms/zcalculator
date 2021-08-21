import CalculatorV from '../Components/CalculatorV/CalculatorV';
import FloatButton from '../Components/FLoat-button/FloatButton';
import History from '../Components/History/History';
import '../Components/History/History.css';
import { ThemeProvider } from 'styled-components';
import { lightMode, darkMode, GlobalStyle } from '../Themes/themes.js';
import { useState, useEffect } from 'react';
import 'tachyons';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [theme, setTheme] = useState('light');
  const [localHistory, setLocalHistory] = useState([]);

  useEffect(() => {
    getHistory();
  }, []);

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  const [history, setHistory] = useState(false);
  const showHistory = () => {
    history === false ? setHistory(true) : setHistory(false);
  };
  const getHistory = () => {
    let history = JSON.parse(localStorage.getItem('history'));
    if (history === null) {
      history = [];
    }
    setLocalHistory(history);
  };
  const clearHistory = () => {
    localStorage.clear();
    setLocalHistory([]);
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
      <GlobalStyle />
      <div className="w-100 center center  App h-100 ">
        <CalculatorV
          input={input}
          output={output}
          setInput={setInput}
          setOutput={setOutput}
          setLocalHistory={setLocalHistory}
        />
        <History
          history={history}
          setHistory={setHistory}
          localHistory={localHistory}
          clearHistory={clearHistory}
          setInput={setInput}
          setOutput={setOutput}
        />
        <FloatButton themeToggler={themeToggler} showHistory={showHistory} />
      </div>
    </ThemeProvider>
  );
}

export default App;
