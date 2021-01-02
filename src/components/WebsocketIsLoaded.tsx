import React from "react"
import {Websocket} from "../providers/websocket";
import {LoadingPage} from "./loading";

export const WebsocketIsLoaded = (props: {uid: string, children: any}) => {
    const {loading} = Websocket.useContainer()

    return (
        loading?
            <LoadingPage />:
            props.children
    )
}