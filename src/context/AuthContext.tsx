import {Children, createContext, ReactNode, useEffect, useState} from "react";
import {getAuth, onAuthStateChanged, User} from 'firebase/auth'
import {app} from "firebaseApp";

const AuthContext = createContext({
    user: null as User | null, //type지정
});

interface AuthProps {
    children: ReactNode
}

export const AuthContextProvider = ({children}: AuthProps) => {
    const auth = getAuth(app)
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user)
            } else {
                setCurrentUser(user)
            }
        })
    }, [auth])

    return (
        <AuthContext.Provider value={{user: currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;