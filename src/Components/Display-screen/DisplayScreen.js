import './displayScreen.css';

export default function displayScreen() {
  return (
    <div>
      <form className="flex flex-column display pa2">
        <textarea className="output-screen" rows="5" readOnly></textarea>
        <textarea className="input-screen" rows="2"></textarea>
      </form>
    </div>
  );
}
