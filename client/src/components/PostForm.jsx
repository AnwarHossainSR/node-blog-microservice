import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";

function PostForm({ addPost }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post("http://localhost:4000/posts", {
      title,
    });
    addPost(response.data);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
        className="input-field"
      />
      <button type="submit" className="submit-button">
        Add Post
      </button>
    </form>
  );
}

export default PostForm;

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};
