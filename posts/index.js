//create express app setup for index.js
const express = require("express");
const router = express.Router();
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const posts = {};

const app = express();

app.use(bodyParser.json());
app.use("/", router);

router.get("/", (req, res) => {
  res.send("Hello from posts service");
});

//get back all the posts
router.get("/posts", async (req, res) => {
  try {
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//submit a post
router.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = {
    id,
    title,
  };
  res.status(201).json(posts[id]);
});

app.listen(4000, () => console.log("Server is running on 4000 port..."));
