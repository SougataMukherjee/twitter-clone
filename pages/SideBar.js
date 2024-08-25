import Image from "next/image";
import React from "react";
import  SideBarMenu  from "./SideBarMenu";
import {  ClipboardDocumentListIcon, HomeIcon } from "@heroicons/react/24/solid";
import { BellIcon,BookmarkIcon,ClipboardIcon,HashtagIcon, InboxIcon, UsersIcon } from "@heroicons/react/24/outline";

export default function SideBar  ()  {
  return (
    <div className="hidden sm:flex flex-col p-2 fixed xl:items-start h-full xl:ml-24">
      {/* twitter logo */}
      <div className="hover-effect p-0 hover:bg-blue-100 xl:pl-1">
        <Image
          width="50"
          height="50"
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
          alt=""
        ></Image>
      </div>
      {/* menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SideBarMenu Icon={HomeIcon} text="Home" active/>
        <SideBarMenu Icon={HashtagIcon} text="Explore" />
        <SideBarMenu Icon={BellIcon} text="Notification" />
        <SideBarMenu Icon={InboxIcon} text="Messages" />
        <SideBarMenu Icon={BookmarkIcon} text="BookMark" />
        <SideBarMenu Icon={ClipboardIcon} text="Lists" />
        <SideBarMenu Icon={UsersIcon} text="Profile" />
        <SideBarMenu Icon={ClipboardDocumentListIcon} text="More" />
      </div>
      {/* button */}
      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>
      {/* mini-profile */}
      <div className="hover-effect text-gray-700 flex items-center">
        <Image className="rounded-full h-5 w-5 xl:mr-2" src='https://media-exp1.licdn.com/dms/image/C4D03AQE2MeDKG-GnEA/profile-displayphoto-shrink_200_200/0/1658045991027?e=1670457600&v=beta&t=-T5_jLvnIl_hYepjgEa4Xtb3K2P401C4u0Bw3nx8Zps' alt='' width='100' height='100'/>
        <div className="leading-5">
            <h4 className="font-bold">Sougata Mukherjee</h4>
            <p>Profile</p>
        </div>
      </div>
    </div>
  );
};
