import NavBar from "../components/NavBar";
import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <span>hello</span>
      <style jsx global>{`
        h1 {
          font-size: 52px;
          color: blue;
        }
        a {
          color: white;
        }
      `}</style>
    </div>
  );
}
