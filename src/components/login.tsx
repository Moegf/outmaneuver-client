import React, {useState} from 'react'
import 'firebase/firestore'
import 'firebase/auth'
import {NavHeader} from "./NavHeader";
import {User} from "../providers/user";
import {useHistory} from "react-router";

export const LoginPage = () => {
    const history = useHistory()
    const {auth} = User.useContainer()

    let [error, setError] = useState<Error | null>()
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    const handleSubmit = (event: any) => {
        event.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then(() => history.push("/"))
            .catch(error => {
                setError(error)
            })
    }

    return (
        <div>
            <NavHeader/>
            <p>Login</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type={"text"} onChange={event => setEmail(event.target.value)}/>
                </label>
                <label>
                    Password:
                    <input type={"password"} onChange={event => setPassword(event.target.value)}/>
                </label>
                <input type={"submit"}/>
            </form>
            {error ?
                <p>An error occurred: {error.message}</p> :
                <p>All is good</p>
            }
        </div>
    )
}