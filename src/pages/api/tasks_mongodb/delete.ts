import { NextApiRequest, NextApiResponse } from "next";

import { connectDataBase } from "../../../services/mongoDB";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { _id } = req.body;

    const client = await connectDataBase();

    const { db } = client;

    if (!db) return res.status(400).send("DB not found.");

    const deleteTask = await db?.collection("task").deleteOne({
      _id,
    });

    console.log(deleteTask);

    return res.status(200).json(deleteTask);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

export default handler;
