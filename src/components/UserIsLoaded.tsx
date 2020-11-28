import React, { useEffect} from 'react'
import {LoadingPage} from "./loading";
import {ErrorDisplay} from "./error";
import {User, Userdata} from "../providers/user";

export const UserIsLoaded = (props: any) => {
    const {user, firestore} = User.useContainer()
    const {setUserData, loading, setLoading, error, setError} = Userdata.useContainer()

    useEffect(() => {
        if(user) {
            setLoading(true)
            firestore.collection('users').doc(user.uid).get().then(snapshot => {
                setUserData({
                    "username": snapshot.data()?.username
                })
                setLoading(false)
            }).catch(setError)
        }
    },[user, firestore, setError, setLoading, setUserData])

    return (
        loading?
            <LoadingPage />:
            error?
                <ErrorDisplay error={error}/>:
                props.children
    )
}