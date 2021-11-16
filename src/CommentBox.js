import { clone, cloneDeep } from "lodash";
import React from "react";
import DisplayComments from "./DisplayComments";
import ReplyBox from "./ReplyBox";

const CommentBox = (props) => {
    const { commentsData, updateData , level} = props;
    // const childLevel = clone(level);
    // const displayData = cloneDeep(commentsData);

    const getStyle = (level, isChildren) => {
        const leftPadding = level===0? 5: 20*level;
        return {
            paddingLeft: `${leftPadding}px`,
            paddingRight: '20px',
            paddingTop: '10px',
            paddingBottom: '10px'
        }
    }
    console.log('CommentBox: ', commentsData);
    console.log("CommentBox level:", level);

    return (
        commentsData.map(commentObj => {
            
            const {_id: commentId, comment: commentText} = commentObj;
            console.log("comments : ",commentText);
            console.log("level:", level);
            const isChildren = level >0;
            const hasChildren = commentObj.children && commentObj.children.length>0;
            if(commentObj.hasChildren){
                commentObj.showComments = commentObj.showComments === undefined? false : commentObj.showComments;
            }
            const showHideVal = commentObj.showComments ? "Hide Comments": "Show Comments";

            const handleShowHide = () => {
                const value = !commentObj.showComments;
                updateData(commentObj._id, "showComments", value);
            }

            const handleReply = (value) => {
                // const value = event.target.value;
                updateData(commentObj._id, "reply", value);
            }
            
            return(
                <div key={commentId} style = {getStyle(level, isChildren)}>
                    <div className = "comment-box-wrapper">
                        <span className= "comment-box">
                            {commentText}
                        </span>
                        <div className="comment-actions">
                            <ReplyBox handleReply={handleReply} commentId={commentId}/>
                            {
                                hasChildren && (
                                    <button id="button" value="showhide" onClick={handleShowHide}>{showHideVal}</button>
                                )
                            }
                        </div>
                    </div>
                    {
                        hasChildren && commentObj.showComments && (
                            <div className ={`children ${commentId}`} >
                                <DisplayComments commentsData = {commentObj.children} level={level+1} updateData={updateData}/>
                            </div>
                        )
                    }
                </div>
            )
        })
    )
}

export default CommentBox;