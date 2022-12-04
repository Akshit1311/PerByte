# PerByte

A decentralized perpetual file storing and wallet-to-wallet file sharing platform and storage marketplace.

<br>

## What it is and what it does

PerByte is a Dapp to store, retrieve and share files with the help of your wallet address and also customize your storage plans accordingly.

### Integrations

- `Filecoin`: To store files using [web3.storage](https://web3.storage/)
  [Filecoin general storage Github](https://github.com/Akshit1311/PerByte/tree/main/apps/web/src/filecoin)<br>
  The project utilizes the FEVM Smart Contracts to publish and retrieve storage deals. This makes perpetual storage of files possible by renewing the deal once the previous deal expires.
  [Filecoin FVM Github](https://github.com/Akshit1311/PerByte/tree/main/packages/fevm/contracts)
- `Worldcoin`: To verify proof of personhood
- `Polygon`: Smart contract deployed to Polygon mumbai testnet [Link to Polyscan](https://polygonscan.com/address/0x85B6F665829932fAC2898bd2d2810ea3375C5f8E). The proof ID received from Worldcoin on successfully verifying the World ID was stored on Polygon so keep track of filesthat each user is storing.
- `Valist`: To deploy the Dapp
- `Push Protocol`: For sending push notifications [Code Ref](https://github.com/Akshit1311/PerByte/blob/main/apps/backend/sendNotif.ts)

### [Github link](https://github.com/Akshit1311/PerByte)
