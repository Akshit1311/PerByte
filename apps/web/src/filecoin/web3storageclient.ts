import { Web3Storage } from "web3.storage";
export function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() as string });
}
function getAccessToken() {
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  return process.env.NEXT_PUBLIC_WEB3STORAGE_TOKEN;
}
