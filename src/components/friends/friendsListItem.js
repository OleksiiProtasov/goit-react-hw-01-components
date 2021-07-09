import React from "react";
import defLogo from "../userCard/defAva.jpg";

const FriendItem = ({ avatar, name, isOnline, id }) => (
  <li key={id}>
    <span>{isOnline}</span>
    <img src={avatar} alt={name} />
    <p>{name}</p>
  </li>
);

FriendItem.defaultProps = {
  avatar: defLogo,
};

export default FriendItem;
