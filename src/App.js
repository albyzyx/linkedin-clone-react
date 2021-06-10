import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./scenes/Sign/Signup/Signup";
import Login from "./scenes/Sign/Login/Login";
import SplashScreen from "./scenes/SplashScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <SplashScreen />
          </Route>
          {/* <Route exact path="/home">
            
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
