import PostData1 from "./post1.json";
import PostData2 from "./post2.json";
import Post from "../../data/models/Post";

describe("create my postmen", () => {
  // Louis
  it("create post1", () => {
    const post = new Post(PostData1);
    expect(post.id).toEqual(4);
    expect(post.description).toEqual(
      "Je suis comme un lieu de récepetion de colis."
    );
    expect(post.contact).toEqual("contact@sanc+.am");
  });

  // Julien
  it("create post2", () => {
    const post = new Post(PostData2);
    expect(post.id).toEqual(3);
    expect(post.description).toEqual(
      "Je suis comme un lieu de récepetion de colis."
    );
    expect(post.contact).toEqual("contact@sanc+.am");
  });
});
