import React, { ReactElement } from "react";
import Card from "../components/Card/Card";
import CardsArea from "../components/Card/CardsArea";
import WithNavbar from "../components/layouts/WithNavbar";

const Files = () => {
  const file = {
    name: "axit",
    cid: "sjsj",
    size: 10,
  };
  return (
    <div className="bg-slate-100 flex-1 p-8">
      <CardsArea />
    </div>
  );
};

Files.getLayout = function getLayout(page: ReactElement) {
  return <WithNavbar>{page}</WithNavbar>;
};

export default Files;
