import Image from "next/image";
import React from "react";
import DefaultPic from "../../public/default_pic.png";
import { BiDonateHeart, BiSearch } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { GoDownload } from "react-icons/go";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoIosAlert } from "react-icons/io";
import { FaCopyright, FaUsers } from "react-icons/fa6";
import { PiCardsFill } from "react-icons/pi";


export default function Navbar() {
  return (
    <>
      <div className="navbar px-10 py-4">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Duas Page</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control mr-20 relative">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
            <div className="bg-gray-200 absolute right-4 top-2 rounded-lg px-2 flex justify-center items-center py-1">
              <BiSearch className=" text-2xl " />
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 h-10 rounded-full">
                <Image src={DefaultPic} alt="Default avatar" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-64"
            >
              <li>
                <div className="flex px-2 justify-start items-center">
                  <BiDonateHeart className="text-2xl mr-2 text-green-700" />
                  <p>Support Us</p>
                </div>
              </li>
              <li>
                <div className="flex px-2 justify-start items-center">
                  <GoDownload className="text-2xl mr-2 text-green-700" />
                  <p> Download Dua App</p>
                </div>
              </li>
              <li>
                <div className="flex px-2 justify-start items-center">
                  <MdOutlinePrivacyTip className="text-2xl mr-2 text-green-700" />
                  <p>Privacy Policy</p>
                </div>
              </li>
              <li>
                <div className="flex px-2 justify-start items-center">
                  <IoIosAlert className="text-2xl mr-2 text-green-700" />
                  <p>Thanks & Credits</p>
                </div>
              </li>
              <li>
                <div className="flex px-2 justify-start items-center">
                  <FaUsers  className="text-2xl mr-2 text-green-700" />
                  <p>About Us</p>
                </div>
              </li>
              <li>
                <div className="flex px-2 justify-start items-center">
                  <FaCopyright className="text-2xl mr-2 text-green-700" />
                  <p>Copyright Warning</p>
                </div>
              </li>
              <li>
                <div className="flex px-2 justify-start items-center">
                  <PiCardsFill  className="text-2xl mr-2 text-green-700" />
                  <p>Our Other Projects</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <CiSettings className="text-3xl " />
          </div>
        </div>
      </div>
    </>
  );
}
