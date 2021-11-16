import React, {useState} from "react";
import { cloneDeep } from "lodash";
import DisplayComments from "./DisplayComments";
import { makeid } from "./Util";

const getUpdatedComments = (modifiedData, id, type, value) => {
    modifiedData.forEach(commentObj =>{
        if(commentObj._id === id){
            if(type === 'showComments'){
                commentObj.showComments = value;
                return;
            }
            else if(type === "reply") {
                const newComment = {
                    _id: makeid(10),
                    comment: value
                }
                commentObj.children.push(newComment);
                commentObj.showComments = true;
            }
        }
        else if(commentObj.children && commentObj.children.length>0){
            getUpdatedComments(commentObj.children, id, type, value);
        }
    })
} 

const CommentContainer = (props) => {
    const { data } = props;
    const [commentsData, setCommentsData] = useState(data);
    
    const handleUpdateData = (id, type, value) => {
        let modifiedData = cloneDeep(commentsData);
        getUpdatedComments(modifiedData, id, type, value);
        setCommentsData(modifiedData);
    }
    console.log('CommentContainer: data: ', commentsData);
 
    return (
        <div className ="comments-box-container">
            <DisplayComments commentsData={commentsData} level={0} updateData={handleUpdateData}/>
        </div>
    )    
}

export default CommentContainer;