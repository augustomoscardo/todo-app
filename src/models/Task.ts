import { ObjectId } from "mongodb";

export default class Task {
  constructor(
    public id: ObjectId,
    public description: string,
    public isCompleted: boolean
  ) {}
}
