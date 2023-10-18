import React from "react";

export default function PostDetail() {
    return <>
        <div className="post__detail">
            <div className="post__box">
                <div className="post__title">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                </div>
                <div className="post__profile-box">
                    <div className="post__profile"/>
                    <div className="post__author-name">패스트캠퍼스</div>
                    <div className="post__date">2023.07.08 토요일</div>
                </div>
                <div className="post__utils-box">
                    <div className="post__delete">삭제</div>
                    <div className="post__edit">수정</div>
                </div>
                <div className="post_text">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum."
                </div>
            </div>
        </div>
    </>
}