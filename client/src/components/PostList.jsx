import PropTypes from "prop-types";
import PostCard from "./PostCard";

function PostList({ posts }) {
  return (
    <div className="post-container">
      {Object.keys(posts).map((postId) => (
        <PostCard key={postId} post={posts[postId]} />
      ))}
    </div>
  );
}

export default PostList;

PostList.propTypes = {
  posts: PropTypes.object.isRequired,
};
