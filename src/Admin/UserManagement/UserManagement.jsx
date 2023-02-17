import React, { useEffect, useState } from "react";
import "./UserManagement.css";
import logo from "../../assets/img/Logo1.png";
import { Link, useNavigate } from "react-router-dom";
import { allUser, blckUser, unblckUser } from "../../API";

function UserManagement() {

  const navigate = useNavigate()
  const [users, setUsers] = useState([])
  const [reRender, setReRender] = useState(false)
  const token = localStorage.getItem("jwt")

  const allUsers = async () => {
    await allUser(token).then((result) => {
      setUsers(result.data.data.users);
      setReRender(!reRender)
    })
  }

  const blockUser = async (id) => {
    await blckUser(id, token).then(() => {
      navigate("/admin/manageUser")
      setReRender(!reRender)
    })
  }

  const unblockUser = async (id) => {
    await unblckUser(id, token).then(() => {
      navigate("/admin/manageUser")
      setReRender(!reRender)
    })
  }

  useEffect(() => {
    allUsers()
  }, [reRender])

  const logout = () => {
    localStorage.clear();
  }

  return (
    <div>
      <div className="grid grid-cols-12">
      <div className="z-10 my-4 mx-3 col-span-3 mt-20">
          <div className="w-full max-w-full px-3 lg:w-80 lg:flex-none fixed">
            <div className="border-black shadow-soft-2xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
              <div className="border-black mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
                <img className="ml-7 mt-10 w-40" src={logo} alt="" />
              </div>
              <div className="flex-auto ">
                <div className="">
                  <ul className="flex flex-col pl-0 mb-0">
                    <li className="mt-14 w-full">
                      <Link
                        className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors hover:rounded-xl hover:bg-zinc-300"
                        to="/admin/dashboard"
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
                      </Link>
                    </li>
                    <li className="mt-2 w-full">
                      <Link
                        className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors hover:rounded-xl hover:bg-zinc-300"
                        to="/admin/manageUser"
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
                      </Link>
                    </li>
                    <li className="mt-2 w-full">
                      <Link
                        className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors hover:rounded-xl hover:bg-zinc-300"
                        to="/admin/manageVendor"
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
                      </Link>
                    </li>

                    <li className="mt-2 w-full">
                      <Link
                        className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors hover:rounded-xl hover:bg-zinc-300"
                        to="/admin/manageCategory"
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
                      </Link>
                    </li>
                    <li className="mt-2 w-full">
                      <Link
                        className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors hover:rounded-xl hover:bg-zinc-300"
                        to="/admin/login"
                        onClick={() => logout()}
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
                      </Link>
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
                    User Management
                  </li>
                </ol>
                <h6 className="mb-0 font-bold capitalize">User Management</h6>
              </nav>

              <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
                <div className="flex items-center md:ml-auto md:pr-4">

                </div>
                <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
                  <li className="flex items-center">
                    <a
                      href=""
                      className="block px-0 py-2 font-semibold transition-all ease-nav-brand text-sm text-slate-500"
                    >
                      <i className="fa fa-user sm:mr-1"></i>
                      <span className="hidden sm:inline">Sign In</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="w-full px-6 py-6 mx-auto mt-7">

            <div className="flex flex-wrap -mx-3 ">
              <div className="flex-none w-full max-w-full px-3">
                <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-2xl rounded-2xl bg-clip-border">
                  <div className="p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                    <h6 className="font-semibold">User Management</h6>
                  </div>
                  <div className="flex-auto px-0 pt-0 pb-2">
                    <div className="p-0 overflow-x-auto">
                      <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                        <thead className="align-bottom">
                          <tr>
                            <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">User</th>
                            <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Username</th>
                            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Phone Number</th>
                            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map((user) => (
                            <tr>
                              <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                <div className="flex px-2 py-1">
                                  <div>
                                    <img src="../assets/img/team-2.jpg" className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="user1" />
                                  </div>
                                  <div className="flex flex-col justify-center">
                                    <h6 className="mb-0 leading-normal text-sm">{user.fullName}</h6>
                                  </div>
                                </div>
                              </td>
                              <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                <p className="mb-0 font-semibold leading-tight text-xs">{user.userName}</p>
                              </td>
                              <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                <span className="font-semibold leading-tight text-xs text-slate-400">{user.phone}</span>
                              </td>
                              <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
                                <span className="bg-gradient-to-tl from-green-600 to-lime-400 px-3 text-xs rounded-lg py-2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">{user.status}</span>
                              </td>
                              <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap shadow-transparent">

                                { user.status === 'Active' ? <button onClick={() => blockUser(user._id)}><span className="bg-gradient-to-tl from-red-600 to-red-400 px-3 text-xs rounded-lg py-2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Block</span></button> :
                                  <button onClick={() => unblockUser(user._id)}><span className="bg-gradient-to-tl from-red-600 to-red-400 px-3 text-xs rounded-lg py-2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">UnBlock</span></button>
                                }
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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

export default UserManagement;
