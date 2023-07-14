import './App.css';
import  Topnav  from './Components/Topnav';
import Leftnav from './Components/Leftnav';
import Recommendedvideos from './Components/Recommendedvideos';


function App() {
  return (
    <div className="App">
      <Topnav />
      <div className="mainpage">
        <Leftnav />
        <h1>hello test</h1>
        <Recommendedvideos />
      </div>
    </div>
  );
}

export default App;
