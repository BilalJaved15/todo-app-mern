import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HeadNavLayout from "./Layouts/HeadNavLayout";
import NoNavLayout from "./Layouts/NoNavLayout";
import Home from "./pages/Home";
import AddItem from "./pages/Add Item";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/add-item">
          <NoNavLayout>
            <AddItem/>
          </NoNavLayout>
        </Route>

        <Route path="/">
          <HeadNavLayout>
            <Home />
          </HeadNavLayout>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
