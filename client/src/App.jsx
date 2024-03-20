import axios from "axios";
import { useEffect, useState } from "react";
import "./app.css";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const response = await axios.get("http://localhost:4000/posts");
    setPosts(response.data);
  };

  const addPost = (newPost) => {
    setPosts({ ...posts, [newPost.id]: newPost });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Post List</h1>
      <PostForm addPost={addPost} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
