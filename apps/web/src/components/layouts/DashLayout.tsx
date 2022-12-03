import React, { ReactElement } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

// Web3
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import {
  chain,
  configureChains,
  createClient,
  useAccount,
  WagmiConfig,
} from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const { chains, provider } = configureChains(
  [chain.polygon],
  [
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY || "" }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const DashLayout: React.FC<{ children: ReactElement }> = ({ children }) => {
  const { address, isConnected } = useAccount();

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <div className="flex">
          <div
            className={`absolute ${
              isConnected ? "-translate-y-full" : ""
            } bg-black/90 h-screen w-full z-10 backdrop-blur-xl grid place-items-center	transition duration-500`}
          >
            <div>
              <h1 className="text-white text-9xl font-extrabold transparent bg-gradient-to-r w-fit from-red-500 to-blue-500 text-transparent bg-clip-text text-center mx-auto">
                StoreD
              </h1>

              <h2 className="text-white w-fit text-center my-4 text-xl font-bold">
                A file sharing platform with permit restrictions on files and
                <br />
                data using ethereum wallet address for NFT Communities, DAOs and
                Web3 Groups
              </h2>
              <div className="mx-auto w-fit my-16 scale-150">
                <ConnectButton />
              </div>
            </div>
          </div>

          <Sidebar />
          <main className="relative h-screen  overflow-auto w-full flex flex-col">
            <Navbar />
            {children}
          </main>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default DashLayout;
