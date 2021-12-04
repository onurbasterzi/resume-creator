import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from './components/ui/Navbar'

import Home from "./pages/Home";
import Preview from "./pages/Preview";
import NewResume from "./pages/NewResume";

function App() {
  return (
    <Router>
      <div className="bg-dark">
      <NavigationBar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/new">
            <NewResume />
          </Route>
          
          <Route exact path="/preview">
            <Preview />
          </Route>
        </Switch>
        </div>
    </Router>
  );
}
export default App;
