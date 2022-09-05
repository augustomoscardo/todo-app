import { NextApiRequest, NextApiResponse } from "next";

import Task from "../../../Schemas/Task";
import dbConnect from "../../../services/mongoose";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { _id } = req.body;

    await dbConnect();

    const deleteTask = await Task.deleteOne({ _id });

    console.log(`Task deleted with success.`);

    return res.status(200).json(deleteTask);
  } catch (err) {
    console.log(err);
  }
};

export default handler;
