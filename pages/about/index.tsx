import Layout from "@/layout/Layout";
import React, { ReactElement } from "react";

const About = () => {
  return <div>About</div>;
};

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default About;
