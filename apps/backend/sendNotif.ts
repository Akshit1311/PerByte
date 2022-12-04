import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";
import dotenv from "dotenv";
dotenv.config();

const PK = process.env.PRIVATE_KEY; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

export const sendNotifs = async () => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: `File Shared `,
        body: "A file has been shared with you",
      },
      payload: {
        title: `[sdk-test] payload title`,
        body: `sample msg body`,
        cta: "",
        img: "",
      },
      recipients: "eip155:5:0x2970EC092d98Ee8b3bB7A7fc5F7941C5425a4832", // recipient address
      channel: "eip155:5:0x2970EC092d98Ee8b3bB7A7fc5F7941C5425a4832", // your channel address
      env: "staging",
    });

    // apiResponse?.status === 204, if sent successfully!
    console.log("API repsonse: ", apiResponse);
  } catch (err) {
    console.error("Error: ", err);
  }
};

sendNotifs();
