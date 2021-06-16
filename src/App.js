import { Component } from "react";
import "./App.css";
import Dashboard from "./Dashboard";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        Calculator
        <Dashboard/>
      </div>
    );
  }
}

export default App;
