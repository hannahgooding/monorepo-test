const dbconnection = require("../database/connection");
const build = require("../database/build");
const postsModel = require("../model/posts-model");

describe("Database tests for posts", () => {
  beforeEach(() => {
    build();
  });

  test("Can get all posts", async () => {
    await postsModel.getAllPosts().then((posts) => {
      expect(posts[0].text_content).toEqual(
        "how to build a mechanical computer"
      );
    });
  });

  test("Can add new post", async () => {
    await postsModel.addPost().then((posts) => {
      const latestPost = posts[posts.length-1];
      expect(latestPost.text_content).toEqual(
        "how to build a mechanical computer"
      );
    });
  });
});

afterAll(() => {
  console.log("End of testing for Database");
  return dbconnection.end();
});
