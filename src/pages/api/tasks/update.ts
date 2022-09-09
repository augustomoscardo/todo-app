import { NextApiRequest, NextApiResponse } from "next";

import Task from "../../../Schemas/Task";
import dbConnect from "../../../services/mongoose";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { _id, isCompleted } = req.body;

    await dbConnect();

    const updateTask = await Task.findByIdAndUpdate(
      { _id },
      { $set: { isCompleted } },
      {
        returnDocument: "after",
      }
    );

    return res.status(200).json(updateTask);
  } catch (err) {
    console.log(err);
  }
};

export default handler;
