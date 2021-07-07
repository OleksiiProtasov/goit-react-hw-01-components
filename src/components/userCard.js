import React from "react";
import PropTypes from "prop-types";
import defLogo from "../img/defAva.jpg";

const userCard = ({ name, tag, location, avatar, stats }) => (
  <div>
    <div>
      <img src={avatar} alt="Аватар пользователя" />
      <p>{name} </p>
      <p>{tag} </p>
      <p>{location} </p>
    </div>
    <ul>
      {Object.entries(stats).map((stat) => (
        <li key={stat}>{stats}</li>
      ))}
    </ul>
  </div>
);

userCard.defaultProps = {
  avatar: defLogo,
};

userCard.prototTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default userCard;
