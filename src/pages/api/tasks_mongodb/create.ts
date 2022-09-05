import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

import { connectDataBase } from "../../../services/mongoDB";

type TaskData = {
  _id?: ObjectId;
  description: string;
  isCompleted: boolean;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { description } = req.body;

    if (!description) {
      res.status(400).json({ message: "Description required" });
    }

    const client = await connectDataBase();

    const { db } = client;

    if (!db) return res.status(400).send("DB not found.");

    const taskData: TaskData = {
      description,
      isCompleted: false,
    };

    const newTask = await db
      ?.collection("tasks")
      .insertOne(taskData as Omit<TaskData, "_id">);

    taskData._id = newTask.insertedId as ObjectId;

    console.log(
      `Successfully created a new task with id ${newTask.insertedId}`
    );

    res.status(200).json(taskData);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

export default handler;
