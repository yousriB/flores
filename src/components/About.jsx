import React from "react";
import { prod2, wi, hei } from "../assets";

const About = () => {
  return (
    <div className="bg-white p-2 mt-10" id="about">
      <div className="container sm:my-5 mx-auto md:px-6">
        <section className=" sm:my-10">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
              <div className="flex lg:py-12">
                <img
                  src={wi}
                  className="z-[10] w-full rounded-lg shadow-2xl dark:shadow-black lg:ml-[50px]"
                  alt="image"
                />
              </div>
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div className="flex h-full items-center rounded-lg bg-[#F3F4F6] p-6 text-center text-black lg:pl-12 lg:text-left">
                <div className="lg:pl-12">
                  <h2 className="mb-8 text-3xl font-bold">
                    {" "}
                    <span className="text-blue-400 text-3xl sm:text-5xl">
                      About Us
                    </span>
                  </h2>
                  <p className="mb-8 pb-2 lg:pb-0">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Maxime, sint, repellat vel quo quisquam accusamus in qui at
                    ipsa enim quibusdam illo laboriosam omnis. Labore itaque
                    illum distinctio eum neque!
                  </p>

                  <div className="mx-auto mb-8 flex flex-col md:flex-row md:justify-around xl:justify-start">
                    <span className="text-blue-400">
                      <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          className="mr-2 h-5 w-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Best product
                      </p>
                    </span>

                    <span className="text-blue-400">
                      <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          className="mr-2 h-5 w-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Best quality
                      </p>
                    </span>

                    <span className="text-blue-400">
                      {" "}
                      <p className="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          className="mr-2 h-5 w-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Best experience
                      </p>
                    </span>
                  </div>

                  <p>
                    Duis sagittis, turpis in ullamcorper venenatis, ligula nibh
                    porta dui, sit amet rutrum enim massa in ante. Curabitur in
                    justo at lorem laoreet ultricies. Nunc ligula felis,
                    sagittis eget nisi vitae, sodales vestibulum purus.
                    Vestibulum nibh ipsum, rhoncus vel sagittis nec, placerat
                    vel justo. Duis faucibus sapien eget tortor finibus, a
                    eleifend lectus dictum. Cras tempor convallis magna id
                    rhoncus. Suspendisse potenti. Nam mattis faucibus imperdiet.
                    Proin tempor lorem at neque tempus aliquet. Phasellus at ex
                    volutpat, varius arcu id, aliquam lectus. Vestibulum mattis
                    felis quis ex pharetra luctus. Etiam luctus sagittis massa,
                    sed iaculis est vehicula ut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container my-7 mx-auto md:px-6">
        <section className="mb-10">
          <div className="flex flex-wrap items-center">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 lg:w-5/12">
              <div
                className="relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img src={hei} className="w-full" />
                <a href="#!" className=" pointer-events-none">
                  <div className="absolute overflow-hidden top-0 right-0 bottom-0 left-0 h-full w-full bg-[hsl(0,0%,0%,0.4)] bg-fixed">
                    <div className="flex h-full items-center justify-center">
                      {/* <div className="px-6 py-12 text-center text-white md:px-12">
                        <h3 className="mb-6 text-2xl font-bold uppercase">
                          The future is
                          <u className="text-[hsl(210,12%,80%)]"> now</u>
                        </h3>
                        <p className="text-[hsl(210,12%,80%)]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Harum quia laboriosam error consequuntur fugit,
                          doloribus rerum, iure nesciunt amet quidem veniam
                          cupiditate hic fugiat dolore aperiam quisquam libero
                          earum quibusdam?
                        </p>
                      </div> */}
                    </div>
                  </div>
                  <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <div className="absolute overflow-hidden top-0 right-0 bottom-0 left-0 h-full w-full bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </div>
                </a>
              </div>
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12">
              <div className="mb-12 flex shadow-lg dark:shadow-black p-4  rounded-xl ">
                <div className="shrink-0">
                  <div className="rounded-md p-4 shadow-lg bg-blue-400 dark:bg-[hsl(231,52.6%,30%)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="h-6 w-6 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4 grow ">
                  <p className="mb-2 font-bold">Support 24/7</p>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nihil quisquam quibusdam modi sapiente magni molestias
                    pariatur facilis reprehenderit facere aliquam ex.
                  </p>
                </div>
              </div>

              <div className="mb-12 flex shadow-lg dark:shadow-black p-4  rounded-xl">
                <div className="shrink-0">
                  <div className="rounded-md p-4 shadow-lg bg-blue-400 dark:bg-[hsl(231,52.6%,30%)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="h-6 w-6 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4 grow ">
                  <p className="mb-2 font-bold">Safe and solid</p>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    Eum nostrum fugit numquam, voluptates veniam neque quibusdam
                    ullam aspernatur odio soluta, quisquam dolore animi mollitia
                    a omnis praesentium, expedita nobis!
                  </p>
                </div>
              </div>

              <div className="mb-12 flex shadow-lg dark:shadow-black p-4  rounded-xl">
                <div className="shrink-0">
                  <div className="rounded-md p-4 shadow-lg bg-blue-400 dark:bg-[hsl(231,52.6%,30%)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="h-6 w-6 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4 grow ">
                  <p className="mb-2 font-bold">Extremely fast</p>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    Enim cupiditate, minus nulla dolor cumque iure eveniet
                    facere ullam beatae hic voluptatibus dolores exercitationem?
                    Facilis debitis aspernatur amet nisi iure eveniet facere?
                  </p>
                </div>
              </div>

              <div className="flex shadow-lg dark:shadow-black p-4 rounded-xl">
                <div className="shrink-0">
                  <div className="rounded-md p-4 shadow-lg bg-blue-400 dark:bg-[hsl(231,52.6%,30%)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="h-6 w-6 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4 grow ">
                  <p className="mb-2 font-bold">Live analytics</p>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    Illum doloremque ea, blanditiis sed dolor laborum
                    praesentium maxime sint, consectetur atque ipsum ab adipisci
                    ullam aspernatur odio soluta, quisquam dolore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
