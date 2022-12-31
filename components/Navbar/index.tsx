import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ItemsMenu } from "../../utils/items-menu";
import MenuHamburger from "../MenuHamburger";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const { pathname, push } = useRouter();

  return (
    <header className={styles.header}>
      <Image
        role="button"
        onClick={() => push("/")}
        className={styles.logoNavbar}
        src={"/images/logo.svg"}
        priority
        width={100}
        height={50}
        alt="Logo do Buffet Cicareli"
      />
      <nav className={styles.navbar}>
        <ul className={styles.listNavbar}>
          {ItemsMenu.map(({ title, url }, index: number) => (
            <li className={styles.itemsMenu} key={index}>
              <Link
                href={url}
                style={
                  pathname === url
                    ? { color: "white", fontWeight: "bold" }
                    : { color: "black" }
                }
              >
                {title}
              </Link>
            </li>
          ))}
          <li
            role="button"
            className={styles.btnOrcamento}
            onClick={() => push("/orcamento")}
            style={
              pathname === "/orcamento"
                ? { color: "white", backgroundColor: "#CBB98A" }
                : { color: "black" }
            }
          >
            Peça um orçamento
          </li>
        </ul>
      </nav>
      <MenuHamburger />
    </header>
  );
}
