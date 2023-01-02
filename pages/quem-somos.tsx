import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";
import TreeIcon from "../public/icons/tree.svg";
import styles from "../styles/pages/quem-somos.module.scss";

export default function QuemSomos() {
  return (
    <>
      <Navbar />
      <div className={styles.backgroundQM}>
        <div className={styles.explicacao}>
          <p>
            <Image
              src="/icons/tree-left.svg"
              alt="Símbolo Cicareli"
              width={90}
              height={90}
            />
            <span>Quem Somos</span>
            <Image
              src="/icons/tree-right.svg"
              alt="Símbolo Cicareli"
              width={90}
              height={90}
            />
          </p>

          <h1>Mais de 50 anos de festa!</h1>
        </div>
        <div className={styles.imagem}>asdas</div>
      </div>
    </>
  );
}
