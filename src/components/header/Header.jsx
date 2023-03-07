import React from "react";

const Header = ({ name, email, github }) => {
  return (
    <>
      <h1>name: {name}</h1>

      <h2>email: {email}</h2>

      <h3>github: {github}</h3>
    </>
  );
};

export default Header;
