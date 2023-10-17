import React from 'react';
import Router from "./component/Router";

function App() {
    /*지정되지않은 페이지
    * <Route path="*" element={<Navigate replace to="/"/> }/>
    * */
    return (
            <Router/>
    )
}

export default App;
