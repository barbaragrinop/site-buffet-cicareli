import { Menu } from "@headlessui/react";
import classNames from "classnames";
import React, { useState } from "react";
import MenuComBarras from "../../public/icons/menu-hamburger";
import styles from "./MenuHamburger.module.scss";

export default function MenuHamburger() {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
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
  );
}
