import React, {useState} from "react";
import { initialData } from "./data";
import CommentBox from "./CommentBox";
import { cloneDeep } from "lodash";

const getUpdatedComments = (modifiedData, id, type, value) => {
    modifiedData.forEach(commentObj =>{
        if(commentObj._id === id){
            if(type === 'showComments'){
                commentObj.showComments = value;
                return;
            }
        }
        else if(commentObj.children && commentObj.children.length>0){
            getUpdatedComments(commentObj.children, id, type, value);
        }
    })
} 

const DisplayComments = (props) => {
    const [commentsData, setCommentsData] = useState(initialData);

    const handleUpdateData = (id, type, value) => {
        let modifiedData = cloneDeep(commentsData);
        getUpdatedComments(modifiedData, id, type, value);
        setCommentsData(modifiedData);
    }
 
    return (
        <div className ="comments-box-container">
            <CommentBox commentsData={commentsData} level={0} updateData={handleUpdateData}/>
        </div>
    )    
}

export default DisplayComments;