import { Route, Switch } from "react-router-dom";
import { Home, Landing, Detail, Form, Error } from "./utils";
import NavBar from "./components/NavBar/NavBar";
import { useLocation } from "react-router-dom";


function App() {
  const location = useLocation();

  return (  
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/">
          {location.pathname !== "/" && <NavBar />}
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/create" component={Form} />
          <Route exact path="/home" component={Home} />
        </Route>
        <Route component={Error} />
      </Switch>
    </div>
   
  );
}

export default App;
