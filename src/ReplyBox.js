import { useState } from "react";

const ReplyBox = (props) => {
    const {commentId, handleReply} = props;
    const [showTextArea, setShowTextArea] = useState(false);
    const [replyText, setReplyText] = useState('');

    const handleReplyBtn = () => {
        const val = !showTextArea;
        setShowTextArea(val);
    }

    const postReply =(event)=>{
        const val = event.target.value;
        setReplyText(val);
        // handleReply(val);
    }
    const updateReply = () => {
        handleReply(replyText);
        setReplyText('');
    }

    return (
        <span className={`${commentId}-reply`}>
            { !showTextArea && <span id="button" className="btn-reply" value="reply" onClick={handleReplyBtn}>Reply</span>}
            { showTextArea && <input type="text" value={replyText} className="reply-text-input" onChange={(e)=>postReply(e)}/>}
            { showTextArea && <span id="button" className="btn-reply-submit" value="submit" onClick={updateReply}>Post</span>}
        </span>
    )
}

export default ReplyBox;