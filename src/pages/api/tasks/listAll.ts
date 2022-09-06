import { NextApiRequest, NextApiResponse } from "next";

import Task from "../../../Schemas/Task";
import dbConnect from "../../../services/mongoose";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await dbConnect();

    let filter = {} as {
      isCompleted?: boolean;
    };

    if (req.query.complete) {
      filter = {
        isCompleted: JSON.parse(req.query.complete as string),
      };
    }

    const tasks = await Task.find(filter);

    res.status(200).json(tasks);
  } catch (err) {
    console.log(err);
  }
};

export default handler;
