import './displayScreen.css';

export default function displayScreen() {
  return (
    <div>
      <form className="flex flex-column display pa2">
        <textarea className="output-screen" rows="5" readOnly>
          output
        </textarea>
        <textarea className="input-screen" rows="2">
          input
        </textarea>
      </form>
    </div>
  );
}
