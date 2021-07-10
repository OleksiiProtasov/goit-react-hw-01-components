import React from "react";
import defLogo from "../userCard/defAva.jpg";
import style from "./styleFriend.module.css";

const FriendItem = ({ avatar, name, isOnline, id }) => (
  <li key={id}>
    <span>{isOnline}</span>
    <img className={style.img} src={avatar} alt={name} />
    <p>{name}</p>
  </li>
);

FriendItem.defaultProps = {
  avatar: defLogo,
};

export default FriendItem;
