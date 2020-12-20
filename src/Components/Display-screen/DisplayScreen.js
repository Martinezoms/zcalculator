import './displayScreen.css';

export default function displayScreen() {
  return (
    <div className="display-toolbar">
      <form className="flex flex-column display">
        <textarea className="output-screen" rows="6">
          output
        </textarea>
        <textarea className="input-screen" rows="2">
          input
        </textarea>
      </form>
    </div>
  );
}
