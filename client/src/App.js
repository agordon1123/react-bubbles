import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import LoginFormik from "./components/Login";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={LoginFormik} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute path='/profile' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
