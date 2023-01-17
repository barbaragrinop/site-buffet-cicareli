import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styles from "./FooterCompleto.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";


export function FooterCompleto() {
    const { push } = useRouter()
    const ano = new Date().getFullYear()
    return (
        <footer className={styles.footer}>
            <div className={styles.main}>
                <Image
                    role="button"
                    onClick={() => push("/")}
                    className={styles.logoNavbar}
                    src={"/images/logo.svg"}
                    priority
                    width={150}
                    height={60}
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
                    <Link href={""}>Quem somos</Link>
                    <Link href={""}>Gastronomia</Link>
                    <Link href={""}>Espaços</Link>
                    <Link href={""}>Depoimentos</Link>
                    <Link href={""}>Contato</Link>
                </div>
                <div className={styles.detalhes}>
                    <h2>Central de atendimento</h2>
                    <Link href={""}>(11) 5572-4404 (Telefone)</Link>
                    <Link href={""}>(11) 99942-9910 (WhatsApp)</Link>
                    <Link href={""}>comercial@buffetcicareli.com.br</Link>
                    <Link href={""}>Atendimento: das 08h30 às 17h30</Link>
                    <Link href={""}>Contato</Link>
                </div>
                <div className={styles.detalhes}>
                    <h2>Política de Privacidade</h2>
                    <Link href={""}>Termo de Consentimento da Privacidade</Link>
                </div>
            </div>
        </footer> 
    );
}
