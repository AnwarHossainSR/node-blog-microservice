import { useState } from "react";
import "./app.css";
function App() {
  // State to hold the list of posts
  const [posts, setPosts] = useState([]);

  // State to hold the title of the new post
  const [title, setTitle] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add new post to the list
    setPosts([...posts, { id: posts.length + 1, title }]);
    // Clear the title field
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
        <button type="submit" className="submit-button">Add Post</button>
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
