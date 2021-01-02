import React, {useEffect, useState} from 'react'
import {Websocket} from "../providers/websocket";
import ReactJson from "react-json-view";
import {GameState, GameStates} from "../providers/gamestate";
import {ErrorDisplay} from "./error";
import {User} from "../providers/user";

export const SocketConsole = () => {
    const {send, receive} = Websocket.useContainer()
    const {setGameState} = GameState.useContainer()
    const {user} = User.useContainer()

    let [latestMessage, setLatestMessage] = useState<Object>({})
    let [outgoingMessage, setOutgoingMessage] = useState<Object>({})
    let [error, setError] = useState<Error>()
    let [type, setType] = useState<string>("")

    useEffect(() => {
        receive(message => {
            setLatestMessage(JSON.parse(message.data as string))
        })
        return (
            () => receive(() =>{})
        )
    })

    const handleSend = () => {
        if (type && type !== "type") {
            send(type, outgoingMessage)
            setOutgoingMessage({})
            setType("")
        }
        else
            setError(new Error(type?
                `Type cannot be "type"`:
                `Type cannot be empty`
            ))
    }

    const updateOutgoing = (update: any) => {
        setOutgoingMessage(update.updated_src)
    }

    return (
        <div>
            <p>{user.uid}</p>
            Incoming Message:
            <ReactJson src={latestMessage} theme={"summerfruit"} iconStyle={"circle"}/>
            Outgoing Message:
            <input type={"text"} onChange={(event) => {setType(event.target.value)}} value={type}/>
            <ReactJson src={outgoingMessage} theme={"summerfruit"} iconStyle={"circle"} onEdit={update => updateOutgoing(update)} onAdd={update => updateOutgoing(update)} onDelete={update => updateOutgoing(update)}/>
            <button onClick={handleSend}>Send</button>
            <button onClick={() => setGameState(GameStates.Browsing)}>Back to browse</button>
            {error?
                <ErrorDisplay error={error}/>:
                <div/>
            }
        </div>
    )
}