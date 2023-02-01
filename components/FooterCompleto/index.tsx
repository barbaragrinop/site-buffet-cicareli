import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styles from "./FooterCompleto.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { ItemsMenu } from "../../utils/items-menu";

export function FooterCompleto() {
  const { push } = useRouter();
  const ano = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <img
          role="button"
          onClick={() => push("/")}
          className={styles.logoNavbar}
          src={"/images/logo.svg"}
          loading="eager"
          alt="Logo do Buffet Cicareli"
        />
        <div className={styles.contato}>
          <span>Siga-nos nas redes sociais</span>
          <Link href={"https://www.instagram.com/buffetcicarelioficial/"}>
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </div>
      </div>
      <div className={styles.informacoes}>
        <div className={styles.detalhes}>
          <h2>Mapa do site</h2>
          {ItemsMenu.map(({ title, url }) => (
            <Link href={url}>{title}</Link>
          ))}
        </div>
        <div className={styles.detalhes}>
          <h2>Central de atendimento</h2>
          <Link href={""}>(11) 95862-1913 (Telefone)</Link>
          <Link href={""}>(11) 99942-9910 (WhatsApp)</Link>
          <Link
            href="mailto:comercial@buffetcicareli.com.br?Subject=Gostaria de saber mais sobres os serviços."
            target="_blank"
          >
            comercial@buffetcicareli.com.br
          </Link>
          <Link href={""}>Atendimento: das 08h30 às 17h30</Link>
          <Link href={""}>Contato</Link>
        </div>
        <div className={styles.detalhes}>
          <h2>Política de Privacidade</h2>
          <Link href={""}>Termo de Consentimento de Privacidade</Link>
          <Link href={""}>Termos de Uso</Link>
        </div>
      </div>
      <p>{ano} &copy; Buffet Cicareli | Todos os direitos reservados </p>
    </footer>
  );
}
