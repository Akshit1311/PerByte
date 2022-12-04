import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Worldcoin from "../helpers/Worldcoin";
import { Orbitron } from "@next/font/google";

const inter = Orbitron();

// Web3
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useConnect } from "wagmi";
import useAppStore from "../zustand";

const Home: NextPage = () => {
  const { isConnected } = useAccount();
  const worldId_merkle_root = useAppStore(
    (state) => state.worldIdData.merkle_root
  );

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid place-items-center bg-white h-screen w-full">
        <div className="flex flex-col justify-center items-center">
          <div
            className={`text-8xl leading-loose my-2 ${
              inter.className
            } bg-gradient-to-br from-[#fa674c] to-[#4a40df] text-transparent bg-clip-text font-extrabold ${
              worldId_merkle_root && isConnected
                ? "translate-y-full transition duration-300"
                : ""
            }`}
          >
            PerByte
          </div>
          <div className="mb-8">
            <Worldcoin />
          </div>
          <div className="mb-8">
            <ConnectButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
