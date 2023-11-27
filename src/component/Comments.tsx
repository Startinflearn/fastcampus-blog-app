import React, {useContext, useState} from 'react';
import {PostProps} from "component/PostList";
import {doc, updateDoc, arrayUnion} from "firebase/firestore";
import {db} from "firebaseApp";
import AuthContext from "context/AuthContext";
import {toast} from "react-toastify";

const COMENTS = [
    {
        id: 1,
        email : 'test@test.com',
        content : "댓글입니다1",
        createAt : "2023-07-13"
    },
    {
        id: 2,
        email : 'test@test2.com',
        content : "댓글입니다2",
        createAt : "2023-07-14"
    },
    {
        id: 3,
        email : 'test@test3.com',
        content : "댓글입니다3",
        createAt : "2023-07-15"
    },
    {
        id: 4,
        email : 'test@test4.com',
        content : "댓글입니다4",
        createAt : "2023-07-17"
    },
]

interface CommentsProps {
    post :PostProps
}
const Comments = ({post} : CommentsProps) => {
    const [comment, setComment] = useState<string>("")
    const {user} =useContext(AuthContext)
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('test')
        try {
            if(post && post?.id){
                const postRef = doc(db,"posts",post.id)
                if(user?.uid){
                    const commentObj ={
                        content : comment,
                        uid : user.uid,
                        email : user.email,
                        createdAt: new Date()?.toLocaleDateString("ko",{
                            hour : "2-digit",
                            minute : "2-digit",
                            second : "2-digit"
                        }),
                    }

                    await updateDoc(postRef, {
                        comments: arrayUnion(commentObj),
                        updateDated : new Date()?.toLocaleDateString("ko",{
                            hour : "2-digit",
                            minute : "2-digit",
                            second : "2-digit"
                        }),
                    })
                }
            }
            toast.success("댓글을 생성했습니다.")
            setComment("")
        }catch (e :any){
            console.log(e)
            toast.error(e)
        }
    }
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {target: {name, value}} = e
        if (name === 'comment') {
            setComment(value);
        }
    }
    return (
        <div className="comments">
            <form className="comments__form" onSubmit={onSubmit}>
                <div className="form__block">
                    <label htmlFor="comment">댓글입력</label>
                    <textarea name="comment" id="comment" required value={comment} onChange={onChange}/>
                </div>
            </form>
            <div className="form__block form__block-reverse">
                <input type="submit" value="입력" className="form__btn--submit"/>
            </div>
            <div className="comments__list">
                {COMENTS?.map((comment) => (
                    <div key={comment.id} className="comment__box">
                        <div className="comment__profile-box">
                            <div className="comment__email">{comment?.email}</div>
                            <div className="comment__date">{comment?.createAt}</div>
                            <div className="comment__delete">삭제</div>
                        </div>
                        <div className="comment__text">
                            {comment?.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comments;