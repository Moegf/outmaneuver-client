import {IMessageEvent, w3cwebsocket} from "websocket";
import {useState} from "react";
import {createContainer} from "unstated-next";

const websocketURL = process.env.NODE_ENV === "development" ?
    "ws://localhost/roomsocket" :
    "ws://outmaneuver.herokuapp.com/roomsocket"

export const useWebsocket = () => {
    const socket = new w3cwebsocket(websocketURL)

    const [loading, setLoading] = useState<Boolean>(true);

    socket.onopen = () => {
        setLoading(false)
    }
    socket.onclose = () => setLoading(true)

    const receive = (callback: (message: IMessageEvent) => void): void => {
        socket.onmessage = message => {
            callback(message)
        }
    }

    const send = (type: string, data: Object): boolean => {
        if (loading)
            return false

        socket.send(JSON.stringify(
            Object.assign({"type": type}, data)
        ))
        return true
    }

    return {loading, send, receive}
}

export const Websocket = createContainer(useWebsocket)