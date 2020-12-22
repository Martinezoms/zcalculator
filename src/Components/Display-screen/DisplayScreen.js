import './displayScreen.css';

export default function displayScreen() {
  return (
    <div>
      <form className="flex flex-column display">
        <textarea className="output-screen" rows="8">
          output
        </textarea>
        <textarea className="input-screen" rows="4">
          input
        </textarea>
      </form>
    </div>
  );
}
