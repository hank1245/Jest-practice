import Counter from "./Counter";
import NewCounter from "./NewCounter";

function App() {
  return (
    <div className="App">
      <Counter initialCount={0} />
      <NewCounter />
    </div>
  );
}

export default App;
