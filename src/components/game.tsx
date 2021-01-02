import React from 'react'
import {Websocket} from "../providers/websocket";
import {WebsocketIsLoaded} from "./WebsocketIsLoaded";
import {GameState, GameStates} from "../providers/gamestate";
import {RoomBrowser} from "./browsing";
import {SocketConsole} from "./socketConsole";
import {ErrorDisplay} from "./error";
import {User} from "../providers/user";

export const Game = () => {

    const {gameState} = GameState.useContainer()
    const {user} = User.useContainer()

    return (
        <Websocket.Provider>
            <WebsocketIsLoaded uid={user.uid}>
                {(() => {
                    switch (gameState) {
                        case GameStates.Browsing:
                            return (<RoomBrowser />)
                        case GameStates.Waiting:
                        case GameStates.Playing:
                        case GameStates.Testing:
                            return (<SocketConsole />)
                        default:
                            return <ErrorDisplay error={new Error(`GameState ${gameState} not recognized`)}/>
                    }
                })()}
            </WebsocketIsLoaded>
        </Websocket.Provider>
    )

}