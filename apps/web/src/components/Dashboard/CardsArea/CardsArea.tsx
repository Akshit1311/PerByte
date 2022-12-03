import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const CardsArea = () => {
  const [files, setFiles] = useState([]);

  const [walletAddr, setWalletAddr] = useState("");
  const [cid, setCid] = useState("");

  useEffect(() => {
    const localFiles = localStorage.getItem("files");

    setFiles(JSON.parse(localFiles || "[]"));
  }, []);

  return (
    <div className="p-8">
      <div className="text-4xl font-semibold">My Cloud</div>

      <div className="flex  gap-8 flex-wrap my-8">
        {files.map((file: any) => (
          <Card key={file.cid} file={file} />
        ))}
      </div>

      <div className="flex gap-4">
        <input
          type="text"
          className="border-2 border-blue-500 outline-none rounded-full py-2 px-4"
          placeholder="Wallet Address or ENS"
          value={walletAddr}
          onChange={(e) => setWalletAddr(e.target.value)}
        />
        <input
          type="text"
          className="border-2 border-blue-500 outline-none rounded-full py-2 px-4"
          placeholder="CID"
          value={cid}
          onChange={(e) => setCid(e.target.value)}
        />
        <button
          className="text-white bg-blue-500 outline-none rounded-full py-2 px-4"
          placeholder="CID"
          onClick={() => alert(`Shared With User ${walletAddr} CID ${cid}`)}
        >
          Share
        </button>
      </div>
    </div>
  );
};

export default CardsArea;
