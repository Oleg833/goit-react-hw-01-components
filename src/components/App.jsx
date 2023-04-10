import BoxTitle from "components/BoxTitle/BoxTitle";
import user from 'assets/users.json'
import Profile from 'components/Profile/Profile'
import Statistics from "./Statistics/Statistics";
import data from 'assets/data.json'

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
      <BoxTitle title="Transactions history" />
      
  </div>
  );
};
