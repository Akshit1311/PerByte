import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import { Orbitron } from "@next/font/google";
import { storeFiles } from "../filecoin/store";

const orbitron = Orbitron();

const FileDropzone = () => {
  const [files, setFiles] = useState<File[] | null>(null);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log({ acceptedFiles });
    setFiles(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const [loading, setLoading] = useState(false);

  const storeToFil = async () => {
    if (!files) return console.log("No files selected");

    setLoading(true);

    try {
      const result = await storeFiles(files);

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

      setLoading(false);
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
  };

  return (
    <div className="w-screen px-40">
      <div
        {...getRootProps()}
        className={`h-full w-full border-4 border-dashed border-gray-500 grid place-items-center p-40 border-spacing-10 text-xl ${orbitron.className} font-bold cursor-pointer`}
      >
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag n drop some files here, or click to select files</p>
            )}
          </>
        )}
      </div>
      <div className="my-4 text-center">
        Uploaded Files: {files?.map((file) => file.name).join(", ")} <br />
      </div>
      <button
        className="bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold mx-auto block"
        onClick={storeToFil}
      >
        Upload
      </button>
    </div>
  );
};

export default FileDropzone;
