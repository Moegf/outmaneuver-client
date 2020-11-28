import {useAuthState} from "react-firebase-hooks/auth";
import {initFirebase} from "../firebase";
import {useState} from "react";
import { createContainer } from "unstated-next";

const {getAuth, getFirestore} = initFirebase()

const auth = getAuth()
const firestore = getFirestore()

export const useUser = () => {
    let [user, loading, error] = useAuthState(auth)

    return {user, loading, error, auth, firestore }
}

export const useUserData = () => {
    let [userData, setUserData] = useState<UserData>()
    let [loading, setLoading] = useState<boolean>(false)
    let [error, setError] = useState<Error>()

    return {userData, setUserData, loading, setLoading, error, setError}
}

export const User = createContainer(useUser)
export const Userdata = createContainer(useUserData)

export interface UserData {
    username: string
}