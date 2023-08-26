import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Image from "@theme/IdealImage";
import projects from "../json/projects.json";

<head>
  <title>TON | Documentation</title>
  <meta name="title" content="TON | Documentation" />
</head>;

function CardLayout({ children }) {
  return <div className="flex h-full w-full flex-col flex-wrap items-center justify-center gap-4 pb-4 md:flex-row md:gap-6 md:pb-6 xl:gap-8 xl:pb-8">{children}</div>;
}

function Card({ imgurl, name, link }) {
  return (
    <a href={link} className="group relative aspect-video max-w-xl">
      <div className="overflow-hidden rounded-lg transition duration-500 ease-in-out group-hover:scale-105">
        <Image img={imgurl} alt={name} className="pointer-events-none block object-cover object-center transition duration-500 ease-in-out group-hover:scale-110" />
      </div>
      <Image img={imgurl} alt={name} className="pointer-events-none absolute inset-0 -z-10 h-full w-full blur-xl saturate-[1.3]" />
    </a>
  );
}

export default function Home() {
  return (
    <Layout>
      <Head>
        <meta property="og:title" content="TON Documentation" />
        <meta property="og:image:alt" content="TON Documentation" />
        <meta name="description" property="og:description" content="Documentation for all your projects" />
      </Head>
      <main className="flex h-auto items-center">
        <div className="mx-auto py-6 sm:py-8 lg:py-12">
          <div className="w-screen px-4 md:px-8">
            <div className="mb-10 md:mb-16">
              <h1 className="mb-1 text-center text-2xl font-bold dark:text-white lg:text-3xl">TON Documentation</h1>
              <p className="mx-auto max-w-screen-md text-center dark:text-neutral-200 md:text-lg">Documentation for all your projects</p>
            </div>

            <CardLayout>
              {projects.map((card, index) => (
                <Card key={index} imgurl={`/img${card.image}`} name={card.name} link={`${card.link}`} />
              ))}
            </CardLayout>
          </div>
        </div>
      </main>
    </Layout>
  );
}
