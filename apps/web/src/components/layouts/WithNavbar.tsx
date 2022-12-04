import React, { PropsWithChildren } from "react";
import Navbar from "../common/Navbar";

const WithNavbar = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {children}
    </div>
  );
};

export default WithNavbar;
