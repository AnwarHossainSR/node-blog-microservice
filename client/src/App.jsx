import axios from "axios";
import { useState } from "react";
import "./app.css";

function App() {
  const [posts, setPosts] = useState([]);

  const [title, setTitle] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post("http://localhost:4000/posts", {
      title,
    });
    setPosts([...posts, response.data]);
    setTitle("");
  };

  return (
    <div>
      <h1>Post List</h1>
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
      <div className="post-container">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <h2>{post.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
