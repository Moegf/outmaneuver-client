import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {HomePage} from './components/HomePage'
import {LoginPage} from "./components/login";
import {User, Userdata} from "./providers/user";
import {SignupPage} from "./components/signup";
import {UserPage} from "./components/UserPage";

const App = () => {
    const {user} = User.useContainer()
    const {userData, loading, error} = Userdata.useContainer();

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
                <Route exact path="/user">
                    {!loading ? <UserPage user={userData} error={error}/> : <Redirect to={"/"}/>}
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
