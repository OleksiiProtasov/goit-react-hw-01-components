import "./App.css";
import React from "react";
import Container from "./components/container/Container";

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
    <Container>
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
    </Container>
    <Container>
      <TransactionHistory cashItems={transactions} />
    </Container>
  </>
);

export default App;
