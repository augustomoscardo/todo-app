import { NextApiRequest, NextApiResponse } from "next";

import Task from "../../../Schemas/Task";
import dbConnect from "../../../services/mongoose";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await dbConnect();

    const deleteTask = await Task.deleteMany({ isCompleted: { $eq: "true" } });

    console.log(`Completed tasks deleted with success.`);

    return res.status(200).json(deleteTask);
  } catch (err) {
    console.log(err);
  }
};

export default handler;
