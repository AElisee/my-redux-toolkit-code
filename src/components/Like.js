import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addLike } from "../feature/posts.slice";
import { addUserLike } from "../feature/user.slice";

const Like = ({ post }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.users);

  const handleLike = () => {
    const postData = {
      title: post.title,
      author: post.author,
      content: post.content,
      likes: post.likes + 1,
      id: post.id,
    };

    const userData = {
      pseudo: user[0].pseudo,
      likes: user[0].likes + 1,
      id: user[0].id,
    };

    axios({
      method: "put",
      url: `http://localhost:5005/posts/${postData.id}`,
      data: { ...postData },
    }).then(() => {
      dispatch(addLike(postData));
    });

    axios({
      method: "put",
      url: `http://localhost:5005/users/${userData.id}`,
      data: { ...userData },
    }).then(() => {
      dispatch(addUserLike(userData));
    });
  };
  return (
    <div style={{ cursor: "pointer" }} onClick={handleLike}>
      <img src="./icons/clap.png" className="clap" alt="clap" />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
