import React, { useState } from "react";
import "./nested.css";
import Comment from "./Comments";

function NestedComments() {
  const [inputValue, setInputValue] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      content: "This is the first comment",
      replies: [
        {
          id: 2,
          content: "This is the first reply",
          replies: [
            {
              id: 3,
              content: "This is the first nested reply",
              replies: [],
            },
          ],
        },
        {
          id: 4,
          content: "This is the second reply",
          replies: [],
        },
        {
          id: 5,
          content: "This is the third reply",
          replies: [],
        },
      ],
    },
  ]);

  function handleAddReply(getCurrentParentId, getCurrentReply) {
    console.log(getCurrentParentId, getCurrentReply);

    let updatedComments = [...comments];
    handleAddNewComment(updatedComments, getCurrentParentId, getCurrentReply);
    setComments(updatedComments);
  }

  function newComment(text) {
    return {
      id: new Date().getTime(),
      content: text,
      replies: [],
    };
  }

  function handleAddNewComment(
    updatedComments,
    getCurrentParentId,
    getCurrentReply
  ) {
    for (let i = 0; i < updatedComments.length; i++) {
      let comment = updatedComments[i];
      if (comment.id === getCurrentParentId) {
        comment.replies.unshift(newComment(getCurrentReply));
      }
    }

    for (let i = 0; i < updatedComments.length; i++) {
      let comment = updatedComments[i];
      handleAddNewComment(comment.replies, getCurrentParentId, getCurrentReply);
    }
  }

  console.log(comments);

  return (
    <div className="nested-comments-container">
      <h1>Nested Comments</h1>
      <div className="comment-wrapper">
        <textarea
          onChange={(e) => setInputValue(e.target.value)}
          cols={"100"}
          rows={"5"}
          value={inputValue}
        />
        <br />
        <button
          className="add-comment-btn"
          onClick={() => {
            setComments([...comments, newComment(inputValue)]);
            setInputValue("");
          }}
          
        >
          Add Comment
        </button>
      </div>
      <ul>
        {comments.map((comment) => (
          <Comment
            handleAddReply={handleAddReply}
            comment={comment}
            key={comment.id}
          />
        ))}
      </ul>
    </div>
  );
}
export default NestedComments;
