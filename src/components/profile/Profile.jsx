import React from "react";
import "./Profile.css";

const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className="profile">
    <div className="description">
      <img src={avatar} alt="user avatar" className="avatar" />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">
          Followers
          <img src={stats.tick} alt="user tick" className="imgStats" />
        </span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li>
        <span className="label">
          Views
          <img src={stats.eye} alt="user eye" className="imgStats" />
        </span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li>
        <span className="label">
          Likes
          <img src={stats.heart} alt="user tick" className="imgStats" />
        </span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);
export default Profile;
