import Image from "next/image";
import React, { useState } from "react";
import NavbarIcons from "./NavbarIcons";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  const [isBellActive, setIsBellActive] = useState(true);

  return (
    <div className="sticky bg-white flex justify-between p-4 items-center">
      <div className="flex items-center text-sm font-bold">
        <div className="text-satanicPurple bg-offWhite p-2 rounded-full mr-2">
          <div>{NavbarIcons.plus}</div>
        </div>
        <div>Add File</div>
      </div>
      <div className="flex gap-4 items-center">
        <ConnectButton />
        <div
          className="bg-offWhite p-2 rounded-full"
          onClick={() => setIsBellActive((prev) => !prev)}
        >
          {NavbarIcons[isBellActive ? "bellActive" : "bellInactive"]}
        </div>
        <div className="bg-offWhite p-2 rounded-full">
          {NavbarIcons.settings}
        </div>
        <Image
          src="https://avatars.githubusercontent.com/u/34763983?v=4"
          height={50}
          width={50}
          alt="axit"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
