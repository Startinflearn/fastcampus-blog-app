import {
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import Home from "../pages/home";
import Posts from "../pages/posts";
import PostDetail from "../pages/posts/detail";
import PostNew from "../pages/posts/new";
import PostEdit from "../pages/posts/edit";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup";
import ProfilePage from "../pages/profile";

interface RouterProps {
    isAuthenticated : boolean;
}
export default function Router( { isAuthenticated } : RouterProps) {
    /*지정되지않은 페이지
    * <Route path="*" element={<Navigate replace to="/"/> }/>
    * */

    return (
        <>
            <Routes>
                {
                    isAuthenticated ? (
                        <> <Route path="/" element={<Home/>}/>
                            <Route path="/posts" element={<Posts/>}/>
                            <Route path="/posts/:id" element={<PostDetail/>}/>
                            <Route path="/posts/new" element={<PostNew/>}/>
                            <Route path="/posts/edit/:id" element={<PostEdit/>}/>
                            <Route path="/profile" element={<ProfilePage/>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                            <Route path="/signup" element={<SignupPage/>}/>
                            <Route path="*" element={<Navigate replace to="/"/> }/></>
                    ) : (
                        <>
                            <Route path="/login" element={<LoginPage/>}/>
                            <Route path="/signup" element={<SignupPage/>}/>
                            <Route path="/*" element={<LoginPage/>}/>
                        </>
                    )
                }

            </Routes>
        </>
    )
}


