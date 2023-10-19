import React from "react";
import Header from "../../component/Header";
import PostList from "../../component/PostList";
import Footer from "../../component/Footer";

export default function Posts(){
    return (
        <>
            <Header/>
            <PostList hasNavigation={false}/>
            <Footer/>
        </>
    )
}