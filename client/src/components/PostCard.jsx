import PropTypes from "prop-types";
import { useState } from "react";
import CommentForm from "./CommentForm";

function PostCard({ post }) {
  const [comments, setComments] = useState({}); // Comments state is now an object

  const addComment = async (allComment) => {
    setComments(allComment); // Add new comment to comments state
    console.log(comments);
  };

  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <CommentForm postId={post.id} addComment={addComment} />
      <div className="comment-list">
        {/* Iterate over keys of comments object and display each comment */}
        {Object.keys(comments).map((commentId) => (
          <div key={commentId} className="comment-item">
            <p>{comments[commentId].content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostCard;

// Props validation
PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};
