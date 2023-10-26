import React, {useState} from 'react';
import Router from "./component/Router";
import {app} from  "firebaseApp"
import {getAuth} from "firebase/auth"

function App() {

    const auth = getAuth(app);
    // firebase 의 Auth가 인증되었으면  true로 변경해주는 로직 추가
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!auth?.currentUser)

    return (
            <Router isAuthenticated={isAuthenticated}/>
    )
}

export default App;
