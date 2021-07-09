// import "./App.css";
import React from "react";

import { name, tag, location, avatar, stats } from "./data/userCard.json";
import { UserCard } from "./components/userCard/UserCard";

import userStat from "./data/statistical-data.json";
import UserStatistic from "./components/statistic/UserStatistic";

import userFriend from "./data/friends.json";
import UserFriends from "./components/friends/userFriends";

import transactions from "./data/transactions.json";
import TransactionHistory from "./components/transactions/userCash";

const App = () => (
  <>
    <UserCard
      avatar={avatar}
      name={name}
      alt={name}
      tag={tag}
      location={location}
      stats={stats}
    />
    <UserStatistic title="Upload stats" statistic={userStat} />
    <UserFriends dataFriends={userFriend} />
    <TransactionHistory cashItems={transactions} />;
  </>
);

export default App;
