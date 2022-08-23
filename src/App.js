import React, { useEffect } from "react";
import PostForm from "./components/PostForm";
import User from "./components/User";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setpostsData } from "./feature/posts.slice";
import Post from "./components/Post";
import { setusersData } from "./feature/user.slice";

const App = () => {
  const dispatch = useDispatch();
  const postsData = useSelector((state) => state.posts.posts);

  const getpostsData = async () => {
    await axios
      .get("http://localhost:5005/posts?_sort=id&_order=desc")
      .then((res) => dispatch(setpostsData(res.data)));
  };

  useEffect(() => {
    getpostsData();
  }, []);

  useEffect(async () => {
    await axios
      .get("http://localhost:5005/users")
      .then((res) => dispatch(setusersData(res.data)));
  }, []);

  return (
    <div>
      <h1>Extreme</h1>
      <PostForm getpostsData={getpostsData} />
      <div className="content">
        <div className="post-container">
          {postsData &&
            postsData.map((post, index) => <Post key={index} post={post} />)}
        </div>
        <User />
      </div>
    </div>
  );
};

export default App;
