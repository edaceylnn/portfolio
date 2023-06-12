import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import Head from "next/head";
import React from "react";

const about = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="" />
        {/* <AnimatedText text="Technologies I use" className="mb-16 lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8" /> */}

        <Skills />
        <Layout />
      </main>
    </>
  );
};

export default about;
