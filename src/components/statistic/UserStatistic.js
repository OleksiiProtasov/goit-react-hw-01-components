import React from "react";
import PropTypes from "prop-types";

const UserStatistic = ({ title, statistic }) => (
  <section>
    {title && <h2 className="statistics-title">{title}</h2>}
    <div>
      <ul>
        {statistic.map(({ id, label, percentage }) => (
          <li key={id}>
            <span>{label}</span>
            <span>{percentage}</span>
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
