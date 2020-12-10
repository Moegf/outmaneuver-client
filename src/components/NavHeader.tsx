import React from 'react';
import '../stylesheets/NavHeader.css'
import {User, Userdata} from '../providers/user';

export const NavHeader = () => {
    const {auth, user} = User.useContainer()
    const {userData} = Userdata.useContainer()

    return (
        <header>
            <a href={"/"}>home</a>
            <a href={"/about"}>about</a>
            { user ?
                (
                    <React.Fragment>
                        <a href={"/"} onClick={() => auth.signOut()}>logout</a>
                        <a href={"/play"}>play</a>
                        <a href={"/user"}>{userData?.username || user.email}</a>
                    </React.Fragment>
                ) :
                (
                    <React.Fragment>
                        <a href={"/login"}>login</a>
                        <a href={"/signup"}>signup</a>
                    </React.Fragment>
                )}
        </header>
    )
}