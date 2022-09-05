import { NextApiRequest, NextApiResponse } from "next";

import { connectDataBase } from "../../../services/mongoDB";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { _id, isCompleted } = req.body;

    const client = await connectDataBase();

    const { db } = client;

    if (!db) return res.status(400).send("DB not found.");

    const updateTask = await db?.collection("task").updateOne(
      {
        _id,
      },
      { $set: { isCompleted } }
      // { upsert: true }
    );
    console.log(updateTask);

    return res.status(200).json(updateTask);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

export default handler;
