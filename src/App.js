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
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  a = "bhanu";
  state={
    progress:0
  }
  setProgress=(progress)=>
  {
    this.setState({progress:progress});
  }
  // const [progress, setProgress] = useState(0);
  render() {
    return (
      <><div>
        <Router>
          <NavBar/>
          <LoadingBar
        color='#00FF00'
        progress={this.state.progress}
        height={3}
        // onLoaderFinished={() => setProgress(0)}
      />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress}  key="general" category="general" country="in" pageSize={9}/>}></Route>
            <Route exact path="business" element={<News setProgress={this.setProgress}  key="business" category="business" country="in" pageSize={9}/>} />
            <Route
              exact path="/entertainment"
              element={<News setProgress={this.setProgress}  key="entertainment" category="entertainment" country="in" pageSize={9} />}
            ></Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress}  key="health" category="health" country="in" pageSize={9} />}></Route>
            <Route
              exact path="/science"
              element={<News setProgress={this.setProgress}  key="science" category="science" country="in" pageSize={9}/>}
            ></Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress}  key="sports" category="sports" country="in" pageSize={9}/>}></Route>
            <Route
              exact path="/technology"
              element={<News setProgress={this.setProgress}  key="technology" category="technology"country="in" pageSize={9} />}
            ></Route>
      
          </Routes>
        </Router>
        </div>
      </>
    );
  }
}
