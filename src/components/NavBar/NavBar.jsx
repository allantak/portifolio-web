import React, { useEffect, useRef } from "react";
import "./NavBar.css";

function NavBar(props) {
  const refHeader = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      refHeader.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
      },
      "2.8"
    );
  });
  return (
    <header ref={refHeader}>
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
