import { storeFiles } from "./store";
import { makeStorageClient } from "./web3storageclient";

export const retrieveFiles = async (cid: string) => {
  const client = makeStorageClient();
  const res = await client.get(cid);
  if (res && !res.ok) {
    throw new Error(`failed to get ${cid}`);
  }
  console.log(`Got a response! [${res?.status}] ${res?.statusText}`);
  console.log(res);
  const files = await res?.files();
  console.log({ files });
  return files;
};
