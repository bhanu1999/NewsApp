import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  // Link
} from "react-router-dom";

export default class App extends Component {
  a = "bhanu";
  render() {
    return (
      <><div>
        <Router>
          <NavBar/>
          <Routes>
            <Route exact path="/" element={<News key="general" category="general" country="in" pageSize={9}/>}></Route>
            <Route exact path="business" element={<News key="business" category="business" country="in" pageSize={9}/>} />
            <Route
              exact path="/entertainment"
              element={<News key="entertainment" category="entertainment" country="in" pageSize={9} />}
            ></Route>
            <Route exact path="/health" element={<News key="health" category="health" country="in" pageSize={9} />}></Route>
            <Route
              exact path="/science"
              element={<News key="science" category="science" country="in" pageSize={9}/>}
            ></Route>
            <Route exact path="/sports" element={<News key="sports" category="sports" country="in" pageSize={9}/>}></Route>
            <Route
              exact path="/technology"
              element={<News key="technology" category="technology"country="in" pageSize={9} />}
            ></Route>
      
          </Routes>
        </Router>
        </div>
      </>
    );
  }
}
