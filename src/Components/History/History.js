function History({ history }) {
  return (
    <div className={history === true ? 'openHistory ' : 'closeHistory '}>
      <div>
        <p className="closeButton">X</p>
      </div>

      <div className="historyOutput">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
      </div>
    </div>
  );
}

export default History;
