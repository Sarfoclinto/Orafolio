import React from "react";
import { Link } from "react-router-dom";

function Navigations({ name }) {
  return (
    <Link
      className="text-stone-500 hover:underline font-medium capitalize"
      to={name === "home" ? `/` : `/${name}`}
    >
      <p>{name}</p>
    </Link>
  );
}

export default Navigations;
