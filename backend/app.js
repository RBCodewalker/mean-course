const express = require("express");

const app = express();

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "1",
      title: "Server-side Post 1",
      content: "This post is from the server!",
    },
    {
      id: "2",
      title: "Server-side Post 2",
      content: "This post is from the server as well!",
    },
  ];
  res.status(200).json({
    message: "Posts fetched success!",
    posts: posts,
  });
});

module.exports = app;
