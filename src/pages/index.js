import React from "react";
import Layout from "@theme/Layout";

export default function Home() {
  return (
    <Layout>
      <main>
        <div class="mx-auto py-6 sm:py-8 lg:py-12">
          <div class=" w-screen px-4 md:px-8">
            <div class="mb-10 md:mb-16">
              <h1 class="mb-4 text-center text-2xl font-bold text-white md:mb-6 lg:text-3xl">Sirius Docs</h1>

              <p class="mx-auto max-w-screen-md text-center text-neutral-200 md:text-lg">Documentation for all Sirius related projects</p>
            </div>

            <div class="flex flex-col md:flex-row gap-4 w-full md:gap-6 xl:gap-8 justify-center items-center">
              <a href="/rayfield" class="group flex-grow w-full max-w-xl hover:no-underline hover:scale-105 transition ease-in-out duration-500 relative flex basis-96 h-48 flex-col overflow-hidden rounded-lg shadow-lg md:h-64 xl:h-96">
                <img src="/img/rayfield/rayfield.png" loading="lazy" alt="Rayfield" class="absolute pointer-events-none inset-0 h-full w-full object-cover object-center transition ease-in-out duration-500 group-hover:scale-110" />

                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

                <div class="relative mt-auto text-center p-4">
                  <h2 class="mb-2 text-xl font-semibold text-white transition duration-100">Rayfield UI Suite</h2>

                  {/* <span class="font-semibold text-neutral-300">Read more</span> */}
                </div>
              </a>
              <a href="/sense" class="group flex-grow w-full max-w-xl hover:no-underline hover:scale-105 transition ease-in-out duration-500 relative flex basis-96 h-48 flex-col overflow-hidden rounded-lg  shadow-lg md:h-64 xl:h-96">
                <img src="/img/sense/SenseBanner.png" loading="lazy" alt="Sense" class="absolute pointer-events-none inset-0 h-full w-full object-cover object-center transition ease-in-out duration-500 group-hover:scale-110" />

                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

                <div class="relative mt-auto p-4 text-center">
                  <h2 class="mb-2 text-xl font-semibold text-white transition duration-100">Sense ESP Library</h2>

                  {/* <span class="font-semibold text-neutral-300">Read more</span> */}
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
