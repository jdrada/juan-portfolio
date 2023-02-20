import NavBar from "@/components/NavBar/NavBar";
import Head from "next/head";
import React, { ReactNode } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import JuancaPic from "@/public/juanca.png";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Genie Web App</title>
      </Head>
      <div className={styles.main}>
        <NavBar />
        <div className="flex">
          <Image
            className={`${styles.image} flex-none bottom-0 left-0`}
            src={JuancaPic}
            alt={"JuancaPic"}
          ></Image>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
