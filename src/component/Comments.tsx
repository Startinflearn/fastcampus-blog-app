import React, {useState} from 'react';

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
const Comments = () => {
    const [comment, setComment] = useState<string>("")

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {target: {name, value}} = e

        if (name === 'comment') {
            setComment(value);
        }
    }
    return (
        <div className="comments">
            <form className="comments__form">
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