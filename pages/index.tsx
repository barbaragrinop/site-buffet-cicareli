import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className={styles.bodyAll}>
      <Head>
        <title>Buffet Cicarelli</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F2F6FA" />
      </Head>
      <Navbar />
    </div>
  );
}
