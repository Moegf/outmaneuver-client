import React from 'react';
import { NavHeader } from './NavHeader'
import '../stylesheets/HomePage.css'

export const UserPage = (props: {user: any, error: any}) => {
    console.log(props.user);
    console.log(props.error);
    return (
        <div>
            <NavHeader/>
            <div className={"padded"}>
                <UserImage image={undefined} color={[random(255), random(255), random(255)]}/>
                <div style={{height:"25px"}}></div>

                <h1 className={"center"}>{props.user ? props.user.username : "loading..."}</h1>

                <p className={"center"}>
                    {props.error ? "Error: " + props.error : ""}
                </p>
            </div>
        </div>
    );
}

const UserImage = (props: {image: any, color: [number, number, number]}) => {
    return (
        <div className={""} style={{width:"100%"}}>
            <div className={"user-image center-child"} style={{backgroundColor:`rgb(${props.color[0]}, ${props.color[1]}, ${props.color[2]})`}}></div>
        </div>
    );
}

const random = (max: number) => {
    return Math.random() * max;
}