import * as ipfsClient from "ipfs-http-client";

const projectId = process.env.VUE_APP_IPFS_PROJECT_ID;
const projectSecret = process.env.VUE_APP_IPFS_PROJECT_SECRET;
const auth =
    "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

const client = ipfsClient.create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    headers: {
        authorization: auth,
    },
});

export default client;
