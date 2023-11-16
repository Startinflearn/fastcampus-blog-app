import {Link} from "react-router-dom";

import React, {useContext, useEffect, useState} from "react";
import {collection, deleteDoc, doc, getDocs,query, orderBy,where} from "firebase/firestore";
import {db} from "firebaseApp";
import AuthContext from "context/AuthContext";
import {toast} from "react-toastify";

interface PostListProps {
    hasNavigation?: boolean,
    defaultTap? : TabType
}

type TabType = "all" | 'my'

export interface PostProps {
    id?: string,
    title: string,
    email: string,
    summary: string,
    content: string,
    createdAt: string,
    updateAt : string,
    uid :string
}

export default function PostList({hasNavigation = true,defaultTap = 'all'}: PostListProps) {
    const [activeTab, setActiveTab] = useState<TabType>(defaultTap);
    const [posts, setPosts] = useState<PostProps[]>([]);
    const {user} = useContext(AuthContext);

    const handleDelete = async ( id: string) => {

        const confirm = window.confirm('해당 게시글을 삭제하시겠습니까?')
        if(confirm && id){
            await deleteDoc(doc(db,"posts",id))
            toast.success('게시글을 삭제했습니다.')
            getPosts();
        }

    }

    const getPosts = async () => {

        setPosts([]);
        let postsRef = collection(db,"posts");
        let postQuery;

        if(activeTab === 'my' && user){
            //나의 글만 필터링
            postQuery = query(postsRef, where('uid','==',user?.uid), orderBy('createdAt','asc'))
        }else {
            //모든 글 보여주기
            postQuery = query(postsRef, orderBy('createdAt','asc'));
        }
        const datas = await getDocs(postQuery);
        datas?.forEach((doc) => {
            const dataObj = {...doc.data(), id: doc.id}
            setPosts((prev) => [...prev, dataObj as PostProps])
        })
    }
    useEffect(() => {
        getPosts()
    }, [activeTab])
    return <>
        {
            hasNavigation && (
                <div className="post__navigation">
                    <div role="presentation" className={activeTab === 'all' ? 'post__navigation--active' : ""}
                         onClick={() => setActiveTab("all")}>전체
                    </div>
                    <div role="presentation" className={activeTab === 'my' ? 'post__navigation--active' : ""}
                         onClick={() => setActiveTab("my")}>나의글
                    </div>
                </div>
            )
        }
        <div className="post__list">
            {
                posts?.length > 0 ? posts.map((post, idx: number) => (
                        <div key={post?.id} className="post__box">
                            <Link to={`/posts/${post?.id}`}>
                                <div className="post__profile-box">
                                    <div className="post__profile"/>
                                    <div className="post__author-name">{post?.email}</div>
                                    <div className="post__date">{post?.createdAt}</div>

                                </div>
                                <div className="post__title">{post?.title}</div>
                                <div className="post_text">{post?.summary}</div>
                            </Link>
                                {post.email === user?.email && (
                                    <div className="post__utils-box">
                                        <div className="post__delete" onClick={() => handleDelete(post?.id as string)}>삭제</div>
                                        <div className="post__edit">
                                            <Link to={`/posts/edit/${post?.id}`}>수정</Link>
                                        </div>
                                    </div>
                                )}

                        </div>
                    ))
                    : <div className="post__no-post">게시글이 없습니다.</div>}
        </div>
    </>
}