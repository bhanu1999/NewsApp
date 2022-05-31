import "./App.css";

import React,{useState} from "react";
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

const App=()=>  {
 const [progress, setProgress] = useState(0)
  

  
    return (
      <><div>
        <Router>
          <NavBar sticky="top"/>
          <LoadingBar
        color='#00FF00'
        progress={progress}
        height={3}
        // onLoaderFinished={() => setProgress(0)}
      />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress}  key="general" category="general" country="in" pageSize={9}/>}></Route>
            <Route exact path="business" element={<News setProgress={setProgress}  key="business" category="business" country="in" pageSize={9}/>} />
            <Route
              exact path="/entertainment"
              element={<News setProgress={setProgress}  key="entertainment" category="entertainment" country="in" pageSize={9} />}
            ></Route>
            <Route exact path="/health" element={<News setProgress={setProgress}  key="health" category="health" country="in" pageSize={9} />}></Route>
            <Route
              exact path="/science"
              element={<News setProgress={setProgress}  key="science" category="science" country="in" pageSize={9}/>}
            ></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress}  key="sports" category="sports" country="in" pageSize={9}/>}></Route>
            <Route
              exact path="/technology"
              element={<News setProgress={setProgress}  key="technology" category="technology"country="in" pageSize={9} />}
            ></Route>
      
          </Routes>
        </Router>
        </div>
      </>
    );
  
}
export default App;