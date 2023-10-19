import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import PostList from "../../component/PostList";
export default function Home() {
    return (
        <div>
            <Header/>

            <PostList/>
            <Footer/>
        </div>
    )
}