import Head from "next/head";
import Image from "next/image";
import React, { FormEvent } from "react";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
// @ts-ignore
import styles from "../styles/pages/orcamento.module.scss";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { FormOrcamento } from "../interfaces/FormOrcamento";
import { yupResolver } from "@hookform/resolvers/yup";
import WhatsappIcon from "../components/WhatsappIcon";
import { FooterCompleto } from "../components/FooterCompleto";

const schema = yup.object().shape({
  nome: yup.string().required("Campo obrigatório"),
  sobrenome: yup.string().required("Campo obrigatório"),
  email: yup.string().required("Campo obrigatório"),
  telefone: yup.string().required("Campo obrigatório"),
  tipoevento: yup.string().required("Campo obrigatório"),
  dataevento: yup.string().required("Campo obrigatório"),
  numconvidados: yup.string().required("Campo obrigatório"),
  localevento: yup.string().required("Campo obrigatório"),
  mensagem: yup.string(),
});

export default function orcamento() {
  const {
    register,
    formState: { errors, isValid, isSubmitting },
    getValues,
    reset
  } = useForm<FormOrcamento>({
    defaultValues: {
      nome: "",
      sobrenome: "",
      email: "",
      telefone: "",
      tipoevento: "",
      dataevento: undefined,
      numconvidados: 0,
      localevento: "",
      mensagem: "",
    },
    mode: "all",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if(!isValid) return
    
    try {
      const res = fetch("/api/sendgrid", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(getValues())
      }).then(x => alert("DEU CERTO DMS"))

      // @ts-ignore
      if(!res.ok) {
        reset()
        return
      }

    } catch( err: any) {
    }
  }

  return (
    <div className={styles.main}>
      <Head>
        <title>Buffet Cicarelli</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F2F6FA" />
        <link rel="icon" href="/icons/favicon.svg" />
      </Head>
      <Navbar />
      <div className={styles.content}>
        <h1>Contato</h1>
      </div>
      <div className={styles.mainContentForm}>
        <div className={styles.introduction}>
          <h2>Peça um orçamento</h2>
          <span>Preencha o formulário ao lado e entraremos em contato!</span>
          <Image
            src={"/images/bolo-orcamento.png"}
            alt="Bolo de chocolate"
            width={488}
            height={649}
          />
        </div>
        <form className={styles.formContato} onSubmit={onSubmit}>
          <div>
            <Input
              type="text"
              label="Nome"
              register={register("nome")}
              error={errors.nome?.message}
            />
            <Input
              type="text"
              label="Sobrenome"
              register={register("sobrenome")}
              error={errors.sobrenome?.message}
            />
          </div>
          <div>
            <Input
              name="email"
              type="email"
              label="E-mail"
              register={register("email")}
              error={errors.email?.message}
            />
            <Input
              name="telefone"
              type="text"
              mask="(99) 99999-9999"
              label="Telefone"
              register={register("telefone")}
              error={errors.telefone?.message}
            />
          </div>
          <div>
            <Input
              name="tipoevento"
              type="text"
              label="Tipo de Evento"
              register={register("tipoevento")}
              error={errors.tipoevento?.message}
            />
            <Input
              name="dataevento"
              type="date"
              label="Data do Evento"
              register={register("dataevento")}
              error={errors.dataevento?.message}
            />
          </div>
          <div>
            <Input
              name="numconvidados"
              type="number"
              label="N.º de convidados"
              register={register("numconvidados")}
              error={errors.numconvidados?.message}
            />
            <Input
              name="localevento"
              type="text"
              label="Local do Evento"
              register={register("localevento")}
              error={errors.localevento?.message}
            />
          </div>
          <div>
            <Input
              name="mensagem"
              type="text"
              label="Mensagem"
              as="textarea"
              register={register("mensagem")}
              error={errors.mensagem?.message}
            />
          </div>
          <div className={styles.informacoes}>
            <p>Campos obrigatórios*</p>
            <p>
              Ao enviar sua mensagem, você autoriza receber comunicações do
              Grupo Cicareli, podendo cancelar a qualquer momento. Consulte
              nossa <b>Política de Privacidade</b>.
            </p>
          </div>
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
          >
            Enviar dados
          </button>
        </form>
      </div>
      {/* <WhatsappIcon /> */}
      <FooterCompleto />
    </div>
  );
}
