import { cloneDeep } from "lodash";
import React from "react";
import { useState } from "react";
import DisplayComments from "./DisplayComments";

const CommentBox = (props) => {
    const { commentsData, updateData , level} = props;

    const getStyle = (level, isChildren) => {
        const leftPadding = level===0? 5: 10*level;
        return {
            paddingLeft: `${leftPadding}px`,
            paddingRight: '20px',
            paddingTop: '10px',
            paddingBottom: '10px',
            // border: isChildren? '1px solid blue': 'none'
        }
    }
    console.log("level:", level);

    return (
        commentsData.map(commentObj => {
            
            const {_id: commentId, comment: commentText} = commentObj;
            
            const isChildren = level >0;
            const hasChildren = commentObj.children && commentObj.children.length>0;
            if(commentObj.hasChildren){
                commentObj.showComments = commentObj.showComments === undefined? false : commentObj.showComments;
            }
            const showHideVal = commentObj.showComments ? "Hide Comments": "Show Comments";

            const handleShowHide = () => {
                updateData(commentObj._id, "showComments", !commentObj.showComments);
            }
            
            return(
                <div key={commentId} style = {getStyle(level, isChildren)}>
                    <div className = "comment-box-wrapper">
                        <span className= "comment-box">
                            {commentText}
                        </span>
                        {
                            hasChildren && (
                                <button id="button" value="showhide" onClick={handleShowHide}>{showHideVal}</button>
                            )
                        }
                    </div>
                    {
                        hasChildren && commentObj.showComments && (
                            <div className ={`children ${commentId}`} >
                                <DisplayComments commentsData = {commentObj.children} level={level+1}/>
                            </div>
                        )
                    }
                </div>
            )
        })
    )
}

export default CommentBox;