import { Collection, Db, MongoClient, MongoClientOptions } from "mongodb";

export const collections: { tasks?: Collection } = {};

const client: MongoClient = new MongoClient(
  process.env.DATABASE_URL as string,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

export async function connectDataBase() {
  try {
    await client.connect();

    const db: Db = client.db(process.env.DATABASE_NAME);

    const tasksCollection: Collection = db.collection(
      process.env.DATABASE_COLLECTION_NAME as string
    );

    collections.tasks = tasksCollection;

    console.log(
      `Database '${db.databaseName}' Connected. Collection: '${tasksCollection.collectionName}'.`
    );

    return { db, client };
  } catch (e) {
    console.error(e);
    return { db: null };
  }
}
