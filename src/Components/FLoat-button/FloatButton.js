import './floatButton.css';

export default function floatButton() {
  return (
    <div class="wrapper">
      <input id="triggerButton" class="triggerButton" type="checkbox" />
      <label for="triggerButton"></label>
      <div class="one fa fa-facebook"></div>
      <div class="two fa fa-twitter"></div>
      <div class="three fa fa-instagram"></div>
    </div>
  );
}
