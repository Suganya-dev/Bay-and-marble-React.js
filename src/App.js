
import './App.css';
import {Home} from "./Home"
import {TakeNum} from "./TakeNum"
import {FAQ} from"./FAQ"


function App() {
  const user = { id: 1, name: "suganya" }
  return (
    <div className="App">
        <TakeNum/>
        <Home user ={user} />
        <FAQ/>
    </div>
  );
}

export default App;
