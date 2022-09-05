import { NextApiRequest, NextApiResponse } from "next";

import Task from "../../../models/Task";
import { connectDataBase } from "../../../services/mongoDB";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await connectDataBase();

    const { db } = client;
    const tasks = await db?.collection<Task>("tasks").find().toArray();

    res.status(200).json(tasks);
  } catch (err) {
    console.log(err);
  }
};

export default handler;
