import React, {useState} from 'react';
import {Link} from "react-router-dom";

const SignupForm = () => {
    const [error,setError] = useState<String>("")
    const [email, setEmail] = useState<String>("")
    const [password, setPassword] = useState<String>("")
    const [passwordConfirm, setPasswordConfirm] = useState<String>("")

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: {name, value},
        } = e;
        if (name === 'email') {
            setEmail(value)
            const validRegex =
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            if (!value?.match(validRegex)) {
                setError("이메일 형식이 올바르지 않습니다.");
            } else {
                setError("");
            }
        }
        if (name === 'password') {

        }
        if (name === 'passwordConfirm') {

        }
    }
    return (
        <form action="/post" method="POST" className="form form--lg">
            <h1 className="form__title">회원가입</h1>
            <div className="form__block">
                <label htmlFor="email">이메일</label>
                <input type="email" name="email" id="email" required onChange={onChange}/>
            </div>
            <div className="form__block">
                <label htmlFor="password">비밀번호</label>
                <input type="password" name="password" id="password" required/>
            </div>
            <div className="form__block">
                <label htmlFor="password_confirm">비밀번호 확인</label>
                <input type="password" name="password_confirm" id="password_confirm" required/>
            </div>
            <div className="form__block">
                계정이 이미 있으신가요? <Link to="/login" className="form__link">로그인하기</Link>
            </div>
            <div className="form__block">
                <input type="submit" value="회원가입" className="form__btn--submit"/>
            </div>
        </form>
    );
};

export default SignupForm;

