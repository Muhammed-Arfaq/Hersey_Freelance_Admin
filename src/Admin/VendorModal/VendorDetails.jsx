import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { setCreateSwitchOff } from "../../Redux/Reducer/vendorModal";
import CloseIcon from '@mui/icons-material/Close';


export default function VendorDetails() {
  const cancelButtonRef = useRef(null);

  const [showAddress, setShowAddress] = useState(true);
  const [showSkills, setShowSkills] = useState(false);

  const vendor = useSelector((state) => state.showVendorDetails.data)

  const dispatch = useDispatch()
  const show = useSelector((state) => state.showVendorDetails.show)
  // console.log(show);

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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-100 text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                <div className="text-end mr-2 mt-2 text-gray-600 cursor-pointer" onClick={() => dispatch(setCreateSwitchOff())}
                  ref={cancelButtonRef}>
                  <CloseIcon />
                </div>
                <div className="bg-gray-100 mt-10 flex justify-center">
                  <button
                    onClick={() => {
                      setShowAddress(true), setShowSkills(false)
                    }}
                    className={showAddress ? "py-2 px-5 m-2  border shadow-md rounded-md hover:shadow-lg" :
                      "py-2 px-5 m-2  border shadow-md rounded-md hover:shadow-lg "
                    }
                  >
                    Vendor Address
                  </button>
                  <button
                    onClick={() => {
                      setShowAddress(false), setShowSkills(true)
                    }}
                    className={showSkills ? "py-2 px-5 m-2 bg-darkBlue border shadow-md rounded-md hover:shadow-lg " :
                      "py-2 px-5 m-2 text-darkBlue border shadow-md rounded-md hover:shadow-lg "}
                  >
                    Vendor Skills
                  </button>
                </div>
                <div className="bg-gray-100 px-4 sm:p-16">
                  <div className={showAddress ? "block" : "hidden"}>
                    <div className="w-full">
                      <div className="w-full">
                        <div className="w-full">
                          <form action="#" method="POST">
                            <div className="sm:overflow-hidden sm:rounded-md">
                            
                              
                              <div className="bg-gray-100 px-4 py-5 sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                  <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                      Full Name
                                    </label>
                                    <input
                                      type="text"
                                      name="first-name"
                                      id="first-name"
                                      defaultValue={vendor?.fullName}
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
                                      defaultValue={vendor?.userName}
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
                                      defaultValue={vendor?.email}
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
                                      defaultValue={vendor?.address?.country}
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
                                      defaultValue={vendor?.address?.currentAddress}
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
                                      defaultValue={vendor?.address?.city}
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
                                      defaultValue={vendor?.address?.state}
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
                                      defaultValue={vendor?.address?.pincode}
                                      autoComplete="postal-code"
                                      className="mt-5 block w-full rounded-lg border-gray-300 shadow-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={showSkills ? "block" : "hidden"}>
                    <div>
                      <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="mt-5 md:col-span-12 md:mt-0">
                          <form action="#" method="POST">
                            <div className="overflow-hidden sm:rounded-md">
                              <div className="space-y-6 bg-gray-100 px-4 py-5 sm:p-6">
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
                                        defaultValue={vendor?.skill}
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
                                        defaultValue={vendor?.googleDrive}
                                      
                                      />
                                    </div>
                                    <div className="mt-3 flex rounded-md shadow-sm">
                                      <input
                                        type="text"
                                        name="company-website"
                                        id="company-website"
                                        className="block w-fit shadow-md flex-1 rounded-lg rounded-r-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        defaultValue={vendor?.linkedIn}
                                      />
                                    </div>
                                    <div className="mt-3 flex rounded-md shadow-sm">
                                      <input
                                        type="text"
                                        name="company-website"
                                        id="company-website"
                                        className="block w-fit shadow-md flex-1 rounded-lg rounded-r-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        defaultValue={vendor?.github}
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
                                      className="mt-1 block p-4 w-full rounded-md border-0 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      defaultValue={vendor?.about}
                                    />
                                  </div>
                                  <p className="mt-2 text-sm text-gray-500">
                                  </p>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
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
