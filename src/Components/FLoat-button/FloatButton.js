import './floatButton.css';

export default function floatButton() {
  return (
    <div className="wrapper">
      <input id="triggerButton" className="triggerButton" type="checkbox" />
      <label htmlFor="triggerButton" className="grow shadow-5 pulse"></label>

      <div className="one fa fa-facebook"></div>
      <div className="two fa fa-twitter"></div>
      <div className="three fa fa-instagram"></div>
    </div>
  );
}
