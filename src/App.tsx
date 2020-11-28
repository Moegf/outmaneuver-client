import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {HomePage} from './components/HomePage'
import {LoginPage} from "./components/login";
import {User} from "./providers/user";
import {SignupPage} from "./components/signup";

const App = () => {
    const {user} = User.useContainer()

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/login">
                    {user ?
                        <Redirect to={"/"} /> :
                        <LoginPage/>}
                </Route>
                <Route exact path="/signup">
                    {user ?
                        <Redirect to={"/"}/>:
                        <SignupPage/>
                    }
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
