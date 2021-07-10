import React from "react";
import PropTypes from "prop-types";
import defLogo from "./defAva.jpg";
import style from "../userCard/userCardStyle.module.css";

export const UserCard = ({ name, tag, location, avatar, stats }) => (
  <>
    <div className={style.block}>
      <div>
        <img className={style.img} src={avatar} alt="Аватар пользователя" />
        <p>{name} </p>
        <p>{tag} </p>
        <p>{location} </p>
      </div>
      <ul>
        <li className={style.StatItem}>
          <span>followers:</span>
          <span>{stats.followers}</span>
        </li>
        <li className={style.StatItem}>
          <span>Views:</span>
          <span>{stats.views}</span>
        </li>
        <li className={style.StatItem}>
          <span>Likes:</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  </>
);

UserCard.defaultProps = {
  avatar: defLogo,
};

UserCard.prototTypes = {
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
