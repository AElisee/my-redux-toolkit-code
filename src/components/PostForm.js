import React, { useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../feature/posts.slice";

const PostForm = ({ getpostsData }) => {
  const formRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.users);

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      title: titleRef.current.value,
      author: user[0].pseudo,
      content: contentRef.current.value,
      likes: 0,
    };

    axios
      .post("http://localhost:5005/posts", postData)
      .then(() => {
        dispatch(addPost(postData));
        formRef.current.reset();
      })
      .then(() => {
        dispatch(getpostsData());
      });
  };
  return (
    <div className="form-container">
      <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
        <input type="text" placeholder="Titre du poste" ref={titleRef} />
        <textarea
          placeholder="Postez vos pensées..."
          ref={contentRef}
        ></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;
