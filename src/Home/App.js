import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Home from "./Home";
import "../Styles/App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
