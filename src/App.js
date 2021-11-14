import "./App.css";
import Navbar from "./components/Navbar";
import Devices from "./components/Devices";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Device from "./components/Device";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/devices" exact component={Devices} />
          <Route path="/devices/:id" component={Device} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
