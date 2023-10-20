import React from "react";
import Profile from "component/Profile";
import Header from "component/Header";
import Footer from "component/Footer";
import PostList from "component/PostList";

export default function ProfilePage(){
    return <>
        <Header/>
        <Profile/>
        <PostList hasNavigation={false}/>
        <Footer/>
        </>
}