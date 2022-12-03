import { retrieveFiles } from "./retrieve";
import { makeStorageClient } from "./web3storageclient";
export function makeFileObjects(fileContent: string, file: string) {
  const files = [new File([fileContent], file)];
  return files;
}

export async function storeFiles(files: Array<File>) {
  const client = makeStorageClient();
  console.log("reached here");
  try {
    const totalSize = files.map((f) => f.size).reduce((a, b) => a + b, 0);
    let uploaded = 0;
    const onStoredChunk = (size: number) => {
      uploaded += size;
      const pct = 100 * (uploaded / totalSize);
      console.log(`Uploading... ${pct.toFixed(2)}% complete`);
    };
    console.log("reached before cid");

    const cid = await client.put(files, { onStoredChunk });
    console.log(cid);
    // console.log(retrieveFiles(cid));
    return cid;
  } catch (error) {
    console.log({ error });
    return error;
  }
}
