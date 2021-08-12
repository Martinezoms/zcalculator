import Scroll from '../Scroll/scroll';

function History({ history, localHistory }) {
  return (
    <div className={history === true ? 'openHistory b--light-silver br3 pa1' : 'closeHistory b--light-silver br3 pa1'}>
      <div>
        <div>
          <div>
            <p className="closeButton">X</p>
          </div>
          <div className="b--light-silver br3 pa1">
            <div>
              <p>HISTORY</p>
            </div>

            <Scroll>
              {localHistory.map((history, i) => (
                <div className=" bb b--light-silver pa1">
                  <h6>{history.input}</h6>
                  <h5> ={history.output}</h5>
                </div>
              ))}
            </Scroll>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
