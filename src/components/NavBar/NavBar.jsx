import React from "react";
import "./NavBar.css";

function NavBar(props) {
  return (
    <header>
      <nav className="container-nav">
        <h2>竹内</h2>
        <ul>
          <li>
            <a href="/">o que faco</a>
          </li>
          <li>
            <a href="/about">projeto</a>
          </li>
          <li>
            <a href="/about">contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
