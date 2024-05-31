import "./App.css";

function App() {
  return (
    <div className="App flex flex-col md:flex-row">
      <div>
        <h1 className="text-blue-800 text-2xl">Heading</h1>

        <p className="text-center text-lg mt-1">
          This is a text that is used as a placeholder for now.
        </p>
      </div>

      <div className="md:ml-10">
        <button className="block mx-auto mt-5 bg-blue-900 text-white py-1 px-3 rounded-full">
          Im Button One
        </button>
        <button className="block mx-auto mt-2 bg-blue-900 text-white py-1 px-3 rounded-full">
          Im Button One
        </button>
      </div>
    </div>
  );
}

export default App;
