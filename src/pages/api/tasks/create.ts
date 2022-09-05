import { NextApiRequest, NextApiResponse } from "next";

import Task from "../../../Schemas/Task";
import dbConnect from "../../../services/mongoose";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { description } = req.body;

    if (!description) {
      res.status(400).json({ message: "Description required" });
    }

    await dbConnect();

    const task = await Task.create({ description, isCompleted: false });

    console.log(`Successfully created a new task: ${task.description}`);

    res.status(200).json(task);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

export default handler;
