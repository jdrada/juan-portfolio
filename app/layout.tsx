import "./globals.css";
import React, { ReactNode } from "react";
import Juanca from "@/public/juanca.png";
import Image from "next/image";
import styles from "@/app/Layout.module.css";
import NavBar from "@/app/components/NavBar/NavBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="lg:h-[100vh] w-auto">
        <NavBar />
        <div className="flex lg:h-[90vh]">
          <div className="relative hidden lg:block basis-2/5 ">
            <Image
              className={`${styles.juanca} absolute bottom-0 left-0 `}
              src={Juanca}
              alt={"Juanca"}
            />
          </div>
          <main className=" lg:basis-3/5 ">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
