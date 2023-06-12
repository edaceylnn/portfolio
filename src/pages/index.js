import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/women.png";
import code from "../../public/images/code-3.png";
import code1 from "../../public/images/code-4.png";

import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Eda Ceylan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen ">
        <Layout className="pt-0 ">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="codeBucks"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw,50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center  ">
              <AnimatedText
                text="Hi! I'm Eda Ceylan."
                className="!text-5xl !text-left lg:!text-center sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                I&apos;m Frontend Developer. I am dedicated to turning ideas
                into innovative web applications. Explore my latest projects,
                showcasing in React.js and web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                  hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <LinkArrow className={"w-4 ml-1 sm:w-6"} />
                </Link>
                {/* <Link href="mailto:edacey665@gmail.com" target={"_blank"} className="ml-4 text-lg font-medium capitalize text-dark underline">
                  Contact
                </Link> */}
              </div>
            </div>
          </div>
        </Layout>

        <div className="absolute right-16 top-20 inline-block w-72  md:hidden">
          <Image src={code1} alt="code" className="w-full h-auto " />
        </div>

        <HireMe />

        <div className="absolute right-8 bottom-20 inline-block w-48  md:hidden ">
          <Image src={code} alt="code" className="w-full h-auto " />
        </div>
      </main>
    </>
  );
}
