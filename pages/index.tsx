import { useState } from "react";
import NavBar from "../components/NavBar";

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <NavBar />
      <h1>Hello</h1>
      <style jsx>{`
        h1 {
          font-size: 52px;
          color: blue;
        }
      `}</style>
    </div>
  );
}
