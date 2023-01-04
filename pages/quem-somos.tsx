import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";
import TreeIcon from "../public/icons/tree.svg";
import styles from "../styles/pages/quem-somos.module.scss";

export default function QuemSomos() {
  return (
    <div className={styles.fullbody}>
      <Navbar />
      <div className={styles.backgroundQM}>
        <div className={styles.explicacao}>
          <p>
            <Image
              src="/icons/tree-left.svg"
              alt="Símbolo Cicareli"
              width={70}
              height={70}
            />
            <span>Quem Somos</span>
            <Image
              src="/icons/tree-right.svg"
              alt="Símbolo Cicareli"
              width={70}
              height={70}
            />
          </p>

          <span>Mais de 50 anos de festa!</span>

          <div className={styles.historia}>
            <p>
              Nascemos nos fundos de uma casa em São Paulo na década de 50,
              vendendo por encomenda para a vizinhança, e hoje atuamos em
              eventos sociais e empresariais para milhares de pessoas pelo
              Brasil inteiro.
            </p>
            <p>
              A paixão pela culinária fez com que nos especializássemos cada vez
              mais, aperfeiçoando o que foi passado de geração em geração em uma
              família aficionada pela cozinha, assim em 1970 foi fundado o
              Buffet Cicareli.
            </p>
            <p>
              Durante mais de 50 anos, realizamos os sonhos de muitas pessoas,
              casamos muitas gerações, estes que se casaram fizeram as festas de
              aniversário dos seus filhos, esses filhos se formaram, se casaram,
              e nós estivemos presentes em todos esses momentos.
            </p>
            <p>
              Assim é a nossa história, de geração para geração, e com muito
              amor cuidando de cada festa como se fosse única, porque se pra
              vocês é especial, para nós também é!
            </p>
          </div>
        </div>
        <div className={styles.imagem}>
          <Image
            src={"/images/rectangle19.webp"}
            alt="Foto de uma mesa posta para o jantar"
            width={470}
            height={600}
            // className={}
            className={styles.responsiveImg}
          />
        </div>
      </div>
    </div>
  );
}
