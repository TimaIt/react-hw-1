import React from "react";
import "./Friend.css";
import friend from "../../friend.json";

function Friends({ avatar, name, isOnline, id }) {
  return (
    <>
      <ul className="friend-list">
        {friend.map((item) => (
          <li className="friend-item" key={item.id}>
            <div className={!item.isOnline ? "red" : "green"}></div>
            <img
              className="friend-avatar"
              src={item.avatar}
              alt="#"
              width="90"
              height="120"
            />
            <p className="friend-name">{item.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Friends;
