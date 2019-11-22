import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import "../Styles/App.css";
import About from "./Home";
function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Home} />
        {/* <Route path="/About" component={About} /> */}
      </div>
    </Router>
  );
}

export default App;
