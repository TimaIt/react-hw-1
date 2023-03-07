import Profile from "./components/profile/Profile";
import Statistics from "./components/statistika/Statistika";
import data from "./data.json";
import user from "./user.json";

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
    </div>
  );
}

export default App;
