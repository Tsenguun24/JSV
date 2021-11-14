import Container from "./Container";
import Card from "./Card";
import Input from "./Input";
import Form from "./Form";
import Button from "./Button";
import { useState } from "react";
import Divider from "./Divider";
import Article from "./Article";

const App = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [post, setPost] = useState([]);
  const [userId, setUserId] = useState(null);
  const submitHandler = (e) => {
    e.preventDefault();
    setPost([
      ...post,
      {
        title: title,
        content: content,
        id: Math.random().toString().split(".")[1],
      },
    ]);
    resetForm();
  };
  const seePost = (id) => {
    const currentPost = post.find((user) => user.id === id);
    setTitle(currentPost.title);
    setContent(currentPost.content);
  };
  const resetForm = () => {
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
  };
  const deletePost = (id) => {
    setPost(post.filter((user) => user.id !== id));
  };
  const getData = (id) => {
    const clickedPost = post.find((user) => user.id === id);
    console.log(clickedPost);
  };
  return (
    <Container>
      <Card>
        <Form onSubmit={submitHandler}>
          <Input
            placeholder="Title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            id="title"
          />
          <Input
            placeholder="content"
            type="text"
            onChange={(e) => setContent(e.target.value)}
            id="content"
          />
          <Button val="nemeh" />
        </Form>
      </Card>
      <Divider />
      <Article
        title={title}
        content={content}
        getAdat={getData}
        deleteData={deletePost}
        onClick={seePost}
        data={post}
      />
    </Container>
  );
};
export default App;
