import Scroll from '../Scroll/scroll';

function History({ history }) {
  return (
    <div className={history === true ? 'openHistory b--light-silver br3' : 'closeHistory b--light-silver br3'}>
      <div>
        <div>
          <div>
            <p className="closeButton">X</p>
          </div>
          <Scroll>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>0</p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>0</p>
            <p>1</p>
            <p>2</p>
          </Scroll>
        </div>
      </div>
    </div>
  );
}

export default History;
