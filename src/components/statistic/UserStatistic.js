import React from "react";
import PropTypes from "prop-types";
import style from "../statistic/statisticStyle.module.css";

const UserStatistic = ({ title, statistic }) => (
  <section className={style.statBlock}>
    {title && <h2 className="statistics-title">{title}</h2>}
    <div>
      <ul className={style.ulBlock}>
        {statistic.map(({ id, label, percentage }) => (
          <li className={style.liBlock} key={id}>
            <span className={style.label}>{label}</span>
            <span className={style.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

UserStatistic.prototTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default UserStatistic;
