import "../styles/globals.scss";
import type { AppProps } from "next/app";
import {motion} from "framer-motion"

export default function App({ Component, pageProps, router }: AppProps) {
  return <Component {...pageProps} />
}

