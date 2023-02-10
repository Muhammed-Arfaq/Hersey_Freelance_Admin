import React from "react";
import "./adminDashboard.css"
import logo from "../../assets/img/Logo1.png";

function AdminDashboard() {
  return (
    <div className="grid grid-cols-12">
      <div className="z-10 my-4 mx-3 col-span-3">
        <div className="w-full max-w-full px-3 lg:w-80 lg:flex-none fixed">
          <div className="border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
            <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
              <img className="ml-7 mt-10 w-40" src={logo} alt="" />
            </div>
            <div className="flex-auto ">
              <div className="">
                <ul className="flex flex-col pl-0 mb-0">
                  <li className="mt-14 w-full">
                    <a
                      className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors hover:rounded-xl hover:bg-zinc-300"
                      href="../pages/sign-in.html"
                    >
                      <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                        <svg
                          width="12px"
                          height="12px"
                          viewBox="0 0 40 44"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <title>document</title>
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              transform="translate(-1870.000000, -591.000000)"
                              fill="#FFFFFF"
                              fill-rule="nonzero"
                            >
                              <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(154.000000, 300.000000)">
                                  <path
                                    className="fill-slate-800 opacity-60"
                                    d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                                  ></path>
                                  <path
                                    className="fill-slate-800"
                                    d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <span className="ml-3 text-base font-semibold duration-300 opacity-100 pointer-events-none ease-soft">
                        Admin Dashboard
                      </span>
                    </a>
                  </li>
                  <li className="mt-2 w-full">
                    <a
                      className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors hover:rounded-xl hover:bg-zinc-300"
                      href="../pages/sign-in.html"
                    >
                      <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                        <svg
                          width="12px"
                          height="12px"
                          viewBox="0 0 40 44"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <title>document</title>
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              transform="translate(-1870.000000, -591.000000)"
                              fill="#FFFFFF"
                              fill-rule="nonzero"
                            >
                              <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(154.000000, 300.000000)">
                                  <path
                                    className="fill-slate-800 opacity-60"
                                    d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                                  ></path>
                                  <path
                                    className="fill-slate-800"
                                    d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <span className="ml-3 text-base font-semibold duration-300 opacity-100 pointer-events-none ease-soft">
                        User Management
                      </span>
                    </a>
                  </li>
                  <li className="mt-2 w-full">
                    <a
                      className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors hover:rounded-xl hover:bg-zinc-300"
                      href="../pages/sign-in.html"
                    >
                      <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                        <svg
                          width="12px"
                          height="12px"
                          viewBox="0 0 40 44"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <title>document</title>
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              transform="translate(-1870.000000, -591.000000)"
                              fill="#FFFFFF"
                              fill-rule="nonzero"
                            >
                              <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(154.000000, 300.000000)">
                                  <path
                                    className="fill-slate-800 opacity-60"
                                    d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                                  ></path>
                                  <path
                                    className="fill-slate-800"
                                    d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <span className="ml-3 text-base font-semibold duration-300 opacity-100 pointer-events-none ease-soft">
                        Vendor Management
                      </span>
                    </a>
                  </li>
                  {/* <li className="mt-2 w-full">
                    <a
                      className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors hover:rounded-xl hover:bg-zinc-300"
                      href="../pages/sign-in.html"
                    >
                      <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                        <svg
                          width="12px"
                          height="12px"
                          viewBox="0 0 40 44"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <title>document</title>
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              transform="translate(-1870.000000, -591.000000)"
                              fill="#FFFFFF"
                              fill-rule="nonzero"
                            >
                              <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(154.000000, 300.000000)">
                                  <path
                                    className="fill-slate-800 opacity-60"
                                    d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                                  ></path>
                                  <path
                                    className="fill-slate-800"
                                    d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <span className="ml-3 text-base font-semibold duration-300 opacity-100 pointer-events-none ease-soft">
                        Banner Management
                      </span>
                    </a>
                  </li> */}
                  <li className="mt-2 w-full">
                    <a
                      className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors hover:rounded-xl hover:bg-zinc-300"
                      href="../pages/sign-in.html"
                    >
                      <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                        <svg
                          width="12px"
                          height="12px"
                          viewBox="0 0 40 44"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <title>document</title>
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              transform="translate(-1870.000000, -591.000000)"
                              fill="#FFFFFF"
                              fill-rule="nonzero"
                            >
                              <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(154.000000, 300.000000)">
                                  <path
                                    className="fill-slate-800 opacity-60"
                                    d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                                  ></path>
                                  <path
                                    className="fill-slate-800"
                                    d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <span className="ml-3 text-base font-semibold duration-300 opacity-100 pointer-events-none ease-soft">
                        Category Management
                      </span>
                    </a>
                  </li>
                  <li className="mt-2 w-full">
                    <a
                      className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors hover:rounded-xl hover:bg-zinc-300"
                      href="../pages/sign-in.html"
                    >
                      <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                        <svg
                          width="12px"
                          height="12px"
                          viewBox="0 0 40 44"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <title>document</title>
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              transform="translate(-1870.000000, -591.000000)"
                              fill="#FFFFFF"
                              fill-rule="nonzero"
                            >
                              <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(154.000000, 300.000000)">
                                  <path
                                    className="fill-slate-800 opacity-60"
                                    d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                                  ></path>
                                  <path
                                    className="fill-slate-800"
                                    d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <span className="ml-3 text-base font-semibold duration-300 opacity-100 pointer-events-none ease-soft">
                        My Profile
                      </span>
                    </a>
                  </li>
                  <li className="mt-2 w-full">
                    <a
                      className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors hover:rounded-xl hover:bg-zinc-300"
                      href="../pages/sign-in.html"
                    >
                      <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                        <svg
                          width="12px"
                          height="12px"
                          viewBox="0 0 40 44"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <title>document</title>
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              transform="translate(-1870.000000, -591.000000)"
                              fill="#FFFFFF"
                              fill-rule="nonzero"
                            >
                              <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(154.000000, 300.000000)">
                                  <path
                                    className="fill-slate-800 opacity-60"
                                    d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                                  ></path>
                                  <path
                                    className="fill-slate-800"
                                    d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <span className="ml-3 text-base font-semibold duration-300 opacity-100 pointer-events-none ease-soft">
                        Logout
                      </span>
                    </a>
                  </li>
                  <li className="mt-24"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-9 ">
      <nav
            className="relative mt-4 flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start"
            navbar-main
            navbar-scroll="true"
          >
            <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
              <nav>
                {/* <!-- breadcrumb --> */}
                <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                  <li className="leading-normal text-sm">
                    <a
                      className="opacity-50 text-slate-700"
                      href="javascript:;"
                    >
                      Pages
                    </a>
                  </li>
                  <li
                    className="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/']"
                    aria-current="page"
                  >
                    Dashboard
                  </li>
                </ol>
                <h6 className="mb-0 font-bold capitalize">Dashboard</h6>
              </nav>

              <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
                <div className="flex items-center md:ml-auto md:pr-4">
                  <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
                    <span className="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                      <i className="fas fa-search"></i>
                    </span>
                    <input
                      type="text"
                      className="pl-8.75 text-sm focus:shadow-soft-primary-outline ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                      placeholder="Type here..."
                    />
                  </div>
                </div>
                <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
                  
                  <li className="flex items-center">
                    <a
                      href="../pages/sign-in.html"
                      className="block px-0 py-2 font-semibold transition-all ease-nav-brand text-sm text-slate-500"
                    >
                      <i className="fa fa-user sm:mr-1"></i>
                      <span className="hidden sm:inline">Sign In</span>
                    </a>
                  </li>
                  <li className="flex items-center pl-4 xl:hidden">
                    <a
                      href="javascript:;"
                      className="block p-0 transition-all ease-nav-brand text-sm text-slate-500"
                      sidenav-trigger
                    >
                      <div className="w-4.5 overflow-hidden">
                        <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                        <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                        <i className="ease-soft relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-center px-4">
                    <a
                      href="javascript:;"
                      className="p-0 transition-all text-sm ease-nav-brand text-slate-500"
                    >
                      <i
                        fixed-plugin-button-nav
                        className="cursor-pointer fa fa-cog"
                      ></i>
                      {/* <!-- fixed-plugin-button-nav  --> */}
                    </a>
                  </li>

                  {/* <!-- notifications --> */}

                  <li className="relative flex items-center pr-2">
                    <p className="hidden transform-dropdown-show"></p>
                    <a
                      href="javascript:;"
                      className="block p-0 transition-all text-sm ease-nav-brand text-slate-500"
                      dropdown-trigger
                      aria-expanded="false"
                    >
                      <i className="cursor-pointer fa fa-bell"></i>
                    </a>

                    <ul
                      dropdown-menu
                      className="text-sm transform-dropdown before:font-awesome before:leading-default before:duration-350 before:ease-soft lg:shadow-soft-3xl duration-250 min-w-44 before:sm:right-7.5 before:text-5.5 pointer-events-none absolute right-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:right-2 before:left-auto before:top-0 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-['\f0d8'] sm:-mr-6 lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block lg:cursor-pointer"
                    >
                      {/* <!-- add show className on dropdown open js --> */}
                      <li className="relative mb-2">
                        <a
                          className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 lg:transition-colors"
                          href="javascript:;"
                        >
                          <div className="flex py-1">
                            <div className="my-auto">
                              <img
                                src="../assets/img/team-2.jpg"
                                className="inline-flex items-center justify-center mr-4 text-white text-sm h-9 w-9 max-w-none rounded-xl"
                              />
                            </div>
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-1 font-normal leading-normal text-sm">
                                <span className="font-semibold">
                                  New message
                                </span>{" "}
                                from Laur
                              </h6>
                              <p className="mb-0 leading-tight text-xs text-slate-400">
                                <i className="mr-1 fa fa-clock"></i>
                                13 minutes ago
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>

                      <li className="relative mb-2">
                        <a
                          className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700"
                          href="javascript:;"
                        >
                          <div className="flex py-1">
                            <div className="my-auto">
                              <img
                                src="../assets/img/small-logos/logo-spotify.svg"
                                className="inline-flex items-center justify-center mr-4 text-white text-sm bg-gradient-to-tl from-gray-900 to-slate-800 h-9 w-9 max-w-none rounded-xl"
                              />
                            </div>
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-1 font-normal leading-normal text-sm">
                                <span className="font-semibold">New album</span>{" "}
                                by Travis Scott
                              </h6>
                              <p className="mb-0 leading-tight text-xs text-slate-400">
                                <i className="mr-1 fa fa-clock"></i>1 day
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>

                      <li className="relative">
                        <a
                          className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700"
                          href="javascript:;"
                        >
                          <div className="flex py-1">
                            <div className="inline-flex items-center justify-center my-auto mr-4 text-white transition-all duration-200 ease-nav-brand text-sm bg-gradient-to-tl from-slate-600 to-slate-300 h-9 w-9 rounded-xl">
                              <svg
                                width="12px"
                                height="12px"
                                viewBox="0 0 43 36"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                              >
                                <title>credit-card</title>
                                <g
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <g
                                    transform="translate(-2169.000000, -745.000000)"
                                    fill="#FFFFFF"
                                    fill-rule="nonzero"
                                  >
                                    <g transform="translate(1716.000000, 291.000000)">
                                      <g transform="translate(453.000000, 454.000000)">
                                        <path
                                          className="color-background"
                                          d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                          opacity="0.593633743"
                                        ></path>
                                        <path
                                          className="color-background"
                                          d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                        ></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-1 font-normal leading-normal text-sm">
                                Payment successfully completed
                              </h6>
                              <p className="mb-0 leading-tight text-xs text-slate-400">
                                <i className="mr-1 fa fa-clock"></i>2 days
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        <div className="w-full mx-auto  mt-4">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
              <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="flex-auto p-4">
                  <div className="flex flex-row -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p className="mb-0 font-sans font-semibold leading-normal text-sm">
                          Today's Money
                        </p>
                        <h5 className="mb-0 font-bold">
                          $53,000
                          <span className="leading-normal text-sm font-weight-bolder text-lime-500">
                            +55%
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="px-3 text-right basis-1/3">
                      <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                        <i className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- card2 --> */}
            <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
              <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="flex-auto p-4">
                  <div className="flex flex-row -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p className="mb-0 font-sans font-semibold leading-normal text-sm">
                          Today's Users
                        </p>
                        <h5 className="mb-0 font-bold">
                          2,300
                          <span className="leading-normal text-sm font-weight-bolder text-lime-500">
                            +3%
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="px-3 text-right basis-1/3">
                      <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                        <i className="ni leading-none ni-world text-lg relative top-3.5 text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
              <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="flex-auto p-4">
                  <div className="flex flex-row -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p className="mb-0 font-sans font-semibold leading-normal text-sm">
                          Today's Users
                        </p>
                        <h5 className="mb-0 font-bold">
                          2,300
                          <span className="leading-normal text-sm font-weight-bolder text-lime-500">
                            +3%
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="px-3 text-right basis-1/3">
                      <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                        <i className="ni leading-none ni-world text-lg relative top-3.5 text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
              <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="flex-auto p-4">
                  <div className="flex flex-row -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p className="mb-0 font-sans font-semibold leading-normal text-sm">
                          Today's Users
                        </p>
                        <h5 className="mb-0 font-bold">
                          2,300
                          <span className="leading-normal text-sm font-weight-bolder text-lime-500">
                            +3%
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="px-3 text-right basis-1/3">
                      <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                        <i className="ni leading-none ni-world text-lg relative top-3.5 text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap my-6 -mx-3">
            {/* <!-- card 1 --> */}

            <div className="w-full max-w-full px-3 mt-0 mb-6 md:mb-0 md:w-1/2 md:flex-none lg:w-2/3 lg:flex-none">
              <div className="border-black/12.5 shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
                  <div className="flex flex-wrap mt-0 -mx-3">
                    <div className="flex-none w-7/12 max-w-full px-3 mt-0 lg:w-1/2 lg:flex-none">
                      <h6>Projects</h6>
                      <p className="mb-0 leading-normal text-sm">
                        <i className="fa fa-check text-cyan-500"></i>
                        <span className="ml-1 font-semibold">30 done</span>
                        this month
                      </p>
                    </div>
                    <div className="flex-none w-5/12 max-w-full px-3 my-auto text-right lg:w-1/2 lg:flex-none">
                      <div className="relative pr-6 lg:float-right">
                        <a
                          dropdown-trigger
                          className="cursor-pointer"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-v text-slate-400"></i>
                        </a>
                        <p className="hidden transform-dropdown-show"></p>

                        <ul
                          dropdown-menu
                          className="z-100 text-sm transform-dropdown shadow-soft-3xl duration-250 before:duration-350 before:font-awesome before:ease-soft min-w-44 -ml-34 before:text-5.5 pointer-events-none absolute top-0 m-0 mt-2 list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:top-0 before:right-7 before:left-auto before:z-40 before:text-white before:transition-all before:content-['\f0d8']"
                        >
                          <li className="relative">
                            <a
                              className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300"
                              href="javascript:;"
                            >
                              Action
                            </a>
                          </li>
                          <li className="relative">
                            <a
                              className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300"
                              href="javascript:;"
                            >
                              Another action
                            </a>
                          </li>
                          <li className="relative">
                            <a
                              className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300"
                              href="javascript:;"
                            >
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-auto p-6 px-0 pb-2">
                  <div className="overflow-x-auto">
                    <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                      <thead className="align-bottom">
                        <tr>
                          <th className="px-6 py-3 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                            Companies
                          </th>
                          <th className="px-6 py-3 pl-2 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                            Members
                          </th>
                          <th className="px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                            Budget
                          </th>
                          <th className="px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                            Completion
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-xd.svg"
                                  className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl"
                                  alt="xd"
                                />
                              </div>
                              <div className="flex flex-col justify-center">
                                <h6 className="mb-0 leading-normal text-sm">
                                  Soft UI XD Version
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="mt-2 avatar-group">
                              <a
                                href="javascript:;"
                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                data-target="tooltip_trigger"
                                data-placement="bottom"
                              >
                                <img
                                  src="../assets/img/team-1.jpg"
                                  className="w-full rounded-full"
                                  alt="team1"
                                />
                              </a>
                              <div
                                data-target="tooltip"
                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                role="tooltip"
                              >
                                Ryan Tompson
                                <div
                                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                  data-popper-arrow
                                ></div>
                              </div>
                              <a
                                href="javascript:;"
                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                data-target="tooltip_trigger"
                                data-placement="bottom"
                              >
                                <img
                                  src="../assets/img/team-2.jpg"
                                  className="w-full rounded-full"
                                  alt="team2"
                                />
                              </a>
                              <div
                                data-target="tooltip"
                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                role="tooltip"
                              >
                                Romina Hadid
                                <div
                                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                  data-popper-arrow
                                ></div>
                              </div>
                              <a
                                href="javascript:;"
                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                data-target="tooltip_trigger"
                                data-placement="bottom"
                              >
                                <img
                                  src="../assets/img/team-3.jpg"
                                  className="w-full rounded-full"
                                  alt="team3"
                                />
                              </a>
                              <div
                                data-target="tooltip"
                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                role="tooltip"
                              >
                                Alexander Smith
                                <div
                                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                  data-popper-arrow
                                ></div>
                              </div>
                              <a
                                href="javascript:;"
                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                data-target="tooltip_trigger"
                                data-placement="bottom"
                              >
                                <img
                                  src="../assets/img/team-4.jpg"
                                  className="w-full rounded-full"
                                  alt="team4"
                                />
                              </a>
                              <div
                                data-target="tooltip"
                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                role="tooltip"
                              >
                                Jessica Doe
                                <div
                                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                  data-popper-arrow
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap">
                            <span className="font-semibold leading-tight text-xs">
                              {" "}
                              $14,000{" "}
                            </span>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="w-3/4 mx-auto">
                              <div>
                                <div>
                                  <span className="font-semibold leading-tight text-xs">
                                    60%
                                  </span>
                                </div>
                              </div>
                              <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                <div
                                  className="duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5 w-3/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all"
                                  role="progressbar"
                                  aria-valuenow="60"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-atlassian.svg"
                                  className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl"
                                  alt="atlassian"
                                />
                              </div>
                              <div className="flex flex-col justify-center">
                                <h6 className="mb-0 leading-normal text-sm">
                                  Add Progress Track
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="mt-2 avatar-group">
                              <a
                                href="javascript:;"
                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                data-target="tooltip_trigger"
                                data-placement="bottom"
                              >
                                <img
                                  src="../assets/img/team-2.jpg"
                                  className="w-full rounded-full"
                                  alt="team5"
                                />
                              </a>
                              <div
                                data-target="tooltip"
                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                role="tooltip"
                              >
                                Romina Hadid
                                <div
                                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                  data-popper-arrow
                                ></div>
                              </div>
                              <a
                                href="javascript:;"
                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                data-target="tooltip_trigger"
                                data-placement="bottom"
                              >
                                <img
                                  src="../assets/img/team-4.jpg"
                                  className="w-full rounded-full"
                                  alt="team6"
                                />
                              </a>
                              <div
                                data-target="tooltip"
                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                role="tooltip"
                              >
                                Jessica Doe
                                <div
                                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                  data-popper-arrow
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap">
                            <span className="font-semibold leading-tight text-xs">
                              {" "}
                              $3,000{" "}
                            </span>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="w-3/4 mx-auto">
                              <div>
                                <div>
                                  <span className="font-semibold leading-tight text-xs">
                                    10%
                                  </span>
                                </div>
                              </div>
                              <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                <div
                                  className="duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 w-1/10 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all"
                                  role="progressbar"
                                  aria-valuenow="10"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-slack.svg"
                                  className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl"
                                  alt="team7"
                                />
                              </div>
                              <div className="flex flex-col justify-center">
                                <h6 className="mb-0 leading-normal text-sm">
                                  Fix Platform Errors
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="mt-2 avatar-group">
                              <a
                                href="javascript:;"
                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                data-target="tooltip_trigger"
                                data-placement="bottom"
                              >
                                <img
                                  src="../assets/img/team-3.jpg"
                                  className="w-full rounded-full"
                                  alt="team8"
                                />
                              </a>
                              <div
                                data-target="tooltip"
                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                role="tooltip"
                              >
                                Romina Hadid
                                <div
                                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                  data-popper-arrow
                                ></div>
                              </div>
                              <a
                                href="javascript:;"
                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                data-target="tooltip_trigger"
                                data-placement="bottom"
                              >
                                <img
                                  src="../assets/img/team-1.jpg"
                                  className="w-full rounded-full"
                                  alt="team9"
                                />
                              </a>
                              <div
                                data-target="tooltip"
                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                role="tooltip"
                              >
                                Jessica Doe
                                <div
                                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                  data-popper-arrow
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap">
                            <span className="font-semibold leading-tight text-xs">
                              {" "}
                              Not set{" "}
                            </span>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="w-3/4 mx-auto">
                              <div>
                                <div>
                                  <span className="font-semibold leading-tight text-xs">
                                    100%
                                  </span>
                                </div>
                              </div>
                              <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                <div
                                  className="duration-600 ease-soft bg-gradient-to-tl from-green-600 to-lime-400 -mt-0.38 -ml-px flex h-1.5 w-full flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all"
                                  role="progressbar"
                                  aria-valuenow="100"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-spotify.svg"
                                  className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl"
                                  alt="spotify"
                                />
                              </div>
                              <div className="flex flex-col justify-center">
                                <h6 className="mb-0 leading-normal text-sm">
                                  Launch our Mobile App
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="mt-2 avatar-group">
                              <a
                                href="javascript:;"
                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                data-target="tooltip_trigger"
                                data-placement="bottom"
                              >
                                <img
                                  src="../assets/img/team-4.jpg"
                                  className="w-full rounded-full"
                                  alt="user1"
                                />
                              </a>
                              <div
                                data-target="tooltip"
                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                role="tooltip"
                              >
                                Ryan Tompson
                                <div
                                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                  data-popper-arrow
                                ></div>
                              </div>
                              <a
                                href="javascript:;"
                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                data-target="tooltip_trigger"
                                data-placement="bottom"
                              >
                                <img
                                  src="../assets/img/team-3.jpg"
                                  className="w-full rounded-full"
                                  alt="user2"
                                />
                              </a>
                              <div
                                data-target="tooltip"
                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                role="tooltip"
                              >
                                Romina Hadid
                                <div
                                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                  data-popper-arrow
                                ></div>
                              </div>
                              <a
                                href="javascript:;"
                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                data-target="tooltip_trigger"
                                data-placement="bottom"
                              >
                                <img
                                  src="../assets/img/team-4.jpg"
                                  className="w-full rounded-full"
                                  alt="user3"
                                />
                              </a>
                              <div
                                data-target="tooltip"
                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                role="tooltip"
                              >
                                Alexander Smith
                                <div
                                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                  data-popper-arrow
                                ></div>
                              </div>
                              <a
                                href="javascript:;"
                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                data-target="tooltip_trigger"
                                data-placement="bottom"
                              >
                                <img
                                  src="../assets/img/team-1.jpg"
                                  className="w-full rounded-full"
                                  alt="user4"
                                />
                              </a>
                              <div
                                data-target="tooltip"
                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                role="tooltip"
                              >
                                Jessica Doe
                                <div
                                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                  data-popper-arrow
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap">
                            <span className="font-semibold leading-tight text-xs">
                              {" "}
                              $20,500{" "}
                            </span>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="w-3/4 mx-auto">
                              <div>
                                <div>
                                  <span className="font-semibold leading-tight text-xs">
                                    100%
                                  </span>
                                </div>
                              </div>
                              <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                <div
                                  className="duration-600 ease-soft bg-gradient-to-tl from-green-600 to-lime-400 -mt-0.38 -ml-px flex h-1.5 w-full flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all"
                                  role="progressbar"
                                  aria-valuenow="100"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-jira.svg"
                                  className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl"
                                  alt="jira"
                                />
                              </div>
                              <div className="flex flex-col justify-center">
                                <h6 className="mb-0 leading-normal text-sm">
                                  Add the New Pricing Page
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="mt-2 avatar-group">
                              <a
                                href="javascript:;"
                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                data-target="tooltip_trigger"
                                data-placement="bottom"
                              >
                                <img
                                  src="../assets/img/team-4.jpg"
                                  className="w-full rounded-full"
                                  alt="user5"
                                />
                              </a>
                              <div
                                data-target="tooltip"
                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                role="tooltip"
                              >
                                Ryan Tompson
                                <div
                                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                  data-popper-arrow
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap">
                            <span className="font-semibold leading-tight text-xs">
                              {" "}
                              $500{" "}
                            </span>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="w-3/4 mx-auto">
                              <div>
                                <div>
                                  <span className="font-semibold leading-tight text-xs">
                                    25%
                                  </span>
                                </div>
                              </div>
                              <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                <div
                                  className="duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5 w-1/4 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all"
                                  role="progressbar"
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="25"
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-0 whitespace-nowrap">
                            <div className="flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-invision.svg"
                                  className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl"
                                  alt="invision"
                                />
                              </div>
                              <div className="flex flex-col justify-center">
                                <h6 className="mb-0 leading-normal text-sm">
                                  Redesign New Online Shop
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-0 whitespace-nowrap">
                            <div className="mt-2 avatar-group">
                              <a
                                href="javascript:;"
                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                data-target="tooltip_trigger"
                                data-placement="bottom"
                              >
                                <img
                                  src="../assets/img/team-1.jpg"
                                  className="w-full rounded-full"
                                  alt="user6"
                                />
                              </a>
                              <div
                                data-target="tooltip"
                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                role="tooltip"
                              >
                                Ryan Tompson
                                <div
                                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                  data-popper-arrow
                                ></div>
                              </div>
                              <a
                                href="javascript:;"
                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                data-target="tooltip_trigger"
                                data-placement="bottom"
                              >
                                <img
                                  src="../assets/img/team-4.jpg"
                                  className="w-full rounded-full"
                                  alt="user7"
                                />
                              </a>
                              <div
                                data-target="tooltip"
                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                role="tooltip"
                              >
                                Jessica Doe
                                <div
                                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                  data-popper-arrow
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 leading-normal text-center align-middle bg-transparent border-0 text-sm whitespace-nowrap">
                            <span className="font-semibold leading-tight text-xs">
                              {" "}
                              $2,000{" "}
                            </span>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-0 whitespace-nowrap">
                            <div className="w-3/4 mx-auto">
                              <div>
                                <div>
                                  <span className="font-semibold leading-tight text-xs">
                                    40%
                                  </span>
                                </div>
                              </div>
                              <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                <div
                                  className="duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5 w-2/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all"
                                  role="progressbar"
                                  aria-valuenow="40"
                                  aria-valuemin="0"
                                  aria-valuemax="40"
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- card 2 --> */}

            <div className="w-full max-w-full px-3 md:w-1/2 md:flex-none lg:w-1/3 lg:flex-none">
              <div className="border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
                  <h6>Orders overview</h6>
                  <p className="leading-normal text-sm">
                    <i className="fa fa-arrow-up text-lime-500"></i>
                    <span className="font-semibold">24%</span> this month
                  </p>
                </div>
                <div className="flex-auto p-4">
                  <div className="before:border-r-solid relative before:absolute before:top-0 before:left-4 before:h-full before:border-r-2 before:border-r-slate-100 before:content-[''] before:lg:-ml-px">
                    <div className="relative mb-4 mt-0 after:clear-both after:table after:content-['']">
                      <span className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                        <i className="relative z-10 text-transparent ni leading-none ni-bell-55 leading-pro bg-gradient-to-tl from-green-600 to-lime-400 bg-clip-text fill-transparent"></i>
                      </span>
                      <div className="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                        <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700">
                          $2400, Design changes
                        </h6>
                        <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">
                          22 DEC 7:20 PM
                        </p>
                      </div>
                    </div>
                    <div className="relative mb-4 after:clear-both after:table after:content-['']">
                      <span className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                        <i className="relative z-10 text-transparent ni leading-none ni-html5 leading-pro bg-gradient-to-tl from-red-600 to-rose-400 bg-clip-text fill-transparent"></i>
                      </span>
                      <div className="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                        <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700">
                          New order #1832412
                        </h6>
                        <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">
                          21 DEC 11 PM
                        </p>
                      </div>
                    </div>
                    <div className="relative mb-4 after:clear-both after:table after:content-['']">
                      <span className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                        <i className="relative z-10 text-transparent ni leading-none ni-cart leading-pro bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text fill-transparent"></i>
                      </span>
                      <div className="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                        <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700">
                          Server payments for April
                        </h6>
                        <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">
                          21 DEC 9:34 PM
                        </p>
                      </div>
                    </div>
                    <div className="relative mb-4 after:clear-both after:table after:content-['']">
                      <span className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                        <i className="relative z-10 text-transparent ni leading-none ni-credit-card leading-pro bg-gradient-to-tl from-red-500 to-yellow-400 bg-clip-text fill-transparent"></i>
                      </span>
                      <div className="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                        <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700">
                          New card added for order #4395133
                        </h6>
                        <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">
                          20 DEC 2:20 AM
                        </p>
                      </div>
                    </div>
                    <div className="relative mb-4 after:clear-both after:table after:content-['']">
                      <span className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                        <i className="relative z-10 text-transparent ni leading-none ni-key-25 leading-pro bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text fill-transparent"></i>
                      </span>
                      <div className="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                        <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700">
                          Unlock packages for development
                        </h6>
                        <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">
                          18 DEC 4:54 AM
                        </p>
                      </div>
                    </div>
                    <div className="relative mb-0 after:clear-both after:table after:content-['']">
                      <span className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                        <i className="relative z-10 text-transparent ni leading-none ni-money-coins leading-pro bg-gradient-to-tl from-gray-900 to-slate-800 bg-clip-text fill-transparent"></i>
                      </span>
                      <div className="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                        <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700">
                          New order #9583120
                        </h6>
                        <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">
                          17 DEC
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap my-6 -mx-3">
            {/* <!-- card 1 --> */}

            <div className="w-full max-w-full px-3 mt-0 mb-6 md:mb-0 md:w-1/2 md:flex-none lg:w-2/3 lg:flex-none">
              <div className="border-black/12.5 shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
                  <div className="flex flex-wrap mt-0 -mx-3">
                    <div className="flex-none w-7/12 max-w-full px-3 mt-0 lg:w-1/2 lg:flex-none">
                      <h6>Projects</h6>
                      <p className="mb-0 leading-normal text-sm">
                        <i className="fa fa-check text-cyan-500"></i>
                        <span className="ml-1 font-semibold">30 done</span>
                        this month
                      </p>
                    </div>
                    <div className="flex-none w-5/12 max-w-full px-3 my-auto text-right lg:w-1/2 lg:flex-none">
                      <div className="relative pr-6 lg:float-right">
                        <a
                          dropdown-trigger
                          className="cursor-pointer"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-v text-slate-400"></i>
                        </a>
                        <p className="hidden transform-dropdown-show"></p>

                        <ul
                          dropdown-menu
                          className="z-100 text-sm transform-dropdown shadow-soft-3xl duration-250 before:duration-350 before:font-awesome before:ease-soft min-w-44 -ml-34 before:text-5.5 pointer-events-none absolute top-0 m-0 mt-2 list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:top-0 before:right-7 before:left-auto before:z-40 before:text-white before:transition-all before:content-['\f0d8']"
                        >
                          <li className="relative">
                            <a
                              className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300"
                              href="javascript:;"
                            >
                              Action
                            </a>
                          </li>
                          <li className="relative">
                            <a
                              className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300"
                              href="javascript:;"
                            >
                              Another action
                            </a>
                          </li>
                          <li className="relative">
                            <a
                              className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300"
                              href="javascript:;"
                            >
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-auto p-6 px-0 pb-2">
                  <div className="overflow-x-auto">
                    <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                      <thead className="align-bottom">
                        <tr>
                          <th className="px-6 py-3 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                            Companies
                          </th>
                          <th className="px-6 py-3 pl-2 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                            Members
                          </th>
                          <th className="px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                            Budget
                          </th>
                          <th className="px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                            Completion
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-xd.svg"
                                  className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl"
                                  alt="xd"
                                />
                              </div>
                              <div className="flex flex-col justify-center">
                                <h6 className="mb-0 leading-normal text-sm">
                                  Soft UI XD Version
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="mt-2 avatar-group">
                              <a
                                href="javascript:;"
                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                data-target="tooltip_trigger"
                                data-placement="bottom"
                              >
                                <img
                                  src="../assets/img/team-1.jpg"
                                  className="w-full rounded-full"
                                  alt="team1"
                                />
                              </a>
                              <div
                                data-target="tooltip"
                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                role="tooltip"
                              >
                                Ryan Tompson
                                <div
                                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                  data-popper-arrow
                                ></div>
                              </div>
                              <a
                                href="javascript:;"
                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                data-target="tooltip_trigger"
                                data-placement="bottom"
                              >
                                <img
                                  src="../assets/img/team-2.jpg"
                                  className="w-full rounded-full"
                                  alt="team2"
                                />
                              </a>
                              <div
                                data-target="tooltip"
                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                role="tooltip"
                              >
                                Romina Hadid
                                <div
                                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                  data-popper-arrow
                                ></div>
                              </div>
                              <a
                                href="javascript:;"
                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                data-target="tooltip_trigger"
                                data-placement="bottom"
                              >
                                <img
                                  src="../assets/img/team-3.jpg"
                                  className="w-full rounded-full"
                                  alt="team3"
                                />
                              </a>
                              <div
                                data-target="tooltip"
                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                role="tooltip"
                              >
                                Alexander Smith
                                <div
                                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                  data-popper-arrow
                                ></div>
                              </div>
                              <a
                                href="javascript:;"
                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                data-target="tooltip_trigger"
                                data-placement="bottom"
                              >
                                <img
                                  src="../assets/img/team-4.jpg"
                                  className="w-full rounded-full"
                                  alt="team4"
                                />
                              </a>
                              <div
                                data-target="tooltip"
                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                role="tooltip"
                              >
                                Jessica Doe
                                <div
                                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                  data-popper-arrow
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap">
                            <span className="font-semibold leading-tight text-xs">
                              {" "}
                              $14,000{" "}
                            </span>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="w-3/4 mx-auto">
                              <div>
                                <div>
                                  <span className="font-semibold leading-tight text-xs">
                                    60%
                                  </span>
                                </div>
                              </div>
                              <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                <div
                                  className="duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5 w-3/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all"
                                  role="progressbar"
                                  aria-valuenow="60"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-atlassian.svg"
                                  className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl"
                                  alt="atlassian"
                                />
                              </div>
                              <div className="flex flex-col justify-center">
                                <h6 className="mb-0 leading-normal text-sm">
                                  Add Progress Track
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="mt-2 avatar-group">
                              <a
                                href="javascript:;"
                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                data-target="tooltip_trigger"
                                data-placement="bottom"
                              >
                                <img
                                  src="../assets/img/team-2.jpg"
                                  className="w-full rounded-full"
                                  alt="team5"
                                />
                              </a>
                              <div
                                data-target="tooltip"
                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                role="tooltip"
                              >
                                Romina Hadid
                                <div
                                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                  data-popper-arrow
                                ></div>
                              </div>
                              <a
                                href="javascript:;"
                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                data-target="tooltip_trigger"
                                data-placement="bottom"
                              >
                                <img
                                  src="../assets/img/team-4.jpg"
                                  className="w-full rounded-full"
                                  alt="team6"
                                />
                              </a>
                              <div
                                data-target="tooltip"
                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                role="tooltip"
                              >
                                Jessica Doe
                                <div
                                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                  data-popper-arrow
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap">
                            <span className="font-semibold leading-tight text-xs">
                              {" "}
                              $3,000{" "}
                            </span>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="w-3/4 mx-auto">
                              <div>
                                <div>
                                  <span className="font-semibold leading-tight text-xs">
                                    10%
                                  </span>
                                </div>
                              </div>
                              <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                <div
                                  className="duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 w-1/10 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all"
                                  role="progressbar"
                                  aria-valuenow="10"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-slack.svg"
                                  className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl"
                                  alt="team7"
                                />
                              </div>
                              <div className="flex flex-col justify-center">
                                <h6 className="mb-0 leading-normal text-sm">
                                  Fix Platform Errors
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="mt-2 avatar-group">
                              <a
                                href="javascript:;"
                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                data-target="tooltip_trigger"
                                data-placement="bottom"
                              >
                                <img
                                  src="../assets/img/team-3.jpg"
                                  className="w-full rounded-full"
                                  alt="team8"
                                />
                              </a>
                              <div
                                data-target="tooltip"
                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                role="tooltip"
                              >
                                Romina Hadid
                                <div
                                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                  data-popper-arrow
                                ></div>
                              </div>
                              <a
                                href="javascript:;"
                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                data-target="tooltip_trigger"
                                data-placement="bottom"
                              >
                                <img
                                  src="../assets/img/team-1.jpg"
                                  className="w-full rounded-full"
                                  alt="team9"
                                />
                              </a>
                              <div
                                data-target="tooltip"
                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                role="tooltip"
                              >
                                Jessica Doe
                                <div
                                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                  data-popper-arrow
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap">
                            <span className="font-semibold leading-tight text-xs">
                              {" "}
                              Not set{" "}
                            </span>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="w-3/4 mx-auto">
                              <div>
                                <div>
                                  <span className="font-semibold leading-tight text-xs">
                                    100%
                                  </span>
                                </div>
                              </div>
                              <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                <div
                                  className="duration-600 ease-soft bg-gradient-to-tl from-green-600 to-lime-400 -mt-0.38 -ml-px flex h-1.5 w-full flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all"
                                  role="progressbar"
                                  aria-valuenow="100"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-spotify.svg"
                                  className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl"
                                  alt="spotify"
                                />
                              </div>
                              <div className="flex flex-col justify-center">
                                <h6 className="mb-0 leading-normal text-sm">
                                  Launch our Mobile App
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="mt-2 avatar-group">
                              <a
                                href="javascript:;"
                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                data-target="tooltip_trigger"
                                data-placement="bottom"
                              >
                                <img
                                  src="../assets/img/team-4.jpg"
                                  className="w-full rounded-full"
                                  alt="user1"
                                />
                              </a>
                              <div
                                data-target="tooltip"
                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                role="tooltip"
                              >
                                Ryan Tompson
                                <div
                                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                  data-popper-arrow
                                ></div>
                              </div>
                              <a
                                href="javascript:;"
                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                data-target="tooltip_trigger"
                                data-placement="bottom"
                              >
                                <img
                                  src="../assets/img/team-3.jpg"
                                  className="w-full rounded-full"
                                  alt="user2"
                                />
                              </a>
                              <div
                                data-target="tooltip"
                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                role="tooltip"
                              >
                                Romina Hadid
                                <div
                                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                  data-popper-arrow
                                ></div>
                              </div>
                              <a
                                href="javascript:;"
                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                data-target="tooltip_trigger"
                                data-placement="bottom"
                              >
                                <img
                                  src="../assets/img/team-4.jpg"
                                  className="w-full rounded-full"
                                  alt="user3"
                                />
                              </a>
                              <div
                                data-target="tooltip"
                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                role="tooltip"
                              >
                                Alexander Smith
                                <div
                                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                  data-popper-arrow
                                ></div>
                              </div>
                              <a
                                href="javascript:;"
                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                data-target="tooltip_trigger"
                                data-placement="bottom"
                              >
                                <img
                                  src="../assets/img/team-1.jpg"
                                  className="w-full rounded-full"
                                  alt="user4"
                                />
                              </a>
                              <div
                                data-target="tooltip"
                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                role="tooltip"
                              >
                                Jessica Doe
                                <div
                                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                  data-popper-arrow
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap">
                            <span className="font-semibold leading-tight text-xs">
                              {" "}
                              $20,500{" "}
                            </span>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="w-3/4 mx-auto">
                              <div>
                                <div>
                                  <span className="font-semibold leading-tight text-xs">
                                    100%
                                  </span>
                                </div>
                              </div>
                              <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                <div
                                  className="duration-600 ease-soft bg-gradient-to-tl from-green-600 to-lime-400 -mt-0.38 -ml-px flex h-1.5 w-full flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all"
                                  role="progressbar"
                                  aria-valuenow="100"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-jira.svg"
                                  className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl"
                                  alt="jira"
                                />
                              </div>
                              <div className="flex flex-col justify-center">
                                <h6 className="mb-0 leading-normal text-sm">
                                  Add the New Pricing Page
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="mt-2 avatar-group">
                              <a
                                href="javascript:;"
                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                data-target="tooltip_trigger"
                                data-placement="bottom"
                              >
                                <img
                                  src="../assets/img/team-4.jpg"
                                  className="w-full rounded-full"
                                  alt="user5"
                                />
                              </a>
                              <div
                                data-target="tooltip"
                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                role="tooltip"
                              >
                                Ryan Tompson
                                <div
                                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                  data-popper-arrow
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap">
                            <span className="font-semibold leading-tight text-xs">
                              {" "}
                              $500{" "}
                            </span>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                            <div className="w-3/4 mx-auto">
                              <div>
                                <div>
                                  <span className="font-semibold leading-tight text-xs">
                                    25%
                                  </span>
                                </div>
                              </div>
                              <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                <div
                                  className="duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5 w-1/4 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all"
                                  role="progressbar"
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="25"
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-0 whitespace-nowrap">
                            <div className="flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-invision.svg"
                                  className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl"
                                  alt="invision"
                                />
                              </div>
                              <div className="flex flex-col justify-center">
                                <h6 className="mb-0 leading-normal text-sm">
                                  Redesign New Online Shop
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-0 whitespace-nowrap">
                            <div className="mt-2 avatar-group">
                              <a
                                href="javascript:;"
                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                data-target="tooltip_trigger"
                                data-placement="bottom"
                              >
                                <img
                                  src="../assets/img/team-1.jpg"
                                  className="w-full rounded-full"
                                  alt="user6"
                                />
                              </a>
                              <div
                                data-target="tooltip"
                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                role="tooltip"
                              >
                                Ryan Tompson
                                <div
                                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                  data-popper-arrow
                                ></div>
                              </div>
                              <a
                                href="javascript:;"
                                className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                                data-target="tooltip_trigger"
                                data-placement="bottom"
                              >
                                <img
                                  src="../assets/img/team-4.jpg"
                                  className="w-full rounded-full"
                                  alt="user7"
                                />
                              </a>
                              <div
                                data-target="tooltip"
                                className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                role="tooltip"
                              >
                                Jessica Doe
                                <div
                                  className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                  data-popper-arrow
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 leading-normal text-center align-middle bg-transparent border-0 text-sm whitespace-nowrap">
                            <span className="font-semibold leading-tight text-xs">
                              {" "}
                              $2,000{" "}
                            </span>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-0 whitespace-nowrap">
                            <div className="w-3/4 mx-auto">
                              <div>
                                <div>
                                  <span className="font-semibold leading-tight text-xs">
                                    40%
                                  </span>
                                </div>
                              </div>
                              <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                <div
                                  className="duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5 w-2/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all"
                                  role="progressbar"
                                  aria-valuenow="40"
                                  aria-valuemin="0"
                                  aria-valuemax="40"
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- card 2 --> */}

            <div className="w-full max-w-full px-3 md:w-1/2 md:flex-none lg:w-1/3 lg:flex-none">
              <div className="border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
                  <h6>Orders overview</h6>
                  <p className="leading-normal text-sm">
                    <i className="fa fa-arrow-up text-lime-500"></i>
                    <span className="font-semibold">24%</span> this month
                  </p>
                </div>
                <div className="flex-auto p-4">
                  <div className="before:border-r-solid relative before:absolute before:top-0 before:left-4 before:h-full before:border-r-2 before:border-r-slate-100 before:content-[''] before:lg:-ml-px">
                    <div className="relative mb-4 mt-0 after:clear-both after:table after:content-['']">
                      <span className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                        <i className="relative z-10 text-transparent ni leading-none ni-bell-55 leading-pro bg-gradient-to-tl from-green-600 to-lime-400 bg-clip-text fill-transparent"></i>
                      </span>
                      <div className="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                        <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700">
                          $2400, Design changes
                        </h6>
                        <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">
                          22 DEC 7:20 PM
                        </p>
                      </div>
                    </div>
                    <div className="relative mb-4 after:clear-both after:table after:content-['']">
                      <span className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                        <i className="relative z-10 text-transparent ni leading-none ni-html5 leading-pro bg-gradient-to-tl from-red-600 to-rose-400 bg-clip-text fill-transparent"></i>
                      </span>
                      <div className="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                        <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700">
                          New order #1832412
                        </h6>
                        <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">
                          21 DEC 11 PM
                        </p>
                      </div>
                    </div>
                    <div className="relative mb-4 after:clear-both after:table after:content-['']">
                      <span className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                        <i className="relative z-10 text-transparent ni leading-none ni-cart leading-pro bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text fill-transparent"></i>
                      </span>
                      <div className="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                        <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700">
                          Server payments for April
                        </h6>
                        <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">
                          21 DEC 9:34 PM
                        </p>
                      </div>
                    </div>
                    <div className="relative mb-4 after:clear-both after:table after:content-['']">
                      <span className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                        <i className="relative z-10 text-transparent ni leading-none ni-credit-card leading-pro bg-gradient-to-tl from-red-500 to-yellow-400 bg-clip-text fill-transparent"></i>
                      </span>
                      <div className="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                        <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700">
                          New card added for order #4395133
                        </h6>
                        <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">
                          20 DEC 2:20 AM
                        </p>
                      </div>
                    </div>
                    <div className="relative mb-4 after:clear-both after:table after:content-['']">
                      <span className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                        <i className="relative z-10 text-transparent ni leading-none ni-key-25 leading-pro bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text fill-transparent"></i>
                      </span>
                      <div className="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                        <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700">
                          Unlock packages for development
                        </h6>
                        <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">
                          18 DEC 4:54 AM
                        </p>
                      </div>
                    </div>
                    <div className="relative mb-0 after:clear-both after:table after:content-['']">
                      <span className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                        <i className="relative z-10 text-transparent ni leading-none ni-money-coins leading-pro bg-gradient-to-tl from-gray-900 to-slate-800 bg-clip-text fill-transparent"></i>
                      </span>
                      <div className="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                        <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700">
                          New order #9583120
                        </h6>
                        <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">
                          17 DEC
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
