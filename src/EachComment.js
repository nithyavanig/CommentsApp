

const EachComment = (props) => {
    const { hasChildren } = props;
    return (
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
    )
}