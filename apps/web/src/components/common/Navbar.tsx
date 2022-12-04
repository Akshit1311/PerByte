import React from "react";

import { Orbitron, Inter } from "@next/font/google";

const orbitron = Orbitron();
const inter = Inter();

// Web3
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <div
      className={`flex items-center justify-between font-semibold ${inter.className} py-6 px-12`}
    >
      <div className={`${orbitron.className} text-xl`}>PerByte</div>
      <div className="flex items-center gap-8">
        <div
          className={`cursor-pointer ${inter.className}`}
          onClick={() => router.push("/files")}
        >
          My files
        </div>
        <div
          className={`cursor-pointer ${inter.className}`}
          onClick={() => router.push("/")}
        >
          Upload files
        </div>
        <div
          className={`cursor-pointer ${inter.className}`}
          onClick={() => router.push("/deals")}
        >
          Deals
        </div>

        <ConnectButton />
      </div>
    </div>
  );
};

export default Navbar;
