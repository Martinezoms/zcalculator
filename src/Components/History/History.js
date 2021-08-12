import Scroll from '../Scroll/scroll';
import '../History/History.css';

function History({ history, setHistory, localHistory, clearHistory }) {
  const hideHistoryDrawer = () => {
    setHistory(false);
  };

  return (
    <div className={history === true ? 'openHistory b--light-silver br3 pa1' : 'closeHistory b--light-silver br3 pa1'}>
      <div>
        <div>
          <div>
            <div className="closeButton" onClick={hideHistoryDrawer}>
              X
            </div>
          </div>
          <div className="b--light-silver br3 pa1">
            <div>
              <p>HISTORY</p>
            </div>

            <Scroll>
              {localHistory.map((history, i) => (
                <div className=" bb b--light-silver pa1">
                  <h6>{history.input}</h6>
                  <h5> {history.output}</h5>
                </div>
              ))}
            </Scroll>
            <div>
              <button className="pa2 br5 ma1 clearHistory" onClick={clearHistory}>
                Clear History
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
