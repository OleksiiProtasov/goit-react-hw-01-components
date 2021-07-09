import React from "react";

const TableItem = ({ id, type, amount, currency }) => (
  <tbody key={id}>
    <tr key={id}>
      <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </tr>
  </tbody>
);

export default TableItem;
