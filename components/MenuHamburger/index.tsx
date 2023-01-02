import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ItemsMenu } from "../../utils/items-menu";
import styles from "./MenuHamburger.module.scss";

export default function MenuHamburger() {
  const isActive = document.querySelectorAll(".active");
  console.log("isActive", isActive);

  const [isShow, setIsShow] = useState<boolean>(false);
  const { pathname } = useRouter();

  return (
    <>
      <div
        className={`
        ${
          isShow
            ? classNames(styles.hamburger, styles.active)
            : styles.hamburger
        } `}
        // className={styles.hamburger}
        onClick={() => setIsShow(!isShow)}
      >
        <span className={classNames(styles.line, styles.line1)}></span>
        <span className={classNames(styles.line, styles.line2)}></span>
        <span className={classNames(styles.line, styles.line3)}></span>
      </div>
      {isShow && (
        <div className={styles.itemsMenuHamburger}>
          <ul>
            {ItemsMenu.map(({ title, url }, index: number) => (
              <li className={styles.itemsMenu} key={index}>
                <Link
                  href={url}
                  // style={
                  //   pathname === url
                  // }
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
