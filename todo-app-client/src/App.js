import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HeadNavLayout from "./Layouts/HeadNavLayout";
import NoNavLayout from "./Layouts/NoNavLayout";
import Home from "./pages/Home";
import AddItem from "./pages/Add Item";
import "./App.css";
import About from "./pages/About";


const User = {
  name: "Muhammad Bilal",
  onSignup: false,

}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/add-item">
          <NoNavLayout>
            <AddItem />
          </NoNavLayout>
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route exact path="/">
          <HeadNavLayout>
            <Home />
          </HeadNavLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
