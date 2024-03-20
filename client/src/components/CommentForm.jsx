import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";

function CommentForm({ postId, addComment }) {
  const [comment, setComment] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      `http://localhost:4001/posts/${postId}/comments`,
      {
        content: comment,
      }
    );
    addComment(response.data);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment"
        className="comment-input"
      />
      <button type="submit" className="comment-button">
        Add Comment
      </button>
    </form>
  );
}

export default CommentForm;

CommentForm.propTypes = {
  postId: PropTypes.string.isRequired,
  addComment: PropTypes.func.isRequired,
};
