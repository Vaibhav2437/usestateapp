import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Counter from './Component/Counter'
import UserData from './Component/UserData';


function App() {
  return (
    <div className="App">
      <h1>Learn UseSate() from React</h1>
      <Counter/>
      <UserData/>
    </div>
  );
}

export default App;
