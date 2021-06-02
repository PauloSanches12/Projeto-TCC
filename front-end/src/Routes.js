import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Questionario from "./Pages/Questionario";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Login} exact />
                <Route path="/Questionario" component={Questionario} />
            </Switch>
        </BrowserRouter>
    );
  }
  
  export default Routes;