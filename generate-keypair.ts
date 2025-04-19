import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const { Keypair } = require("@solana/web3.js");

const keypair = Keypair.generate();
console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);
console.log(`✅ Generated keypair!`);

require("dotenv/config") // For reading from env file

const newKeyPair = getKeypairFromEnvironment("SECRET_KEY");
console.log(`Finished! we've loaded our secret key securely, using an env file!`);
