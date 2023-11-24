import React, {useContext, useEffect, useState} from 'react';
import Router from "./component/Router";
import {app} from  "firebaseApp"
import {getAuth, onAuthStateChanged} from "firebase/auth"
import {ToastContainer, toast} from 'react-toastify';
import ThemeContext from "context/ThemeContext"

import 'react-toastify/dist/ReactToastify.css';
import Loader from "component/Loader";
function App() {
    const context = useContext(ThemeContext);

    const auth = getAuth(app);

    //auth를 체크하기전에 (initialize 전)에 loader를 띄어주는 용도
    const [init,setInit] = useState<boolean>(false)
    // auth에 current User가 있으면 authenticated로 ㅂ녀경
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!auth?.currentUser)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setIsAuthenticated(true)
            }else {
                setIsAuthenticated(false)
            }
            setInit(true)
        })
    },[auth])
    return (
        <div className={context.theme === 'light' ? 'white' : 'dark'}>
            <ToastContainer/>
            {init ? <Router isAuthenticated={isAuthenticated}/> : <Loader/>}
        </div>
    )
}

export default App;
