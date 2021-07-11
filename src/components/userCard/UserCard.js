import React from "react";
import PropTypes from "prop-types";
import defLogo from "./defAva.jpg";
import style from "../userCard/userCardStyle.module.css";

export const UserCard = ({ name, tag, location, avatar, stats }) => (
  <>
    <div className={style.block}>
      <div className={style.blockBig}>
        <img className={style.img} src={avatar} alt="Аватар пользователя" />
        <h3>{name} </h3>
        <p className={style.p}>@{tag} </p>
        <p className={style.p}>{location} </p>
      </div>
      <ul className={style.userStats}>
        <li className={style.StatItem}>
          <span className={style.titleItem}>followers:</span>
          <span>{stats.followers}</span>
        </li>
        <li className={style.StatItem}>
          <span className={style.titleItem}>Views:</span>
          <span>{stats.views}</span>
        </li>
        <li className={style.StatItem}>
          <span className={style.titleItem}>Likes:</span>
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
