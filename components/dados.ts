import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'logan';
const collectionName = 'dados';
const client = new MongoClient(url);

export const fetchCredentials = async () => {
  try {
    await client.connect();
    const db = client.db(dbName);
    console.log('Conexão com o banco de dados estabelecida.');

    const collection = db.collection(collectionName);

    const result = await collection.findOne();
    const senha = result?.senha || null; // Atualiza o valor da variável de instância
    const usuario = result?.usuario || null;

    return { senha, usuario };
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    throw error;
  }
};