import React from 'react'
import {LoadingPage} from "./loading";
import {User, Userdata} from "../providers/user";
import {UserIsLoaded} from "./UserIsLoaded";

export const AuthIsLoaded = (props: any) => {
    const {loading, error} = User.useContainer()

    return (
        loading ?
            <LoadingPage/> :
            error ?
                <p>{error}</p> :
                <Userdata.Provider><UserIsLoaded>{props.children}</UserIsLoaded></Userdata.Provider>
    )
}