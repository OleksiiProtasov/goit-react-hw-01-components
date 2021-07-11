import React from "react";
import style from "../transactions/userTransactions.module.css";

const TableItem = ({ id, type, amount, currency }) => (
  <tbody className={style.tbodyList}>
    <tr key={id} className={style.trList}>
      <th className={style.thList}>{type}</th>
      <th className={style.thList}>{amount}</th>
      <th className={style.thList}>{currency}</th>
    </tr>
  </tbody>
);

export default TableItem;
