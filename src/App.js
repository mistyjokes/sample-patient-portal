import React, {Component} from "react";
import Patient from './components/Patient'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from './components/Home';
import history from './components/History';


class App extends Component {
  


render() {
  return (
      //Remember to add the route for Patient
    <div className="App">
      

      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/patient" component={Patient} />
        </Switch>
      </Router>
    </div>
  );
}

}

export default App;
