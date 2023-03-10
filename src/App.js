import Profile from "./components/profile/Profile";
import Statistics from "./components/statistics/Statistcs";
import FriendList from "./components/friends/Friends";
import user from "./user.json";
import data from "./data.json";
import friends from "./friend.json";

function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />;
      <FriendList friends={friends} />,
    </div>
  );
}

export default App;
