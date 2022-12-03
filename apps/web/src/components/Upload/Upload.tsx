import React, { useState } from "react";
import { storeFiles } from "../../filecoin/store";
import useSidebarStore from "../../zustand";

const Upload = () => {
  const [files, setFiles] = useState<FileList | null>(null);
  const setActiveTab = useSidebarStore((state) => state.setActiveSidebar);

  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log({ files: e.target.files });

      setFiles(e.target.files);
    }
  };

  const storeToFil = async () => {
    if (!files) return console.log("No files selected");

    setLoading(true);

    try {
      const result = await storeFiles(Array.from(files));

      console.log({ result });

      const localFiles = localStorage.getItem("files");
      localStorage.setItem(
        "files",
        JSON.stringify([
          ...JSON.parse(localFiles || "[]"),
          {
            cid: result,
            name: files[0].name,
            size: files[0].size,
            type: files[0].type,
          },
        ])
      );

      setActiveTab("myCloud");

      setLoading(false);
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <div className="text-4xl font-semibold">Upload</div>

      <div className="grid place-items-center p-16 border-4 border-blue-500 border-dashed mt-6">
        {loading ? (
          "Loading..."
        ) : (
          <input type="file" onChange={handleFileChange} />
        )}
      </div>

      {files && !loading && (
        <button
          className="mx-auto my-8 bg-blue-500 text-white text-lg py-4 px-5 block rounded-lg"
          onClick={storeToFil}
        >
          Upload To Filecoin
        </button>
      )}
    </div>
  );
};

export default Upload;
