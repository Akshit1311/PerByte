import React from "react";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import DashLayout from "../components/layouts/DashLayout";
import CardsArea from "../components/Dashboard/CardsArea/CardsArea";
import useSidebarStore from "../zustand";
import Upload from "../components/Upload/Upload";

const Home: NextPageWithLayout = () => {
  const activeTab = useSidebarStore((state) => state.activeSidebar);

  return (
    <div className="bg-offWhite flex-1">
      {activeTab === "myCloud" ? <CardsArea /> : <Upload />}
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DashLayout>{page}</DashLayout>;
};

export default Home;
