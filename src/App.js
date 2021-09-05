import './App.css';
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Shoes from "./components/Shoes"
import Outfit from "./components/Outfit"
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/shoes">
            <Shoes/>
          </Route>
          <Route path="/outfit">
            <Outfit/>
          </Route>
        </Switch>
      </div> 
    </Router>
  );
}

export default App;
