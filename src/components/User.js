import React from "react";
import { isEmpty } from "./Utils";
import { useSelector } from "react-redux";

const User = () => {
  const user = useSelector((state) => state.users.users) || [];
  return (
    <div className="user-container">
      <div className="user">
        <h3>userPseudo</h3>
        <img src="https://thispersondoesnotexist.com/image" alt="" />
        <p>Age : 35 ans</p>
        <p>Like(s) : {!isEmpty(user[0]) && user[0].likes}</p>
      </div>
    </div>
  );
};

export default User;
