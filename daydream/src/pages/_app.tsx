import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/features/Header";
import Footer from "@/features/Footer";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
