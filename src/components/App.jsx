import BoxTitle from "components/BoxTitle/BoxTitle";
import user from 'assets/users.json'
import Profile from 'components/Profile/Profile'
import Statistics from "./Statistics/Statistics";
import data from 'assets/data.json';
import friends from 'assets/friends.json';
import FriendsList from "./FriendsList/FriendsList";
import transactions from 'assets/transactions.json'
import TransactionsHistory from "./TransactionsHistory/TransactionsHistory";


export const App = () => {
  return (
  <div class='boxProfile'>  
    <BoxTitle title = "Profile" />
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <BoxTitle title="Statistics" />
      <Statistics title="Upload stats" data={data} />
      <BoxTitle title="Friends list" />
      <FriendsList friends={friends} />
      <BoxTitle title="Transactions history" />
      <TransactionsHistory items={transactions} />
  </div>
  );
};
