import { NextApiRequest, NextApiResponse } from "next";

import Task from "../../../Schemas/Task";
import dbConnect from "../../../services/mongoose";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await dbConnect();

    const tasks = await Task.find();

    res.status(200).json(tasks);
  } catch (err) {
    console.log(err);
  }
};

export default handler;
