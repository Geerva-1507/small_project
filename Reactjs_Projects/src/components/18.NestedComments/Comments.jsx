import React, { useState } from "react";
import "./nested.css";

function Comment({ comment, key, handleAddReply }) {

  const [reply, setReply] = useState("");
  const [showReplyCommentBox, setShowReplyCommentBox] = useState(false);

  return (
    <li key={key}>
      {comment.content}
      {!showReplyCommentBox ? (
        <button onClick={() => setShowReplyCommentBox(true)}> Add Reply</button>
      ) : null}
      {showReplyCommentBox ? (
        <div>
          <textarea
            rows={"2"}
            cols={"20"}
            onChange={(e) => setReply(e.target.value)}
            value={reply}
          />
          <br />
          <div className="reply-buttons-container">
            <button onClick={() => {handleAddReply(comment.id, reply);  setShowReplyCommentBox(false); setReply("");}}>Submit</button>
            <button
              onClick={() => {
                setShowReplyCommentBox(false);
                setReply("");
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : null}
      {comment && comment.replies && comment.replies.length > 0 ? (
        <ul>
          {comment.replies.map((childComment) => (
            <Comment handleAddReply={handleAddReply} comment={childComment} key={childComment.id} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export default Comment;
