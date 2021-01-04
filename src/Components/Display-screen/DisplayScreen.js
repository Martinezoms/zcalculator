import './displayScreen.css';

function DisplayScreen({ input }) {
  const handleChange = () => {};
  return (
    <div>
      <form className="flex flex-column display pa2">
        <textarea className="output-screen" rows="5" readOnly></textarea>
        <textarea className="input-screen" rows="2" value={input} onChange={handleChange}></textarea>
      </form>
    </div>
  );
}

export default DisplayScreen;
