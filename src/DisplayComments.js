import CommentBox from "./CommentBox";


const DisplayComments = (props) => {
    const { commentsData, level , updateData} = props;
    console.log('Display Comments: Data:' , commentsData);
    return (
        <div className ="comments-box-container">
            <CommentBox commentsData={commentsData} level={level} updateData={updateData}/>
        </div>
    )    
}

export default DisplayComments;