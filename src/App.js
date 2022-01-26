import "./App.css";
import Pages from "./Pages";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import PageDetails from "./PageDetails";

function App() {
  return (
    <BrowserRouter basename="/fxrfullstack">
      <div>
        <Switch>
          <Route exact path="/" component={Pages} />
          <Route path="/pages/:id" component={PageDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
