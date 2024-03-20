//create express app setup for index.js
const express = require("express");
const router = express.Router();
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const commentsByPostId = {};
const app = express();
const cors = require("cors");
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
    credentials: true,
  })
);
app.use("/", router);

router.get("/", (req, res) => {
  res.send("Hello from comments service");
});

//get back all the comments
router.get("/posts/:id/comments", async (req, res) => {
  try {
    res.json(commentsByPostId[req.params.id] || []);
  } catch (err) {
    res.json({ message: err });
  }
});

//submit a comment
router.post("/posts/:id/comments", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { content } = req.body;
  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ id, content });
  commentsByPostId[req.params.id] = comments;
  res.status(201).json(comments);
});

app.listen(4001, () => console.log("Server is running on 4001 port..."));
