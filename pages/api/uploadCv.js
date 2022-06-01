import nc from "next-connect";
import axios from "axios";
import conf from "../../utils/config";

const handler = nc();

handler.post((req, res) => {
  const projectId = conf.projectId;
  const dataset = conf.dataset;
  const tokenWithWriteAccess = process.env.SANITY_AUTH_TOKEN;
  const email = req.body.email;
  const file = req.body.file;
  const createMutations = [
    {
      create: {
        _type: "candidate",
        email: email,
        cv: file,
      },
    },
  ];
  try {
    axios.post(
      `https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}?returnIds=true`,
      { mutations: createMutations },
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${tokenWithWriteAccess}`,
        },
      }
    );
    res.status(200).send("SUCCESS");
  } catch (error) {
    res.status(401).send("ERROR");
  }
});

export default handler;

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};
