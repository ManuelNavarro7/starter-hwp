import Image from "next/image";
import styles from "./page.module.css";
// import Footer from "../app/components/Footer.js";
// import PostCard from "../app/components/PostCard.js";
// import { getClient } from "./lib/apollo.js";
// import { gql } from "@apollo/client";

export default async function Home() {
  return (
    <div className="container">
      <main>
        <h1 className="title">Headless WordPress Next.js Starter</h1>

        <p className="description">
          Get started by editing <code>app/page.js</code>
        </p>

        <div className="grid"></div>
      </main>
    </div>
  );
}
