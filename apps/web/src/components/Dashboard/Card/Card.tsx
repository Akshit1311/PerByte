import Image from "next/image";
import React from "react";
import CardIcons from "./CardIcons";

const Card = ({ file }: any) => {
  return (
    <div className="bg-white rounded-3xl  w-1/5">
      <div className="flex p-6">
        <div className="text-satanicPurple w-full">{CardIcons.folder}</div>
        <div>{CardIcons.more}</div>
      </div>

      <div className="p-6 mt-16">
        <div className="font-bold">{file.name}</div>
        <div className="text-slate-500 text-sm break-words	mt-4">{file.cid}</div>
      </div>

      <div className="bg-offWhiteDarker rounded-b-2xl p-6 flex items-center justify-between">
        <div>{file.size} bytes</div>
        <div>
          <Image
            src="https://avatars.githubusercontent.com/u/34763983?v=4"
            height={30}
            width={30}
            alt="axit"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
