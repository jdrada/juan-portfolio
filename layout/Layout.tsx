import React, { ReactNode } from "react";
import Juanca from "@/public/juanca.png";
import Image from "next/image";
import styles from "@/layout/Layout.module.css";
import NavBar from "@/components/NavBar/NavBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="h-[100vh] w-auto">
        <div className={`h-[10vh] `}>
          <NavBar />
        </div>
        <div className={`h-[90vh] flex`}>
          <div className="relative hidden lg:block basis-2/5 ">
            <Image
              className={`${styles.juanca} absolute bottom-0 left-0 `}
              src={Juanca}
              alt={"Juanca"}
            />
          </div>
          <div className=" lg:basis-3/5 ">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
