import "./App.css";

import userCardInf from "./task/userCard.json";
import userPanel from "./components/userCard";

// import userStat from './task/statistical-data.json';

// import userFriend from './task/friends.json';

// import userBuys from './task/transactions.json';

function App() {
  return (
    <userPanel>
      name={userCardInf.name}
      tag={userCardInf.tag}
      location={userCardInf.location}
      avatar={userCardInf.avatar}
      stats={userCardInf.stats}
    </userPanel>
    /* <statistic title='Upload Stars' stats='userStat'/> */
    /* <friends>
        friends='userFriend'
      </friends>
      <buys>
        buys='userBuys'
      </buys> */
  );
}

export default App;
