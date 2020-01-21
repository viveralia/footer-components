import React from "react";

const MenuFooter = ({ title, arrLinks }) => {
  return (
    <div>
      <h6>{title}</h6>
      <ul>
        {arrLinks.map(({ path, name }, i) => (
          <li key={i}>
            <a href={path}>{name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuFooter;
