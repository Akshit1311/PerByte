import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const CardsArea = () => {
  const [files, setFiles] = useState([]);

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
    </div>
  );
};

export default CardsArea;
