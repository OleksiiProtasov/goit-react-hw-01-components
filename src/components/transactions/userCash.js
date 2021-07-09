import React from "react";
import PropTypes from "prop-types";
import UCI from "./UserCashItem";

const Transaction = ({ cashItems }) => (
  <table>
    <thead>
      <tr>
        <th>"Type"</th>
        <th>"Amount"</th>
        <th>"Currency"</th>
      </tr>
    </thead>
    {cashItems.map((item) => (
      <UCI type={item.type} amount={item.amount} currency={item.currency} />
    ))}
  </table>
);

Transaction.prototTypes = {
  UCI: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ),
};

export default Transaction;
