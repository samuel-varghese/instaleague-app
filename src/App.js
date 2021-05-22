
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/pages/Home";
import login from "./components/pages/login"

function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign_up" exact component={login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
