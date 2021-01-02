import React from 'react'
import {Websocket} from "../providers/websocket";
import {GameState, GameStates} from "../providers/gamestate";

export const RoomBrowser = () => {
    const {send, receive} = Websocket.useContainer()
    let {gameState, setGameState} = GameState.useContainer()

    return (
        <div>
            browsing
            <button onClick={() => setGameState(GameStates.Testing)}>Test</button>
        </div>
    )
}