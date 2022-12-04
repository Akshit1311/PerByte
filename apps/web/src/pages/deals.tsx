import React, { ReactElement } from "react";
import WithNavbar from "../components/layouts/WithNavbar";

import { Orbitron } from "@next/font/google";

const orbitron = Orbitron();

// components
import Table from "../components/Table/Table";

const Deals = () => {
  const deals = [
    {
      dealId: 67,
      cid: "baga6ea4seaqlkg6mss5qs56jqtajg5ycrhpkj2b66cgdkukf2qjmmzz6ayksuci",
      size: "8388608",
      verified: true,
      price_per_epoch: 1100000000000,
      start: 25245,
      end: 545150,
    },
    {
      dealId: 67,
      cid: "baga6ea4seaqlkg6mss5qs56jqtajg5ycrhpkj2b66cgdkukf2qjmmzz6ayksuci",
      size: "8388608",
      verified: true,
      price_per_epoch: 1100000000000,
      start: 25245,
      end: 545150,
    },
    {
      dealId: 67,
      cid: "baga6ea4seaqlkg6mss5qs56jqtajg5ycrhpkj2b66cgdkukf2qjmmzz6ayksuci",
      size: "8388608",
      verified: true,
      price_per_epoch: 1100000000000,
      start: 25245,
      end: 545150,
    },
    {
      dealId: 67,
      cid: "baga6ea4seaqlkg6mss5qs56jqtajg5ycrhpkj2b66cgdkukf2qjmmzz6ayksuci",
      size: "8388608",
      verified: true,
      price_per_epoch: 1100000000000,
      start: 25245,
      end: 545150,
    },
    {
      dealId: 67,
      cid: "baga6ea4seaqlkg6mss5qs56jqtajg5ycrhpkj2b66cgdkukf2qjmmzz6ayksuci",
      size: "8388608",
      verified: true,
      price_per_epoch: 1100000000000,
      start: 25245,
      end: 545150,
    },
    {
      dealId: 67,
      cid: "baga6ea4seaqlkg6mss5qs56jqtajg5ycrhpkj2b66cgdkukf2qjmmzz6ayksuci",
      size: "8388608",
      verified: true,
      price_per_epoch: 1100000000000,
      start: 25245,
      end: 545150,
    },
    {
      dealId: 67,
      cid: "baga6ea4seaqlkg6mss5qs56jqtajg5ycrhpkj2b66cgdkukf2qjmmzz6ayksuci",
      size: "8388608",
      verified: true,
      price_per_epoch: 1100000000000,
      start: 25245,
      end: 545150,
    },
    {
      dealId: 67,
      cid: "baga6ea4seaqlkg6mss5qs56jqtajg5ycrhpkj2b66cgdkukf2qjmmzz6ayksuci",
      size: "8388608",
      verified: true,
      price_per_epoch: 1100000000000,
      start: 25245,
      end: 545150,
    },
  ];

  return (
    <div className="flex-1 p-8 bg-slate-100">
      <div className={`text-xl ${orbitron.className} font-semibold my-4`}>
        Deals
      </div>
      <Table deals={deals} />
    </div>
  );
};

Deals.getLayout = function getLayout(page: ReactElement) {
  return <WithNavbar>{page}</WithNavbar>;
};

export default Deals;
