import React, {useContext, useState} from 'react';
import { collection, addDoc } from "firebase/firestore";
import {db} from "firebaseApp"
import AuthContext from "context/AuthContext";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const PostForm = () => {
    const [title, setTitle] = useState<string>('')
    const [summary, setSummary] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const onsubmit = async (e:React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();

        try {
            //firestore로 데이터 생성
            await addDoc(collection(db,"posts"),{
                title : title,
                summary : summary,
                content  : content,
                createAt : new Date()?.toLocaleDateString(),
                email : user?.email,
            })
            navigate("/");
            toast.success("게시글을 성공했습니다.")
        }catch (e:any) {
            console.log(e);
            toast.error(e?.code)
        }
    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {target: {name, value}} = e

        if (name==='title'){
            setTitle(value)
        }
        if (name==='summary'){
            setSummary(value)
        }
        if (name==='content'){
            setContent(value)
        }

    }
    return (
        <form onSubmit={onsubmit} className="form">
            <div className="form__block">
                <label htmlFor="title">제목</label>
                <input type="text" name="title" id="title" required onChange={onChange} value={title}/>
            </div>
            <div className="form__block">
                <label htmlFor="summary">요약</label>
                <input type="text" name="summary" id="summary" required onChange={onChange} value={summary}/>
            </div>
            <div className="form__block">
                <label htmlFor="content">내용</label>
                <textarea name="content" id="content" required onChange={onChange} value={content}/>
            </div>
            <div className="form__block">
                <input type="submit" value="제출" className="form__btn--submit"/>
            </div>
        </form>

    );
};

export default PostForm;