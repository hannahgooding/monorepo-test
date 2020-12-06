const postsModel = require("../model/posts-model");

function getAllPostsHandler(req, res, next) {
  postsModel
    .getAllPosts()
    .then((allPosts) => {
      res.send(allPosts);
    })
    .catch(next);
}

function addPostHandler(req, res, next) {
  postsModel
    .addPost()
}

module.exports = { getAllPostsHandler, addPostHandler };
