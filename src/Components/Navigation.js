import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      {" "}
      <nav>
        <ul style={{ display: "flex", justifyContent: "space-around" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/productlist">productlist</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
