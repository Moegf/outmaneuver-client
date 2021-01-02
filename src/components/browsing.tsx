import React from 'react'
import {Websocket} from "../providers/websocket";
import {GameState, GameStates} from "../providers/gamestate";

export const RoomBrowser = () => {
    let {setGameState} = GameState.useContainer()

    return (
        <div>
            browsing
            <button onClick={() => setGameState(GameStates.Testing)}>Test</button>
        </div>
    )
}