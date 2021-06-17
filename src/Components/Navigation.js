import React from "react";
import * as IonIcons from "react-icons/io";
import { Link } from "react-router-dom";
import { NavigationData } from "./NavigationData";
import DisplayPicture from "../Assets/images/valentine.webp";

export default function Navigation() {
  const sidebar = document.querySelector(".sidebar");

  const showSidebar = () => {
    sidebar.classList.toggle("-translate-x-full");
  };
  return (
    <>
      {/*----Mobile Menu----*/}
      <div className="bg-gray-100 text-gray-900 flex justify-between md:hidden">
        <div className="block p-4 font-bold">SV</div>
        <Link
          to="#"
          className="mobile-menu-button p-4 focus:bg-gray-700"
          onClick={showSidebar}
        >
          <IonIcons.IoMdMenu className="h-6 w-6" />
        </Link>
      </div>

      {/*----Standard Menu----*/}
      <div className="sidebar grid place-content-stretch place-items-stretch space-y-4 md:bg-white md:text-gray-900 bg-gray-900 text-gray-300 w-64 p-y-4 p-x-2 m-l-2 m-r-2 absolute left-0 inset-y-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <div className="flex justify-center items-center">
          <div className="rounded-full border-4 border-gray-900 self-end">
            <img
              className="h-20 w-20 rounded-full"
              src={DisplayPicture}
              alt="suh_valentine"
            />
          </div>
        </div>
        {/* Social Media Links */}
        <div className="flex items-center justify-center">
          <div className="inline-block">
            <a
              href="https://github.com/suhvalentine"
              target="_blank"
              rel="noreferrer"
              className=""
            >
              <IonIcons.IoLogoGithub className="flex-none h-full w-7 ml-2 mr-2" />
            </a>
          </div>
          <div className="inline-block">
            <a href="skype:suhvalentine?userinfo" className="">
              <IonIcons.IoLogoSkype className="flex-none h-full w-7 ml-2 mr-2" />
            </a>
          </div>
          <div className="inline-block">
            <a href="https://www.linkedin.com/in/suh-valentine-nforbilum-9aa5a886/" target="_blank"
              rel="noreferrer"
              className="">
              <IonIcons.IoLogoLinkedin className="flex-none h-full w-7 ml-2 mr-2" />
            </a>
          </div>
        </div>

        {/* Menu Items */}
        <div className="md:flex md:items-start md:justify-start">
          <ul className="md:w-45">
            {NavigationData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path}>
                    {item.icon} <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Menu Footer */}
        <div className="menu-signature text-gray-500 text-sm flex justify-center items-center">
          <div className="self-end pb-5 text-center">
            <p>&copy; Copyright 2021</p>
            <p>Designed by Suh Valentine</p>
          </div>
        </div>
      </div>
    </>
  );
}
