import {useState} from "react";
import {createContainer} from "unstated-next";

export const useGameState = () => {
    let [gameState, setGameState] = useState<GameStates>(GameStates.Browsing)

    return{gameState, setGameState}
}

export const GameState = createContainer(useGameState)

export enum GameStates {
    Browsing, //Looking at rooms
    Waiting, //Waiting in a room for game to start
    Playing, //Playing the game
    Testing, //testing the websocket api
}