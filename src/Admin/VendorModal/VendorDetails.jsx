import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { setCreateSwitchOff } from "../../Redux/Reducer/vendorModal";

export default function VendorDetails() {
  const cancelButtonRef = useRef(null);

  const dispatch = useDispatch()
  const show = useSelector((state) => state.showVendorDetails.show)
  console.log(show);

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => dispatch(setCreateSwitchOff())}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                <div className="text-end mr-2 mt-2 text-gray-600 cursor-pointer" onClick={() => dispatch(setCreateSwitchOff())}
                  ref={cancelButtonRef}>
                  <CloseIcon />
                </div>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="w-full">
                    <div className="w-full">
                      <div className="w-full">
                        <form action="#" method="POST">
                          <div className="shadow-2xl sm:overflow-hidden sm:rounded-md">
                            <div className="bg-white px-4 py-5 sm:p-6">
                              <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    Full Name
                                  </label>
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="mt-5 block w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                    Username
                                  </label>
                                  <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    autoComplete="family-name"
                                    className="mt-5 block w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  />
                                </div>

                                <div className="col-span-6 sm:col-span-4">
                                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                    Email Address
                                  </label>
                                  <input
                                    type="text"
                                    name="email-address"
                                    id="email-address"
                                    autoComplete="email"
                                    className="mt-5 block w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    Country
                                  </label>
                                  <input
                                    type="text"
                                    name="country"
                                    id="country"
                                    autoComplete="country"
                                    className="mt-5 block w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  />
                                </div>

                                <div className="col-span-6">
                                  <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                    Current Address
                                  </label>
                                  <input
                                    type="text"
                                    name="street-address"
                                    id="street-address"
                                    autoComplete="street-address"
                                    className="mt-5 block w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  />
                                </div>

                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                  <label htmlFor="city" className="block mt-3 text-sm font-medium text-gray-700">
                                    City
                                  </label>
                                  <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    autoComplete="address-level2"
                                    className="mt-5 block w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  />
                                </div>

                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                  <label htmlFor="region" className="block mt-3 text-sm font-medium text-gray-700">
                                    State / Province
                                  </label>
                                  <input
                                    type="text"
                                    name="region"
                                    id="region"
                                    autoComplete="address-level1"
                                    className="mt-5 block w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  />
                                </div>

                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                  <label htmlFor="postal-code" className="block mt-3 text-sm font-medium text-gray-700">
                                    ZIP / Postal code
                                  </label>
                                  <input
                                    type="text"
                                    name="postal-code"
                                    id="postal-code"
                                    autoComplete="postal-code"
                                    className="mt-5 block w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  />
                                </div>
                              </div>
                            </div>
                            {/* <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                              <button
                                type="submit"
                                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              >
                                Save
                              </button>
                            </div> */}
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                      <div className="border-t border-gray-200" />
                    </div>
                  </div>

                  <div className="mt-10 sm:mt-0">
                    <div className="md:grid md:grid-cols-3 md:gap-6">

                      <div className="mt-5 md:col-span-12 md:mt-0">
                        <form action="#" method="POST">
                          <div className="overflow-hidden shadow-2xl sm:rounded-md">
                            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                              <div className="grid grid-cols-3 gap-6">
                                <div className="col-span-3 sm:col-span-2">
                                  <label htmlFor="company-website" className="block mb-3 text-sm font-medium text-gray-700">
                                    Skill
                                  </label>
                                  <div className="mt-3 flex rounded-md shadow-sm">
                                    <input
                                      type="text"
                                      name="company-website"
                                      id="company-website"
                                      className="block w-fit shadow-md flex-1 rounded-lg rounded-r-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      placeholder="Skill here"
                                    />
                                  </div>
                                  <label htmlFor="company-website" className="block mt-5 text-sm font-medium text-gray-700">
                                    Proofs
                                  </label>
                                  <div className="mt-3 flex rounded-md shadow-sm">
                                    <input
                                      type="text"
                                      name="company-website"
                                      id="company-website"
                                      className="block w-fit shadow-md flex-1 rounded-lg rounded-r-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      placeholder="Google Drive link here"
                                    />
                                  </div>
                                  <div className="mt-3 flex rounded-md shadow-sm">
                                    <input
                                      type="text"
                                      name="company-website"
                                      id="company-website"
                                      className="block w-fit shadow-md flex-1 rounded-lg rounded-r-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      placeholder="LinkedIn link here"
                                    />
                                  </div>
                                  <div className="mt-3 flex rounded-md shadow-sm">
                                    <input
                                      type="text"
                                      name="company-website"
                                      id="company-website"
                                      className="block w-fit shadow-md flex-1 rounded-lg rounded-r-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      placeholder="Github link here"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div>
                                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                  About
                                </label>
                                <div className="mt-3">
                                  <textarea
                                    id="about"
                                    name="about"
                                    rows={3}
                                    className="mt-1 block w-full rounded-md border-0 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Brief description about vendor."
                                    defaultValue={''}
                                  />
                                </div>
                                <p className="mt-2 text-sm text-gray-500">
                                </p>
                              </div>

                              {/* <div>
                                                <label className="block text-sm font-medium text-gray-700">Profile Photo</label>
                                                <div className="mt-3 flex items-center">
                                                    <span className="inline-block h-12 w-12 overflow-hidden rounded-md border-0 shadow-md bg-gray-100">
                                                        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                        </svg>
                                                    </span>
                                                    <button
                                                        type="button"
                                                        className="ml-5 rounded-md border-0 shadow-md border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                    >
                                                        <label htmlFor="file-upload">Upload</label>
                                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                    </button>
                                                </div>
                                            </div> */}
                            </div>
                            {/* <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                              <button
                                type="submit"
                                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              >
                                Save
                              </button>
                            </div> */}
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
