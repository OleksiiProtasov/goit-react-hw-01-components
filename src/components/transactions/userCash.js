import React from "react";
import PropTypes from "prop-types";
import UCI from "./UserCashItem";
import style from "../transactions/userTransactions.module.css";

const Transaction = ({ cashItems }) => (
  <table>
    <thead>
      <tr>
        <th className={style.th}>Type</th>
        <th className={style.th}>Amount</th>
        <th className={style.th}>Currency</th>
      </tr>
    </thead>
    {cashItems.map((item) => (
      <UCI type={item.type} amount={item.amount} currency={item.currency} />
    ))}
  </table>
);

Transaction.prototTypes = {
  cashItems: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ),
};

export default Transaction;
