import React from "react";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navbar}>
          <li>Quem somos</li>
          <li>Gastronomia</li>
          <li>Espaços</li>
          <li>Depoimentos</li>
          <li role="button" className="btn-orcamento"></li>
        </ul>
      </nav>
    </header>
  );
}
