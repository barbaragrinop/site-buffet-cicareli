import Head from "next/head";
import Image from "next/image";
import React from "react";
import { useSpringCarousel } from "react-spring-carousel";
import Navbar from "../components/Navbar";
import styles from "../styles/pages/depoimentos.module.scss";
import { DepoimentosFake } from "../utils/depoimentos-fake";

export default function depoimentos() {
  const { carouselFragment, slideToNextItem, slideToPrevItem } =
    useSpringCarousel({
      withLoop: true,
      // gutter: 38,
      // startEndGutter: 60,
      itemsPerSlide: 4,

      items: [
        {
          id: "item-1",

          renderItem: (
            <div className={styles.card}>
              <div className={styles.line}></div>
              <p className={styles.depoimento}>
                A sede administrativa e gastronômica está instalada em um prédio
                em São Paulo, onde produzimos para atender em todo o território
                nacional.
              </p>
              <p className={styles.autor}>Nome do cliente</p>
            </div>
          ),
        },
        {
          id: "item-2",
          renderItem: (
            <div className={styles.card}>
              <div className={styles.line}></div>
              <p className={styles.depoimento}>
                A sede administrativa e gastronômica está instalada em um prédio
                em São Paulo, onde produzimos para atender em todo o território
                nacional.
              </p>
              <p className={styles.autor}>Nome do cliente</p>
            </div>
          ),
        },
        {
          id: "item-3",
          renderItem: (
            <div className={styles.card}>
              <div className={styles.line}></div>
              <p className={styles.depoimento}>
                A sede administrativa e gastronômica está instalada em um prédio
                em São Paulo, onde produzimos para atender em todo o território
                nacional.
              </p>
              <p className={styles.autor}>Nome do cliente</p>
            </div>
          ),
        },
        {
          id: "item-4",
          renderItem: (
            <div className={styles.card}>
              <div className={styles.line}></div>
              <p className={styles.depoimento}>
                A sede administrativa e gastronômica está instalada em um prédio
                em São Paulo, onde produzimos para atender em todo o território
                nacional.
              </p>
              <p className={styles.autor}>Nome do cliente</p>
            </div>
          ),
        },
      ],
    });

  return (
    <>
      <Head>
        <title>Cicareli - Depoimentos</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F2F6FA" />
        <link rel="icon" href="/icons/favicon.svg" />
      </Head>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.titulo}>
          <Image
            src={"/icons/tree-left.svg"}
            alt="slskdf"
            width={50}
            height={50}
          />
          <span>Depoimentos</span>
          <Image
            src={"/icons/tree-right.svg"}
            alt="slskdf"
            width={50}
            height={50}
          />
        </div>
        <div className={styles.descricao}>
          <p>Vem saber o que falam de nós!</p>
        </div>
      </div>
      <div className={styles.espacosMainCarousel}>{carouselFragment}</div>
    </>
  );
}
