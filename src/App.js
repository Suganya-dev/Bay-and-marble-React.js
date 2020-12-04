
import './App.css';
import {Home} from "./Home"
import {TakeNum} from "./TakeNum"


function App() {
  const user = { id: 1, name: "suganya" }
  return (
    <div className="App">
        <TakeNum/>
        <Home user ={user} />
    </div>
  );
}

export default App;
