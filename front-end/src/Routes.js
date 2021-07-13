import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './components/Login'
import Dashboard from "./Pages/Dashboard";
import Questionario from "./Pages/Questionario";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Login} exact />
                <Route path="/questionario" component={Questionario} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;