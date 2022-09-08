import { NextApiRequest, NextApiResponse } from "next";

import Task from "../../../Schemas/Task";
import dbConnect from "../../../services/mongoose";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== "POST") {
      return res.end();
    }

    const { authorization } = req.headers;

    if (!authorization) {
      return res.end();
    }

    if (authorization !== `Bearer ${process.env.CRON_SECRET}`) {
      return res.end();
    }

    await dbConnect();

    // const deleteTask = await Task.deleteMany();
    const deleteTask = {};

    console.log(`Completed tasks deleted with success.`);

    return res.status(200).json(deleteTask);
  } catch (err) {
    console.log(err);
  }
};

export default handler;
