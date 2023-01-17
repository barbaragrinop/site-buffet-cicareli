import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
    const ano = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
        <p>Todos os direitos reservados &copy; Buffet Cicarelli - {ano}</p>
    </footer>
  );
}



