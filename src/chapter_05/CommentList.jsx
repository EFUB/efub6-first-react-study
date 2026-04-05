import React from "react";
import { Comment } from "./Comment";

console.log("가져온 Comment의 정체:", Comment);

function CommentList(props){
    return(
        <div>
            <Comment />
        </div>
    );
}

export default CommentList;