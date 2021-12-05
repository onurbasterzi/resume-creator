import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from './components/ui/Navbar'

import Home from "./pages/Home";
import Preview from "./pages/Preview";
import EditResume from "./pages/EditResume";
import Test from "./pages/Test";

function App() {
  return (
    <Router>
      <div className="bg-dark">
      <NavigationBar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/edit/:id">
            <EditResume />
          </Route>
          <Route exact path="/test">
            <Test />
          </Route>
          
          <Route exact path="/preview/:id">
            <Preview />
          </Route>
        </Switch>
        </div>
    </Router>
  );
}
export default App;
