import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Worldcoin from "../helpers/Worldcoin";
import { Orbitron } from "@next/font/google";

const orbitron = Orbitron();

// Web3
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useConnect } from "wagmi";
import useAppStore from "../zustand";
import FileDropzone from "../components/FileDropzone";
import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import WithNavbar from "../components/layouts/WithNavbar";

const Home: NextPageWithLayout = () => {
  const { isConnected } = useAccount();
  const worldId_merkle_root = useAppStore(
    (state) => state.worldIdData.merkle_root
  );

  return (
    <div className="flex flex-1  flex-col items-center justify-center bg-slate-100">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={`grid place-items-center bg-white/70 backdrop-blur-sm h-screen w-full fixed top-0  ${
          worldId_merkle_root && isConnected
            ? "translate-y-full transition duration-300"
            : ""
        }`}
      >
        <div className="flex flex-col justify-center items-center">
          <div
            className={`text-8xl leading-loose my-2 ${orbitron.className} bg-gradient-to-br from-[#fa674c] to-[#4a40df] text-transparent bg-clip-text font-extrabold`}
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
      <div>
        <FileDropzone />
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <WithNavbar>{page}</WithNavbar>;
};

export default Home;
