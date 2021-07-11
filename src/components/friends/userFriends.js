import React from "react";
import PropTypes from "prop-types";
import FriendItem from "./friendsListItem";
// import style from "./styleFriend.module.css";

const UserFriends = ({ dataFriends }) => (
  <ul>
    {dataFriends.map((friend) => (
      <FriendItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

UserFriends.prototTypes = {
  dataFriends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default UserFriends;
