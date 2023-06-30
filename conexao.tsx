import { MongoClient, Db } from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'bancoLogin';

const connectToDatabase = async (): Promise<Db> => {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  return db;
};

export default connectToDatabase;

